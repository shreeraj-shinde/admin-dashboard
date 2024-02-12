import { useState } from "react";
import AdminSidebar from "../../components/adminSidebar";
import { OrderItemType, OrderType } from "../../types";
import { Link } from "react-router-dom";

const img =
  "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmlrZSUyMHNob2V8ZW58MHx8MHx8fDA%3D";

const orderItems: OrderItemType[] = [
  {
    name: "Nike Jordans",
    photo: img,
    price: 2000,
    _id: "asffeghsd",
    quantity: 4,
  },
];

const ManageTransactions = () => {
  const [order, setOrder] = useState<OrderType>({
    name: "Magnus Carlsen",
    address: "77 Black Street",
    city: "Fankrut",
    country: "Germany",
    pinCode: 6745453,
    status: "Processing",
    discount: 1200,
    shippingCharges: 0,
    subtotal: 4000,
    tax: 200,
    total: 4000 + 200 + 0 - 1200,
    orderItems,
    state: "Belgium",
    _id: "wrwsfsg",
  });

  const {
    name,
    address,
    city,
    country,
    total,
    state,
    pinCode,
    subtotal,
    shippingCharges,
    tax,
    discount,
    status,
  } = order;

  const handleUpdate = () => {
    setOrder((prev) => ({
      ...prev,
      status: prev.status === "Processing" ? "Shipped" : "Delivered",
    }));
  };
  return (
    <div className="adminContainer">
      <AdminSidebar />
      <main className="productManagement">
        <section>
          <h2>Order Items</h2>

          {order.orderItems.map((item) => (
            <ProductCard
              key={item._id}
              name={item.name}
              quantity={item.quantity}
              photo={item.photo}
              price={item.price}
              _id={item._id}
            />
          ))}
        </section>
        <article className="shippingInfoCard">
          <h1>Order Info</h1>
          <h5>User Info</h5>
          <p>Name : {name}</p>
          <p>
            Address :
            {`${address} , ${city} , ${state} , ${country} , ${pinCode}`}
          </p>
          <h5>Amount Info</h5>
          <p>Subtotal : {subtotal}</p>
          <p>ShippingCharges : {shippingCharges}</p>
          <p>Tax : {tax}</p>
          <p>Discount : {discount}</p>
          <p>Total : {total}</p>

          <h5>Status Info</h5>
          <p>
            Status :{" "}
            <span
              className={
                status === "Delivered"
                  ? "purple"
                  : status === "Shipped"
                  ? "green"
                  : "red"
              }
            >
              {status}
            </span>
          </p>
          <button onClick={handleUpdate}>Process Order</button>
        </article>
      </main>
    </div>
  );
};

const ProductCard = ({ name, photo, price, quantity, _id }: OrderItemType) => {
  return (
    <div className="transactionProductCard">
      <img src={photo} alt={name} />
      <Link to={`/product/${_id}`}>{name}</Link>
      <span>
        ${price} X {quantity} = ${quantity * price}
      </span>
    </div>
  );
};

export default ManageTransactions;
