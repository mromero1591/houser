import React, {Component} from 'react';
import {Link, Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';
import './Wizard.css';
import {clearState} from '../../ducks/reducer';

import WizardOne from '../Wizard/WizardOne/WizardOne';
import WizardTwo from '../Wizard/WizardTwo/WizardTwo';
import WizardThree from '../Wizard/WizardThree/WizardThree';

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
                <Switch>
                    <Route path={`${this.props.match.path}/step1`} component={WizardOne} />
                    <Route path={`${this.props.match.path}/step2`} component={WizardTwo} />
                    <Route path={`${this.props.match.path}/step3`} component={WizardThree} />
                </Switch>
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