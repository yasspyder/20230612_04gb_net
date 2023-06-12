import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCourses } from '../store/slices/coursesSlice';
import MainCarousel from '../components/MainCarousel';
import CarouselReviews from '../components/CarouselReviews';
import CourseComponent from '../components/coursecomponent/CourseComponent';

function Homepage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCourses());
  }, [dispatch]);

  const courses = useSelector((state) => state.courses.courses.slice(0, 3));

  return (
    <>
      <MainCarousel />
      <div className="container-fluid text-center py-5">
        <h2>Добро пожаловать на сайт BrisklyLearn!</h2>
        <p>
          Добро пожаловать на путь знаний и новых возможностей! Проходите
          бесплатную регистрацию и в Вашем личном кабинете будет доступна
          полезная информация, а также есть ответы на интересующие Вас вопросы.
          В папке «Полезности» вы получите записи прямых эфиров и бесплатные
          вебинары: — Плюсы и минусы онлайн-обучения; — «Удаленное обучение» и
          др.;
        </p>
      </div>
      <CourseComponent courses={courses} />
      <CarouselReviews />
    </>
  );
}

export default Homepage;
