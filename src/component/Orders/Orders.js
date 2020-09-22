import React, { useEffect, useState } from "react";
import "./Orders.css";
import { db } from "../../firebase";
import Order from "../Order/Order";
import { useStateValue } from "../../StateProvider";

function Orders() {
  const [{ basket, user }, dispatch] = useStateValue();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user) {
      db.collection("users")
        .doc(user?.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot((snapshot) =>
          setOrders(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          )
        );
    } else {
      setOrders([]);
    }
  }, [user]);

  let JsxContent = setTimeout((orders, user) => {
    if (orders?.length != 0) {
      return orders?.map((order, i) => <Order key={i} order={order} />);
    } else if (!user) {
      return <h1>you should signin first</h1>;
    } else {
      return <h1>you have no orders yet</h1>;
    }
  }, 1000);

  return (
    <div className="orders">
      <h1>Your Orders</h1>
      {JsxContent}
    </div>
  );
}

export default Orders;
