import ProductsView from './products'
import QuantityView from './2_quantity'
import AssignedOfferView from './3_assigned_offer'
import ChangeDelivererView from './4_change_deliverer'
import OrderView from './5_order'
import OrdersListView from './6_orders_list'
import OrderDetailsView from './7_order_details'

export const views = {
  PRODUCTS: ProductsView,
  QUANTITY: QuantityView,
  ASSIGNED_OFFER: AssignedOfferView,
  CHANGE_DELIVERER: ChangeDelivererView,
  ORDER: OrderView,
  ORDERS_LIST: OrdersListView,
  ORDER_DETAILS: OrderDetailsView,
}
