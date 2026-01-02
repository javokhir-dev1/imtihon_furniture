import styled from "styled-components";

export const DetailPage = styled.div`
    .navigate {
        display: flex;
        align-items: center;
        gap: 10px;

        p {
            color: grey;
        }
    }

    h2.detail_bottom_title {
        font-size: 40px;
        font-weight: 500;
        color: #454545;
        margin: 50px 0;
    }
`

export const DetailTop = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 50px;
    gap: 80px;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`

export const ImgCol = styled.div`
    width: 50%;
    height: 600px;
    border: 1px solid rgba(69, 69, 69, 0.5);

    img {
        width: 100%;
        height: 100%;
    }

    @media (max-width: 768px) {
        width: 100%;
        height: fit-content;
    }
`

export const TextCol = styled.div`
    width: 50%;
    h2 {
        font-size: 40px;
        color: #454545;
        font-weight: 500;
    }

    .product_info_top {
        display: flex;
        justify-content: space-between;
        align-items: center;

        & div:nth-child(1) p {
            margin: 10px 0;
            color: #B3B3B3;
            font-size: 14px;
        }

        & div:nth-child(1) p:nth-child(3) {
            color: #4D932C;
        }

        & div:nth-child(2) {
            display: flex;
            gap: 5px;

            p:nth-child(1) {
                background-color: black;
            }
        }

        & div:nth-child(2) p {
            width: 25px;
            height: 25px;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 50%;
            color: white;
            background-color: #dbdbdbff;
        }
    }

    .product_price {
        display: flex;
        align-items: center;
        gap: 10px;
    }


    .product_price p:nth-child(1) {
        font-size: 40px;
        font-weight: 500;
        color: #101010;
    }

    .product_price p:nth-child(2) {
        font-size: 18px;
        font-weight: 500;
        color: #B3B3B3;
        text-decoration: line-through;

    }

    .product_info_bottom {
        margin: 40px 0;
        font-size: 16px;
        color: #4C4C4C;
        line-height: 160%;
        font-weight: 400;
    }

    .product_bottom {
        display: flex;
        gap: 20px;

        .btn1 {
            display: flex;
            gap: 25px;
            align-items: center;
            border: 1px solid rgba(69, 69, 69, 0.3);
            font-weight: 600;
            color: #101010;
            padding: 13px 18px;
            border-radius: 12px;
            font-size: 17px;
            button {
                background-color: white;
                border: 0;
                padding: 5px;
                cursor: pointer;
                font-weight: 600;
            }
        }

        .btn2 {
            background-color: #454545;
            color: white;
            padding: 0 50px;
            font-weight: 500;
            font-size: 16px;
            border-radius: 12px;
            border: 0;
        }

        .btn3 {
            padding: 0 20px;
            background-color: #F8F8F8;
            border: 0;
            border-radius: 12px;
            font-size: 20px;
        }
    
    }

    @media (max-width: 768px) {
        width: 100%;
        h2 {
            font-size: 30px;
            width: 100%;
        }

        .product_bottom .btn2 {
            display: none;
        }
    }
`

export const DetailBottom = styled.div`
    & div {
        display: flex;
        justify-content: space-between;
        padding: 15px;
        
        p:first-child {
            font-size: 16px;
            font-weight: 500;
            color: #101010;
        }
        
        p:last-child {
            font-weight: 300;
            color: #4C4C4C;
            text-align: end;
            width: 500px;
        }
    }
    
    & div:nth-of-type(even) {
        background-color: #F8F8F8;
    }
    @media (max-width: 768px) {
        & div p:last-child {
            width: 200px;
        }
    }
`