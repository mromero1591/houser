import React, { Component } from 'react';
import Axios from 'axios';
import {connect} from 'react-redux';

//Custom Import
import House from '../House/House';
import {Link} from 'react-router-dom';
import {addHome, removeHome} from '../../ducks/reducer';
import "./Dashboard.css";

class Dashboard extends Component {
  componentWillMount() {
    Axios.get('/api/houses')
    .then( res => {
      const homes = res.data;
      homes.forEach(home => {
        this.props.addHome(home);
      });
    }).catch(err => {
      console.log('faced error in inital get', err);
    });
  }

  deleteHouse = (id) => {
    Axios.delete(`/api/houses/${id}`)
    .then(res => {
      this.props.removeHome(id);
    }).catch(err => {
      console.log('error in deleting a house: ', err);
    });
  }

  render() {
    const homes = this.props.homes.map( home => {
console.log(home);
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

function mapStateToProps(state) {
  return {
    homes: state.homes
  }
}

export default connect(mapStateToProps, {addHome, removeHome})(Dashboard);