import { model, Schema } from 'mongoose';

const contactsSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    email: { type: String },
    isFavourite: { type: Boolean, default: false },
    contactType: {
      type: String,
      enum: ['work', 'home', 'personal'],
      default: 'personal',
      required: true,
    },
    userId: { type: Schema.Types.ObjectId },
    photo: { type: String },
  },
  { timestamps: true, versionKey: false },
);

export const contactsCollection = model('contacts', contactsSchema);