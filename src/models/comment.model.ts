import mongoose, { mongo } from "mongoose";

const commentSchema = new mongoose.Schema({
    articleId: String,
    userId: String,
    text: String
});

const Comment = mongoose.model("Comment", commentSchema);
export default Comment;