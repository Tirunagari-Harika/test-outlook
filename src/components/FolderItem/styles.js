import styled from "styled-components";

const LinkStyles = styled.div`
    & a {
        text-decoration: none;
        display: block;
    }
    & .activeClass{        
        background-color: #c7e0f4;        

        .folderItem > div:first-child{
            color: #257fbf;
        }
    }

    :hover{
        background-color: #eaedef;
    }

`;

const FolderItemStyles = styled.div`
    display: flex;
    flex-direction: row;
    font-size: 16px;
    
    padding: 10px;

  

    &.folderItem > div:first-child{
        width: 75%;
    }

    &.folderItem > div:last-child{
        text-align: right;
        width: 25%;
        color: #257fbf;
        padding-right: 10px;
    }

`;

export default { LinkStyles, FolderItemStyles };