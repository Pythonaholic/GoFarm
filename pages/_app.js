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
import '../styles/myfarms.scss'
import '../styles/header_main.scss';
import '../styles/main_comp.scss';
import '../styles/slider_main.scss';
import '../styles/video_main.scss';
import '../styles/headerbar.scss';
import '../styles/about.scss';
import '../styles/nav.scss';
import '../styles/homecard.scss';






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
