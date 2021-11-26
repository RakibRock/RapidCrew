import React, { useEffect, useState } from "react";

const MyOrders = () => {
  const [myOrders, setMyOrders] = useState([]);

  useEffect(() => {
    fetch("https://possessed-caverns-85625.herokuapp.com/services")
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
