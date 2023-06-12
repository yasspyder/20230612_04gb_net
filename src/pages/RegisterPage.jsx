import { Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Loader from '../components/Loader';
import { useEffect, useState } from 'react';
import { register } from '../store/slices/profileSlice';
import ErrorModal from '../components/ErrorModal';
import { showModal } from '../store/slices/errorModalSlice';

function RegisterPage() {
  const loading = useSelector((state) => state.profile.loading);
  const user = useSelector((state) => state.profile.user);
  const error = useSelector((state) => state.profile.error);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) navigate('/');

    if (error.length) dispatch(showModal(error));
  }, [user, navigate, dispatch, error]);

  const nameHandle = (e) => {
    setName(e.target.value);
  };
  const emailHandle = (e) => {
    setEmail(e.target.value);
  };
  const passwordHandle = (e) => {
    setPassword(e.target.value);
  };
  const confirmPasswordHandle = (e) => {
    setConfirmPassword(e.target.value);
  };
  const submitHandle = (e) => {
    e.preventDefault();
    dispatch(register({ name, email, password, repeat_pass: confirmPassword }));
  };
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="card p-3" style={{ width: 500 }}>
          <Form onSubmit={submitHandle}>
            <h6 className="text-primary mb-3">
              Для продолжения необходимо зарегистрироваться
            </h6>
            <Form.Group controlId="name">
              <Form.Label>Имя</Form.Label>
              <Form.Control
                onChange={nameHandle}
                value={name}
                type="text"
                placeholder="Введите ваше имя"
              />
            </Form.Group>
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
            <Form.Group controlId="confirmPassword">
              <Form.Label>Повторите пароль</Form.Label>
              <Form.Control
                onChange={confirmPasswordHandle}
                value={confirmPassword}
                type="password"
                placeholder="Повторите пароль"
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Зарегистрироваться
            </Button>
            <Form.Group className="mt-3">
              <Link to="/auth/login">Есть аккаунт? Войти</Link>
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

export default RegisterPage;
