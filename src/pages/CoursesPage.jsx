import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCourses } from '../store/slices/coursesSlice';
import CourseComponent from '../components/coursecomponent/CourseComponent';

function CoursesPage() {
  const dispatch = useDispatch();
  const courses = useSelector((state) => state.courses.courses);

  useEffect(() => {
    if (!courses.length) {
      dispatch(fetchCourses());
    }
  }, [dispatch, courses]);

  return <CourseComponent courses={courses} />;
}

export default CoursesPage;
