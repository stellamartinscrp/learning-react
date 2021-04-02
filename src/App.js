import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Views/Home"
import About from "./Views/About"
import Product from "./Views/Product";


function App() {
    return (
        <div>

            <Router>

                <Header/>

                <div className="p-3">
                    <Switch>
                        <Route exact path="/">
                            <Home/>
                        </Route>
                        <Route path="/sobre">
                            <About/>
                        </Route>
                        <Route path="/produto/:id">
                            <Product/>
                        </Route>
                    </Switch>
                </div>


                <Footer/>

            </Router>

        </div>
    );
}

export default App;
