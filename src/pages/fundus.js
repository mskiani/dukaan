import React from "react"
import NavBar from "../components/NavBar"
import FundUsSectionBottom from "../components/FundUsSectionBottom"
import Footer from "../components/Footer"
import FundUsTopSection from "../components/FundUsTopSection"
import ContactUsSectioinFundUsPage from "../components/contactUsSectionFundPage"

const FundUs=()=>{

    return(
        <div style={{position:"relative",width:"100%"}}>
            <div style={{position:'sticky',top:"0%",width:'100%',zIndex:'2'}}>
                <NavBar/>
            </div>
            <div id="home">
            <FundUsTopSection/>
              
            </div>
         
           
            <div id="contactUs">
                <ContactUsSectioinFundUsPage/>
            </div>
            <div id="fundUsBottomSection">
<FundUsSectionBottom/>
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
export default FundUs;