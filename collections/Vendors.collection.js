Vendors = new Ground.Collection('vendors');

Vendors.allow({
	insert: function(userId) {
		return !!userId;
	}
});

Menu = new SimpleSchema ({
	itemTitle: {
		type: String,
		label: "Item Title",
		optional: true
	},
	itemDesc: {
		type: String,
		label: "Item Desc",
		optional: true
	},
	price: {
		type: String,
		label: "Price",
		optional: true
	},
	priceTwo: {
		type: String,
		label: "Price Two",
		optional: true
	},
})

VendorsSchema = new SimpleSchema ({
	nameId: {
		type: String,
		label: "Name Id"
	},
	restName: {
		type: String,
		label: "Restaurant Name"
	},
	restDesc: {
		type: String,
		label: "Restaurant Desc",
		optional: true
	},
	subMenuTitle: {
		type: String,
		label: "Submenu Title",
		optional: true
	},
	subMenuDesc: {
		type: String,
		label: "Submenu Desc",
		optional: true
	},
	menuItems: {
		type: [Menu]
	}
});

Vendors.attachSchema( VendorsSchema );