import { createGlobalStyle } from 'styled-components';
import Themes from './constants/themes';

const theme = Themes.light;

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
        background-color: ${theme.background};
        color: ${theme.highContrast}
    }

    a {
        text-decoration: none;
    }

    h1, h2 {
        font-family: 'ABeeZee', 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-weight: normal;
        color: ${theme.fullContrast}
    }

    h1 {
        font-size: 22px;
    }

    li {
        list-style: none;
    }

    /**
    /* Posts
    */

    .post h1,
    .post h2,
    .post h3,
    .post h4,
    .post h5,
    .post h6 {
        font-size: 22px;
        font-family: 'ABeeZee', 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        margin: 32px 0 16px 0;
        color: ${theme.fullContrast}
    }

    .post h3 {
        font-size: 19px;
    }

    .post p {
        margin: 16px 0;
    }

    .post li {
        list-style: initial;
        margin-left: 32px;
    }

    .post .language-shell {
        display: block;
        background-color: ${theme.softContrast};
        color: ${theme.fullContrast};
        padding: 8px;
        margin: 16px 0;
        border-radius: 8px;
        width: 100%;
    }

    .post strong {
        font-family: Arial, Helvetica, sans-serif;
        font-weight: bold;
    }

    .post em {
        font-style: italic;
    }

    .post code {
        font-family: monospace;
        background-color: ${theme.softContrast};
        color: ${theme.fullContrast};
    }

    .post a {
        color: ${theme.fullContrast};
        text-decoration: underline;
    }

    .post img {
        display: block;
        margin: auto;
        min-height: 200px;
        max-width: 100%;
        object-fit:contain;
    }
`;

export default GlobalStyles;
