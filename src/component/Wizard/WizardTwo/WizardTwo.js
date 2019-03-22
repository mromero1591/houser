import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';

//Custom
import {updateImg} from '../../../ducks/reducer';

class WizardTwo extends Component {
  render() {
    const {img, updateImg} = this.props;

    return (
        <section className='form-section'>
            <div className="input-group">
                <label className='input-label'>Image URL:</label>
                <input onChange={(e) => {updateImg(e.target.value)}} className='input' type='text' value={img} />
            </div>

            <div className="wizard-link-group">
                <Link to='/wizard/step1'>
                    <button className='btn form-btn'>Previous Step</button>
                </Link>
                <Link to='/wizard/step3'>
                    <button className='btn form-btn'>Next Step</button>
                </Link>
            </div>
        </section>
    )
  }
}

function mapStateToProps(state){
    return {
        img: state.img
    }
}

export default connect(mapStateToProps, {updateImg})(WizardTwo);


