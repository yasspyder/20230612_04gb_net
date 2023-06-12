import { useEffect } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTests } from '../store/slices/allTestsSlice';
import Loader from '../components/Loader';

function TestsPage() {
  // const [tests, setTests] = useState([]);
  const dispatch = useDispatch();
  const tests = useSelector((state) => state.tests.tests);
  const loading = useSelector((state) => state.tests.loading);

  useEffect(() => {
    if (!tests.length) dispatch(fetchTests());
  }, [tests, dispatch]);

  console.log(tests);

  return (
    <div className="container-fluid text-center py-5">
      {loading ? (
        <Loader />
      ) : (
        <>
          <h2 className="mb-5">Тесты</h2>
          <div className="d-flex justify-content-center">
            <div className="row row-cols-3 w-100">
              {tests.map((test) => (
                <div key={test.id} className="col mb-3">
                  <Link to={`/tests/${test.id}`}>
                    <Card className="card-test">
                      <Card.Img variant="top" src={test.image_url} />
                      <Card.Body>
                        <Card.Title>{test.name}</Card.Title>
                      </Card.Body>
                    </Card>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default TestsPage;
