import React from 'react';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';


const PrivateRoute = ({ component: Component, auth,...rest }) => {
  console.log(auth);
  if (!auth.isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
if (auth.isAuthenticated) {
  return <Component {...rest} />;
}
};

PrivateRoute.propTypes = {
  auth: PropTypes.object.isRequired,
  component: PropTypes.elementType.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps)(PrivateRoute);
