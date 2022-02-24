import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { Modal as ModalBootstrap, Button } from 'react-bootstrap';

const Modal = props => {
  const [active, setActive] = useState(false);

  const handleShow = () => setActive(true);

  useEffect(() => {
    setActive(props.active);
  }, [props.active]);

  return (
    <ModalBootstrap id={props.id} show={active}>
      {props.children}
    </ModalBootstrap>
  );
};

Modal.propTypes = {
  active: PropTypes.bool,
  id: PropTypes.string
};

export const ModalContent = props => {
  const [active, setActive] = useState(false);

  const handleClose = () => setActive(false);

  return (
    <ModalBootstrap.Body>
      {props.children}
      <Button variant="secondary" onClick={handleClose}>
        Close
      </Button>
    </ModalBootstrap.Body>
  );
};

export default Modal;