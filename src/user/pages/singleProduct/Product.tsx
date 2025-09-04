import { useEffect, useState } from "react";
import "./Product.css";
import sneakers from "../../../assets/images/sneakers.png"
import sneakers2 from "../../../assets/images/sneakers2.png"
import sneakers3 from "../../../assets/images/sneakers3.png"
import sneakers4 from "../../../assets/images/sneakers4.png"
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../components/constants/BASEURL";
import BeatLoader from "react-spinners/BeatLoader";
import * as Icon from "react-bootstrap-icons";
import Button from "../../components/button/Button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import { resolveResponse } from "../../../utils";

interface ApiResponse {
  productFound: {
    id: number;
    title: string;
    price: number;
    category: string;
    description: string;
    image: string;
    rating: number;
    name: string;
    reviews: {
      user: string;
      product: string;
      message: string;
      rating: number;
    }[];
  };
}

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<ApiResponse | null>(null);
  const [activeImg, setActiveImg] = useState(sneakers);
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/products/${id}`);
        const result = resolveResponse<ApiResponse>(response.data);
        setProduct(result);
      } catch (error) {
        console.error("Error fetching post:");
      }
    };
    fetchProduct();
  }, [id]);
  return (
    <>
      {product ? (
        <div className="singleProduct">
          <div className="breadcrumb">
            <ul className="breadcrumb-list">
              <li className="breadcrumb-item">
                <Link to="/">Home</Link>
              </li>
              <li className="breadcrumb-item">
                <Link to="/shop">Products</Link>
              </li>
              <li className="breadcrumb-item active">Single Product</li>
            </ul>
          </div>
          <section>
            <div className="product-inner">
              <div className="productImg-main">
                <div className="ProductImg">
                  <img
                    // src={product.productFound.image}
                    src={activeImg}
                    alt="product"
                    style={{ objectFit: "cover", height: "100%" , width: "100%" }}
                  />
                </div>
                <div className="product-carousel">
                  <div className="single-image">
                    <img src={sneakers2} alt="" style={{height:"100%", width:"100%"}} onClick={()=> setActiveImg(sneakers2)}/>
                  </div>
                  <div className="single-image">
                    <img src={sneakers3} alt="" style={{height:"100%", width:"100%"}} onClick={()=> setActiveImg(sneakers3)}/>
                  </div>
                  <div className="single-image">
                    <img src={sneakers4} alt="" style={{height:"100%", width:"100%"}} onClick={()=> setActiveImg(sneakers4)}/>
                  </div>
                  <div className="single-image">
                    <img src={sneakers} alt="" style={{height:"100%", width:"100%"}} onClick={()=> setActiveImg(sneakers)}/>
                  </div>
                </div>
              </div>

              <div className="product-info">
                <h5 className="cat">{product.productFound.category}</h5>
                <h1>{product.productFound.name.toUpperCase()}</h1>
                <div className="product-rating">
                  <div style={{ display: "flex", gap: "2px" }}>
                    <Icon.StarFill className="rating" />
                    <Icon.StarFill className="rating" />
                    <Icon.StarFill className="rating" />
                    <Icon.StarHalf className="rating" />
                    <Icon.Star className="rating" />
                  </div>
                  <Link to="">(50 reviews)</Link>
                </div>

                <div className="product-price">
                  <span>${product.productFound.price}</span>
                  {/* <span
                    style={{ textDecoration: "line-Through", color: "#989fa5" }}
                  >
                    $20
                  </span> */}
                </div>
                <div className="product-details">
                  <p>{product.productFound.description}</p>
                </div>

                {/* features */}
                <div className="product-features">
                  {
                    product.productFound.reviews.map(review => (
                      <>
                        {review.message}
                        <br />
                      </>
                    ))
                  }
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <h5 style={{ marginBottom: "10px" }}>Features</h5>
                    <Button
                      label=""
                      Icon={() => <Icon.Plus />}
                      backgroundColor="transparent"
                      border="none"
                      fontSize="20px"
                    />
                  </div>
                  <ul
                    style={{
                      borderBottom: "1px solid #e5e5e5",
                      paddingBottom: "20px",
                    }}
                  >
                    <li>- 100% Cotton based</li>
                    <li>- Ultra soft fabric</li>
                    <li>- Tailored fit sizes</li>
                  </ul>
                </div>

                {/* sizes */}
                <div className="product-sizes">
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <h5 style={{ marginBottom: "10px" }}>Size</h5>
                    <Button
                      label=""
                      Icon={() => <Icon.Plus />}
                      backgroundColor="transparent"
                      border="none"
                      fontSize="20px"
                    />
                  </div>
                  <div className="sizes-inner">
                    <div className="size-container">
                      <input type="radio" name="size" id="small" />
                      <div className="radio-title">
                        <label htmlFor="small">S</label>
                      </div>
                    </div>
                    <div className="size-container">
                      <input type="radio" name="size" id="medium" />
                      <div className="radio-title">
                        <label htmlFor="medium">M</label>
                      </div>
                    </div>
                    <div className="size-container">
                      <input type="radio" name="size" id="large" />
                      <div className="radio-title">
                        <label htmlFor="large">L</label>
                      </div>
                    </div>
                    <div className="size-container">
                      <input type="radio" name="size" id="extra-large" />
                      <div className="radio-title">
                        <label htmlFor="extra-large">XL</label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="product-quantity">
                  <Button
                    label=""
                    Icon={() => <Icon.Dash />}
                    cursor="pointer"
                    className="button-minus"
                  />
                  <input
                    type="text"
                    readOnly
                    value="1"
                    className="quantity-field"
                  />
                  <Button
                    label=""
                    Icon={() => <Icon.Plus />}
                    cursor="pointer"
                    className="button-plus"
                  />
                </div>
                <div className="product-actionButtons">
                  <Button
                    Icon={() => <Icon.Bag />}
                    label="Add to Cart"
                    style={{
                      display: "flex",
                      gap: "10px",
                      padding: "14px 50px",
                      border: "none",
                    }}
                    borderRadius="7px"
                    backgroundColor="blue"
                    color="white"
                    fontSize="15px"
                    cursor="pointer"
                  />
                  <Button
                    label=""
                    Icon={() => <Icon.Heart />}
                    className="addToWishlist"
                    backgroundColor="#ecf0ef"
                    borderRadius="7px"
                    cursor="pointer"
                    style={{
                      padding: "10px 15px",
                      display: "flex",
                      alignItems: "center",
                      border: "none",
                    }}
                  />

                  <Button
                    label="Buy Now"
                    color="dark"
                    fontSize="15px"
                    borderRadius="7px"
                    cursor="pointer"
                    className="buyNow"
                    style={{ padding: "10px 20px", border: "none" }}
                  />
                </div>
              </div>
            </div>
          </section>
          
          {/* product informations */}
          
          <section>
          <Tabs defaultValue="account" className="w-full">
            <TabsList className="">
              <TabsTrigger value="account" className="rounded-none border-b-[3px]">Account</TabsTrigger>
              <TabsTrigger value="password">Password</TabsTrigger>
            </TabsList>
            <TabsContent value="account">Make changes to your account here.</TabsContent>
            <TabsContent value="password">Change your password here.</TabsContent>
          </Tabs>

          </section>
          <section>


<div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
    <ul className="flex flex-wrap -mb-px">
        <li className="me-2">
            <a href="#" className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">Profile</a>
        </li>
        <li className="me-2">
            <a href="#" className="inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500" aria-current="page">Dashboard</a>
        </li>
        <li className="me-2">
            <a href="#" className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">Settings</a>
        </li>
        <li className="me-2">
            <a href="#" className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">Contacts</a>
        </li>
        <li>
            <a className="inline-block p-4 text-gray-400 rounded-t-lg cursor-not-allowed dark:text-gray-500">Disabled</a>
        </li>
    </ul>
</div>

          </section>
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",

            height: "100vh",
            width: "100vw",
            // position: "absolute",
          }}
        >
          <BeatLoader
            color="rgba(0, 0, 0, 0.5)"
            loading
            size={20}
            speedMultiplier={1}
          />
        </div>
      )}
    </>
  );
};

export default Product;
