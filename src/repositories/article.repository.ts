import Article from "../models/article.model.js";

interface CreateArticleDTO {
  title: string;
  content: string;
  authorId: string;
}

class ArticleRepository {
  async create(data: CreateArticleDTO) {
    return Article.create(data);
  }

  async findAll() {
    return Article.find();
  }

  async findById(id: string) {
    return Article.findById(id);
  }
}

export default ArticleRepository;
