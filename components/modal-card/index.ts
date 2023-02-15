import { ModalCard } from './component';
import get from 'lodash/get';
import { connect } from 'react-redux';
import { addProductAction } from '../../redux/actions/cart';

export const mapStateToProps = (state) => ({
  cart: get(state, 'cart', {}),
});

export const mapDispatchToProps = (dispatch) => ({
  addProduct: (props: {}) => dispatch(addProductAction(props)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ModalCard);
