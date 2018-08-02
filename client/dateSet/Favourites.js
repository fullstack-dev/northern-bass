Template.Favourites.onCreated(function() {
	var self = this;
	self.autorun(function() {
		self.subscribe('favouriteSet');
	});
});

Template.Favourites.helpers({
	favouriteSet: ()=> {
        const userId = Meteor.userId();

        if (userId) {
            return ArtistSet.find({ favoritedBy: { $in: [userId] } }, {sort: { date: 1, stage: 1, setOrder: 1 } });
        }
	}
});

Template.Favourites.events({
    'click .remove': function(event) {
    	event.preventDefault();

        Meteor.call('favoriteArtistSet', this._id, function(error, response) {
          if (error) {
            console.warn(error);
            sAlert.success(error.reason, {timeout: '3000'});
          } else {
            sAlert.success(response, {timeout: '3000'});
          }
        });
    }
});

