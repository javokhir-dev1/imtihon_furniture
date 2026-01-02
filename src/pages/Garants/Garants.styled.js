import styled from "styled-components";

export const Return = styled.div`
    .navigate {
        display: flex;
        align-items: center;
        gap: 10px;

        p:first-child {
            color: rgba(69, 69, 69, 0.5);
        }
    }
`

export const ReturnMain = styled.div`
    display: flex;
    margin: 20px 0;
    .col1 {
        width: 55%;
        h1 {
            font-size: 50px;
            color: #454545;
        }
    }

    .col2 {
        width: 45%;
        padding-right: 30px;
        line-height: 150%;
        p.bold {
            font-weight: 600;
            font-size: 20px;
            margin-bottom: 20px;
        }

        ul {
            padding-left: 40px;

            li a {
                color: #2F4DA3;
                text-decoration: none;
            }
        }
    }

    @media (max-width: 768px) {
        flex-direction: column;
        .col1 {
            width: 100%;
        } 
        .col2 {
            width: 100%;
        }
    }
`