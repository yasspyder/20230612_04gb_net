import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div>
      <div className="container-fluid bg-dark text-white py-5 px-sm-3 px-lg-5">
        <div className="row pt-5">
          <div className="col-lg-7 col-md-12">
            <div className="row">
              <div className="col-md-6 mb-5">
                <h5
                  className="text-primary text-uppercase mb-4"
                  style={{ letterSpacing: '5px' }}
                >
                  Связаться с нами
                </h5>
                <p>
                  <i className="fa fa-map-marker-alt mr-2"></i>Москва, ул.Дорожная,
                  д.65Б, оф.521
                </p>
                <p>
                  <i className="fa fa-phone-alt mr-2"></i>+7 (800) 799-9999
                </p>
                <p>
                  <i className="fa fa-envelope mr-2"></i><a href="mailto: 123@brisklylearn.ru">123@brisklylearn.ru</a>
                </p>
                <div className="d-flex justify-content-start mt-4">
                  <div className="btn btn-outline-light btn-square mr-2">
                    <i className="fab fa-vk"></i>
                  </div>
                  <div className="btn btn-outline-light btn-square mr-2">
                    <i className="fab fa-youtube"></i>
                  </div>
                  <div className="btn btn-outline-light btn-square mr-2">
                    <i className="fab fa-odnoklassniki"></i>
                  </div>
                  <div className="btn btn-outline-light btn-square mr-2">
                    <i className="fab fa-telegram"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-12 mb-5">
            <h5
              className="text-primary text-uppercase mb-4"
              style={{ letterSpacing: '5px' }}
            >
              Подписаться на новости и акции
            </h5>
            <p>
            Получайте свежие новости, скидки, лайфаки, спецпредложения, полезные статьи, советы от специалистов, психологов и педагогов «Briskly Learn» на вашу почту!
            </p>
            <div className="w-100">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control border-light"
                  style={{ padding: 30 }}
                  placeholder="Ваш Email"
                />
                <div className="input-group-append">
                  <button className="btn btn-primary px-4">Подписаться на новости</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid bg-dark text-white border-top py-4 px-sm-3 px-md-5">
        <div className="row">
          <div className="col-lg-6 text-center text-md-left mb-3 mb-md-0">
            <p className="m-0 text-white">
              &copy; <a href="www.brisklylearn.ru">BrisklyLearn.ru</a> All rights reserved 2023.
            </p>
          </div>
          <div className="col-lg-6 text-center text-md-right">
            <ul className="nav d-inline-flex">
              <li className="nav-item nav-link text-white py-0"><Link to="/policy">Политика</Link></li>
              <li className="nav-item nav-link text-white py-0">Условия</li>
              <li className="nav-item nav-link text-white py-0">FAQs</li>
              <li className="nav-item nav-link text-white py-0">Помощь</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
