import styled from "styled-components";

export const NotFound = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;

    h2 {
        font-size: 400px ;
        color: rgba(69, 69, 69, 0.1);
    }

    p {
        font-size: 30px;
        color: #454545;
        font-weight: 500;
    }

    button {
        background-color: #454545;
        border: 0;
        padding: 15px 60px;
        border-radius: 100px;
        font-size: 20px;
        margin-top: 50px;
        color: white;
    }

    @media (max-width: 768px) {
        h2 {
            font-size: 200px;
        }

        p {
            font-size: 20px;
            margin-bottom: 200px;
        }

        button {
            width: 100%;
        }
    }
`


