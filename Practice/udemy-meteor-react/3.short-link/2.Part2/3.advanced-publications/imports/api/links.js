import {Meteor} from 'meteor/meteor';
import {Mongo} from 'meteor/mongo';

export const Links = new Mongo.Collection('links');

if (Meteor.isServer) {
  //publish requires 2 arguments, string name to call it, and a function
  Meteor.publish('links', function() {
    let user = this.userId;
    return Links.find({ userId: this.userId });
  });
}
