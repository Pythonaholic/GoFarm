import 'tailwindcss/tailwind.css'
import SettingsProvider from '../context/auth'
import FarmsProvider from '../context/farms'

function MyApp({ Component, pageProps }) {
  return (
    <SettingsProvider>
      <FarmsProvider>
      <Component {...pageProps} />
      </FarmsProvider>
    </SettingsProvider>
  )

}

export default MyApp
