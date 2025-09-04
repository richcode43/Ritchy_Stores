import { useEffect, useState } from "react";
import { BASE_URL } from "../constants/BASEURL";
import axios from "axios";
import { FiMinus, FiPlus } from "react-icons/fi";
import './Colors.css'

interface IColors{
    id: number;
    name: string;
}

const Colors = () => {

    const [color, setColor] = useState<IColors[]>([]);
    const [openColorMenu, setOpenColorMenu] = useState(false);
    useEffect(() => {

        const fetchColors = async () => {
            try{
                const response = await axios.get(`${BASE_URL}/colors`);
                console.log(response.data);

                const colorData: IColors[] = response.data.colors;
                setColor(colorData);
            }
            catch(error){
                console.log('Error fetching colors');
            }
        }
        fetchColors();
    },[])
  return (
    <>
        <div className="color-info">
                <div className="color-header" onClick={() => setOpenColorMenu(!openColorMenu)}>
                    <h3 className='font-extrabold'>COLORS</h3>
                <div>
                    {
                        openColorMenu? (
                            <FiMinus />
                        ):(
                            <FiPlus />
                        )
                    }
                </div>
                </div>
                {color.map((color) =>(
                <ul className={`color-list ${!openColorMenu && "hidden"}`} key={color.id}>
                <li>
                    <a href="#">{color.name}</a>
                </li>
            </ul>
            ))}
        </div>
    </>
  )
}

export default Colors
