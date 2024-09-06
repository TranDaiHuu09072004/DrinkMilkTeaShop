"use client";
import Link from "next/link";
import "@/public/css/main-product.globals.css";
import { useState, useEffect } from "react";
export default function Cardhot() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/product")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log("Fetched data:", data);
        if (Array.isArray(data)) {
          const besthot = data.filter((product) => product.hot === "1");
          setData(besthot);
        } else {
          console.error("Data format is incorrect:", data);
        }
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  return (
    <div>
      <ul className="list-product--popular">
        {data.map((item) => (
          <li>
            <Link href="/productdetail">
              <img
                className="product-img"
                src={item.img}
                alt=""
                width={200}
                height={200}
              />
            </Link>
            <h3 className="product-name">{item.name}</h3>
            <h5 className="product-brand">{item.brand}</h5>
            <h6 className="product-price">{item.price} đ</h6>
            <button className="btn-addtoCart">Thêm giỏ hàng</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
