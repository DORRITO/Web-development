import React from 'react';
import PropTypes from 'prop-types';
import {Players} from './../api/players';

export default class Player extends React.Component{
  render() {
      return(
        <div key={this.props.player._id} className="item">
          <p>{this.props.player.name} has {this.props.player.score} points</p>
          <button onClick={() => {Players.update(this.props.player._id, {$inc: {score: 1}})}}>+1</button>
          <button onClick={() => {Players.update(this.props.player._id, {$inc: {score: -1}})}}>-1</button>
          <button onClick={() => Players.remove(this.props.player._id)}>delete</button>
        </div>
      );
  }
};
//////////////////////////
Player.propTypes = {
  player: PropTypes.object.isRequired
}
