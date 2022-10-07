import React from "react"
import {Row,Col} from "reactstrap"
import { Button, openWindow } from "./Snippets/snippets"
import "./Styles/fundUsTopSection.css"
import Rocket from "../assets/Frame2.png"
import { useNavigate } from "react-router-dom";
const FundUsSectionBottom=()=>{
    let navigate = useNavigate();
    return(
       <div className="home2">
            <Row className="m-0 ">

            <Col xl="5" lg="5" className="d-xl-flex d-lg-flex justify-content-center align-items-center order">
                    <div>
                        <img src={Rocket} width="100%" />
                    </div>
                    
                </Col>
                
                <Col xl="7" lg="7" xs="12" >

                    <Row className="m-0 " >
                        <Col xl="12" sm="12" >
                            <p className="headingText2">
                            If you want to support our journey with smaller amounts, 
      
                                <span style={{color:"#FF742E",position:"relative"}}>
                                    <br/>
                                    <span> Click on the Below Button  </span>                     
                                          </span>
                                
                            </p>
                        </Col>
                        <Col xl="12" className="position-relative buttonWrapper2">
                            {/* <div className="blurSpot"></div> */}
                            <Button style={{textAlign:"center"}} onClick={()=>window.open('https://dubainext.ae/embed/card-view/495','_blank')  }>
                                Fund Us
                            </Button>
                        </Col>
                    
                     
                    
                    </Row>


                </Col>

              
                
            </Row>
       </div>
    )
}
export default FundUsSectionBottom;