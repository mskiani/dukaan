import React from "react"
import NavBar from "./NavBar"
import {Row} from "reactstrap"
import Home from "./Home"
import SecondSection from "./SecondSection"
import AboutUs from "./AboutUs"
import ContactUs from "./ContactUs"
import Footer from "./Footer"

const MainPage=()=>{

    return(
        <div style={{position:"relative",width:"100%"}}>
            <div style={{position:'sticky',top:"0%",width:'100%',zIndex:'2'}}>
                <NavBar/>
            </div>
            <div id="home">
                <Home/>
            </div>
            <div id="fundUs">
                <SecondSection/>
            </div>
            <div id="aboutUs">
                <AboutUs/>
            </div>
            <div id="contactUs">
                <ContactUs/>
            </div>
            <div id="footer">
                <Footer/>
            </div>
            <div className="row m-0">
                <div style={{width:"100%",height:"1px",background:"rgba(80, 88, 101, 1)"}}></div>
            </div>
            <div style={{background:"black"}}>
                <div className="p-5 lastDiv">
                        
                        Copyright 2022 © Dukaan

                </div>
            </div>
        </div>
    )
}
export default MainPage