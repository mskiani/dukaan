import React,{useState} from "react"
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,Row,Col} from 'reactstrap';
import Logo from "../assets/images/Logo.png"

import "../components/Styles/homeStyles.css"
const NavBar = props => {

    const [isOpen,setOpen] = useState(false);
    
    const toggle =()=>{
        setOpen(
            !isOpen
        );
        }
        return (
            // style={{width:"50%",paddingLeft:"4rem"}}
        <Navbar className="row m-0" dark expand="md" style={isOpen?{height:'auto',background:"#07085B"}: {height:'103px',background:"#07085B"}} >
            <div className="col-md-6 p-0">
                
                <div style={{width:"287px"}}>
                    <NavbarBrand className="ml-2" href="/"><img width="100%" src={Logo} /></NavbarBrand>
                </div>
                
            </div>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar style={{width:"max-content"}}>
                <Nav className="col-md-6 ml-auto w-100 d-flex justify-content-around" navbar >
                    <NavItem className="w-auto" style={{fontFamily:"Poppins,sans-serif"}}>
                        <NavLink href="/" className="fontSize" >Home</NavLink>
                    </NavItem>
                    
                    <NavItem className="w-auto" style={{fontFamily:"Poppins,sans-serif"}}>
                        <NavLink href="/fundus"className="fontSize">Fund Us</NavLink>
                    </NavItem>

                    <NavItem className="w-auto" style={{fontFamily:"Poppins,sans-serif"}}>
                        <NavLink href="#aboutUs" className="fontSize">About Us</NavLink>
                    </NavItem>

                    <NavItem className="w-auto" style={{fontFamily:"Poppins,sans-serif"}}>
                        <NavLink href="#contactUs" className="fontSize">Contact Us</NavLink>
                    </NavItem>

                    <NavItem className="w-auto" style={{fontFamily:"Poppins,sans-serif"}}>
                        <NavLink href="https://dukkanapp.online/shop/apply" className="fontSize">Become Seller</NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    
        )
    }
export default NavBar