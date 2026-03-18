import ArticleRepository from "../repositories/article.repository.js";

class ArticleService {
    private repo: ArticleRepository;
    
    constructor() {
        this.repo = new ArticleRepository();
    }

    async createArticle(data: any){
        return this.repo.create(data);
    }

    async getArticles(){
        return this.repo.findAll();
    }

    async getArticleById(id: any){
        const article = await this.repo.findById(id);
        if (!article) {
            throw new Error('Article not found');
        }
        return article;
    }

    async getArticlesByUserId(userId: any){
        const articles = await this.repo.findByUserId(userId);
        if (!articles) {
            throw new Error('Articles not found for this user');
        }
        return articles;
    }

    async getArticlesWithComments(){
        return this.repo.findAllWithComments();
    }

}
export default ArticleService;