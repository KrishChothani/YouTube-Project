import {v2 as cloudinary} from 'cloudinary'; 
import fs from 'fs';

cloudinary.config({ 
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
        api_key: process.env.CLOUDINARY_API_KEY, 
        api_secret:process.env.CLOUDINARY_API_SECRET 
});


const uploadOnCloudinary = async (localFilePath) =>{
    try {
        if(!localFilePath) return null;
        // upload the file on the cloudinary
        const response = await cloudinary.uploader.upload(localFilePath ,  {
            resource_type: 'auto',
        });
        // await new Promise(resolve => setTimeout(resolve, 10000));
        // await new Promise(resolve => setTimeout(resolve, 5000));
        if(response) fs.unlinkSync(localFilePath);
         // remove locally save temporary file as the upload failed
        return response;
    } catch (er) {
        fs.unlinkSync(localFilePath); // remove locally save temporary file as the upload failed
        return null;
    }
}

export {uploadOnCloudinary};