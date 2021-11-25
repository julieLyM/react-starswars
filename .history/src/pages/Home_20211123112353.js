import Navigation from "../components/Navigation.js"
import Logo from "../components/Logo.js";

const Home = () => {
  return (
    <div className="home">
      <Navigation />
      <Logo />
      <Countries/>
      <h1>Accueil component</h1>
    </div>
  );
};

export default Home;
