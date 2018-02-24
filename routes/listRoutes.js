const requireAuth = require('../middlewares/requireAuth');
const mongoose = require('mongoose');
const Lists = mongoose.model('List');

module.exports = (app) => {

    app.get('api/lists', (req, res) => {
        res.send(Lists);
    });

    app.get('/api/lists/:listId', (req, res) => {
        res.send('Getting List');
    });

    app.post('api/createList', requireAuth, (req, res) => {
        
        Lists.create({
            listName: req.listName,
            items: req.listItems,
            _user: req.user._id,
            creationDate: new Date()
        }, (err, list_instance) => {
            if (err) return handleError(err);
            req.user.lists.push(list_instance._id);
            req.user.save();
            
            res.redirect('/lists/' + list_instance._id);
        });
    
    });


    app.get('api/currentUserList', requireAuth, (req, res) => {
        List.find({ '_user': req.user._id }, (err, list) => {
            if (err) return handleError(err);
            res.send(list);
        });
    });

}