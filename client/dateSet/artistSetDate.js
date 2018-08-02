Template.SetDisplay.onCreated(function() {
	var self = this;
	self.autorun(function() {
		self.subscribe('artistSet');
	});
});

Template.SetDisplay.helpers({
	artistSetDateOne: ()=> {
		return ArtistSet.find({ date: 29, stage: 'jungle'}, {sort: { setOrder: 1 } });
	},
	artistSetDateTwo: ()=> {
		return ArtistSet.find({ date: 30, stage: 'main'});
	}
});

Template.SetDisplay.helpers({
	artistSetDateThree: ()=> {
		return ArtistSet.find({ date: 30, stage: 'jungle'});
	}
});

Template.SetDisplay.helpers({
	artistSetDateFour: ()=> {
		return ArtistSet.find({ date: 30, stage: 'lagoon'});
	}
});

Template.SetDisplay.helpers({
	artistSetDateFive: ()=> {
		return ArtistSet.find({ date: 31, stage: 'main'});
	}
});

Template.SetDisplay.helpers({
	artistSetDateSix: ()=> {
		return ArtistSet.find({ date: 31, stage: 'jungle'});
	}
});

Template.SetDisplay.helpers({
	artistSetDateSeven: ()=> {
		return ArtistSet.find({ date: 31, stage: 'lagoon'});
	}
});