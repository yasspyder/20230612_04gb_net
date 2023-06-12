import { useSelector } from 'react-redux';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Loader from './../Loader';

function CourseComponent({ courses }) {
  const loading = useSelector((state) => state.courses.loading);

  return (
    <div className="container-fluid text-center">
      {loading ? (
        <Loader />
      ) : (
        <>
          <h2 className="mb-5">Курсы</h2>
          <div className="d-flex justify-content-center">
            <div className="row">
              {courses.map((course) => (
                <div
                  key={course.id}
                  className="col col-xl-4 col-md-6 col-12 p-3"
                >
                  <Card className="h-100">
                    <Card.Img
                      variant="top"
                      src={course.image_url}
                      style={{ objectFit: 'cover' }}
                    />
                    <Card.Body>
                      <Card.Title>{course.name}</Card.Title>
                      <Card.Text
                      // style={{ height: '100px', overflow: 'scroll' }}
                      >
                        {course.description}
                      </Card.Text>
                    </Card.Body>
                    <Card.Footer className="bg-light">
                      <Link
                        to={course.id === 1 ? `/courses/${course.id}` : '#'}
                        style={
                          course.id === 1
                            ? {}
                            : { color: '#ccc', cursor: 'auto' }
                        }
                      >
                        Перейти
                      </Link>
                    </Card.Footer>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default CourseComponent;
