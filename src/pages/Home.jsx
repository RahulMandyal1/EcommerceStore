import styled from "styled-components";
import Navbar from "../components/Navbar";
import Products from "../components/Products";
import { Categories } from "../components/Categories";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

const HomePage = styled.div``;

const Home = () => {
  return (
    <HomePage>
      <Navbar />
      <Categories />
      <Products />
      <Newsletter />
      <Footer />
    </HomePage>
  );
};

export default Home;
