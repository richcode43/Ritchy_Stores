import "./Category.css"
import Biscuit from "../../../assets/images/biscuits.jpg"

const category = () => {
  return (
    <>
      <div className="categorySection">
        <div className="categoryTitle">
          <h2>Featured Categories</h2>
          <div className="categoryChangeBtns">
            <div className="category-prev"></div>
             <div className="category-next"></div>
          </div>
        </div>
        <div className="category-list">
          <div className="category-detail">
            <div className="category-img">
              <img src={Biscuit} alt="" />
              <p>Bakery & Buscuits</p>
            </div>
          </div>
          <div className="category-detail">
            <div className="category-img">
              <img src={Biscuit} alt="" />
              <p>Bakery & Buscuits</p>
            </div>
          </div>
          <div className="category-detail">
            <div className="category-img">
              <img src={Biscuit} alt="" />
              <p>Bakery & Buscuits</p>
            </div>
          </div>
          <div className="category-detail">
            <div className="category-img">
              <img src={Biscuit} alt="" />
              <p>Bakery & Buscuits</p>
            </div>
          </div>
          <div className="category-detail">
            <div className="category-img">
              <img src={Biscuit} alt="" />
              <p>Bakery & Buscuits</p>
            </div>
          </div>
          <div className="category-detail">
            <div className="category-img">
              <img src={Biscuit} alt="" />
              <p>Bakery & Buscuits</p>
            </div>
          </div>
          <div className="category-detail">
            <div className="category-img">
              <img src={Biscuit} alt="" />
              <p>Bakery & Buscuits</p>
            </div>
          </div>
          <div className="category-detail">
            <div className="category-img">
              <img src={Biscuit} alt="" />
              <p>Bakery & Buscuits</p>
            </div>
          </div>
          <div className="category-detail">
            <div className="category-img">
              <img src={Biscuit} alt="" />
              <p>Bakery & Buscuits</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default category
