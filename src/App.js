import { useEffect, useState } from "react";
import "./App.css";
import { CssBaseline, Grid } from "@material-ui/core";

import { getPlacesData } from "./api";

import Header from "./components/Header/Header";
import List from "./components/List/List";
import Map from "./components/Map/Map";

const App = () => {
    const [places, setPlaces] = useState([]);
    const [coordinates, setCoordinates] = useState({});
    const [bounds, setBounds] = useState({});

    // Run once on browser load to get current location
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            ({ coords: { latitude, longitude } }) => {
                setCoordinates({ lat: latitude, lng: longitude });
            }
        );
    }, []);

    // update call every time coordinates and bounds change
    useEffect(() => {
        // console.log(bounds);
        // console.log(coordinates);
        getPlacesData(bounds).then((data) => {
            console.log(data);
            setPlaces(data);
        });
    }, [coordinates, bounds]);

    return (
        <>
            <CssBaseline />
            <Header />
            <div id="home">
                <div className="list">
                    <List places={places} />
                </div>
                <div className="map">
                    <Map
                        setCoordinates={setCoordinates}
                        setBounds={setBounds}
                        coordinates={coordinates}
                    />
                </div>
            </div>
        </>
    );
};

export default App;
