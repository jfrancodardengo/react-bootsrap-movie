import React from 'react';
import PropTypes from 'prop-types';

import { Button as ButtonBootstrap } from 'react-bootstrap';

const Button = props => {
  return (
    <ButtonBootstrap variant="danger" onClick={props.onClick ? () => props.onClick() : null}>
      {props.children}
    </ButtonBootstrap>
  );
};

export const OutlineButton = props => {
  return (
    <ButtonBootstrap variant="outline-danger" onClick={props.onClick ? () => props.onClick() : null}>
      {props.children}
    </ButtonBootstrap>
  );
};

Button.propTypes = {
  onClick: PropTypes.func
};

export default Button;