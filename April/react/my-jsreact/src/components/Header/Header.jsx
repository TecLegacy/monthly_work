import { useDispatch, useSelector } from 'react-redux';
import classes from './Header.module.css';
import { authAction } from '@/store/authStore';
import Cart from '../Cart';

const Header = ({ setOpenCart }) => {
  const isAuth = useSelector(state => state.auth.isAuthenticated);
  const dispatch = useDispatch();
  console.log(isAuth);
  const loggedOut = () => {
    dispatch(authAction.loggedOut());
  };
  const loggedIn = () => {
    dispatch(authAction.loggedIn());
  };
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
        <ul>
          <li>{isAuth ? <Cart setOpenCart={setOpenCart} /> : ''}</li>
          <li>{isAuth ? <a href='/'>My Products</a> : ''}</li>
          <li>{isAuth ? <a href='/'>My Sales</a> : ''}</li>
          <li>
            {isAuth ? (
              <button className={classes.buttons} onClick={loggedOut}>
                Sign Out
              </button>
            ) : (
              <button className={classes.buttons} onClick={loggedIn}>
                Sign In
              </button>
            )}
            {/* <button onClick={logState}>
              {isAuth ? <button >Logged In</button> : 'Log Out'}
            </button> */}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
