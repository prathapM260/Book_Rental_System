import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Element } from 'react-scroll';
import CardSection from './components/CardSection';
import Navbar0 from './components/Navbar0';
import TopRatedSection from './components/TopRatedSection';
import IntegratedSection from './components/IntegratedSection';
import './styles.css';
import NewArrivalBooks from './components/NewArrivalBooks';
import AuthorSection from './components/AuthorSection';
import MyRentals from './components/MyRentals';
import Recommendations from './components/Recommendations';
import Footer from './components/Footer';
import FAQs from './components/FAQs';
import BookPage from './CategPages/BookPage';
import GenresPage from './CategPages/GenresPage';
import Register from './components/Register';
import SignIn from './components/Signin';
import CartPage from './components/CartPage';
import TrendingSection from './components/Trending';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar0 />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Element name="integratedsection">
                  <IntegratedSection />
                </Element>
                <Element name="cardsection">
                  <CardSection />
                </Element>
                <Element name="topRatedSection">
                  <TopRatedSection />
                </Element>
                <Element name="newarrivalBooks">
                  <NewArrivalBooks />
                </Element>
                <Element name="trending">
                  <TrendingSection />
                </Element>
                <Element name="authorsection">
                  <AuthorSection />
                </Element>
                {/* <Element name="recommendations">
                  <Recommendations />
                </Element> */}
                <Element name="myrentals">
                  <MyRentals />
                </Element>
                <Element name="faqs">
                  <FAQs />
                </Element>
                <Element name="footer">
                  <Footer />
                </Element>
              </>
            }
          />
           <Route path="/signup" element={<Register />} />
           <Route path="/signin" element={<SignIn />} />
           <Route path="/cartpage" element={<CartPage />} />
          <Route path="/category/:id" element={<GenresPage />} />
          <Route path="/book/:id" element={<BookPage />} />
          <Route path="/faqs" element={<FAQs />} />
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
