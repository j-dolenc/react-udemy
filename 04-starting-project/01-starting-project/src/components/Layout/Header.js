import React, {Fragment} from 'react';
import jelly from '../../assets/Jellyfish.jpg';
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';
const Header = (props) => {
    return (
      <React.Fragment>
        <header className={classes.header}>
          <h1>ReactMeals</h1>
          <HeaderCartButton onClick={props.onShowCart}/> {/*onclick ni pravi onclick*/}
        </header>
        <div className={classes['main-image']}>
          <img srC={jelly} alt="A jellyfish in the sea!" />
        </div>
      </React.Fragment>
    );
}
export default Header;