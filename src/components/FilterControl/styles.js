import styled from "styled-components";

const FilterControlStyles = styled.select`
    
    color: #487bd5;
    font-size: 16px;
    border: 1px solid #ccc;
    margin: 0px 0px 30px 0px;
    padding: 10px;
    
    & > option{        
        color: #868b8e;       
    }

    &:focus{
        outline: none;
    }
`;

export default { FilterControlStyles };