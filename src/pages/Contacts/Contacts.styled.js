import styled from "styled-components";

export const Contact = styled.div`
    .navigate {
        display: flex;
        align-items: center;
        gap: 10px;

        p:first-child {
            color: rgba(69, 69, 69, 0.5);
        }
    }
`

export const ContactMain = styled.div`
    
`

export const ContactTop = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    h1 {
        font-size: 50px;
        font-weight: 600;
        color: #454545;
    }
    p:first-child {
        color: #454545;
        font-size: 20px;
        font-weight: 600;
        margin-bottom: 10px;
    }
    @media (max-width:768px) {
        display: block;
        h1 {
            font-size: 30px;
            margin-bottom: 30px;
        }
    }
`

export const ContactBottom = styled.div`
    margin-top: 30px;
    .imgBox {
        width: 100%;
        max-width: 1400px;
        margin: 0 auto;
        height: 400px;
        position: relative;
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        .ContactBox {
            position: absolute;
            bottom: 30px;
            left: 50%;
            transform: translate(-50%, 0);
            display: flex;
            align-items: center;
            background-color: white;
            padding: 35px 50px;
            width:1000px;
            border-radius: 12px;
            justify-content: space-between;
            div p:first-child {
                font-weight: 600;
                font-size: 20px;
                color: #454545;
                margin-bottom: 10px;
            }

            div p:last-child {
                font-size: 14px;
                color: rgba(69, 69, 69, 0.9);
            }

            button {
                background-color: #454545;
                color: white;
                border-radius: 100px;
                padding: 10px 30px;
                border: 0;
                font-weight: 500;
            }
        }
    }

    @media (max-width: 768px) {
        .imgBox {
            padding: 0 16px;
            height: fit-content;
        }
    
        .imgBox .ContactBox {
            position: static;
            flex-direction: column;
            width: fit-content;
            margin: 0;
            transform: none;
            padding: 0;
            align-items: start;
            padding: 20px;

            button {
                margin: 20px 0;
                padding: 15px 50px;
                font-size: 18px;
            }
        }
        /* display: none; */
    }

`