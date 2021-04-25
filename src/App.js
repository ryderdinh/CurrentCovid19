import "./fonts/Redwing-Light.otf";
import "./fonts/Redwing-Medium.otf";
import "./App.css";
import "./Responsive.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer";
import Main from "./components/Main/Main";
import "animate.css";
function App() {
  return (
    <div className="container">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
