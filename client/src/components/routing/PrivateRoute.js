import React from 'react';
import { Route } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const PrivateRoute = ({
  component: Component,
  auth: { isAuthenticated, loading },
  ...rest
}) => {
  const navigate = useNavigate(); // Declare navigate

  return (
    <Route
      {...rest}
      render={(props) =>
        !isAuthenticated && !loading ? (
          (navigate('/login'), null) // Redirect to '/login' using navigate
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

PrivateRoute.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(PrivateRoute);
