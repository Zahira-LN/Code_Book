import { useEffect, useState } from "react";
import { DashboardCard } from "./component/DashboardCard";
import { DashboardEmpty } from "./component/DashboardEmpty";
import { getUserOrders } from "../../services/dataService";

export const DashboardPage = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const data = await getUserOrders();
      setOrders(data);
    };
    fetchOrders();
  }, []);

  return (
    <main>
      <section>
        <p className="text-2xl text-center font-semibold dark:text-slate-100 my-10 underline underline-offset-8">
          My Dashboard
        </p>
      </section>
      {orders.length > 0 ? (
        orders.map((order) => (
          <DashboardCard key={order.id} order={order} />
        ))
      ) : (
        <DashboardEmpty />
      )}
    </main>
  );
};
