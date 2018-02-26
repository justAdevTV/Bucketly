const requireAuth = require('../middlewares/requireAuth');
const mongoose = require('mongoose');
const Lists = mongoose.model('List');

module.exports = (app) => {

    app.get('/api/lists', (req, res) => {
        Lists.find(function(err, lists) {
            if (err)
                res.send(err);

            res.json(lists);
        });
    });

    app.get('/api/lists/:listId', (req, res) => {
        Lists.findById(req.params.listId, function(err, list) {
            if (err)
                res.send(err);
            res.json(list);
        });
    });

    app.post('/api/createList', requireAuth, (req, res) => {

        const body = req.body;

        Lists.create({
            listName: body.listName,
            items: body.listItems,
            _user: req.user._id,
            creationDate: new Date()
        }, (err, list_instance) => {
            if (err) return handleError(err);
            
            res.redirect('/lists/' + list_instance._id);
        });
    
    });

    app.get('/api/currentUserList', requireAuth, (req, res) => {
        List.find({ '_user': req.user._id }, (err, list) => {
            if (err) return handleError(err);
            res.send(list);
        });
    });

}