import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children, sections }) => {
  return (
    <div className="main-container">
      <Navbar sections={sections} />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
