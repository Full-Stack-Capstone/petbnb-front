import PropTypes from 'prop-types';

export default function ModalHeader(props) {
  const { title, close } = props;
  return (
    <div className="modal-header">
      <h2>{title}</h2>
      <button onClick={close} type="button" className="btn btn-primary">X</button>
    </div>
  );
}

ModalHeader.propTypes = {
  title: PropTypes.string.isRequired,
  close: PropTypes.func.isRequired,
};
