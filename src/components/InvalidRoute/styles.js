import styled from "styled-components";

const InvalidRouteStyles = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;

    & > div{
        text-align:center;
    }

    & > div:first-child{
        font-size: 16px;
    }

    & > div:last-child{
        font-size: 12px;
    }
`;

export default { InvalidRouteStyles };