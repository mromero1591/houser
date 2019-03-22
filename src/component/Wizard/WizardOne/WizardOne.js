import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';

//Custom
import {updateHouseName, updateStreetLineOne, updateCity, updateState, updateZipCode} from '../../../ducks/reducer';

class WizardOne extends Component {
    render() {
        const {house_name, street_line_one, city, state, zip_code, updateHouseName, updateStreetLineOne,updateState,updateCity,updateZipCode} = this.props;
        return (
            <section className='form-section'>
                <div className="input-group">
                    <label className='input-label'>Property Name:</label>
                    <input onChange={(e) => {updateHouseName(e.target.value)}} className='input' type='text' value={house_name} />
                </div>

                <div className="input-group">
                    <label className='input-label'>Address:</label>
                    <input onChange={(e) => {updateStreetLineOne(e.target.value)}} className='input' type='text' value={street_line_one} />
                </div>

                <div className="form-group-col-3">
                    <div className="input-group">
                        <label className='input-label'>State:</label>
                        <input onChange={(e) => {updateCity(e.target.value)}} className='input' type='text' value={city} />
                    </div>
                    <div className="input-group">
                        <label className='input-label'>City:</label>
                        <input onChange={(e) => {updateState(e.target.value)}} className='input' type='text' value={state} />
                    </div>
                    <div className="input-group">
                        <label className='input-label'>Zip:</label>
                        <input onChange={(e) => {updateZipCode(e.target.value)}} className='input' type='text' value={zip_code} />
                    </div>
                </div>
                <Link to='/wizard/step2' className='form-link'>
                    <button className='btn form-btn'>Next Step</button>
                </Link>
                
            </section>
        )
    }
}

function mapStateToProps(initialState) {
    const {house_name, street_line_one, city, state, zip_code} = initialState;
    return {
        house_name,
        street_line_one,
        city,
        state,
        zip_code
    }
}

export default connect(mapStateToProps, {updateHouseName, updateStreetLineOne, updateCity, updateState, updateZipCode})(WizardOne);