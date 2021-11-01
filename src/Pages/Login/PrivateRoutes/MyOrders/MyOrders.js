import React, { useEffect, useState } from "react";

const MyOrders = () => {
  const [myOrders, setMyOrders] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setMyOrders(data));
  }, []);
  return (
    <div>
      <h1>My Orders</h1>
    </div>
  );
};

export default MyOrders;
