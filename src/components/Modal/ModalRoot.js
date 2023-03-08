/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/forbid-prop-types */

import { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
import ModalService from './ModalService';
import './ModalRoot.css';

export default function ModalRoot() {
  const [modal, setModal] = useState({});

  useEffect(() => {
    ModalService.on('open', ({ component, props }) => {
      setModal({
        component,
        props,
        close: () => {
          setModal({});
        },
      });
    });
  }, []);

  const ModalComponent = modal.component ? modal.component : null;

  return (
    <section className={modal.component ? 'modalRoot' : ''}>

      { ModalComponent && (
        <ModalComponent
          {...modal.props}
          close={modal.close}
          className={ModalComponent ? 'd-block' : ''}
        />
      )}

    </section>
  );
}

// ModalRoot.propTypes = {
//   component: PropTypes.func.isRequired,
//   props: PropTypes.object.isRequired,
//   close: PropTypes.func.isRequired,
// };
