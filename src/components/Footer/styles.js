import styled from "styled-components";
import "../../assets/css/opensans.css";

const FooterStyles = styled.div`
    font-size: 10px;
    font-weight: 300;
    display: flex;
    flex-direction: row;
    background-color: #F3F2F1;
    color: #a39783;
    padding: 5px;
    border-top: 1px solid #efedeb;
    border-bottom: 1px solid #efedeb;

    position:fixed;
    bottom:0;
    left:0;
    width:100%;
    

    & > div{
        align-self: center;
        width: 50%;
    }

    & > div:last-child{
        text-align: center;
    }
    
`;

export default { FooterStyles };