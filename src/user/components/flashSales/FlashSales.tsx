import "./FlashSales.css";
import { Link } from "react-router-dom";
import Button from "../button/Button";
import * as Icon from "react-bootstrap-icons";
const FlashSales = () => {
  return (
    <>
      <div className="flashSales-section">
        <div className="flashTitle">
          <h5>Hot Deal's</h5>
        </div>
        <div className="flash-inner-details">
          <div className="flash-inner">
            <div className="flash-left">
              <span className="flash-caption">Flash Sales</span>
              <div className="flash-date">
                <div className="day">
                  <span className="name">Days</span>
                  <span className="number">03</span>
                </div>
                <span className="colon">:</span>
                <div className="hours">
                  <span className="name">Hours</span>
                  <span className="number">23</span>
                </div>
                <span className="colon">:</span>
                <div className="minutes">
                  <span className="name">Minutes</span>
                  <span className="number">19</span>
                </div>
                <span className="colon">:</span>
                <div className="seconds">
                  <span className="name">Seconds</span>
                  <span className="number">56</span>
                </div>
              </div>
            </div>
            <div className="flash-right">
              <div className="leftArrow">
                <Icon.ArrowLeft/>
              </div>
              <div className="rightArrow">
                <Icon.ArrowRight/>
              </div>
            </div>
          </div>
          <div className="flashItems">
            <div className="flash-item">
              <div className="flash-img">
                <span className="discount">-40%</span>
                <Button
                  label=""
                  Icon={() => <Icon.Heart />}
                  className="add-to-wish"
                />
                <Button
                  label=""
                  Icon={() => <Icon.Eye />}
                  className="quick-view"
                />
                <Button
                  label="Add To Cart"
                  Icon={() => <Icon.CartPlus />}
                  className="addToCart "
                />
              </div>
              <div className="flash-details">
                <h5 className="product-title">HAVIT HV-G92 Gamepad</h5>
                <div className="product-prices">
                  <span className="newPrice">$120</span>
                  <span className="oldPrice">$160</span>
                </div>
                <div className="star-rating">
                  <Icon.StarFill/>
                  <Icon.StarFill/>
                  <Icon.StarFill/>
                  <Icon.StarHalf/>
                  <Icon.Star/>
                </div>
              </div>
            </div>
            <div className="flash-item">
              <div className="flash-img">
                <span className="discount">-40%</span>
                <Button
                  label=""
                  Icon={() => <Icon.Heart />}
                  className="add-to-wish"
                />
                <Button
                  label=""
                  Icon={() => <Icon.Eye />}
                  className="quick-view"
                />
                <Button
                  label="Add To Cart"
                  Icon={() => <Icon.CartPlus />}
                  className="addToCart "
                />
              </div>
              <div className="flash-details">
                <h5 className="product-title">HAVIT HV-G92 Gamepad</h5>
                <div className="product-prices">
                  <span className="newPrice">$120</span>
                  <span className="oldPrice">$160</span>
                </div>
                <div className="star-rating">
                  <Icon.StarFill/>
                  <Icon.StarFill/>
                  <Icon.StarFill/>
                  <Icon.StarHalf/>
                  <Icon.Star/>
                </div>
              </div>
            </div>
            <div className="flash-item">
              <div className="flash-img">
                <span className="discount">-40%</span>
                <Button
                  label=""
                  Icon={() => <Icon.Heart />}
                  className="add-to-wish"
                />
                <Button
                  label=""
                  Icon={() => <Icon.Eye />}
                  className="quick-view"
                />
                <Button
                  label="Add To Cart"
                  Icon={() => <Icon.CartPlus />}
                  className="addToCart "
                />
              </div>
              <div className="flash-details">
                <h5 className="product-title">HAVIT HV-G92 Gamepad</h5>
                <div className="product-prices">
                  <span className="newPrice">$120</span>
                  <span className="oldPrice">$160</span>
                </div>
                <div className="star-rating">
                  <Icon.StarFill/>
                  <Icon.StarFill/>
                  <Icon.StarFill/>
                  <Icon.StarHalf/>
                  <Icon.Star/>
                </div>
              </div>
            </div>
            <div className="flash-item">
              <div className="flash-img">
                <span className="discount">-40%</span>
                <Button
                  label=""
                  Icon={() => <Icon.Heart />}
                  className="add-to-wish"
                />
                <Button
                  label=""
                  Icon={() => <Icon.Eye />}
                  className="quick-view"
                />
                <Button
                  label="Add To Cart"
                  Icon={() => <Icon.CartPlus />}
                  className="addToCart "
                />
              </div>
              <div className="flash-details">
                <h5 className="product-title">HAVIT HV-G92 Gamepad</h5>
                <div className="product-prices">
                  <span className="newPrice">$120</span>
                  <span className="oldPrice">$160</span>
                </div>
                <div className="star-rating">
                  <Icon.StarFill/>
                  <Icon.StarFill/>
                  <Icon.StarFill/>
                  <Icon.StarHalf/>
                  <Icon.Star/>
                </div>
              </div>
            </div>
            <div className="flash-item">
              <div className="flash-img">
                <span className="discount">-40%</span>
                <Button
                  label=""
                  Icon={() => <Icon.Heart />}
                  className="add-to-wish"
                />
                <Button
                  label=""
                  Icon={() => <Icon.Eye />}
                  className="quick-view"
                />
                <Button
                  label="Add To Cart"
                  Icon={() => <Icon.CartPlus />}
                  className="addToCart "
                />
              </div>
              <div className="flash-details">
                <h5 className="product-title">HAVIT HV-G92 Gamepad</h5>
                <div className="product-prices">
                  <span className="newPrice">$120</span>
                  <span className="oldPrice">$160</span>
                </div>
                <div className="star-rating">
                  <Icon.StarFill/>
                  <Icon.StarFill/>
                  <Icon.StarFill/>
                  <Icon.StarHalf/>
                  <Icon.Star/>
                </div>
              </div>
            </div>
            <div className="flash-item">
              <div className="flash-img">
                <span className="discount">-40%</span>
                <Button
                  label=""
                  Icon={() => <Icon.Heart />}
                  className="add-to-wish"
                />
                <Button
                  label=""
                  Icon={() => <Icon.Eye />}
                  className="quick-view"
                />
                <Button
                  label="Add To Cart"
                  Icon={() => <Icon.CartPlus />}
                  className="addToCart "
                />
              </div>
              <div className="flash-details">
                <h5 className="product-title">HAVIT HV-G92 Gamepad</h5>
                <div className="product-prices">
                  <span className="newPrice">$120</span>
                  <span className="oldPrice">$160</span>
                </div>
                <div className="star-rating">
                  <Icon.StarFill/>
                  <Icon.StarFill/>
                  <Icon.StarFill/>
                  <Icon.StarHalf/>
                  <Icon.Star/>
                </div>
              </div>
            </div>
          </div>
          <Link to="/shop" className="moreProducts">
            View All Products
          </Link>
        </div>
      </div>
    </>
  );
};

export default FlashSales;
