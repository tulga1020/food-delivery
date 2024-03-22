import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
};
