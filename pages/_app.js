import 'tailwindcss/tailwind.css'
import SettingsProvider from '../context/auth'

function MyApp({ Component, pageProps }) {
  return (
    <SettingsProvider>
      <Component {...pageProps} />
    </SettingsProvider>
  )

}

export default MyApp
