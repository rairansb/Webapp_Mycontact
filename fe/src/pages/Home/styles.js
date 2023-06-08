import Styled from 'styled-components';

export const Container = Styled.div`
margin-top: 32px;
`;

export const InputSearchContainer = Styled.div`

    width: 100%;

    input {
        width: 100%;
        border: none;
        border-radius: 25px;
        background: #fff;
        height: 50px;
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.05);
        outline: 0;
        padding: 0 24px;

        &::placeholder {
            color: ${({ theme }) => theme.color.gray.gray200};
        }
    }`;

export const Header = Styled.header`
margin-top: 32px;
display: flex;
align-items: center;
justify-content: space-between;

strong {
    font-size: 24px;
    color: ${({ theme }) => theme.color.gray.gray900};
}

a {
    font-size: 16px;
    color: ${({ theme }) => theme.color.primary.main};
    text-decoration: none;
    font-weight: bold;
    border: 2px solid ${({ theme }) => theme.color.primary.main};
    padding: 8px 16px;
    border-radius: 4px;
    transition: all 0.2s ease-in;

    &:hover {
        background: ${({ theme }) => theme.color.primary.main};
        color: #fff;
    }
}
`;
export const ListContainer = Styled.div`
margin-top: 24px;

header{
    margin-top: 8px;
    button {
    background: transparent;
    border: none;
    display: flex;
    align-items: center;
    margin-bottom: 8px;

     span{
        font-size: 16px;
        margin-right: 8px;
        font-weight: bold;
        color: ${({ theme }) => theme.color.primary.main};
        }
    }
}
`;
export const Card = Styled.div`
    background: #fff;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.05);
    border-radius: 4px;
    padding: 16px;
    margin-bottom: 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    & + & {
        margin-top: 16px;
    }

    .info{
        display: flex;
        flex-direction: column;
        gap: 4px;
        .contact-name{
            display: flex;
            align-items: center;
            gap: 8px;

            small{
                padding: 3px;
                background: ${({ theme }) => theme.color.primary.lighter};
                color: ${({ theme }) => theme.color.primary.main};
                text-transform: uppercase;
                font-size: 12px;
                font-weight: bold;
                border-radius: 4px;
            }

        }
        span{
            color: ${({ theme }) => theme.color.gray.gray200};
            font-size: 14px;

         }
    }

    .actions{
        display: flex;
        align-items: flex-start;
        gap: 8px;

        button{
            background: transparent;
            border: none;
        }
    }

 `;
