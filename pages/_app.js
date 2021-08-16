import 'tailwindcss/tailwind.css';
import SettingsProvider from '../context/auth';
import FarmsProvider from '../context/farms';
import '../styles/footer.scss';
import '../styles/header_main.scss';
import '../styles/main_comp.scss';
import '../styles/slider_main.scss';

function MyApp({ Component, pageProps }) {
  return (
    <SettingsProvider>
      <FarmsProvider>
        <Component {...pageProps} />
      </FarmsProvider>
    </SettingsProvider>
  );
}

export default MyApp;
