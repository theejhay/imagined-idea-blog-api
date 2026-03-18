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

  async findByUserId(userId: string) {
    return Article.find({ userId: userId });
  }

  async findAllWithComments() {
    return Article.aggregate([
      {
        $addFields: {
          strId: { $toString: "$_id" },
        },
      },
      {
        $lookup: {
          from: "comments",
          localField: "strId",
          foreignField: "articleId",
          as: "comments",
        },
      },
    ]);
  }
}

export default ArticleRepository;
