import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';
 
export const Collection = new Mongo.Collection('collection');

// Remember to import to server/main.js !!

if (Meteor.isServer) {
  // This code only runs on the server
  Meteor.publish('collection', function collectionPublication() {
    return Collection.find();
  });
}
 
 
Meteor.methods({
  'collection.insert'(text) {
    check(text, String);
 
    // Make sure the user is logged in before inserting a collection item
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }
 
    Collection.insert({
      text,
      createdAt: new Date(),
      owner: Meteor.userId(),
      username: Meteor.user().username,
    });
  },
  'collection.remove'(collectionID) {
    check(collectionID, String);
 
    Collection.remove(collectionID);
  },
});