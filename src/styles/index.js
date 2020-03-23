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

    body {
        font-family: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size: 16px;
    }

    a {
        text-decoration: none;
    }

    h1, h2 {
        font-family: 'ABeeZee', 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-weight: normal;
    }

    h1 {
        font-size: 22px;
    }

    li {
        list-style: none;
    }
`;

export default GlobalStyles;
