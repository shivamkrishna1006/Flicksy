import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import jwt from "jsonwebtoken";
import { User } from "../models/user.model.js";

export const verifyJWT = asyncHandler(async (req, res, next) => {
  try {
    // Extract token from cookies or Authorization header
    const token =
      req.cookies?.accessToken ||
      req.header("Authorization")?.split("Bearer ")[1]?.trim(); // ✅ More robust extraction

    if (!token) {
      return next(new ApiError(401, "Unauthorized request - No token provided"));
    }

    // Verify Token
    const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

    // Log token only in development mode
    if (process.env.NODE_ENV === "development") {
      console.log("Extracted Token:", token);
      console.log("Decoded Token:", decodedToken);
    }

    // Fetch user from database
    const user = await User.findById(decodedToken?._id).select("-password -refreshToken");

    if (!user) {
      return next(new ApiError(401, "Invalid access token - User not found"));
    }

    // Attach user and token to request for future use
    req.user = user;
    req.authToken = token; // ✅ Useful for future token-related logic
    next();
  } catch (error) {
    if (error.name === "JsonWebTokenError") {
      return next(new ApiError(401, "Invalid access token"));
    }
    if (error.name === "TokenExpiredError") {
      return next(new ApiError(401, "Token expired, please log in again"));
    }
    return next(new ApiError(401, error?.message || "Invalid access token"));
  }
});
