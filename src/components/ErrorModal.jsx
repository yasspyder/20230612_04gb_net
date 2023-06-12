import { useDispatch, useSelector } from 'react-redux';
import Modal from 'react-bootstrap/Modal';
import { closeModal } from '../store/slices/errorModalSlice';
import { Button } from 'react-bootstrap';

function ErrorModal() {
  const show = useSelector((state) => state.errorModal.show);
  const error = useSelector((state) => state.errorModal.error);
  const dispatch = useDispatch();

  const handleClose = () => dispatch(closeModal());

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Ошибка</Modal.Title>
      </Modal.Header>
      <Modal.Body>{error[0]}</Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handleClose}>
          Понятно
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ErrorModal;
