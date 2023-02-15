import { Products } from '../../constatnts';
import products from '../store/products';

export default function (state = products, action) {
  switch (action.type) {
    case Products.FETCH:
      return {
        ...state,
      };

    default:
      return state;
  }
}
