import './App.scss';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Faq from './components/faq/Faq';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar'
import Quotes from './components/quotes/Quotes';
import Services from './components/services/Services';
import Resources from './components/resources/Resources'
import { Helmet } from 'react-helmet';
import Footer from './components/footer/Footer';


function App() {
  return (
    <div className="app">
      <Helmet>
        <title>Amaisse | Agentie de Marketing Digital</title>
        <meta
          name='description'
          content='Singura agenție de marketing digital care chiar ajută clienții. Noi creștem doar dacă voi creșteți, deci hai să colaborăm pentru ca afacerea ta să își atingă potențialul maxim în mediul online.'
        />
      </Helmet>
      <Navbar />
      <Header />
      <Quotes quote={"If you don't understand people, you don't understand business"} />
      <About />
      <Services />
      <Resources />
      <Quotes quote={"The best marketing doesn't feel like marketing"} />
      <Faq />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
