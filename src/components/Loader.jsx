import { Spinner } from 'react-bootstrap';

function Loader() {
  return (
    <Spinner
      style={{ width: '150px', height: '150px' }}
      animation="border"
      variant="primary"
      role="status"
    />
  );
}

export default Loader;
