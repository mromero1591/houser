import React, { Component } from 'react'
import {Link, Redirect} from 'react-router-dom';
import { connect } from 'react-redux';
import Axios from 'axios';

//Custom
import {updateMortgage, updateRent, clearState, addHome} from '../../../ducks/reducer';

class WizardThree extends Component {

    createHouse = () => {
        const {house_name, street_line_one, city, state, zip_code, img, mortgage,rent} = this.props;
        const newHouse = {
            house_name,
            street_line_one,
            city,
            state,
            zip_code,
            img,
            mortgage,rent
        }
        this.props.addHome(newHouse);
        Axios.post('/api/houses', newHouse)
        .then(res => {
            this.props.clearState();
        }).catch(err => {
            console.log('faced error increating', err);
        })
        
    }
  render() {
    const {mortgage, rent, updateMortgage,updateRent} = this.props;
    return (
        <section className='form-section'>
            <div className="input-group">
                <label className='input-label'>Monthly Mortgage Amount:</label>
                <input onChange={(e) => {updateMortgage(e.target.value)}} className='input' type='text' value={mortgage} />
            </div>

            <div className="input-group">
                <label className='input-label'>Desired Monthly Rent:</label>
                <input onChange={(e) => {updateRent(e.target.value)}} className='input' type='text' value={rent} />
            </div>

            <div className="wizard-link-group">
                <Link to='/wizard/step2'>
                    <button className='btn form-btn'>Previous Step</button>
                </Link>
                <Link to='/'>
                    <button onClick={this.createHouse} className='btn form-btn form-btn-complete'>Complete</button>
                </Link>
            </div>
        </section>
    )
  }
}

function mapStateToProps(initialState){
    const {house_name, street_line_one, city, state, zip_code, img, mortgage,rent} = initialState;
    return {
        house_name,
        street_line_one,
        city,
        state,
        zip_code,
        img,
        mortgage,
        rent
    }
}

export default connect(mapStateToProps, {updateMortgage,updateRent})(WizardThree);