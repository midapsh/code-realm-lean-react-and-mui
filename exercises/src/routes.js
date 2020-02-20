import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";

// Por padrao, o BrowserRouter deixa que mais de uma rota
// seja chamada ao mesmo tempo. O Switch faz com que apenas
// uma seja chamada por vez.
export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Dashboard} />
            </Switch>
        </BrowserRouter>
    )
}