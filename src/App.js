import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch
} from "react-router-dom";
import Main from "./components/Main";
import About from "./components/About";
import PersonInfo from "./components/PersonInfo";
import Footer from "./components/Footer";
import ScrollToTop from "react-router-scroll-top";

function App() {
    return (
        <div className="App">
            <Router>
                <ScrollToTop>
                    <Switch>
                        <Route path="/main" component={Main} />
                        <Route exact path="/about" component={About} />
                        <Route
                            exact
                            path="/person-info/:id"
                            component={PersonInfo}
                        />
                        <Redirect exact path="/" to="/main" />
                    </Switch>
                    <Footer />
                </ScrollToTop>
            </Router>
        </div>
    );
}

export default App;
