const Model = require('./model');

exports.find = (req, res, next, id) => {
    Model.findOne({'_id':id , 'active': true } )
        .populate('author')
        .then( tweet => {
            if(tweet){
                req.tweet = tweet;
                next();
            }else{
                res.json({
                    message: "Tweet not found"
                });
            }
        })
        .catch( err => {
            next(new Error(err));
        });
};

exports.all = (req, res, next) => {
    const limit = Number(req.query.limit) || 10;
    const skip = Number(req.query.skip) || 0;
    
    Model
        .find({ 'active': true })
        .skip(skip)
        .limit(limit)
        .populate('author')
        .then( tweets => {
            res.json({
                data: tweets,
                limit,
                skip
            })
        })
        .catch( err => {
            next(new Error(err));
        });
};

exports.create = (req, res, next) => {
    const body = req.body;
    
    let tweet = new Model(body);
    tweet.save()
        .then( tweet_persisted => {
            res.json(tweet_persisted)
        })
        .catch( err => {
            next(new Error(err));
        });
};

exports.get = (req, res, next) => {
    res.json(req.tweet);
};

exports.update = (req, res, next) => {
    let tweet = Object.assign(req.tweet, req.body);
    
    tweet.save()
        .then(tweet_updated => {
            res.json(tweet_updated);
        })
        .catch(err => {
           next(new Error(err));
        });
};

exports.delete = (req, res, next) => {
    const tweet = req.tweet;
    tweet.active=false;
    
    tweet.save()
        .then(tweet_updated => {
            res.json(tweet_updated);
        })
        .catch(err => {
           next(new Error(err));
        });
};