import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./styles/animated-on3step.css";
import "./styles/main.scss";

import Preloader from "./components/Preloader";
import NavigationMenu from "./components/Nav";
import ScrollToTopBtn from "./components/ScrollToTop";
import Home from "./pages/Home";
import About from "./pages/About";
import Work from "./pages/works";
import Expertness from "./pages/expertness";
import Contact from "./pages/Contact";
import Case from "./pages/detailCase";
import Case1 from "./pages/detailCase1";
import Case2 from "./pages/detailCase2";
import Case3 from "./pages/flatGorlice";
import Case4 from "./pages/detailCase4";
import Case5 from "./pages/detailCase5";
import Case6 from "./pages/detailCase6";
import Case7 from "./pages/salonSandvika";

function App() {
  const [loading, setLoading] = useState(true);
  const [navBackground, setNavBack] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [loading]);

  return (
    <Router>
      {loading ? (
        <Preloader />
      ) : (
        <div className="App">
          <NavigationMenu
            firstTime={loading}
            hasBackground={navBackground}
            setBackground={(state) => setNavBack(state)}
          />
          <Route path="/" exact component={Home} />
          <Route path="/About" exact component={About} />
          <Route path="/Work" exact component={Work} />

          <Route path="/Contact" exact component={Contact} />
          <Route path="/Expertness" exact component={Expertness} />
          <Route
            path="/detailcase"
            component={() => (
              <Case setNavBackground={(state) => setNavBack(state)} />
            )}
          />
          <Route
            path="/detailcase1"
            component={() => (
              <Case1 setNavBackground={(state) => setNavBack(state)} />
            )}
          />
          <Route
            path="/detailcase2"
            component={() => (
              <Case2 setNavBackground={(state) => setNavBack(state)} />
            )}
          />
          <Route
            path="/flatGorlice"
            component={() => (
              <Case3 setNavBackground={(state) => setNavBack(state)} />
            )}
          />
          <Route
            path="/detailcase4"
            component={() => (
              <Case4 setNavBackground={(state) => setNavBack(state)} />
            )}
          />
          <Route
            path="/detailcase5"
            component={() => (
              <Case5 setNavBackground={(state) => setNavBack(state)} />
            )}
          />
          <Route
            path="/detailcase6"
            component={() => (
              <Case6 setNavBackground={(state) => setNavBack(state)} />
            )}
          />
          <Route
            path="/salonSandvika"
            component={() => (
              <Case7 setNavBackground={(state) => setNavBack(state)} />
            )}
          />

          <ScrollToTopBtn />
        </div>
      )}
    </Router>
  );
}

export default App;
