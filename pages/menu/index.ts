import { MenuPage } from './component';
import get from 'lodash/get';
import { connect } from 'react-redux';
import { getProductsAction } from '../../redux/actions/products';

export const mapStateToProps = (state) => ({
  products: get(state, 'products', {}),
});

export const mapDispatchToProps = (dispatch) => ({
  getProducts: () => dispatch(getProductsAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MenuPage);
