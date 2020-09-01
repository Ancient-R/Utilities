 
import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const PrivateRouter = ({ 
    authenticated, 
    component: Component,
    ...rest
}) => {

    return (
        <Route 
            { ...rest } 
            component={ props => (
                authenticated ? 
                    <Component { ...props } />
                :
                    <Redirect to="/auth/login" />
            )}
        />
    )
}

export default PrivateRouter
