import 'tailwindcss/tailwind.css'
import SettingsProvider from '../context/auth'
import FarmsProvider from '../context/farms'
import '../styles/footer.scss'
import '../styles/searchform.scss'
import '../styles/searchresult.scss'
import '../styles/detailspage.scss'
import '../styles/form.scss'
import '../styles/extraformcss.scss'
import '../styles/sign.scss'
import '../styles/slider.scss'



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
