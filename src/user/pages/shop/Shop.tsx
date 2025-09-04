import "./Shop.css";
import { IoMdHeartEmpty } from "react-icons/io";
import Button from "../../components/button/Button";
import { useEffect, useState } from "react";
import axios from "axios";
import ShopSidebar from "../../components/shopSidebar/ShopSidebar";
import { Link } from "react-router-dom";
import * as Icon from "react-bootstrap-icons";
import { BASE_URL } from "../../components/constants/BASEURL";
import Footer from "../../components/footer/Footer";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import { resolveResponse } from "../../../utils";
import sneakers from "../../../assets/images/sneakers.png"

// interface Iproducts {
//   id: number;
//   name: string;
//   title: string;
//   price: number;
//   image: string;
// }

interface ApiResponse {
  products: {
    id: number;
    name: string;
    title: string;
    price: number;
    image: string;
  }[];
}

const Shop = () => {
  const [products, setProducts] = useState<ApiResponse | null>(null);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/products`);
        const result = resolveResponse<ApiResponse>(response.data);
        setProducts(result);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <>
      <div className="shopPage">
        <Breadcrumb/>
        <div className="shopPage-inner">
          <ShopSidebar />
          <div className="main-content">
            <div className="mainContent-inner">
              <div className="shop-header">
                <div className="productResults">
                  <p>
                    Showing <span>{products?.products.length} </span> products
                  </p>
                </div>
                <div className="sort-details">
                  <div className="sort-tab">
                    <Link to="">
                      <Icon.ListUl className="shopIcon" />
                    </Link>
                    <Link to="">
                      <Icon.Grid className="shopIcon" />
                    </Link>
                    <Link to="">
                      <Icon.Grid3x3Gap className="shopIcon" />
                    </Link>
                  </div>
                  <div className="displayNum">
                    <label htmlFor="sortInfo">Sort by:</label>
                    <select name="" id="sortInfo" className="shopSelect">
                      <option value="0">Default</option>
                      <option value="1">Price - High to Low</option>
                      <option value="2">Price - Low to High</option>
                      <option value="3">A - Z</option>
                      <option value="4">Z - A</option>
                    </select>
                  </div>
                  <div className="sortType">
                    <label htmlFor="sortInfo">Sort by:</label>
                    <select name="" id="sortInfo" className="shopSelect">
                      <option value="0">Default</option>
                      <option value="1">Price - High to Low</option>
                      <option value="2">Price - Low to High</option>
                      <option value="3">A - Z</option>
                      <option value="4">Z - A</option>
                    </select>
                  </div>
                </div>
              </div>
              {/* product grid */}
              <div className="products">
                {/* product */}
                {products?.products.map((product) => (
                  <div className="card product-card" key={product.id}>
                    <div className="card-image">
                      <button className="btn-wishlist">
                        <IoMdHeartEmpty />
                      </button>
                      <Link to={`/product/${product.id}`}>
                        <img
                          // src={product.image}
                          src={sneakers}
                          className="productImg"
                          alt="product"
                        />
                      </Link>
                    </div>
                    <div className="card-body">
                      <Link to={`/product/${product.id}`} className="product-meta">
                        {product.name}
                      </Link>
                      <h3 className="product-title">
                        <Link to={`/product/${product.id}`}>
                          {product.title}
                        </Link>
                      </h3>
                      <div className="extraInfo">
                        <div className="ProductPrice">
                          <div className="new-price">
                            <span>$</span>
                            {product.price}
                          </div>
                          <div className="old-price">
                            <span>$</span>100
                          </div>
                        </div>
                        <div>
                          <Button
                            label={"add"}
                            Icon={() => <Icon.Plus />}
                            backgroundColor={"blue"}
                            color={"white"}
                            borderRadius={"5px"}
                            fontSize={"15px"}
                            style={{
                              border: "none",
                              padding: "7px",
                              display: "flex",
                              alignItems: "center"
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Shop;