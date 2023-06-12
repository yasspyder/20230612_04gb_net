import { useEffect, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../store/slices/profileSlice';
import Loader from '../components/Loader';
import { showModal } from '../store/slices/errorModalSlice';
import ErrorModal from '../components/ErrorModal';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const user = useSelector((state) => state.profile.user);
  const loading = useSelector((state) => state.profile.loading);
  const error = useSelector((state) => state.profile.error);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate(-1);
    }
    if (error.length) {
      dispatch(showModal(error));
    }
  }, [user, navigate, error, dispatch]);

  const emailHandle = (e) => {
    setEmail(e.target.value);
  };

  const passwordHandle = (e) => {
    setPassword(e.target.value);
  };

  const submitHandle = (e) => {
    e.preventDefault();
    dispatch(login({ email, password }));
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="card p-3" style={{ width: 500 }}>
          <Form onSubmit={submitHandle}>
            <h5 className="text-primary mb-3">
              Для продолжения необходимо войти
            </h5>
            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                onChange={emailHandle}
                value={email}
                type="email"
                placeholder="Введите email"
              />
            </Form.Group>

            <Form.Group controlId="password">
              <Form.Label>Пароль</Form.Label>
              <Form.Control
                onChange={passwordHandle}
                value={password}
                type="password"
                placeholder="Введите пароль"
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Войти
            </Button>
            <Form.Group className="mt-3">
              <Link to="/auth/register">Нет аккаунта? Зарегистрироваться</Link>
            </Form.Group>
            <Form.Group className="mt-3">
              <Link to="/">На главную</Link>
            </Form.Group>
          </Form>
          <ErrorModal />
        </div>
      )}
    </>
  );
}

export default LoginPage;
