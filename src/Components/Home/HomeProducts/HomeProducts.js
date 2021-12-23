import React, { useState } from "react";
import "./HomeProducts.css";
import tshirt1 from "../../../Assets/Products/t-shirt.jpg";
import fullClothes1 from "../../../Assets/Products/full-clothes1.jpg";
import fullClothes2 from "../../../Assets/Products/full-clothes2.jpg";
import CartIcon from "@material-ui/icons/AddShoppingCart";

function HomeProducts() {
  var productsApi = [
    {
      image: "t-shirt.jpg",
      title: "Title of product One",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, repudiandae consequuntur voluptatum laboru",
    },
    {
      image: "full-clothes1.jpg",
      title: "Title of product Two",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, repudiandae consequuntur voluptatum laboru",
    },
    {
      image: "full-clothes2.jpg",
      title: "Title of product Three",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, repudiandae consequuntur voluptatum laboru",
    },
    {
      image: "t-shirt.jpg",
      title: "Title of product One",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, repudiandae consequuntur voluptatum laboru",
    },
    {
      image: "full-clothes1.jpg",
      title: "Title of product Two",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, repudiandae consequuntur voluptatum laboru",
    },
    {
      image: "full-clothes2.jpg",
      title: "Title of product Three",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, repudiandae consequuntur voluptatum laboru",
    },
  ];
  const [products, setProducts] = useState([]);
  const [brands, setBrands] = useState([]);
  const [brand, setBrand] = useState("");

  useEffect(() => {
    setProducts(productsApi);
  });

  return (
    <div className="homeProduct">
      <div className="homeProduct__items">
        <a href="#!" className="active" id="all">
          All
        </a>
        <a href="#!" id="item1">
          Item 1
        </a>
        <a href="#!" id="item2">
          Item 2
        </a>
        <a href="#!" id="item3">
          Item 3
        </a>
        <a href="#!" id="item4">
          Item 4
        </a>
      </div>
      <div className="homeProduct__products">
        <div className="homeProduct_product item1">
          <a href="#!">
            <img src={tshirt1} alt="" className="homeProduct__img" />
            <div className="homeProduct_productContenet">
              <h2>Title of product One</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                mollitia, molestiae quas vel sint commodi repudiandae
                consequuntur voluptatum laborum numquam blanditiis harum
                quisquam eius sed odit fugiat iusto fuga praesentium optio,
                repudiandae consequuntur voluptatum laboru
              </p>
              <span className="homeProduct__cart">
                <CartIcon />
              </span>
            </div>
          </a>
        </div>
        <div className="homeProduct_product item1">
          <a href="#!">
            <img src={fullClothes1} alt="" className="homeProduct__img" />
            <div className="homeProduct_productContenet">
              <h2>Title of product One</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                mollitia, molestiae quas vel sint commodi repudiandae
                consequuntur voluptatum laborum numquam blanditiis harum
                quisquam eius sed odit fugiat iusto fuga praesentium optio,
                repudiandae consequuntur voluptatum laboru
              </p>
              <span className="homeProduct__cart">
                <CartIcon />
              </span>
            </div>
          </a>
        </div>
        <div className="homeProduct_product item2">
          <a href="#!">
            <img src={fullClothes2} alt="" className="homeProduct__img" />
            <div className="homeProduct_productContenet">
              <h2>Title of product One</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                mollitia, molestiae quas vel sint commodi repudiandae
                consequuntur voluptatum laborum numquam blanditiis harum
                quisquam eius sed odit fugiat iusto fuga praesentium optio,
                repudiandae consequuntur voluptatum laboru
              </p>
              <span className="homeProduct__cart">
                <CartIcon />
              </span>
            </div>
          </a>
        </div>
        <div className="homeProduct_product item3">
          <a href="#!">
            <img src={tshirt1} alt="" className="homeProduct__img" />
            <div className="homeProduct_productContenet">
              <h2>Title of product One</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                mollitia, molestiae quas vel sint commodi repudiandae
                consequuntur voluptatum laborum numquam blanditiis harum
                quisquam eius sed odit fugiat iusto fuga praesentium optio,
                repudiandae consequuntur voluptatum laboru
              </p>
              <span className="homeProduct__cart">
                <CartIcon />
              </span>
            </div>
          </a>
        </div>
        <div className="homeProduct_product item3">
          <a href="#!">
            <img src={fullClothes1} alt="" className="homeProduct__img" />
            <div className="homeProduct_productContenet">
              <h2>Title of product One</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                mollitia, molestiae quas vel sint commodi repudiandae
                consequuntur voluptatum laborum numquam blanditiis harum
                quisquam eius sed odit fugiat iusto fuga praesentium optio,
                repudiandae consequuntur voluptatum laboru
              </p>
              <span className="homeProduct__cart">
                <CartIcon />
              </span>
            </div>
          </a>
        </div>
        <div className="homeProduct_product item2">
          <a href="#!">
            <img src={fullClothes2} alt="" className="homeProduct__img" />
            <div className="homeProduct_productContenet">
              <h2>Title of product One</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                mollitia, molestiae quas vel sint commodi repudiandae
                consequuntur voluptatum laborum numquam blanditiis harum
                quisquam eius sed odit fugiat iusto fuga praesentium optio,
                repudiandae consequuntur voluptatum laboru
              </p>
              <span className="homeProduct__cart">
                <CartIcon />
              </span>
            </div>
          </a>
        </div>
        <div className="homeProduct_product item1">
          <a href="#!">
            <img src={tshirt1} alt="" className="homeProduct__img" />
            <div className="homeProduct_productContenet">
              <h2>Title of product One</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                mollitia, molestiae quas vel sint commodi repudiandae
                consequuntur voluptatum laborum numquam blanditiis harum
                quisquam eius sed odit fugiat iusto fuga praesentium optio,
                repudiandae consequuntur voluptatum laboru
              </p>
              <span className="homeProduct__cart">
                <CartIcon />
              </span>
            </div>
          </a>
        </div>
        <div className="homeProduct_product item2">
          <a href="#!">
            <img src={fullClothes1} alt="" className="homeProduct__img" />
            <div className="homeProduct_productContenet">
              <h2>Title of product One</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                mollitia, molestiae quas vel sint commodi repudiandae
                consequuntur voluptatum laborum numquam blanditiis harum
                quisquam eius sed odit fugiat iusto fuga praesentium optio,
                repudiandae consequuntur voluptatum laboru
              </p>
              <span className="homeProduct__cart">
                <CartIcon />
              </span>
            </div>
          </a>
        </div>
        <div className="homeProduct_product item4">
          <a href="#!">
            <img src={fullClothes2} alt="" className="homeProduct__img" />
            <div className="homeProduct_productContenet">
              <h2>Title of product One</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                mollitia, molestiae quas vel sint commodi repudiandae
                consequuntur voluptatum laborum numquam blanditiis harum
                quisquam eius sed odit fugiat iusto fuga praesentium optio,
                repudiandae consequuntur voluptatum laboru
              </p>
              <span className="homeProduct__cart">
                <CartIcon />
              </span>
            </div>
          </a>
        </div>
      </div>

      <div className="homeProduct__pagination">
        <a href="#!" className="wordPagination">
          Previous
        </a>
        <a href="#!" className="numberPagination active">
          1
        </a>
        <a href="#!" className="numberPagination">
          2
        </a>
        <a href="#!" className="numberPagination">
          3
        </a>
        <a href="#!" className="numberPagination">
          4
        </a>
        <a href="#!" className="wordPagination">
          Next
        </a>
      </div>
    </div>
  );
}

export default HomeProducts;
