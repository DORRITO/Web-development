import React from 'react';
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';
import {Session} from 'meteor/session'; //meteor add session

import {Links} from './../api/links';
import LinksListItem from './LinksListItem';

export default class LinksList extends React.Component{

  ////////////////////////
  constructor(props){   //
    super(props)        //
      this.state = {    //
        links: []       //
      };                //
  }///////////////////////

  //////////////////////////////////////
  componentDidMount(){
    this.linksTracker = Tracker.autorun(() => {
      //subscribe/get the publication named links that you created.  which gets the api data
      Meteor.subscribe('links');
      const links = Links.find({ visible: Session.get('showVisible') }).fetch();
      this.setState({ links });
    });
  }//////////////////////////////////////

  //////////////////////////////////////
  componentWillUnmount(){
    this.linksTracker.stop();
  }//////////////////////////////////////

  //////////////////////////////////////
  renderLinksListItems(){
    return this.state.links.map((link) => {
      const shortUrl = Meteor.absoluteUrl(link._id);
      return <LinksListItem key={link._id} shortUrl={shortUrl} {...link} />;
    });
  }//////////////////////////////////////

  ////////////////////////////////////////////////
  render(){
    return(
      <div>
        <p>Links List</p>
        <div>{this.renderLinksListItems()}</div>
      </div>
    )
  }///////////////////////////////////////////////
}
