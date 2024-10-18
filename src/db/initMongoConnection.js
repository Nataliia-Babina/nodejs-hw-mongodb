import mongoose from 'mongoose';
import { env } from '../utils/env.js';

export async function initMongoConnection() {
  try {    
    const user = env('USER');
    const pw = env('PASSWORD');
    const url = env('URL');
    const db = env('DB');
    await mongoose.connect(
      `mongodb+srv://${user}:${pw}@${url}/${db}?retryWrites=true&w=majority`,
    );
    console.log('Mongo connection successfully established!');
  } catch (error) {
    console.log('Error while setting up mongo connection', error);
    throw error;
  }
}


