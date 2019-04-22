import React, { Component } from 'react';
import { connect } from 'react-redux'

import './App.css';
import { getTracks } from './actions/tracks';

class App extends Component {
    addTrack = () => {
        console.log('Add Track action', this.trackInput.value);
        this.props.onAddTrack(this.trackInput.value);
        this.trackInput.value = '';
    }
    findTrack = () => {
        console.log('findTrack', this.searchInput.value);
        this.props.onFindTrack(this.searchInput.value);
    }

  render() {
    return (
      <div className="App">
          <div>
              <input type="text" ref={(input) => { this.searchInput = input }} />
              <button onClick={this.findTrack}>Find track</button>
          </div>
        <div>
            <input type="text" ref={(input) => { this.trackInput = input; }} />
          <button className="addTrack" onClick={this.addTrack}>Add track</button>
          <ul className="list">
              {/*{this.props}*/}
              {this.props.tracks.map((track, index) => {return <li key={index}>{track.name}</li>})}
          </ul>
        </div>
          <div>
              <button onClick={this.props.onGetTracks}>Get tracks</button>
          </div>
      </div>
    );
  }
}

export default connect(
    (state, ownProps) => ({
        tracks: state.tracks.filter(track => track.name.includes(state.filterTracks)),
        ownProps
    }),
    dispatch => ({
        onAddTrack: (name) => {
            const payload = {
                id: Date.now().toString(),
                    name
            }
            dispatch({ type: 'ADD_TRACK', payload });
        },
        onFindTrack: (name) => {
            dispatch({ type: 'FIND_TRACK', payload: name })
        },
        onGetTracks: () => {
            dispatch(getTracks());
        }
    })
)(App);
