import Button from "../../components/button/Button"
import * as Icon from 'react-bootstrap-icons';
import './DeliveryAddress.css'
// import Modal from "../../components/modal/Modal";
import { useState } from "react";
import UserSideBar from "../../components/userSidebar/UserSidebar";
import Footer from "../../components/footer/Footer";

const DeliveryAddress = () => {
    const [modal, setModal] = useState(false);

    const toggleModal = () =>{
        setModal(!modal);
    }
  return (
    <>
        <div className="addressPage">
            <UserSideBar/>
            <div className="addressDetails">
                <div className="address-inner"></div>
                <div className="addressHeader">
                    <h2>Delivery Address</h2>
                    <Button label="Add a new address"
                    borderRadius="5px"
                    onClick={toggleModal}
                    style={{
                        border:"1px solid #3874ff",
                        width:"200px",
                        padding:"10px",
                        backgroundColor:"white",
                        color:"#3874ff",
                    }}/>
                </div>
                <div className="address-card-holder">
                    <div className="address-cards">
                        <p className="username">
                            <span><Icon.Person/></span>
                            <span>John Doe</span>
                        </p>
                        <p className="address">
                            <span><Icon.GeoAlt/></span>
                            <span>4450 North Avenue Oakland, Nebraska, United States</span>
                        </p>
                        <p className="phonenumber">
                            <span><Icon.TelephoneInbound/></span>
                            <span>08189448372</span>
                        </p>
                        <div className="addressActions">
                            <Button label="Edit"
                            borderRadius="5px"
                            style={{
                                border:"1px solid #3874ff",
                                width:"100px",
                                padding:"10px",
                                backgroundColor:"#3874ff",
                                color:"white",
                            }}/>
                            <Button label="Delete"
                            borderRadius="5px"
                            style={{
                                border:"1px solid #3874ff",
                                width:"100px",
                                padding:"10px",
                                backgroundColor:"white",
                                color:"#3874ff",
                            }}/>
                        </div>
                    </div>
                    <div className="address-cards">
                        <p className="username">
                            <span><Icon.Person/></span>
                            <span>John Doe</span>
                        </p>
                        <p className="address">
                            <span><Icon.GeoAlt/></span>
                            <span>4450 North Avenue Oakland, Nebraska, United States</span>
                        </p>
                        <p className="phonenumber">
                            <span><Icon.TelephoneInbound/></span>
                            <span>08189448372</span>
                        </p>
                        <div className="addressActions">
                            <Button label="Edit"
                            borderRadius="5px"
                            style={{
                                border:"1px solid #3874ff",
                                width:"100px",
                                padding:"10px",
                                backgroundColor:"#3874ff",
                                color:"white",
                            }}/>
                            <Button label="Delete"
                            borderRadius="5px"
                            style={{
                                border:"1px solid #3874ff",
                                width:"100px",
                                padding:"10px",
                                backgroundColor:"white",
                                color:"#3874ff",
                            }}/>
                        </div>
                    </div>
                    <div className="address-cards">
                    <p className="username">
                            <span><Icon.Person/></span>
                            <span>John Doe</span>
                        </p>
                        <p className="address">
                            <span><Icon.GeoAlt/></span>
                            <span>4450 North Avenue Oakland, Nebraska, United States</span>
                        </p>
                        <p className="phonenumber">
                            <span><Icon.TelephoneInbound/></span>
                            <span>08189448372</span>
                        </p>
                        <div className="addressActions">
                            <Button label="Edit"
                            borderRadius="5px"
                            style={{
                                border:"1px solid #3874ff",
                                width:"100px",
                                padding:"10px",
                                backgroundColor:"#3874ff",
                                color:"white",
                            }}/>
                            <Button label="Delete"
                            borderRadius="5px"
                            style={{
                                border:"1px solid #3874ff",
                                width:"100px",
                                padding:"10px",
                                backgroundColor:"white",
                                color:"#3874ff",
                            }}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>  
       {/* {modal && <Modal />} */}
        <Footer/>
    </>
  )
}

export default DeliveryAddress