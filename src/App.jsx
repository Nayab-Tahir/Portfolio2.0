import "./App.css";
import Ruler from "./components/Ruler/Ruler";
import Header from "./components/Header/Header";
import HomePage from "./Pages/HomePage";
import Footer from "./components/Footer/Footer";

export default function App() {
  return (
    <>
      <Ruler />
      <Header />
      <HomePage />
      <Footer />
    </>
  );
}
