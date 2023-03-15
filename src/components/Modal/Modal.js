/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */

const Modal = (props) => (
  <div className="modal d-block">
    <div className="modal-dialog modal-lg">
      <div className="modal-content">
        { props.children }
      </div>
    </div>
  </div>
);

export default Modal;
