const Model = require('./model');

exports.find = (req, res, next, id) => {
    Model.findOne({'_id':id , 'active': true } )
        .then( user => {
            if(user){
                req.user = user;
                next();
            }else{
                res.json({
                    message: "User not found"
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
        .then( users => {
            res.json({
                data: users,
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
    
    let user = new Model(body);
    user.save()
        .then( user_persisted => {
            res.json(user_persisted)
        })
        .catch( err => {
            next(new Error(err));
        });
};

exports.get = (req, res, next) => {
    res.json(req.user);
};

exports.update = (req, res, next) => {
    let tweet = Object.assign(req.user, req.body);
    
    tweet.save()
        .then(user_updated => {
            res.json(user_updated);
        })
        .catch(err => {
           next(new Error(err));
        });
};

exports.delete = (req, res, next) => {
    const user = req.user;
    user.active=false;
    
    user.save()
        .then(tweet_updated => {
            res.json(tweet_updated);
        })
        .catch(err => {
           next(new Error(err));
        });
    
};