import React from "react";
import Banner from "../components/Banner";
import BistroBoss from "../components/BistroBoss";
import CallUs from "../components/CallUs";
import ChefRecommends from "../components/ChefRecommends";
import FromMenu from "../components/FromMenu";
import OrderOnline from "../components/OrderOnline";
import OurMenu from "../components/OurMenu";
import Testimonials from "../components/Testimonials";

const Home = () => {
  return (
    <div>
      {/* <h1>Home</h1> */}
      {/* <Navbar /> */}
      <Banner />
      <OrderOnline />
      <BistroBoss />
      <OurMenu />
      <CallUs />
      <ChefRecommends />
      <FromMenu />
      <Testimonials />
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
