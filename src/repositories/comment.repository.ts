import Comment from "../models/comment.model.js";

interface CommentDTO {
  articleId: string;
  userId: string;
  text: string;
}

class CommentRepository {
  async create(data: CommentDTO) {
    return Comment.create(data);
  }

  async findByArticleId(articleId: string) {
    return Comment.find({ articleId });
  }

}

export default CommentRepository;
