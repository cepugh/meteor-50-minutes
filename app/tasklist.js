/**
 * Created by baboooom on 2/26/17.
 */
Tasks = new Mongo.Collection('tasks');

if (Meteor.isClient) {
  Template.tasks.helpers({
    tasks: function() {
      return Tasks.find({}, {sort: {createdAt: -1}});
    }
  });
}

if (Meteor.isServer) {

}

if(Meteor.isServer) {


}