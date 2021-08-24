import React from 'react';
import { BrowserRouter, Redirect, Switch } from 'react-router-dom';
import Navbar from './Components/ShareComponents/Navbar';
import routes from './Routes/routes';
import RouteWithSubRoutes from './Routes/RouteWithSubRoutes';

function App() {
    return (
        <div>
            <BrowserRouter>
            <Navbar/>
                <Switch>
                    <Redirect exact from="/" to="/home" />
                    {routes.map((route, i) => (
                        <RouteWithSubRoutes key={i} {...route} />
                    ))}
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
