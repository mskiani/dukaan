import React from "react"
import "../components/Styles/contactUs.css"
import invest from "../assets/images/investment.png"
import govt from "../assets/images/govt.png"
import finance from "../assets/images/finance.png"
import { Button } from "./Snippets/snippets"

import Twitter from "../assets/images/Twitter.png"
import Facebook from "../assets/images/fb.png"
import Youtube from "../assets/images/youtube.png"
import Instagram from "../assets/images/instagram.png"

// import { Facebook, Instagram, Twitter} from "react-feather"

const ContactUs=()=>{

    return(
        <div className="contactUs">
            <div className="row m-0" style={{width:"90%" , overflow: "hidden"}}>

                <div className="aboutSectionHeading col-12 d-xl-block d-lg-block d-md-flex flex-md-column justify-content-center align-items-center aboutSectionHeading">
                    <p className="firstPara m-0 aboutSectionHeading" >
                        Our Backers 
                        <div className="underline_backers" ></div>
                    </p>
                    
                </div>

                <div className="col-12" style={{margin:"100px 0px"}}>
                
                    <div className="contactImgContainer">
                        <div className="d-flex justify-content-center align-item-center sponsers" style={{}}>
                            <img style={{objectFit:"contain"}} width="100%" src={invest} />
                        </div>
                        <div className="d-flex justify-content-center align-item-center sponsers" style={{paddingRight:"15px"}}>
                            <img style={{objectFit:"contain"}} width="100%" src={finance} />
                        </div>
                        <div className="d-flex justify-content-center align-item-center sponsers">
                            <img style={{objectFit:"contain"}} width="100%" src={govt} />
                        </div>

                    </div>

                </div>

                <div className="col-12 d-xl-block d-lg-block d-md-flex flex-md-column justify-content-center align-items-center  aboutSectionHeading">
                    <p className="firstPara m-0   ">
                        Contact Us
                        <div className="underline_backers"></div>
                    </p>
                    
                </div>

                <div className="col-12 d-flex justify-content-center">

                    <div className="contact-form">
                        <div className="blur_Spot"></div>
                            <div>
                                
                                <p className="firstPointPara mt-5 text-center">
                                    Get In Touch
                                    <div style={{width: "179.3549041748047px",background: "#FFFFFF",height:" 1.9490195512771606px",margin:'auto'}}></div>
                                </p>
                                

                            </div>
                        <div className="d-flex justify-content-center">
                            <div style={{width:"80%"}}>
                                <div className="d-flex align-items-end" style={{height:"80px"}}>
                                    <p className="firstPointPara" >Leave Us a Message</p>
                                </div>
                                <div className="row m-0" >

                                    <div className="col-md-6" style={{padding:"30px 0px"}}>
                                        <input className="contact_inputs" placeholder="Full Name"/>
                                        <input className="contact_inputs" placeholder="Email Address"/>
                                        <input className="contact_inputs1" placeholder="Your Message"/>
                                        <div className="w-100 position-relative">
                                        
                                            <div 
                                            style={{
                                                cursor:"pointer",
                                                position:"absolute",
                                                top:"20%",
                                                height:"70px",
                                                width:"100%",
                                                zIndex:10,
                                                background:"rgba(255, 116, 46, 1)",
                                                borderRadius:"40%",
                                                filter:"blur(100px)"
                                                }}/>

                                            <Button
                                            className="text-center"
                                            width="100%"
                                            height="48.73px"
                                            >
                                                Send
                                            </Button>
                                        </div>
                                    </div>
                                    <div className="col-md-6  contactFormAddress" >
                                        <p className="contact_form_para1">
                                        Financial Center, Dubai UAE
                                        </p>
                                        <p className="contact_form_para1">
                                        +971 52 568 3437
                                        </p>
                                        <p className="contact_form_para1">
                                        ibrahim@dukkanapp.com
                                        </p>
                                        <div className="d-flex justify-content-between " style={{width:"130px"}} >
                                            <div className="d-flex justify-content-center align-items-center">
                                                <div>
                                                    <img src={Youtube} width="100%" objectFit="contain"/>
                                                </div>
                                                
                                            </div>
                                            <div className="d-flex justify-content-center align-items-center">
                                                <div>
                                                    <img src={Instagram} width="100%" objectFit="contain"/>
                                                </div>
                                                
                                            </div>
                                            <div className="d-flex justify-content-center align-items-center">
                                                <div>
                                                    <img src={Facebook} width="100%" objectFit="contain"/>
                                                </div>
                                                
                                            </div>
                                            <div className="d-flex justify-content-center align-items-center">
                                                <div>
                                                    <img src={Twitter} width="100%" objectFit="contain"/>
                                                </div>
                                                
                                            </div>
                                        </div>
                                        <div style={{marginTop:"20px", paddingBottom:"30px" ,overflow:"hid"}}>
                                            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d106305.78158849265!2d73.0595328!3d33.6297984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1664722377758!5m2!1sen!2s"  loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="blur_Spot1"></div>
                    </div>


                </div>
            </div>
        </div>
    )
}
export default ContactUs