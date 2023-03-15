/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/forbid-prop-types */

import { useState, useEffect } from 'react';
import ModalService from './ModalService';
import './ModalRoot.css';

const ModalRoot = () => {
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
};

export default ModalRoot;
