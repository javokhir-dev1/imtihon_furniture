import styled from "styled-components";

export const Delivery = styled.div`
    .navigate {
        display: flex;
        gap: 10px;
        align-items: center;
        font-size: 16px;
        font-weight: 500;
        p:first-child {
            color: rgba(69, 69, 69, 0.3);
        }
    }

    .img_box {
        max-width: 1400px;
        width: 100%;
        margin: 50px auto;
        height: 450px;
        

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    @media (max-width: 768px) {
         .img_box {
            max-width: 1300px;
            height: 300px;
            padding: 0 16px;
        }
    }
`

export const DeliveryMain = styled.div`
    display: flex;
    .col1 {
        width: 50%;
        h1 {
            font-size: 50px;
            font-weight: 700;
            color: #454545;
            width: 260px;
        }
    }

    .col2 {
        width: 50%;
        div {
            margin-bottom: 50px;
            h4 {
                font-size: 20px;
                font-weight: 600;
                color: #000000;
                margin-bottom: 15px;
            }
            p {
                line-height: 140%;
                font-size: 17px;
            }
        }
    }

    @media (max-width: 768px) {
        flex-direction: column;

        .col1 {
            width: 100%;
            h1 {
                width: 100%;
                font-size: 30px;
                margin-bottom: 30px;
            }
        }
        
        .col2 {
            width: 100%;
        }
    }
`
