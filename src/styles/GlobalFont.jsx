import { createGlobalStyle } from 'styled-components'

import LineSeedRgOtf from '../assets/fonts/LINESeedKR-Rg.otf'
import LineSeedRgWoff from '../assets/fonts/LINESeedKR-Rg.woff'
import LineSeedRgWoff2 from '../assets/fonts/LINESeedKR-Rg.woff2'
import LineSeedBdOtf from '../assets/fonts/LINESeedKR-Bd.otf'
import LineSeedBdWoff from '../assets/fonts/LINESeedKR-Bd.woff'
import LineSeedBdWoff2 from '../assets/fonts/LINESeedKR-Bd.woff2'

export default createGlobalStyle`
  @font-face {
    font-family: "LINESeedKR";
    font-weight: 400;
    font-style: normal;
    font-display: swap;
    src: url(${LineSeedRgWoff2}) format("woff2"),
      url(${LineSeedRgWoff}) format("woff"),
      url(${LineSeedRgOtf}) format("opentype");
  }

  @font-face {
    font-family: "LINESeedKR";
    font-weight: 700;
    font-style: normal;
    font-display: swap;
    src: url(${LineSeedBdWoff2}) format("woff2"),
      url(${LineSeedBdWoff}) format("woff"),
      url(${LineSeedBdOtf}) format("opentype");
  }
`
