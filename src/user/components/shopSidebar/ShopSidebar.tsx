import { useState, useEffect } from 'react'
import "./ShopSidebar.css";
import axios from 'axios';
import { BASE_URL } from '../constants/BASEURL';
import { FiPlus } from 'react-icons/fi';
import Brand from '../brands/Brand';
import Colors from '../colors/Colors';

interface Icategories{
  id: number;
  name: string;
}
const ShopSidebar = () => {
    const [category, setCategory] = useState<Icategories[]>([])

    useEffect(() => {

        const fetchCategories = async () => {

            try{
                const response = await axios.get(`${BASE_URL}/categories/`)
                console.log(response.data);

                const categoryData: Icategories[] = response.data.categories;
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
            <ul className="category-list" key={category.id}>
              <li>
                <a href="#">{category.name}</a>
              </li>
            </ul>
            ))}
          </div>

          {/* brand list */}
          <Brand/>
          {/* color list */}
          <Colors/>
        </div>
      </div>
    </>
  );
};

export default ShopSidebar;