Template.Vendor.events({
    'click .menu-panel': function() {
    	var nameId = Vendors.findOne({ _id: this._id });
    	$('#'+this.nameId).toggleClass('rotate');
    }
});