import React from 'react'
import { Route, Redirect } from 'react-router-dom';

const PublicRouter = ({
    authenticated,
    component: Component,
    ...rest
}) => {

    return (
        <Route
            {...rest}
            component={ props => (
                !authenticated ?
                    <Component { ...props } />
                :
                    <Redirect to="/" />
            )}
        />
    );
}

export default PublicRouter;
