FavouriteSet = new Ground.Collection('favouriteSet');

FavouriteSet.allow({
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

FavouriteSetSchema = new SimpleSchema ({
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
	owner: {
		type: String,
		label: "Owner"
	},
	setOrder: {
		type: Number,
		label: "SetOrder",
		optional: true
	},
	inFavourites: {
		type: Boolean,
		defaultValue: true,
		optional: false
	}
});

FavouriteSet.attachSchema( FavouriteSetSchema );