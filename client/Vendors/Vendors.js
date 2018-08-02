Meteor.subscribe('vendors');

Template.Vendors.helpers({
	vendors: ()=> {
		return Vendors.find({});
	}
});