import styled from "styled-components";


export const Button = styled.button`
    height: ${props => props.height? props.height: '60px'};
    width: ${props => props.width? props.width : ' 250px'};
    border-radius: 10px;
    background-color:${props => props.color? props.color: '#FF742E'};
    color:white;
    text-align: center
    font-family: Poppins,sans-serif;
    font-size: 18px;
    font-weight: 700;
    line-height: 25px;
    letter-spacing: 0em;
    text-align: left;
    border:1px solid #FF742E;
    cursor:pointer;
    box-shadow: 0 5px 20px #FF742E;
`;


const linksForButtons={
    "enterprenuer":"https://www.entrepreneur.com/en-ae/starting-a-business/startup-spotlight-dubai-based-dukkan-aims-to-provide-local/434417",
    "fund_us":"https://dubainext.ae/embed/card-view/495",
    "app_store":"https://apps.apple.com/ae/app/dukkan-e-commerce-portal/id1628289232",
    "google_store":"https://play.google.com/store/apps/details?id=com.dukkan.customer"
}

export const openWindow=(name)=>{

    window.open(linksForButtons[name], '_blank', 'noopener,noreferrer');

}

