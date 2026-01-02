import styled from "styled-components";

export const Navigate = styled.div`
    .navigate{
        display: flex;
        align-items: center;
        gap: 12px;
    }

    & p:hover{
            color: #bbb8b8ff;
            cursor: pointer;
        }
`

export const Task = styled.div`
    display: flex;
    gap: 100px;
    margin: 50px 0;
    .first_col {
        width: 42%;
        .task1 {
            background-color: #F2F2F2;
            padding: 22px 20px;
            border-radius: 13px;
            margin: 15px 0;
            p:first-child {
                font-size: 50px;
                font-weight: 600;
                color: #454545;
                margin-bottom: 70px;
            }

            p:last-child {
                font-weight: 500;
                color: #454545;
            }
        }
    }

    .last_col {
        width: 58%;

        p {
            color: #454545;
            line-height: 150%;
            margin-bottom: 25px;
            margin-top: 40px;
            padding-right: 80px;
        }
    }

    h1 {
        font-weight: 700;
        font-size: 50px;
        color: #454545;
        margin-bottom: 20px;
    }

    @media (max-width: 768px) {
        gap: 0;
        .first_col {
            width: 100%;
        }
        .last_col {
            width: 100%;
            margin-top: 0;
        }
        flex-direction: column;
    }    
`

export const TextBox = styled.div`
    @media (min-width: 769px) {
        display: none;
    }
`