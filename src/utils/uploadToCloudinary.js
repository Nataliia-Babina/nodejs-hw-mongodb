import cloudinary from 'cloudinary';
import fs from 'node:fs/promises';
import { env } from './env.js';
import { CLOUDINARY } from '../constants/index.js';

cloudinary.v2.config({
  secure: true,
  cloud_name: env(CLOUDINARY.CLOUD_NAME),
  api_key: env(CLOUDINARY.API_KEY),
  api_secret: env(CLOUDINARY.API_SECRET),
});

export const uploadToCloudinary = async (file) => {
  const responce = await cloudinary.v2.uploader.upload(file.path);
  await fs.unlink(file.path);
  return responce.secure_url;
};