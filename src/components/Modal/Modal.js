/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */

export default function Modal(props) {
  return (
    <div className="modal d-block">
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          { props.children }
        </div>
      </div>
    </div>
  );
}
