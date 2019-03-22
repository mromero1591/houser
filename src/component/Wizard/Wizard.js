import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import './Wizard.css';
import wizardRoutes from '../../routes/wizardRoutes';

class Wizard extends Component {
    render() {
        return(
            <section className='wizard-section'>
                <section className="title-section">
                    <div className='section-title'>Add New Listing</div>
                    <Link to='/'>
                        <button className='btn cancel-btn'>Cancel</button>
                    </Link>
                </section>
                {wizardRoutes}
            </section>
        )
    }
}

export default Wizard;