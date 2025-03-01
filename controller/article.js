const { Article } = require('../model');

exports.createArticle = async (req, res, next) => {
    try {
       const article = new Article(req.body.article);
       await article.save();
       res.status(201).json({
           article
       });
    } catch (e) {
        next(e);
    }
}
