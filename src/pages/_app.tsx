import type { AppProps } from 'next/app'
import 'tailwindcss/tailwind.css'

import { RecoilRoot } from 'recoil'

const MyApp = ({ Component, pageProps }: AppProps) => (
  <RecoilRoot>
    <Component {...pageProps} />
  </RecoilRoot>
)

export default MyApp
