import { CartModal } from './component';
import get from 'lodash/get';
import { connect } from 'react-redux';
import {
  openCartModalAction,
  cancelAllOrdersAction,
} from '../../redux/actions/cart';

export const mapStateToProps = (state) => ({
  cart: get(state, 'cart', {}),
});

export const mapDispatchToProps = (dispatch) => ({
  openCartModal: (props: boolean) => dispatch(openCartModalAction(props)),
  cancelAllOrders: () => dispatch(cancelAllOrdersAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartModal);
