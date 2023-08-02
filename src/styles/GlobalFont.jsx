import { createGlobalStyle } from 'styled-components'

import PretendardRgOtf from '../assets/fonts/Pretendard-Regular.otf'
import PretendardRgWoff from '../assets/fonts/Pretendard-Regular.woff'
import PretendardRgWoff2 from '../assets/fonts/Pretendard-Regular.woff2'
import PretendardMOtf from '../assets/fonts/Pretendard-Medium.otf'
import PretendardMWoff from '../assets/fonts/Pretendard-Medium.woff'
import PretendardMWoff2 from '../assets/fonts/Pretendard-Medium.woff2'
import PretendardBdOtf from '../assets/fonts/Pretendard-Bold.otf'
import PretendardBdWoff from '../assets/fonts/Pretendard-Bold.woff'
import PretendardBdWoff2 from '../assets/fonts/Pretendard-Bold.woff2'

export default createGlobalStyle`
  @font-face {
  font-family: 'Pretendard';
  font-weight: 400;
  font-display: swap;
  src: local('Pretendard Regular'),
    url(${PretendardRgWoff2}) format('font-woff2'),
    url(${PretendardRgWoff}) format('woff'),
    url(${PretendardRgOtf}) format('opentype');
}
@font-face {
  font-family: 'Pretendard';
  font-weight: 500;
  font-display: swap;
  src: local('Pretendard Medium'),
    url(${PretendardMWoff2}) format('font-woff2'),
    url(${PretendardMWoff}) format('woff'),
    url(${PretendardMOtf}) format('opentype');
}
  @font-face {
  font-family: 'Pretendard';
  font-weight: 700;
  font-display: swap;
  src: local('Pretendard Bold'),
    url(${PretendardBdWoff2}) format('font-woff2'),
    url(${PretendardBdWoff}) format('woff'),
    url(${PretendardBdOtf}) format('opentype');
}
`
