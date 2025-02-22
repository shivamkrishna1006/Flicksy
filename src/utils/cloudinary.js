import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";
import fs from "fs";

dotenv.config();

// Cloudinary Configuration
cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_CLOUD_KEY, 
    api_secret: process.env.CLOUDINARY_CLOUD_SECRET 
});

const uploadOnCloudinary = async (localFilePath) => {
    try {
        
        if (!localFilePath) return null;
        

        console.log("Uploading file to Cloudinary:", localFilePath);

        // Ensure the file exists before uploading
        if (!fs.existsSync(localFilePath)) {
            throw new Error(`File does not exist: ${localFilePath}`);
        }

        // Await the upload process
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto",
        });

        console.log("Cloudinary Upload Successful:", response.secure_url);

        // Delete local file after successful upload
        if (fs.existsSync(localFilePath)) {
            fs.unlinkSync(localFilePath);
        }

        return response;

    } catch (error) {
        console.error("Cloudinary Upload Error:", error);

        // Only delete the file if it's a valid local file path
        if (fs.existsSync(localFilePath) && !localFilePath.startsWith('http')) {
            fs.unlinkSync(localFilePath);
        }

        return null;
    }
};

export { uploadOnCloudinary };

// Test the function
// (async () => {
//     try {
//         const uploadResult = await uploadOnCloudinary("https://res.cloudinary.com/demo/image/upload/getting-started/shoes.jpg");
//         console.log("Upload Result:", uploadResult);
//     } catch (error) {
//         console.error("Upload Test Failed:", error);
//     }
// })();
