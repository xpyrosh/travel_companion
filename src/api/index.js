import React from "react";
import axios from "axios";

export const getPlacesData = async ({ sw, ne }) => {
    const URL =
        "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary";

    try {
        const {
            data: { data },
        } = await axios.get(URL, {
            params: {
                bl_latitude: sw.lat,
                tr_latitude: ne.lat,
                bl_longitude: sw.lng,
                tr_longitude: ne.lng,
            },
            headers: {
                "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
                "X-RapidAPI-Key": process.env.REACT_APP_TRAVEL_ADVISOR_API_KEY,
            },
        });
        return data;
    } catch (error) {
        console.log(error);
    }
};
