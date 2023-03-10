/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */

export default function ModalFooter(props) {
  const { buttonName, buttonFunc, close } = props;
  const handleClick = () => {
    buttonFunc();
    close();
  };
  return (
    <div className="modal-footer">
      <button onClick={handleClick} type="button" className="btn btn-primary">{buttonName}</button>
    </div>
  );
}
