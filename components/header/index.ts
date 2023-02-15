import { Header } from './component';
import get from 'lodash/get';
import { connect } from 'react-redux';
import {
  getCartAmountAction,
  openCartModalAction,
} from '../../redux/actions/cart';

export const mapStateToProps = (state) => ({
  cart: get(state, 'cart', {}),
});

export const mapDispatchToProps = (dispatch) => ({
  getCartAmount: () => dispatch(getCartAmountAction()),
  openCartModal: (props: boolean) => dispatch(openCartModalAction(props)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
