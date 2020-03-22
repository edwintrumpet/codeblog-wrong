import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    .___gatsby {
        position: absolute;
    }

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    a {
        text-decoration: none;
    }
`;

export default GlobalStyles;
