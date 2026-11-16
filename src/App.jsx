import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Desserts from "./components/Desserts.jsx";
import Ingredients from "./components/Ingredients.jsx";
import Order from "./components/Order.jsx";
import Story from "./components/Story.jsx";
import Faq from "./components/Faq.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <>
      <Header />
      <main id="top">
        <Hero />
        <Desserts />
        <Ingredients />
        <Order />
        <Story />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
