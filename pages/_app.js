import 'tailwindcss/tailwind.css'
import SettingsProvider from '../context/auth'
import FarmsProvider from '../context/farms'
import '../styles/footer.scss'
import '../styles/searchform.scss'
import '../styles/searchresult.scss'
import '../styles/form.scss'
import '../styles/extraformcss.scss'
import '../styles/sign.scss'
import '../styles/detailsinfo.scss'
import '../styles/rivewcom.scss'
import toast, { Toaster } from 'react-hot-toast';


function MyApp({ Component, pageProps }) {

  return (
    <SettingsProvider>
      <FarmsProvider>
        <Component {...pageProps} />
        <Toaster
          position="bottom-right"
          reverseOrder={false}
        />
      </FarmsProvider>
    </SettingsProvider>
  )

}

export default MyApp
