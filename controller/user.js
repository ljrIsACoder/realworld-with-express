const {User} = require("../model");
exports.login = async (req, res) => {
    console.log(req.body);
    res.status(200).send('login')
}

exports.register = async (req, res, next) => {
    try {
        let user = await new User(req.body.user)
        await user.save()
        user = user.toJSON()
        delete user.password
        res.status(201).json({
            user
        })
    } catch (err) {
        next(err)
    }
}

exports.getCurrentUser = async (req, res, next) => {
    res.status(200).send('getCurrentUser')
}

exports.updateCurrentUser = async (req, res, next) => {
    res.status(200).send('updateCurrentUser')
}

exports.getUserProfile = async (req, res, next) => {
    try {
        // 处理请求
        res.send('getUserProfile')
    } catch (err) {
        next(err)
    }
}

exports.followUser = async (req, res, next) => {
    try {
        // 处理请求
        res.send('followUser')
    } catch (err) {
        next(err)
    }
}

exports.unfollowUser = async (req, res, next) => {
    try {
        // 处理请求
        res.send('unfollowUser')
    } catch (err) {
        next(err)
    }
}
