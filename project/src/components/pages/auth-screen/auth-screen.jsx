import React, { useRef } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';
import {login} from '../../../store/api-actions';
import {AppRoute} from '../../../const';
import Header from '../../elements/header/header';
import {getCity} from '../../../store/work-process/selectors';

function AuthScreen() {
  const dispatch = useDispatch();
  const city = useSelector(getCity);
  const loginRef = useRef();
  const passwordRef = useRef();
  const handleSubmit = (evt) => {
    evt.preventDefault();

    dispatch(login({
      login: loginRef.current.value,
      password: passwordRef.current.value,
    }));
  };

  return (
    <div className="page page--gray page--login">
      <Header/>
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form
              className="login__form form"
              action="#"
              method="post"
              onSubmit={handleSubmit}
            >
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden" htmlFor="email">E-mail</label>
                <input
                  ref={loginRef}
                  className="login__input form__input"
                  id="email"
                  type="email" name="email"
                  placeholder="Email"
                  pattern="^[-a-z0-9!#$%&'*+/=?^_`{|}~]+(\.[-a-z0-9!#$%&'*+/=?^_`{|}~]+)*@([a-z0-9]([-a-z0-9]{0,61}[a-z0-9])?\.)*(aero|arpa|asia|biz|cat|com|coop|edu|gov|info|int|jobs|mil|mobi|museum|name|net|org|pro|tel|travel|[a-z][a-z])$"
                  required=""
                  data-testid="email"
                />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden" htmlFor="password">Password</label>
                <input
                  ref={passwordRef}
                  className="login__input form__input"
                  id="password"
                  type="password"
                  name="password"
                  placeholder="Password"
                  required=""
                  data-testid="password"
                  pattern="^[^\s]+(\s.*)?$"
                />
              </div>
              <button
                to={AppRoute.ROOT}
                className="login__submit form__submit button"
                type="submit"
              >
                Sign in
              </button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <Link className="locations__item-link" to={AppRoute.ROOT}>
                <span>{city}</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default AuthScreen;
