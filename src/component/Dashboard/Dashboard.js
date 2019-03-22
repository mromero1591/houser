import React, { Component } from 'react';
import Axios from 'axios';
import {connect} from 'react-redux';

//Custom Import
import House from '../House/House';
import {Link} from 'react-router-dom';
import {addHome, removeHome} from '../../ducks/reducer';
import "./Dashboard.css";

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      homes: []
    }
  }
  componentDidMount() {
    this.getHomes();
    console.log(this.props);
  }

  deleteHouse = (id) => {
    Axios.delete(`/api/houses/${id}`)
    .then(res => {
      this.getHomes();
    }).catch(err => {
      console.log('error in deleting a house: ', err);
    });
  }

  getHomes = () => {
    Axios.get('/api/houses')
    .then( res => {
      this.setState({homes: res.data});
    }).catch(err => {
      console.log('faced error in inital get', err);
    });
  }

  render() {
    const homes = this.state.homes.map( home => {
      return(
        <House key={home.id} home={home} deleteHouse={this.deleteHouse}/>
      );
    })

    return (
      <section className='dashboard'>
        <div className="dashboard-title-section">
          <div className='dashboard-title'>Dashboard</div>
          <Link to='/wizard/step1'>
            <button className='btn btn-title'>Add New Property</button>
          </Link>
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

export default Dashboard;