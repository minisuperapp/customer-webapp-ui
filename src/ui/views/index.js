import { ProductsView } from "./1_products/index";
import { QuantityView } from "./2_quantity/index";
import { AssignedOfferView } from "./3_assigned_offer/index";
import { ChangeDelivererView } from "./4_change_deliverer/index";
import { OrderView } from "./5_order/index";
import { OrdersListView } from "./6_orders_list/index";

export const views = {
  PRODUCTS: ProductsView,
  QUANTITY: QuantityView,
  ASSIGNED_OFFER: AssignedOfferView,
  CHANGE_DELIVERER: ChangeDelivererView,
  ORDER: OrderView,
  ORDERS_LIST: OrdersListView,
}