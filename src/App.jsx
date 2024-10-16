import { Footer } from "./components/Footer";
import { FootersFooter } from "./components/FootersFooter";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { OpenAccount } from "./components/OpenAccount";
import { Pricing } from "./components/Pricing";
import { Trust } from "./components/Trust";
import { Varsity } from "./components/Varsity";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Trust />
      <Pricing />
      <Varsity />
      <OpenAccount />
      <Footer />
      <FootersFooter />
    </>
  );
}

export default App;
