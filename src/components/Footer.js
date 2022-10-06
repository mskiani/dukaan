import React from "react"
import PhoneImg from "../assets/images/Group 18169.png"
import "../components/Styles/footer.css"
import AppStore from "../assets/images/App Store.png"
import GooglePlay from "../assets/images/Google Play.png"

import Twitter from "../assets/images/Twitter.png"
import Facebook from "../assets/images/fb.png"
import Youtube from "../assets/images/youtube.png"
import Instagram from "../assets/images/instagram.png"

import {Phone} from "react-feather"
import { openWindow } from "./Snippets/snippets"

const Footer=()=>{
    return (
        <div className="d-flex justify-content-center" style={{background:"black"}}>
                <div style={{width:"90%"}}>
                    <div className="d-flex  flex-xl-row flex-lg-row flex-md-row flex-column-reverse justify-content-around footer_floating">
                        <div style={{marginTop:"100px"}}>
                            <p className="footer_para1">Download Dukkan App For Free</p>
                            <p className="footer_para2">Buy any product you want and get it within an hour</p>

                            <div className="row m-0 mb-3">
                                <div className="col-4 p-0" style={{cursor:"pointer"}} onClick={()=>openWindow("app_store")}>
                                    <img src={AppStore}  />
                                </div>
                                <div className="col-4" style={{cursor:"pointer"}} onClick={()=>openWindow("google_store")}>
                                    <img src={GooglePlay}/>
                                </div>
                                
                            </div>
                        </div>
                        <div style={{margin:"-180px 0px 0px 0px"}}>
                            <img src={PhoneImg} width="80%" style={{objectFit:"contain",margin:"auto"}}/>
                        </div>
                    </div>
                    <div className="row" style={{marginTop:"50px",marginBottom:"30px"}} >
                        <div className="col"/>
                        <div className="col-lg-3" style={{bacground:"red"}}>
                            <p className="footerPara3">Dubai International Financial Center, Dubai UAE</p>
                        </div>
                        <div className="col-lg-3" style={{bacground:"green"}}>
                            <div className="d-flex">
                                <Phone color="white"/>
                                <p className="footerPara2">+971 52 568 3437</p>
                            </div>
                        </div>
                        <div className="col-md-3" style={{bacground:"cyan"}}>
                            <div className="row m-0">
                                <div className="col-12 p-0">
                                    <p className="m-0 footerPara" >Follow Us</p>
                                </div>
                                <div className="col-12 d-flex flex-wrap justify-content-around p-0">
                                    
                                    <div className="rounded-circle d-flex justify-content-center align-items-center" style={{float:"right",border:"1px solid rgba(80, 88, 101, 1)",width:"40px",height:"40px"}}>
                                        <div>
                                            <img src={Twitter} width="100%" objectFit="contain" />
                                        </div>
                                    </div>
                                    
                                    <div className="rounded-circle d-flex justify-content-center align-items-center" style={{float:"right",border:"1px solid rgba(80, 88, 101, 1)",width:"40px",height:"40px"}}>
                                        
                                        <div>
                                            <img src={Instagram} width="100%" objectFit="contain" />
                                        </div>
                                    </div>

                                    <div className="rounded-circle d-flex justify-content-center align-items-center" style={{float:"right",border:"1px solid rgba(80, 88, 101, 1)",width:"40px",height:"40px"}}>
                                        <div>
                                            <img src={Facebook} width="100%" objectFit="contain" />
                                        </div>
                                    </div>

                                    <div className="rounded-circle d-flex justify-content-center align-items-center" style={{float:"right",border:"1px solid rgba(80, 88, 101, 1)",width:"40px",height:"40px"}}>
                                        <div>
                                            <img src={Youtube} width="100%" objectFit="contain" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
        </div>
    )
}
export default Footer