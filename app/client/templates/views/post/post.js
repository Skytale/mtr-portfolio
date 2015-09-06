Template.post.onCreated(function () {
    var self = this;
    self.autorun(function () {
        var postId = FlowRouter.getParam('postId');
        self.subscribe('post', postId);
        self.subscribe('posts');
    });
});

Template.post.helpers({
    post: function () {
        var postId = FlowRouter.getParam('postId');
        var post = Posts.findOne({_id: postId}) || {};
        return post;
    },
    disqusPath: function() {
        var path = 'http://localhost:3000/blog/' + this._id;
        return path;
    }
});

Template.post.events({
    'click .ui.prev.button': function(e) {
        var postId = FlowRouter.getParam('postId'),
            posts = Posts.find().fetch();

        for(var i = 0; i < posts.length; ++i) {
            if (posts[i]._id === postId) {
                var current = posts[i],
                    index = posts.indexOf(current);

                index--;

                if (index === -1) {
                    e.preventDefault();
                } else {
                    var prevPostId = posts[index]._id;
                    FlowRouter.go('/blog/' + prevPostId);
                }
            } else {
                e.preventDefault();
            }
        }
    },
    'click .ui.next.button': function(e) {
        var postId = FlowRouter.getParam('postId'),
            posts = Posts.find().fetch();

        for(var i = 0; i < posts.length; ++i) {
            if (posts[i]._id === postId) {
                var current = posts[i],
                    index = posts.indexOf(current);

                index++;


                if (index === posts.length) {
                    e.preventDefault();
                } else {
                    var nextPostId = posts[index]._id;
                    FlowRouter.go('/blog/' + nextPostId);
                }
            } else {
                e.preventDefault();
            }
        }
    }
});
