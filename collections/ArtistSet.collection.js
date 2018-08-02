ArtistSet = new Mongo.Collection('artistSet');

ArtistSet.allow({
	insert: function(userId, doc) {
		return true;
	},
	update: function(userId, doc) {
		return true;
	},
	remove: function(userId, doc) {
		return true;
	}
});

ArtistSetSchema = new SimpleSchema ({
	name: {
		type: String,
		label: "Name"
	},
	date: {
		type: Number,
		label: "Date"
	},
	startTime: {
		type: String,
		label: "SetTime"
	},
	endTime: {
		type: String,
		label: "EndTime"
	},
	stage: {
		type: String,
		label: "Stage"
	},
	setOrder: {
		type: Number,
		label: "SetOrder",
		optional: true
	},
	favoritedBy: {
		type: [String],
		defaultValue: [],
		label: "Users Who Favourited"
	}
});

ArtistSet.attachSchema( ArtistSetSchema );

Meteor.methods({
    'favoriteArtistSet': function(setId) {
       var userId = this.userId;
       var alreadyFavorited = ArtistSet.findOne({ _id: setId, favoritedBy: { $in: [userId] } });
       var updateOperation = !alreadyFavorited ? { $addToSet: { favoritedBy: userId } } : { $pull: { favoritedBy: userId } };
       ArtistSet.update(setId, updateOperation);
       return !alreadyFavorited ? 'ADDDED TO FAVOURITES!' : 'REMOVED FROM FAVOURITES';
    }
});

if ( Meteor.isClient ) {
  Ground.methodResume([
      'favoriteArtistSet'
  ]);
}

if (Meteor.isCordova) {
  Ground.Collection(ArtistSet);
}


