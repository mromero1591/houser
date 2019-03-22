import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import './Wizard.css';
import wizardRoutes from '../../routes/wizardRoutes';
import {clearState} from '../../ducks/reducer';

class Wizard extends Component {
    render() {
        return(
            <section className='wizard-section'>
                <section className="title-section">
                    <div className='section-title'>Add New Listing</div>
                    <Link to='/'>
                        <button className='btn cancel-btn' onClick={() => {this.props.clearState()}}>Cancel</button>
                    </Link>
                </section>
                {wizardRoutes}
            </section>
        )
    }
}

function mapStateToProps(state) {
    return {
        name: state.house_name
    }
}

export default connect(mapStateToProps, {clearState})(Wizard);