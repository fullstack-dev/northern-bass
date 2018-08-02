Template.DateSet.helpers({
  isFavorite: function(setId) {
    return ArtistSet.findOne({ _id: setId, favoritedBy: { $in: [Meteor.userId()] } });
  }
});

Template.DateSet.events({
    'click .add-fav': function(event) {
    	event.preventDefault();
	    //var setIdVar = this._id;

        Meteor.call('favoriteArtistSet', this._id, function(error, response) {
          if (error) {
            console.warn(error);
            sAlert.success(error.reason, {timeout: '3000'});
          } else {
            sAlert.success(response, {timeout: '3000'});
          }
        });

    	// var setNameVar = this.name;
    	// var setDateVar = this.date;
    	// var startTimeVar = this.startTime;
    	// var endTimeVar = this.endTime;
    	// var stageVar = this.stage;
     //    var setOrderVar = this.setOrder;
    	// var currentUserId = Meteor.userId();
    	
    	// Session.set('favUserSet', { "_id": "setIdVar", "name": "setNameVar", "date": "setDateVar", "startTime": "startTimeVar", "endTime": "endTimeVar", "stage": "stageVar", "setOrder":"setOrderVar" } );
    	// var favUserSet = Session.get('favUserSet');
    	// //var setNameVar = document.getElementById("name").innerHTML;
    	// //var setStartTimeVar = document.getElementById("startTime").innerHTML;
    	// //var setEndTimeVar = document.getElementById("endTime").innerHTML;
    	// //var setDateVar = document.getElementById("date").innerHTML;
    	// //var setStageVar = document.getElementById("stage").innerHTML;
    	// //var currentUserId = Meteor.userId();
    	// //console.log(currentUserId, setNameVar, setStartTimeVar, setEndTimeVar, setDateVar, setStageVar);
     //    var userFavSetCount = FavouriteSet.find({name: setNameVar}).count();
     //        //console.log(userFavSetCount, setNameVar);

     //    if (userFavSetCount > 0) {
     //        console.log("error");
     //        var clickedFav = sAlert.success('YOU HAVE ALREADY ADDED THIS SET TO YOUR FAVOURITES', {timeout: '3000'});
     //    } else {
     //        Meteor.call('addFavItem', {
     //            //_id: setIdVar,
     //            name: setNameVar,
     //            date: setDateVar,
     //            startTime: startTimeVar,
     //            endTime: endTimeVar,
     //            stage: stageVar,
     //            setOrder: setOrderVar,
     //            owner: currentUserId
     //        });
     //        var clickedFav = sAlert.success('ADDED TO FAVOURITES', {timeout: '3000'});
     //    }
        //var clickedFav = sAlert.success('ADDED TO FAVOURITES', {timeout: '3000'});
    },
    'click .remove-fav': function(event) {
        event.preventDefault();

        var setIdVar = this._id;
        console.log(setIdVar);

        Meteor.call('removeFavItem', {
            _id:setIdVar
        })
        //var removedFav = sAlert.success('REMOVED FROM FAVOURITES', {timeout: '3000'});
    }
});