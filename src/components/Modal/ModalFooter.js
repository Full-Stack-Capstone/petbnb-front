/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */

export default function ModalFooter(props) {
  const { buttonName, buttonFunc } = props;
  return (
    <div className="modal-footer">
      <button onClick={buttonFunc} type="button" className="btn btn-primary">{buttonName}</button>
    </div>
  );
}
