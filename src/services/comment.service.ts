import CommentRepository from "../repositories/comment.repository.js";

class CommentService {
    private repo: CommentRepository;
    
    constructor() {
        this.repo = new CommentRepository();
    }

    async createComment(data: any){
        return this.repo.create(data);
    }

    async getCommentById(articleId: any){
        const comment = await this.repo.findByArticleId(articleId);
        if (!comment) {
            throw new Error('Comment not found');
        }
        return comment;
    }

}
export default CommentService;