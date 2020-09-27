import styled from "styled-components";

const MailItemStyles = styled.div`
    display: flex;
    flex-direction: column;
    
    
    padding: 5px 10px;    

    &:nth-child(2n){
        border-top: 1px solid #979794;
        border-bottom: 1px solid #979794;
    }

    &:last-child{
        border-bottom: 1px solid #979794;
    }

    
   

    & > .icons{

        display: flex;
        flex-direction: row;
        justify-content: space-between;
        font-size: 12px;
        color: #9d9690;
        width: 20%;
        align-self: flex-end;
        visibility: hidden;
        
    }

    & .icons > div{
        width: 33%;
    }

    & .icons > div:hover{
        text-decoration: underline;
        color: #0c70ec;        
    }

    .subject{
        font-size: 16px;
        margin-top: 10px;
    }

    .mail_body{
        font-size: 14px;
        color: #7c7671;
    }

   

    &.unread {
        border-left: 5px solid #0078D4;
        .subject{
            color: #0078D4;
        }
    }

    :hover{
        background-color: #b2b7bc2e;
        cursor: pointer;

        .icons{
            visibility: visible;
        }
    }

    &.flagged {
        background-color: #fffdd9;
    }

    &.activeMailItem{
        background-color: #c7e0f4;
    }




`;

export default { MailItemStyles };