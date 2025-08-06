import "./styles/global.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Servicos from "./components/Servicos";
import Cases from "./components/Cases";
import Sobre from "./components/Sobre";
import Depoimentos from "./components/Depoimentos";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Servicos />
      <Cases />
      <Sobre />
      <Depoimentos />
      <Footer />
    </>
  );
}

export default App;
