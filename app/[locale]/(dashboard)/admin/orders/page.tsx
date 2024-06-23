import { getOrders } from "@/app/api";
import OrdersList from "@/components/orders/OrdersList";

const OrdersPage = async () => {
  const orders = await getOrders();

  return <OrdersList orders={orders} />;
};

export default OrdersPage;
