import mongoose from 'mongoose';

export async function initMongoConnection() {
  try {    
    await mongoose.connect(
      `mongodb+srv://nataliiababina:Fcx203jd@cluster1.66fxw.mongodb.net/contacts?retryWrites=true&w=majority`,
    );
    console.log('Mongo connection successfully established!');
  } catch (error) {
    console.log('Error while setting up mongo connection', error);
    throw error;
  }
}


