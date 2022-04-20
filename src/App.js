import "./App.css";
import { CssBaseline, Grid } from "@material-ui/core";

import Header from "./components/Header/Header";
import List from "./components/List/List";
import Map from "./components/Map/Map";

const App = () => {
    return (
        <>
            <CssBaseline />
            <Header />
            <div id="home">
                <div className="list">
                    <List />
                </div>
                <div className="map">
                    <Map />
                </div>
            </div>
        </>
    );
};

export default App;
