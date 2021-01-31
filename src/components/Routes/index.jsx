import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import LandingPage from '../../pages'
import FindPetshop from '../../pages/FindPetshop'
import SignInPetshop from '../../pages/SignInPetshop'

export default function Routes() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={LandingPage} />
                <Route path="/encontrar-petshop" component={FindPetshop} />
                <Route path="/cadastrar-petshop" component={SignInPetshop} />
            </Switch>
        </Router>
    )
}