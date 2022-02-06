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
import Case from "./pages/domDrammen";
import Case1 from "./pages/studioGdynia";
import Case2 from "./pages/houseEidsberg";
import Case3 from "./pages/flatGorlice";
import Case4 from "./pages/interiorArchitecture";
import Case5 from "./pages/decoration";
import Case6 from "./pages/homeStaging";
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
            path="/domDrammen"
            component={() => (
              <Case setNavBackground={(state) => setNavBack(state)} />
            )}
          />
          <Route
            path="/studioGdynia"
            component={() => (
              <Case1 setNavBackground={(state) => setNavBack(state)} />
            )}
          />
          <Route
            path="/houseEidsberg"
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
            path="/interiorArchitecture"
            component={() => (
              <Case4 setNavBackground={(state) => setNavBack(state)} />
            )}
          />
          <Route
            path="/decoration"
            component={() => (
              <Case5 setNavBackground={(state) => setNavBack(state)} />
            )}
          />
          <Route
            path="/homeStaging"
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
