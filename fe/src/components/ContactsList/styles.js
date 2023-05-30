import Styled from 'styled-components';

export const Container = Styled.div`
margin-top: 32px;
`;

export const Header = Styled.header`
display: flex;
align-items: center;
justify-content: space-between;

strong {
    font-size: 24px;
    color: #222;
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
    button {
    background: transparent;
    border: none;
    display: flex;
    align-items: center;

     span{
        font-size: 16px;
        margin-right: 8px;
        font-weight: bold;
        color: ${({ theme }) => theme.color.primary.main};
        }
    }
}
`;
