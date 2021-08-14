import 'tailwindcss/tailwind.css'
import SettingsProvider from '../context/auth'
import FarmsProvider from '../context/farms'
import '../styles/footer.scss'

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
