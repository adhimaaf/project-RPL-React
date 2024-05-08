import CompanyProfile from "@/components/contents/CompanyProfile";
import Jumbotron from "@/components/contents/Jumbotron";
import ServicesList from "@/components/contents/ServicesList";
import Testimonies from "@/components/contents/Testimonies";
import Footer from "@/components/nav/Footer";
import NavBar from "@/components/nav/NavBar";
import React from "react";

function page() {
  return (
    <div>
      <NavBar></NavBar>
      <Jumbotron></Jumbotron>
      <CompanyProfile></CompanyProfile>
      <ServicesList></ServicesList>
      <Testimonies></Testimonies>
      <Footer></Footer>
    </div>
  );
}

export default page;
