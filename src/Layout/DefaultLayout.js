import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { routes } from '../routes';

class DefaultLayout extends React.Component {

    render() {
        return (
            <Switch>
                {
                    routes.map((route, idx) =>
                        <Route key={idx}
                            exact={route.exact || false}
                            name={route.name}
                            path={route.path}
                            component={withRouter(route.component)} />
                    )
                }
            </Switch>
        );
    }

}

export default DefaultLayout;