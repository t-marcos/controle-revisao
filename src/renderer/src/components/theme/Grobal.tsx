// styles/global.ts
import { css, Global } from '@emotion/react';

const GlobalStyles = () => (
  <Global
    styles={css`
      :root {
        --primary-color: #ffcc00;
        --font-base: 'Roboto', sans-serif;
        --bg-color: #FFFFFF;
        --btn-hover: #ffcc00d1;
      }
    `}
  />
);

export default GlobalStyles;
