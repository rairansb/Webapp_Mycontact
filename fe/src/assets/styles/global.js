import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Sora', sans-serif;
    }

    body {
        background: ${(props) => props.theme.color.background};
        font-size: 16px;
        color: ${(props) => props.theme.color.gray.gray900};
    }

    button {
        cursor: pointer;
    }
    `;
