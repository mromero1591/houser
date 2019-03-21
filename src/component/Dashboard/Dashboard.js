import React, { Component } from 'react';
import {connect} from 'react-redux';
import Axios from 'axios';
import store from '../../ducks/store';

import "./Dashboard.css";

//Custom component
import House from '../House/House';

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      homes: []
    }
  }

  componentDidMount() {
    Axios.get('/api/houses')
    .then( res => {
      this.setState({homes: res.data});
    }).catch(err => {
      console.log('faced error in inital get', err);
    })
  }


  render() {
    const homes = this.state.homes.map( home => {
      return(
        <House key={home.id} home={home}/>
      );
    })
    return (
      <section className='dashboard'>
        <div className="dashboard-title-section">
          <div className='dashboard-title'>Dashboard</div>
          <button className='btn btn-title'>Add New Property</button>
        </div>
        <hr/>
        <section className='homelisting'>
          <div className="homelisting-section-title">
            Home Listings
          </div>
          {homes}
        </section>
        
      </section>
    )
  }
}

function mapStateToProps(state) {
  return {
    homes: state
  }
}

export default Dashboard;