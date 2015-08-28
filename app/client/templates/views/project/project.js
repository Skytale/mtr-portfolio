Template.project.onCreated(function () {
    var self = this;
    self.autorun(function () {
        var projectId = FlowRouter.getParam('projectId');
        self.subscribe('project', projectId);
        self.subscribe('projects');
    });

    $('.ui.sticky').sticky();
});

Template.project.helpers({
    project: function () {
        var projectId = FlowRouter.getParam('projectId');
        var project = Projects.findOne({_id: projectId}) || {};
        return project;
    }
});

Template.project.events({
    'click .ui.prev.button': function(e) {
        var projectId = FlowRouter.getParam('projectId'),
            projects = Projects.find().fetch();

        for(var i = 0; i < projects.length; ++i) {
            if (projects[i]._id === projectId) {
                var current = projects[i];

                var index = projects.indexOf(current);
                index--;

                var prevProjectId = projects[index]._id;
                FlowRouter.go('/work/' + prevProjectId);
            } else {
                e.preventDefault();
            }
        }
    },
    'click .ui.next.button': function(e) {
        var projectId = FlowRouter.getParam('projectId'),
            projects = Projects.find().fetch();

        for(var i = 0; i < projects.length; ++i) {
            if (projects[i]._id === projectId) {
                var current = projects[i];

                var index = projects.indexOf(current);
                index++;

                var nextProjectId = projects[index]._id;
                FlowRouter.go('/work/' + nextProjectId);
            } else {
                e.preventDefault();
            }
        }
    }
});
