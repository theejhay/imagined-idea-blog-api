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

}
export default ArticleService;