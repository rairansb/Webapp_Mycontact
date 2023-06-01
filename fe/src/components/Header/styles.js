import { styled } from 'styled-components';

export const Container = styled.header`
margin-top: 74px;
display: flex;
flex-direction: column;
align-items: center;
    `;

export const InputSearchContainer = styled.div`
    margin-top: 48px;
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
    }
    `;
