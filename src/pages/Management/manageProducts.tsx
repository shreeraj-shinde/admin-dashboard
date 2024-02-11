import { useState } from "react";
import AdminSidebar from "../../components/adminSidebar";

const ManageProducts = () => {
  const img =
    "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmlrZSUyMHNob2V8ZW58MHx8MHx8fDA%3D";
  const [name, setName] = useState<string>("Shoes");
  const [price, setPrice] = useState<number>(2000);
  const [stock, setStock] = useState<number>(10);
  const [photo, setPhoto] = useState<string>(img);

  const changeImageHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file: File | undefined = e.target.files?.[0];
    const reader: FileReader = new FileReader();
    if (file) {
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        if (typeof reader.result === "string") setPhoto(reader.result);
      };
    }
  };

  return (
    <div className="adminContainer">
      <AdminSidebar />
      <main className="productManagement">
        <section>
          <strong> ID - ffdfdf</strong>
          <img src={photo} alt="product image" />
          <p>{name}</p>
          {stock > 0 ? (
            <span className="green">{stock} - Available</span>
          ) : (
            <span className="red">Out of stock</span>
          )}
          <h3>${price}</h3>
        </section>
        <article>
          <form>
            <h2>Manage</h2>
            <div>
              <label> Name </label>
              <input
                type="text"
                placeholder="name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <label> Price </label>
              <input
                type="number"
                placeholder="Price"
                required
                value={price}
                onChange={(e) => setPrice(Number(e.target.value))}
              />
            </div>
            <div>
              <label> Stock </label>
              <input
                type="text"
                placeholder="Stock"
                required
                value={stock}
                onChange={(e) => setStock(Number(e.target.value))}
              />
            </div>
            <div>
              <label> Photo </label>
              <input
                type="file"
                placeholder="Photo"
                required
                onChange={changeImageHandler}
              />
            </div>
            {photo && <img src={photo} alt="Product Image" />}
            <button type="submit">Update</button>
          </form>
        </article>
      </main>
    </div>
  );
};

export default ManageProducts;
