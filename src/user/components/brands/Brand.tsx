import axios from 'axios';
import { useEffect, useState } from 'react'
import { BASE_URL } from '../constants/BASEURL';
import { FiMinus, FiPlus } from 'react-icons/fi';
import './Brand.css'

interface IBrand{
    id:number;
    name: string;
}
const Brand = () => {

    const [brand, setBrand] = useState<IBrand[]>([])
    const [brandMenuOpen, setBrandMenuOpen] = useState(false);

    useEffect(() => {
        const fetchBrands = async () => {
            try {
                const response = await axios.get(`${BASE_URL}/brands/`)
                console.log(response.data);

                const brandData: IBrand[] = response.data.brands;
                setBrand(brandData);
            }
            catch(error) {
                console.log(error);
            }
        }
        fetchBrands();
    },[])
  return (
    <>
        <div className="brand-info">
            <div className="brand-header" onClick={() =>setBrandMenuOpen(!brandMenuOpen)}>
              <h3 className='font-extrabold'>BRANDS</h3>
              <div>
                {
                  brandMenuOpen ? (
                    <FiMinus />
                  ):(
                    <FiPlus />
                  )
                }
                
              </div>
            </div>
            {brand.map((brand) =>(
            <ul className={`brand-list ${!brandMenuOpen && "hidden"}`} key={brand.id} >
              <li>
                <a href="#">{brand.name}</a>
              </li>
            </ul>
            ))}
        </div>
    </>
  )
}

export default Brand
