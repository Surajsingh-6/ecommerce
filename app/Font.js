// app/fonts.js
import localFont from 'next/font/local';

export const fontSmall = localFont({
  src: './fonts/ExpletusSans-VariableFont_wght.ttf',
  variable: '--font-small',
  display: 'swap',
});

export const fontBig = localFont({
    src: './fonts/Kings-Regular.ttf',
    variable: '--font-big',
    display: 'swap',
});