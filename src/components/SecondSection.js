import React from "react"
import {Card} from "reactstrap"
import DeliveryImg from "../assets/images/DeliveryImg.png"
import Ecommerce from "../assets/images/Ecommerce.png"
import Delivery from "../assets/images/Delivery-amico.png"
import Price from "../assets/images/Price.png"
import "../components/Styles/secondSection.css"

const SecondSection=()=>{

    return(
        <div className="secondSection">

            <div className="row m-0" style={{width:"90%"}}>
                <div className="gridContainer">
                
                    <div className="d-flex justify-content-center flex-column align-items-center position-relative" style={{width:"240px",marginTop:"10px"}}>
                        <div className="blur_spot"></div>
                        <Card className="card">
                            <img src={DeliveryImg} width="100%"/>
                        </Card>
                        <p className="card_Para">
                                Dukkan is LIVE in Dubai now!
                        </p>
                    </div>
                    <div className="d-flex justify-content-center flex-column align-items-center position-relative" style={{width:"240px",marginTop:"10px"}}>
                        <div className="blur_spot"></div>
                        <Card className="card">
                            <img src={Ecommerce} width="100%"/>
                        </Card>
                        <p className="card_Para1">
                            Buy anything from phones to clothes.
                        </p>
                        
                    </div>
                    <div className="d-flex justify-content-center flex-column align-items-center position-relative" style={{width:"240px",marginTop:"10px"}}>
                        <div className="blur_spot"></div>
                        <Card className="card">
                            <img src={Delivery} width="100%"/>
                        </Card>
                        <p className="card_Para2">
                            Ultra delivery in 60 minutes!
                        </p>
                        
                    </div>
                    <div className="d-flex justify-content-center flex-column align-items-center position-relative" style={{width:"240px",marginTop:"10px"}}>
                        <div className="blur_spot"></div>
                        <Card className="card">
                            <img src={Price} width="100%"/>
                        </Card>
                        <p className="card_Para2">
                            The CHEAPEST prices
                        </p>
                    </div>
                </div>
            </div>
        </div>
        
    )
}
export default SecondSection