import mongoose, { mongo } from 'mongoose';

const articleSchema = new mongoose.Schema({
    title: String,
    content: String,
    userId: String
});

const Article = mongoose.model("Article", articleSchema);

export default Article;