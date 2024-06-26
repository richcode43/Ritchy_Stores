import { useState, useEffect } from 'react'
import "./ShopSidebar.css";
import axios from 'axios';
import { BASE_URL } from '../constants/BASEURL';
import { FiMinus, FiPlus } from 'react-icons/fi';


const ShopSidebar = () => {
    const [category, setCategory] = useState<string[]>([])

    useEffect(() => {

        const fetchCategories = async () => {

            try{
                const response = await axios.get(`${BASE_URL}/products/categories`)
                console.log(response.data);

                const categoryData: string[] = response.data;
                setCategory(categoryData);
            }
            catch(error) {
                console.log(error);
            }

        }
        fetchCategories();
    },[]);
  return (
    <>
      <div className="shop-sidebar">
        <div className="shop-sidebar-inner">

          {/* category list */}
          <div className="category-info">
            <div className="category-header">
              <h3>CATEGORIES</h3>
              <div>
              {/* <FiMinus /> */}
              <FiPlus />
              </div>
            </div>
            <div className="sidebar-search">
              <input type="search" placeholder="Search categories" />
            </div>

            {/* category loop */}
            {category.map((category) =>(
            <ul className="category-list" key={category}>
              <li>
                <a href="#">{category}</a>
              </li>
            </ul>
            ))}
          </div>

          {/* brand list */}
          <div className="brand-info">
            <div className="brand-header">
              <h3>BRANDS</h3>
              <div>
                <FiMinus />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopSidebar;