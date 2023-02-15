import { Cart, AddProduct, CartModal } from '../../constatnts';
import cart from '../store/cart';

export default function (state = cart, action) {
  switch (action.type) {
    case Cart.FETCH:
      return {
        ...state,
      };
    case AddProduct.FETCH:
      return {
        ...state,
        ...action.payload,
      };

    case CartModal.OPEN:
      return {
        ...state,
        isOpen: action.payload,
      };
    case CartModal.CANCEL_ALL:
      return {
        ...state,
        order: {},
      };

    default:
      return state;
  }
}
