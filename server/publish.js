Meteor.publish('artistSet', function(){
	return ArtistSet.find({}, { sort: { setOrder: 1 } });
});

Meteor.publish('favouriteSet', function(){
	return ArtistSet.find({ favoritedBy: { $in: [this.userId] } }, {sort: { date:1, stage:1, setOrder:1} });
});

Meteor.publish('vendors', function(){
	return Vendors.find({});
});