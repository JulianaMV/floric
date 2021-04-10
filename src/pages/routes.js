import React from  'react'
import { BrowserRouter, Switch, Route} from 'react-router-dom'

import {history} from '../pages/history'
import FlowersPag from '../pages/flower'
import BuquePag from '../pages/buque'


const Routes = () => {

    return(
    <BrowserRouter history={history}>
        <Switch>
            <Route exact path="/" component={FlowersPag}/>
            <Route exact path="/buque"component={BuquePag}/>
        </Switch>
    </BrowserRouter>
    );
}

export default Routes;