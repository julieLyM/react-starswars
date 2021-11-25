import Navigation from '../components/Navigation.js';
import Logo from '../components/Logo';
import Countries from '../components/Countries';

const Home = () => {
  return (
    <div className="home">
      <Navigation />
      <Logo />
      <Countries />
    </div>
  );
};

export default Home;
