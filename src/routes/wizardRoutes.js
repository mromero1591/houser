import React from 'react';
import {Route, Switch} from 'react-router-dom';

import WizardOne from '../component/Wizard/WizardOne/WizardOne';
import WizardTwo from '../component/Wizard/WizardTwo/WizardTwo';
import WizardThree from '../component/Wizard/WizardThree/WizardThree';

export default  (
    <Switch>
        <Route path='/wizard/step1' component={WizardOne} />
        <Route path='/wizard/step2' component={WizardTwo} />
        <Route path='/wizard/step3' component={WizardThree} />
    </Switch>
)