const express = require('express');

const articleController = require('../controller/article');

const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).send('get all articles')
})

router.get('/feed', (req, res) => {
    res.status(200).send('feed articles')
})

router.get('/:slug', (req, res) => {
    res.status(200).send('get article')
})

router.post('/', articleController.createArticle)

router.put('/:slug', (req, res) => {
    res.status(200).send('update article')
})

router.delete('/:slug', (req, res) => {
    res.status(200).send('delete article')
})

router.post('/:slug/comments', (req, res) => {
    res.status(200).send('add comments to an article')
})

router.get('/:slug/comments', (req, res) => {
    res.status(200).send('get comments from an article')
})

router.delete('/:slug/comments/:id', (req, res) => {
    res.status(200).send('delete comment from an article')
})

router.post('/:slug/favorite', (req, res) => {
    res.status(200).send('favorite article')
})

router.delete('/:slug/favorite', (req, res) => {
    res.status(200).send('unfavorite article')
})

module.exports = router;
