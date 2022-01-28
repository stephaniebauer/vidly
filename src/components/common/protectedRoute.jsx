import React from "react";
import { Route, Redirect } from "react-router-dom";
import authService from "../../services/authService";

// React exptects Component to start with capital letter
// if Component is null - we need render function
// {...rest} for any additional properties
const ProtectedComponent = ({
  path,
  component: Component,
  render,
  ...rest
}) => {
  const currentUser = authService.getCurrentUser();
  return (
    <Route
      //path={path}
      // is included in {...rest}
      {...rest}
      render={(props) => {
        if (!currentUser)
          return (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: props.location },
              }}
            />
          );
        return Component ? <Component {...props} /> : render(props);
      }}
    />
  );
};

export default ProtectedComponent;
