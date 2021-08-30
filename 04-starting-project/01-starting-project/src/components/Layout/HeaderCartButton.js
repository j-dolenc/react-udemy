import {useContext, useEffect,useState} from 'react';

import CartIcon from "../Cart/CartIcon";
import CartContext from '../../store/cart-context';
import classes from './HeaderCartButton.module.css';

const HeaderCartButton = (props) =>{
  const [btnIsAct, setBtnIsAct] = useState(false);
  const cartCtx=useContext(CartContext);
  const numOfCartItems = cartCtx.items.reduce((currNum, item) => {
    return currNum + item.amount;
  }, 0);
  const {items} = cartCtx;
  const btnClasses= `${classes.button} ${btnIsAct ? classes.bump : ''}`
  useEffect(() => {
    if(cartCtx.items.length === 0){
      return;
    }
    setBtnIsAct(true);
    const timer = setTimeout(() => {setBtnIsAct(false)},300);
    return () => {
      clearTimeout(timer);
    }
  },[items])
    return (
      <button className={btnClasses} onClick={props.onClick}>
        <span className={classes.icon}>
          <CartIcon/>
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>{numOfCartItems}</span>
      </button>
    );
}
export default HeaderCartButton;