import { Schema, model, Document } from "mongoose";

export interface IPost extends Document {
  userId: string;
  title: string;
  imageUrl: string;
  likes: number;
  comments: string[];
}

const postSchema = new Schema<IPost>(
  {
    userId: { type: String, required: true },
    title: { type: String, required: true },
    imageUrl: { type: String },
    likes: { type: Number, default: 0 },
    comments: [{ type: String }]
  },
  { timestamps: true }
);

export default model<IPost>("Post", postSchema);
