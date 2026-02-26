import Navbar from "./components/NavBar";
import Hero from "./components/Hero";
import RecentPosts from "./components/RecentPosts";
import FeaturedWorks from "./components/FeaturedWorks";
import Footer from "./components/Footer";

function App() {
  return (
    <header className="desktop-frame">
      <Navbar />
      <Hero />
      <RecentPosts />
      <FeaturedWorks />
      <Footer />
    </header>
  );
}

export default App;
