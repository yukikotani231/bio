import { Route, Routes } from "react-router";
import { Footer, Header } from "../components";
import { About, Contact, Home } from "../pages";

export const Default = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about/*" element={<About />} />
        <Route path="/contact/*" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
};
