import styled from "styled-components";

const NoMailSelectedStyles = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
    text-align:center;

    &.nomail_selected > div{
        margin: 5px;
    }
    
    &.nomail_selected > div:first-child{
        font-size: 16px;
    }

    &.nomail_selected > div:last-child{
        font-size: 12px;
        
    }
`;

export default { NoMailSelectedStyles };