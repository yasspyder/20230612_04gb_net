import { NavLink } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

function NavBar() {
  return (
    <div className="container-fluid">
      <div className="row border-top px-xl-5">
        <div className="col-lg-12">
          <Navbar bg="light" expand="lg">
            <Navbar.Brand>
              <img
                className="d-lg-none"
                src="/img/BrisklyLogo.svg"
                alt="BrisklyLearn"
                width="40"
              />
            </Navbar.Brand>
            <Navbar.Toggle
              aria-controls="basic-navbar-nav"
              style={{ float: 'right' }}
            />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <NavLink to="/" className="nav-item nav-link">
                  Главная
                </NavLink>
                <NavLink to="/courses" className="nav-item nav-link">
                  Курсы
                </NavLink>
                <NavLink to="/tests" className="nav-item nav-link">
                  Тесты
                </NavLink>
                <NavLink to="/articles" className="nav-item nav-link">
                  Статьи
                </NavLink>
                <NavLink to="/about" className="nav-item nav-link">
                  О нас
                </NavLink>
                <NavLink to="/contacts" className="nav-item nav-link">
                  Контакты
                </NavLink>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
