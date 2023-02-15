import { Cart, AddProduct, CartModal } from '../../constatnts';

export const getCartAmountAction = () => ({
  type: Cart.FETCH,
});

export const addProductAction = (payload: any) => ({
  type: AddProduct.FETCH,
  payload,
});

export const openCartModalAction = (payload: boolean) => ({
  type: CartModal.OPEN,
  payload,
});

export const cancelAllOrdersAction = () => ({
  type: CartModal.CANCEL_ALL,
});
