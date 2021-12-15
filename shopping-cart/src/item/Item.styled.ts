import styled  from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    width: 100%;
    height:100%;
    border: 1px solid lightblue;
    border-radius: 20px;


    button{
        border-radius: 0 0 20px 20px;
    }

    img{
        max-width: 60%;
        object-fit: cover;
        border-radius: 20px 20px 0 0;
        margin: 5px;
    }

    div{
        font-family: Arial, Helvetica, sans-serif;
        padding: 1rem;
        height: 100px;
        font-size: 13px
    }

    .text {
        width: 30em;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
`;