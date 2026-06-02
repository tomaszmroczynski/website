import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";

import "./styles/animated-on3step.css";
import "./styles/main.scss";

import Preloader from "./components/Preloader";
import SeoHead from "./components/SeoHead";
import LanguageSwitcher from "./components/LanguageSwitcher";
import NavigationMenu from "./components/Nav";
import ScrollToTopBtn from "./components/ScrollToTop";
import Home from "./pages/Home";
import About from "./pages/About";
import Work from "./pages/works";
import Contact from "./pages/Contact";
import Expertness from "./pages/expertness";
import Personvern from "./pages/Personvern";
import NotFound from "./pages/NotFound";
import Case from "./pages/domDrammen";
import Case1 from "./pages/studioGdynia";
import Case2 from "./pages/houseEidsberg";
import Case3 from "./pages/flat-gorlice-poland";
import Case4 from "./pages/interiorArchitecture";
import Case5 from "./pages/decoration";
import Case6 from "./pages/home-staging";
import Case7 from "./pages/salonSandvika";
import Case8 from "./pages/salonGlm";
import Case9 from "./pages/lazMoss";
import Case10 from "./pages/mjondalen";
import Case11 from "./pages/dekorasjon-av-arrangementer";

function App() {
  const [loading, setLoading] = useState(true);
  const [navBackground, setNavBack] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      {loading ? (
        <Preloader />
      ) : (
        <div className="App">
          <SeoHead />
          <NavigationMenu
            firstTime={loading}
            hasBackground={navBackground}
            setBackground={(state) => setNavBack(state)}
          />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" exact component={About} />
            <Route path="/About" exact render={() => <Redirect to="/about" />} />
            <Route path="/work" exact component={Work} />
            <Route path="/Work" exact render={() => <Redirect to="/work" />} />
            <Route path="/expertness" exact component={Expertness} />
            <Route path="/Expertness" exact render={() => <Redirect to="/expertness" />} />
            <Route path="/contact" exact component={Contact} />
            <Route path="/Contact" exact render={() => <Redirect to="/contact" />} />
            <Route path="/personvern" exact component={Personvern} />
            <Route
              path="/domDrammen"
              render={() => <Case setNavBackground={(state) => setNavBack(state)} />}
            />
            <Route
              path="/salonGlm"
              render={() => <Case8 setNavBackground={(state) => setNavBack(state)} />}
            />
            <Route
              path="/studioGdynia"
              render={() => <Case1 setNavBackground={(state) => setNavBack(state)} />}
            />
            <Route
              path="/houseEidsberg"
              render={() => <Case2 setNavBackground={(state) => setNavBack(state)} />}
            />
            <Route
              path="/flat-gorlice-poland"
              render={() => <Case3 setNavBackground={(state) => setNavBack(state)} />}
            />
            <Route
              path="/interiorArchitecture"
              render={() => <Case4 setNavBackground={(state) => setNavBack(state)} />}
            />
            <Route
              path="/decoration"
              render={() => <Case5 setNavBackground={(state) => setNavBack(state)} />}
            />
            <Route
              path="/home-staging"
              render={() => <Case6 setNavBackground={(state) => setNavBack(state)} />}
            />
            <Route
              path="/salonSandvika"
              render={() => <Case7 setNavBackground={(state) => setNavBack(state)} />}
            />
            <Route
              path="/lazMoss"
              render={() => <Case9 setNavBackground={(state) => setNavBack(state)} />}
            />
            <Route
              path="/mjondalen"
              render={() => <Case10 setNavBackground={(state) => setNavBack(state)} />}
            />
            <Route
              path="/dekorasjon-av-arrangementer"
              render={() => <Case11 setNavBackground={(state) => setNavBack(state)} />}
            />
            <Route component={NotFound} />
          </Switch>
          <LanguageSwitcher />
          <ScrollToTopBtn />
        </div>
      )}
    </Router>
  );
}

export default App;
