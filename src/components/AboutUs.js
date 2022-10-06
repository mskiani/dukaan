import React from "react"
import "../components/Styles/aboutUs.css"
import Group28 from "../assets/images/Frame 95.png"
import Group27 from "../assets/images/Frame 96.png"
import Group26 from "../assets/images/Frame 97.png"
import Group25 from "../assets/images/Frame 98.png"
import Group18169 from "../assets/images/Group 18169.png"
import { Button, openWindow } from "./Snippets/snippets"

import { useNavigate } from "react-router-dom";
const AboutUs=()=>{

    let navigate = useNavigate();
    return(
        <div className="aboutUs">
            <div className="row m-0" style={{width:"90%",overflow:"hidden"}}>

                <div className="col-12 d-xl-block d-lg-block d-md-flex flex-md-column justify-content-center align-items-center aboutSectionHeading">
                    <p className="firstPara m-0">
                        About Us
                    </p>
                    <div className="underline"></div>
                </div>
                <div className="col-12">

                    <div className="row m-0">

                        <div className="d-xl-none d-lg-none col-12">
                        {/* className="pointsImg" */}
                            <div className="position-relative">
                                {/* <div className="blur_Spot1"></div> */}
                                <img src={Group18169} width="100%"/>
                            </div>

                        </div>
                        <div className="col-12 p-0 mt-5">
                            <p className="secondPara">
                            We’re two 18 year olds changing the face of 
                            e-commerce in the UAE. We realised there’s are many problems in the current system: 
                            </p>
                        </div>

                        <div className="col-12 p-0 mt-3">
                            <div className="row m-0">

                                <div className="col-xl-7 p-0">

                                    <div className="row m-0">

                                        <div className="col-12 p-0">
                                            <div className="row m-0 singleFeature">

                                                <div className="col-1 p-0 " style={{width:"70px"}}>
                                                    <img src={Group28} className="imgBox"  style={{objectFit:"cover"}} />
                                                </div>
                                                <div className="col pt-4" style ={{}}>
                                                    <p className="firstPointPara">
                                                        Prices are too High   
                                                    </p>
                                                    <p className="pointsSecondPara">
                                                        We have a 100% price-match guarantee for products that aren’t on sale.
                                                    </p>
                                            </div>

                                            </div>
                                        </div>
                                        <div className="col-12 p-0">
                                            <div className="row m-0 singleFeature">

                                                <div className="col-1 p-0 " style={{width:"70px"}}>
                                                    <img src={Group27}  className="imgBox" style={{objectFit:"cover"}}/>
                                                </div>
                                                <div className="col pt-4">
                                                    <p className="firstPointPara">
                                                        Unable to Purchase from Nearby shops  
                                                    </p>
                                               <br className="spacing"/>
                                                    <p className="pointsSecondPara">
                                                        Have a favorite shop you go to? Get anything from them in 60 minutes.
                                                    </p>
                                            </div>

                                            </div>
                                        </div>

                                        <div className="col-12 p-0">
                                            <div className="row m-0 singleFeature">

                                                <div className="col-1 p-0 imgBox" style={{width:"70px"}} >
                                                    <img src={Group26} className="imgBox" style={{objectFit:"cover"}}/>
                                                </div>
                                                <div className="col pt-4">
                                                    <p className="firstPointPara">
                                                        Slow Delivery
                                                    </p>
                                                    <p className="pointsSecondPara">
                                                        Our standard delivery is within an hour. Gone are the days of 24-48 hr delivery.
                                                    </p>
                                            </div>

                                            </div>
                                        </div>

                                        <div className="col-12 p-0">
                                            <div className="row m-0 singleFeature">

                                                <div className="col-1 p-0 imgBox" style={{width:"70px"}} >
                                                    <img src={Group25} className="imgBox" style={{objectFit:"cover"}}/>
                                                </div>
                                                <div className="col pt-4">
                                                    <p className="firstPointPara">
                                                        No Communication with the Seller 
                                                    </p>
                                                    <br className="spacing"/>
                                                    <p className="pointsSecondPara">
                                                        Live chat gets you a more interactive shopping experience
                                                    </p>
                                            </div>

                                            </div>
                                        </div>
                                      
                                    </div>

                                </div>

                                <div className="col-xl-5 d-xl-flex d-lg-flex justify-content-center align-items-center d-md-none d-none">
                                {/* className="pointsImg" */}
                                    <div >
                                        <img src={Group18169} width="100%" style={{objectFit:"contain"}} className="aboutUsImg"/>
                                    </div>

                                </div>

                            </div>
                        </div>

                    </div>

                </div>
                <div className="col-12 mb-5">
                    <div className="position-relative fundUsWrapper" style={{marginTop:"78.3px"}}>
                        {/* <div className="blurSpot"></div> */}
                        <Button className="text-center" onClick={()=>navigate("/fundus")}>
                            Fund Us
                        </Button>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default AboutUs