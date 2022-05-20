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
    // useEffect(() => {
    //     // console.log(bounds);
    //     // console.log(coordinates);
    //     getPlacesData(bounds).then((data) => {
    //         console.log(data);
    //         setPlaces(data);
    //     });
    // }, [coordinates, bounds]);

    return (
        <>
            <Header />
            <div id="home">
                <div className="list">
                    <List places={places1} />
                </div>
                <div className="map">
                    <Map
                        setCoordinates={setCoordinates}
                        setBounds={setBounds}
                        coordinates={coordinates}
                        places={places1}
                    />
                </div>
            </div>
        </>
    );
};

const places1 = [
    {
        location_id: "783287",
        name: "Heritage Fish & Chips",
        latitude: "43.703133",
        longitude: "-79.74104",
        num_reviews: "493",
        timezone: "America/Toronto",
        location_string: "Brampton, Ontario",
        photo: {
            images: {
                small: {
                    width: "150",
                    url: "https://media-cdn.tripadvisor.com/media/photo-l/02/58/5b/50/yummy-gravy-on-the-chips.jpg",
                    height: "150",
                },
                thumbnail: {
                    width: "50",
                    url: "https://media-cdn.tripadvisor.com/media/photo-t/02/58/5b/50/yummy-gravy-on-the-chips.jpg",
                    height: "50",
                },
                original: {
                    width: "604",
                    url: "https://media-cdn.tripadvisor.com/media/photo-o/02/58/5b/50/yummy-gravy-on-the-chips.jpg",
                    height: "453",
                },
                large: {
                    width: "550",
                    url: "https://media-cdn.tripadvisor.com/media/photo-s/02/58/5b/50/yummy-gravy-on-the-chips.jpg",
                    height: "412",
                },
                medium: {
                    width: "250",
                    url: "https://media-cdn.tripadvisor.com/media/photo-f/02/58/5b/50/yummy-gravy-on-the-chips.jpg",
                    height: "187",
                },
            },
            is_blessed: true,
            uploaded_date: "2012-02-20T15:35:08-0500",
            caption: "Yummy gravy on the chips!",
            id: "39344976",
            helpful_votes: "1",
            published_date: "2012-02-21T13:19:57-0500",
            user: {
                user_id: null,
                member_id: "0",
                type: "user",
            },
        },
        awards: [
            {
                award_type: "CERTIFICATE_OF_EXCELLENCE",
                year: "2020",
                images: {
                    small: "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
                    large: "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2020_en_US_large-0-5.jpg",
                },
                categories: [],
                display_name: "Certificate of Excellence 2020",
            },
            {
                award_type: "CERTIFICATE_OF_EXCELLENCE",
                year: "2019",
                images: {
                    small: "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
                    large: "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2019_en_US_large-0-5.jpg",
                },
                categories: [],
                display_name: "Certificate of Excellence 2019",
            },
            {
                award_type: "CERTIFICATE_OF_EXCELLENCE",
                year: "2018",
                images: {
                    small: "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
                    large: "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2018_en_US_large-0-5.jpg",
                },
                categories: [],
                display_name: "Certificate of Excellence 2018",
            },
            {
                award_type: "CERTIFICATE_OF_EXCELLENCE",
                year: "2017",
                images: {
                    small: "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
                    large: "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2017_en_US_large-0-5.jpg",
                },
                categories: [],
                display_name: "Certificate of Excellence 2017",
            },
            {
                award_type: "CERTIFICATE_OF_EXCELLENCE",
                year: "2016",
                images: {
                    small: "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
                    large: "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2016_en_US_large-0-5.jpg",
                },
                categories: [],
                display_name: "Certificate of Excellence 2016",
            },
            {
                award_type: "CERTIFICATE_OF_EXCELLENCE",
                year: "2015",
                images: {
                    small: "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
                    large: "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2015_en_US_large-0-5.jpg",
                },
                categories: [],
                display_name: "Certificate of Excellence 2015",
            },
            {
                award_type: "CERTIFICATE_OF_EXCELLENCE",
                year: "2013",
                images: {
                    small: "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
                    large: "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2013_en_US_large-0-5.jpg",
                },
                categories: [],
                display_name: "Certificate of Excellence 2013",
            },
        ],
        doubleclick_zone: "na.can.ontario",
        preferred_map_engine: "default",
        raw_ranking: "4.194788932800293",
        ranking_geo: "Brampton",
        ranking_geo_id: "154982",
        ranking_position: "4",
        ranking_denominator: "615",
        ranking_category: "restaurant",
        ranking: "#4 of 847 Restaurants in Brampton",
        distance: "0.8249748960140383",
        distance_string: "0.8 km",
        bearing: "east",
        rating: "4.5",
        is_closed: false,
        open_now_text: "Open Now",
        is_long_closed: false,
        price_level: "$$ - $$$",
        price: "$7 - $15",
        description:
            "Heritage Fish & Chips has been dedicated to providing customers in Brampton with authentic British style pub food for over 22 years. Our menu includes halibut, salmon, cod, trout, tilapia, haddock and grouper, homemade chips, onion rings, coleslaw and mashed potatoes, steamed vegetables, chowder, salads and more. We also offer a kids menu and daily lunch specials. Visit our website to see our full restaurant and delivery menus. Come visit our clean and welcoming location today to enjoy delicious fish and chips.",
        web_url:
            "https://www.tripadvisor.com/Restaurant_Review-g154982-d783287-Reviews-Heritage_Fish_Chips-Brampton_Ontario.html",
        write_review:
            "https://www.tripadvisor.com/UserReview-g154982-d783287-Heritage_Fish_Chips-Brampton_Ontario.html",
        ancestors: [
            {
                subcategory: [
                    {
                        key: "city",
                        name: "City",
                    },
                ],
                name: "Brampton",
                abbrv: null,
                location_id: "154982",
            },
            {
                subcategory: [
                    {
                        key: "province",
                        name: "Province",
                    },
                ],
                name: "Ontario",
                abbrv: null,
                location_id: "154979",
            },
            {
                subcategory: [
                    {
                        key: "country",
                        name: "Country",
                    },
                ],
                name: "Canada",
                abbrv: null,
                location_id: "153339",
            },
        ],
        category: {
            key: "restaurant",
            name: "Restaurant",
        },
        subcategory: [
            {
                key: "sit_down",
                name: "Sit down",
            },
        ],
        parent_display_name: "Brampton",
        is_jfy_enabled: false,
        nearest_metro_station: [],
        phone: "+1 905-451-0725",
        website: "http://www.heritagefishnchips.com",
        address_obj: {
            street1: "295 Queen St E",
            street2: "",
            city: "Brampton",
            state: null,
            country: "Canada",
            postalcode: "L6W 3R1",
        },
        address: "295 Queen St E, Brampton, Ontario L6W 3R1 Canada",
        hours: {
            week_ranges: [
                [
                    {
                        open_time: 0,
                        close_time: 420,
                    },
                ],
                [
                    {
                        open_time: 660,
                        close_time: 1200,
                    },
                ],
                [
                    {
                        open_time: 660,
                        close_time: 1200,
                    },
                ],
                [
                    {
                        open_time: 660,
                        close_time: 1200,
                    },
                ],
                [
                    {
                        open_time: 660,
                        close_time: 1200,
                    },
                ],
                [
                    {
                        open_time: 660,
                        close_time: 1260,
                    },
                ],
                [
                    {
                        open_time: 660,
                        close_time: 1200,
                    },
                ],
            ],
            timezone: "America/Toronto",
        },
        is_candidate_for_contact_info_suppression: false,
        cuisine: [
            {
                key: "10643",
                name: "Seafood",
            },
            {
                key: "10662",
                name: "British",
            },
            {
                key: "10699",
                name: "Canadian",
            },
        ],
        dietary_restrictions: [],
        establishment_types: [
            {
                key: "10591",
                name: "Restaurants",
            },
        ],
    },
    {
        location_id: "709886",
        name: "The Keg Steakhouse + Bar - Brampton",
        latitude: "43.70452",
        longitude: "-79.78611",
        num_reviews: "383",
        timezone: "America/Toronto",
        location_string: "Brampton, Ontario",
        photo: {
            images: {
                small: {
                    width: "150",
                    url: "https://media-cdn.tripadvisor.com/media/photo-l/0e/3e/49/68/the-keg-steakhouse-bar.jpg",
                    height: "150",
                },
                thumbnail: {
                    width: "50",
                    url: "https://media-cdn.tripadvisor.com/media/photo-t/0e/3e/49/68/the-keg-steakhouse-bar.jpg",
                    height: "50",
                },
                original: {
                    width: "680",
                    url: "https://media-cdn.tripadvisor.com/media/photo-o/0e/3e/49/68/the-keg-steakhouse-bar.jpg",
                    height: "453",
                },
                large: {
                    width: "680",
                    url: "https://media-cdn.tripadvisor.com/media/photo-o/0e/3e/49/68/the-keg-steakhouse-bar.jpg",
                    height: "453",
                },
                medium: {
                    width: "550",
                    url: "https://media-cdn.tripadvisor.com/media/photo-s/0e/3e/49/68/the-keg-steakhouse-bar.jpg",
                    height: "366",
                },
            },
            is_blessed: true,
            uploaded_date: "2017-01-24T11:03:47-0500",
            caption: "The Keg Steakhouse + Bar",
            id: "238963048",
            helpful_votes: "0",
            published_date: "2017-01-24T11:03:47-0500",
            user: {
                user_id: null,
                member_id: "0",
                type: "user",
            },
        },
        awards: [
            {
                award_type: "CERTIFICATE_OF_EXCELLENCE",
                year: "2020",
                images: {
                    small: "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
                    large: "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2020_en_US_large-0-5.jpg",
                },
                categories: [],
                display_name: "Certificate of Excellence 2020",
            },
            {
                award_type: "CERTIFICATE_OF_EXCELLENCE",
                year: "2019",
                images: {
                    small: "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
                    large: "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2019_en_US_large-0-5.jpg",
                },
                categories: [],
                display_name: "Certificate of Excellence 2019",
            },
            {
                award_type: "CERTIFICATE_OF_EXCELLENCE",
                year: "2018",
                images: {
                    small: "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
                    large: "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2018_en_US_large-0-5.jpg",
                },
                categories: [],
                display_name: "Certificate of Excellence 2018",
            },
            {
                award_type: "CERTIFICATE_OF_EXCELLENCE",
                year: "2017",
                images: {
                    small: "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
                    large: "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2017_en_US_large-0-5.jpg",
                },
                categories: [],
                display_name: "Certificate of Excellence 2017",
            },
            {
                award_type: "CERTIFICATE_OF_EXCELLENCE",
                year: "2016",
                images: {
                    small: "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
                    large: "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2016_en_US_large-0-5.jpg",
                },
                categories: [],
                display_name: "Certificate of Excellence 2016",
            },
            {
                award_type: "CERTIFICATE_OF_EXCELLENCE",
                year: "2015",
                images: {
                    small: "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
                    large: "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2015_en_US_large-0-5.jpg",
                },
                categories: [],
                display_name: "Certificate of Excellence 2015",
            },
            {
                award_type: "CERTIFICATE_OF_EXCELLENCE",
                year: "2014",
                images: {
                    small: "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
                    large: "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2014_en_US_large-0-5.jpg",
                },
                categories: [],
                display_name: "Certificate of Excellence 2014",
            },
            {
                award_type: "CERTIFICATE_OF_EXCELLENCE",
                year: "2013",
                images: {
                    small: "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
                    large: "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2013_en_US_large-0-5.jpg",
                },
                categories: [],
                display_name: "Certificate of Excellence 2013",
            },
        ],
        doubleclick_zone: "na.can.ontario",
        preferred_map_engine: "default",
        raw_ranking: "4.048900127410889",
        ranking_geo: "Brampton",
        ranking_geo_id: "154982",
        ranking_position: "7",
        ranking_denominator: "615",
        ranking_category: "restaurant",
        ranking: "#7 of 847 Restaurants in Brampton",
        distance: "2.8228121158711184",
        distance_string: "2.8 km",
        bearing: "west",
        rating: "4.0",
        is_closed: false,
        open_now_text: "Closed Now",
        is_long_closed: false,
        price_level: "$$ - $$$",
        description:
            "Whether you're dining around our table or yours, make every occasion a special one. Visit our website to book your table or order takeout online.",
        web_url:
            "https://www.tripadvisor.com/Restaurant_Review-g154982-d709886-Reviews-The_Keg_Steakhouse_Bar_Brampton-Brampton_Ontario.html",
        write_review:
            "https://www.tripadvisor.com/UserReview-g154982-d709886-The_Keg_Steakhouse_Bar_Brampton-Brampton_Ontario.html",
        ancestors: [
            {
                subcategory: [
                    {
                        key: "city",
                        name: "City",
                    },
                ],
                name: "Brampton",
                abbrv: null,
                location_id: "154982",
            },
            {
                subcategory: [
                    {
                        key: "province",
                        name: "Province",
                    },
                ],
                name: "Ontario",
                abbrv: null,
                location_id: "154979",
            },
            {
                subcategory: [
                    {
                        key: "country",
                        name: "Country",
                    },
                ],
                name: "Canada",
                abbrv: null,
                location_id: "153339",
            },
        ],
        category: {
            key: "restaurant",
            name: "Restaurant",
        },
        subcategory: [
            {
                key: "sit_down",
                name: "Sit down",
            },
        ],
        parent_display_name: "Brampton",
        is_jfy_enabled: false,
        nearest_metro_station: [],
        phone: "+1 905-456-3733",
        website: "http://kegsteakhouse.com/en/locations/brampton",
        email: "kegcommunity@kegrestaurants.com",
        address_obj: {
            street1: "70 Gillingham Dr",
            street2: "",
            city: "Brampton",
            state: null,
            country: "Canada",
            postalcode: "L6X 4X7",
        },
        address: "70 Gillingham Dr, Brampton, Ontario L6X 4X7 Canada",
        hours: {
            week_ranges: [
                [
                    {
                        open_time: 900,
                        close_time: 1380,
                    },
                ],
                [
                    {
                        open_time: 960,
                        close_time: 1380,
                    },
                ],
                [
                    {
                        open_time: 960,
                        close_time: 1380,
                    },
                ],
                [
                    {
                        open_time: 960,
                        close_time: 1380,
                    },
                ],
                [
                    {
                        open_time: 960,
                        close_time: 1380,
                    },
                ],
                [
                    {
                        open_time: 960,
                        close_time: 1440,
                    },
                ],
                [
                    {
                        open_time: 900,
                        close_time: 1440,
                    },
                ],
            ],
            timezone: "America/Toronto",
        },
        is_candidate_for_contact_info_suppression: false,
        cuisine: [
            {
                key: "10345",
                name: "Steakhouse",
            },
            {
                key: "10640",
                name: "Bar",
            },
            {
                key: "10699",
                name: "Canadian",
            },
            {
                key: "10665",
                name: "Vegetarian Friendly",
            },
            {
                key: "10992",
                name: "Gluten Free Options",
            },
        ],
        dietary_restrictions: [
            {
                key: "10665",
                name: "Vegetarian Friendly",
            },
            {
                key: "10992",
                name: "Gluten Free Options",
            },
        ],
        booking: {
            provider: "OpenTable",
            url: "https://www.tripadvisor.com/Commerce?p=OpenTableRestaurants&src=106779318&geo=709886&from=api&area=reservation_button&slot=1&matchID=1&oos=0&cnt=1&silo=0&bucket=0&nrank=1&crank=1&clt=R&ttype=Restaurant&tm=230817579&managed=false&capped=false&gosox=b11j9Vm_otaRB2A8Qtu7FLnSeCIMSZfUNUDKekvG_sbZpVb7Z5U5cZA98EmySZgTeSPdFiIGiSGs3F0PLshVypPz8I3qwUvG2m8MRS4HNdE&cs=10a943fe8ef55e22bee817749755b643e",
        },
        reserve_info: {
            id: "709886",
            provider: "OpenTable",
            provider_img:
                "https://static.tacdn.com/img2/eateries/Logo_horizontal_RGB-1000x232.png",
            url: "https://www.tripadvisor.com/Commerce?p=OpenTableRestaurants&src=106779318&geo=709886&from=api&area=reservation_button&slot=1&matchID=1&oos=0&cnt=1&silo=0&bucket=0&nrank=1&crank=1&clt=R&ttype=Restaurant&tm=230817579&managed=false&capped=false&gosox=b11j9Vm_otaRB2A8Qtu7FLnSeCIMSZfUNUDKekvG_sbZpVb7Z5U5cZA98EmySZgTeSPdFiIGiSGs3F0PLshVypPz8I3qwUvG2m8MRS4HNdE&cs=10a943fe8ef55e22bee817749755b643e",
            booking_partner_id: "1",
            racable: false,
            api_bookable: true,
            timeslots: null,
            bestoffer: null,
            timeslot_offers: null,
            button_text: "Reserve",
            disclaimer_text: null,
            banner_text: null,
        },
        establishment_types: [
            {
                key: "10591",
                name: "Restaurants",
            },
        ],
    },
    {
        location_id: "3932661",
        name: "Bucatini Restaurant & Wine Bar",
        latitude: "43.7045",
        longitude: "-79.7893",
        num_reviews: "199",
        timezone: "America/Toronto",
        location_string: "Brampton, Ontario",
        photo: {
            images: {
                small: {
                    width: "150",
                    url: "https://media-cdn.tripadvisor.com/media/photo-l/0d/db/33/7d/photo0jpg.jpg",
                    height: "150",
                },
                thumbnail: {
                    width: "50",
                    url: "https://media-cdn.tripadvisor.com/media/photo-t/0d/db/33/7d/photo0jpg.jpg",
                    height: "50",
                },
                original: {
                    width: "2048",
                    url: "https://media-cdn.tripadvisor.com/media/photo-o/0d/db/33/7d/photo0jpg.jpg",
                    height: "1536",
                },
                large: {
                    width: "550",
                    url: "https://media-cdn.tripadvisor.com/media/photo-s/0d/db/33/7d/photo0jpg.jpg",
                    height: "413",
                },
                medium: {
                    width: "250",
                    url: "https://media-cdn.tripadvisor.com/media/photo-f/0d/db/33/7d/photo0jpg.jpg",
                    height: "188",
                },
            },
            is_blessed: true,
            uploaded_date: "2016-12-12T02:41:04-0500",
            caption: "",
            id: "232469373",
            helpful_votes: "0",
            published_date: "2016-12-12T02:41:04-0500",
            user: {
                user_id: null,
                member_id: "0",
                type: "user",
            },
        },
        awards: [
            {
                award_type: "CERTIFICATE_OF_EXCELLENCE",
                year: "2019",
                images: {
                    small: "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
                    large: "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2019_en_US_large-0-5.jpg",
                },
                categories: [],
                display_name: "Certificate of Excellence 2019",
            },
            {
                award_type: "CERTIFICATE_OF_EXCELLENCE",
                year: "2018",
                images: {
                    small: "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
                    large: "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2018_en_US_large-0-5.jpg",
                },
                categories: [],
                display_name: "Certificate of Excellence 2018",
            },
            {
                award_type: "CERTIFICATE_OF_EXCELLENCE",
                year: "2016",
                images: {
                    small: "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
                    large: "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2016_en_US_large-0-5.jpg",
                },
                categories: [],
                display_name: "Certificate of Excellence 2016",
            },
            {
                award_type: "CERTIFICATE_OF_EXCELLENCE",
                year: "2015",
                images: {
                    small: "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
                    large: "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2015_en_US_large-0-5.jpg",
                },
                categories: [],
                display_name: "Certificate of Excellence 2015",
            },
        ],
        doubleclick_zone: "na.can.ontario",
        preferred_map_engine: "default",
        raw_ranking: "3.5537209510803223",
        ranking_geo: "Brampton",
        ranking_geo_id: "154982",
        ranking_position: "16",
        ranking_denominator: "615",
        ranking_category: "restaurant",
        ranking: "#16 of 847 Restaurants in Brampton",
        distance: "3.0780733005021066",
        distance_string: "3.1 km",
        bearing: "west",
        rating: "4.0",
        is_closed: false,
        open_now_text: "Closed today",
        is_long_closed: false,
        price_level: "$$ - $$$",
        price: "$18 - $45",
        description:
            "Bucatini Restaurant & Wine Bar offers a casual fine dining experience with a modern atmosphere and authentic Italian cuisine. The perfect venue for quiet dinners, corporate functions, family occasions and all celebrations. Custom menus are available for private events as well as an outdoor patio for the summer months.",
        web_url:
            "https://www.tripadvisor.com/Restaurant_Review-g154982-d3932661-Reviews-Bucatini_Restaurant_Wine_Bar-Brampton_Ontario.html",
        write_review:
            "https://www.tripadvisor.com/UserReview-g154982-d3932661-Bucatini_Restaurant_Wine_Bar-Brampton_Ontario.html",
        ancestors: [
            {
                subcategory: [
                    {
                        key: "city",
                        name: "City",
                    },
                ],
                name: "Brampton",
                abbrv: null,
                location_id: "154982",
            },
            {
                subcategory: [
                    {
                        key: "province",
                        name: "Province",
                    },
                ],
                name: "Ontario",
                abbrv: null,
                location_id: "154979",
            },
            {
                subcategory: [
                    {
                        key: "country",
                        name: "Country",
                    },
                ],
                name: "Canada",
                abbrv: null,
                location_id: "153339",
            },
        ],
        category: {
            key: "restaurant",
            name: "Restaurant",
        },
        subcategory: [
            {
                key: "sit_down",
                name: "Sit down",
            },
        ],
        parent_display_name: "Brampton",
        is_jfy_enabled: false,
        nearest_metro_station: [],
        phone: "+1 905-459-6777",
        website: "http://bucatinirestaurant.com",
        email: "vincebucatini@gmail.com",
        address_obj: {
            street1: "170 Bovaird Dr W",
            street2: null,
            city: "Brampton",
            state: null,
            country: "Canada",
            postalcode: "L7A 1A1",
        },
        address: "170 Bovaird Dr W, Brampton, Ontario L7A 1A1 Canada",
        hours: {
            week_ranges: [
                [
                    {
                        open_time: 1020,
                        close_time: 1260,
                    },
                ],
                [],
                [
                    {
                        open_time: 690,
                        close_time: 1260,
                    },
                ],
                [
                    {
                        open_time: 690,
                        close_time: 1260,
                    },
                ],
                [
                    {
                        open_time: 690,
                        close_time: 1260,
                    },
                ],
                [
                    {
                        open_time: 690,
                        close_time: 1320,
                    },
                ],
                [
                    {
                        open_time: 1020,
                        close_time: 1320,
                    },
                ],
            ],
            timezone: "America/Toronto",
        },
        is_candidate_for_contact_info_suppression: false,
        cuisine: [
            {
                key: "4617",
                name: "Italian",
            },
            {
                key: "10682",
                name: "Wine Bar",
            },
            {
                key: "10665",
                name: "Vegetarian Friendly",
            },
            {
                key: "10992",
                name: "Gluten Free Options",
            },
        ],
        dietary_restrictions: [
            {
                key: "10665",
                name: "Vegetarian Friendly",
            },
            {
                key: "10992",
                name: "Gluten Free Options",
            },
        ],
        establishment_types: [
            {
                key: "10591",
                name: "Restaurants",
            },
        ],
    },
    {
        location_id: "10357856",
        name: "Mirch Masala",
        latitude: "43.70027",
        longitude: "-79.74346",
        num_reviews: "42",
        timezone: "America/Toronto",
        location_string: "Brampton, Ontario",
        photo: {
            images: {
                small: {
                    width: "150",
                    url: "https://media-cdn.tripadvisor.com/media/photo-l/12/ba/e4/c8/a-sizzling-tandoori-special.jpg",
                    height: "150",
                },
                thumbnail: {
                    width: "50",
                    url: "https://media-cdn.tripadvisor.com/media/photo-t/12/ba/e4/c8/a-sizzling-tandoori-special.jpg",
                    height: "50",
                },
                original: {
                    width: "2000",
                    url: "https://media-cdn.tripadvisor.com/media/photo-o/12/ba/e4/c8/a-sizzling-tandoori-special.jpg",
                    height: "1333",
                },
                large: {
                    width: "1024",
                    url: "https://media-cdn.tripadvisor.com/media/photo-w/12/ba/e4/c8/a-sizzling-tandoori-special.jpg",
                    height: "682",
                },
                medium: {
                    width: "550",
                    url: "https://media-cdn.tripadvisor.com/media/photo-s/12/ba/e4/c8/a-sizzling-tandoori-special.jpg",
                    height: "367",
                },
            },
            is_blessed: true,
            uploaded_date: "2018-04-23T14:50:05-0400",
            caption:
                "A sizzling Tandoori special at fine dining Indian restaurant Mirch Masala in Brampton.",
            id: "314238152",
            helpful_votes: "3",
            published_date: "2018-04-23T14:50:05-0400",
            user: {
                user_id: null,
                member_id: "0",
                type: "user",
            },
        },
        awards: [
            {
                award_type: "CERTIFICATE_OF_EXCELLENCE",
                year: "2020",
                images: {
                    small: "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
                    large: "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2020_en_US_large-0-5.jpg",
                },
                categories: [],
                display_name: "Certificate of Excellence 2020",
            },
        ],
        doubleclick_zone: "na.can.ontario",
        preferred_map_engine: "default",
        raw_ranking: "3.4771063327789307",
        ranking_geo: "Brampton",
        ranking_geo_id: "154982",
        ranking_position: "22",
        ranking_denominator: "615",
        ranking_category: "restaurant",
        ranking: "#22 of 847 Restaurants in Brampton",
        distance: "0.6532102129224332",
        distance_string: "0.7 km",
        bearing: "east",
        rating: "4.5",
        is_closed: false,
        open_now_text: "Closed Now",
        is_long_closed: false,
        price_level: "$$ - $$$",
        price: "$10 - $19",
        description:
            "Mirch Masala is taking northern Indian cuisine to new heights in Brampton. We specialise in Tandoori and Punjabi style curries from the Amritsar and Patiala regions as well as offering north frontier dishes from Kashmir Valley. Chef Sarabjit Singh, who is also the owner, offers a high end, fine dining experience using the freshest, high quality ingredients and made from scratch recipes. Some of our most popular dishes include Goan style fish curry and chicken vindaloo and our sizzling tandoori specials. Be sure to check out the Mirch Masala difference and why we are being hailed as one of the best high end Indian restaurants in Brampton.",
        web_url:
            "https://www.tripadvisor.com/Restaurant_Review-g154982-d10357856-Reviews-Mirch_Masala-Brampton_Ontario.html",
        write_review:
            "https://www.tripadvisor.com/UserReview-g154982-d10357856-Mirch_Masala-Brampton_Ontario.html",
        ancestors: [
            {
                subcategory: [
                    {
                        key: "city",
                        name: "City",
                    },
                ],
                name: "Brampton",
                abbrv: null,
                location_id: "154982",
            },
            {
                subcategory: [
                    {
                        key: "province",
                        name: "Province",
                    },
                ],
                name: "Ontario",
                abbrv: null,
                location_id: "154979",
            },
            {
                subcategory: [
                    {
                        key: "country",
                        name: "Country",
                    },
                ],
                name: "Canada",
                abbrv: null,
                location_id: "153339",
            },
        ],
        category: {
            key: "restaurant",
            name: "Restaurant",
        },
        subcategory: [
            {
                key: "sit_down",
                name: "Sit down",
            },
        ],
        parent_display_name: "Brampton",
        is_jfy_enabled: false,
        nearest_metro_station: [],
        phone: "+1 905-216-7322",
        website: "http://mirchmasalabrampton.ca/",
        address_obj: {
            street1: "263 Queen St E",
            street2: null,
            city: "Brampton",
            state: null,
            country: "Canada",
            postalcode: "L6W 4K6",
        },
        address: "263 Queen St E, Brampton, Ontario L6W 4K6 Canada",
        hours: {
            week_ranges: [
                [
                    {
                        open_time: 960,
                        close_time: 1380,
                    },
                ],
                [
                    {
                        open_time: 960,
                        close_time: 1320,
                    },
                ],
                [
                    {
                        open_time: 960,
                        close_time: 1320,
                    },
                ],
                [
                    {
                        open_time: 960,
                        close_time: 1320,
                    },
                ],
                [
                    {
                        open_time: 960,
                        close_time: 1320,
                    },
                ],
                [
                    {
                        open_time: 960,
                        close_time: 1440,
                    },
                ],
                [
                    {
                        open_time: 960,
                        close_time: 1440,
                    },
                ],
            ],
            timezone: "America/Toronto",
        },
        is_candidate_for_contact_info_suppression: false,
        cuisine: [
            {
                key: "10346",
                name: "Indian",
            },
            {
                key: "10665",
                name: "Vegetarian Friendly",
            },
            {
                key: "10697",
                name: "Vegan Options",
            },
        ],
        dietary_restrictions: [
            {
                key: "10665",
                name: "Vegetarian Friendly",
            },
            {
                key: "10697",
                name: "Vegan Options",
            },
        ],
        establishment_types: [
            {
                key: "10591",
                name: "Restaurants",
            },
        ],
    },
    {
        location_id: "4852531",
        name: "Shawarma Queen",
        latitude: "43.70338",
        longitude: "-79.7849",
        num_reviews: "52",
        timezone: "America/Toronto",
        location_string: "Brampton, Ontario",
        photo: {
            images: {
                small: {
                    width: "150",
                    url: "https://media-cdn.tripadvisor.com/media/photo-l/08/f1/9b/78/shawarma-queen.jpg",
                    height: "150",
                },
                thumbnail: {
                    width: "50",
                    url: "https://media-cdn.tripadvisor.com/media/photo-t/08/f1/9b/78/shawarma-queen.jpg",
                    height: "50",
                },
                original: {
                    width: "675",
                    url: "https://media-cdn.tripadvisor.com/media/photo-o/08/f1/9b/78/shawarma-queen.jpg",
                    height: "506",
                },
                large: {
                    width: "550",
                    url: "https://media-cdn.tripadvisor.com/media/photo-s/08/f1/9b/78/shawarma-queen.jpg",
                    height: "412",
                },
                medium: {
                    width: "250",
                    url: "https://media-cdn.tripadvisor.com/media/photo-f/08/f1/9b/78/shawarma-queen.jpg",
                    height: "187",
                },
            },
            is_blessed: true,
            uploaded_date: "2015-09-16T11:08:33-0400",
            caption: "1",
            id: "150051704",
            helpful_votes: "1",
            published_date: "2015-09-16T11:08:33-0400",
            user: {
                user_id: null,
                member_id: "0",
                type: "user",
            },
        },
        awards: [],
        doubleclick_zone: "na.can.ontario",
        preferred_map_engine: "default",
        raw_ranking: "3.442894458770752",
        ranking_geo: "Brampton",
        ranking_geo_id: "154982",
        ranking_position: "24",
        ranking_denominator: "615",
        ranking_category: "restaurant",
        ranking: "#24 of 847 Restaurants in Brampton",
        distance: "2.715934446011023",
        distance_string: "2.7 km",
        bearing: "west",
        rating: "4.5",
        is_closed: false,
        open_now_text: "Open Now",
        is_long_closed: false,
        price_level: "$",
        description: "",
        web_url:
            "https://www.tripadvisor.com/Restaurant_Review-g154982-d4852531-Reviews-Shawarma_Queen-Brampton_Ontario.html",
        write_review:
            "https://www.tripadvisor.com/UserReview-g154982-d4852531-Shawarma_Queen-Brampton_Ontario.html",
        ancestors: [
            {
                subcategory: [
                    {
                        key: "city",
                        name: "City",
                    },
                ],
                name: "Brampton",
                abbrv: null,
                location_id: "154982",
            },
            {
                subcategory: [
                    {
                        key: "province",
                        name: "Province",
                    },
                ],
                name: "Ontario",
                abbrv: null,
                location_id: "154979",
            },
            {
                subcategory: [
                    {
                        key: "country",
                        name: "Country",
                    },
                ],
                name: "Canada",
                abbrv: null,
                location_id: "153339",
            },
        ],
        category: {
            key: "restaurant",
            name: "Restaurant",
        },
        subcategory: [],
        parent_display_name: "Brampton",
        is_jfy_enabled: false,
        nearest_metro_station: [],
        phone: "+1 905-457-6664",
        website: "http://www.shawarmaqueen.com",
        email: "contactus@shawarmaqueen.com",
        address_obj: {
            street1: "10 Gillingham Dr",
            street2: null,
            city: "Brampton",
            state: null,
            country: "Canada",
            postalcode: "L6X 5A5",
        },
        address: "10 Gillingham Dr, Brampton, Ontario L6X 5A5 Canada",
        hours: {
            week_ranges: [
                [],
                [
                    {
                        open_time: 600,
                        close_time: 1320,
                    },
                ],
                [
                    {
                        open_time: 600,
                        close_time: 1320,
                    },
                ],
                [
                    {
                        open_time: 600,
                        close_time: 1320,
                    },
                ],
                [
                    {
                        open_time: 600,
                        close_time: 1320,
                    },
                ],
                [
                    {
                        open_time: 600,
                        close_time: 1320,
                    },
                ],
                [
                    {
                        open_time: 630,
                        close_time: 1380,
                    },
                ],
            ],
            timezone: "America/Toronto",
        },
        is_candidate_for_contact_info_suppression: false,
        cuisine: [
            {
                key: "10649",
                name: "Mediterranean",
            },
            {
                key: "10687",
                name: "Middle Eastern",
            },
            {
                key: "10626",
                name: "Lebanese",
            },
            {
                key: "10646",
                name: "Fast Food",
            },
            {
                key: "10665",
                name: "Vegetarian Friendly",
            },
            {
                key: "10697",
                name: "Vegan Options",
            },
        ],
        dietary_restrictions: [
            {
                key: "10665",
                name: "Vegetarian Friendly",
            },
            {
                key: "10697",
                name: "Vegan Options",
            },
        ],
        booking: {
            provider: "SkipTheDishes",
            url: "https://www.tripadvisor.com/Commerce?p=Delivery_Takeaway&src=218831309&geo=4852531&from=api&area=reservation_button&slot=1&matchID=1&oos=0&cnt=1&silo=30023&bucket=964305&nrank=1&crank=1&clt=R&ttype=Restaurant&tm=230817579&managed=false&capped=false&gosox=qs47FbMDbcv-HhvPS98PQf-9m8nf2yOS8LWjz44KVNmWpYNNM3AMr4R6hGrqZHR2NGi9I6nuBPmXmunT2F7Y2a3XCquBc3iVrnNbTYLbPn4&cs=1585f0be679e50e35fd75bfc44e0b7ec0",
        },
        reserve_info: {
            id: "4852531",
            provider: "SkipTheDishes",
            provider_img:
                "https://static.tacdn.com/img2/eateries/skipthedishes_11.19.2021.png",
            url: "https://www.tripadvisor.com/Commerce?p=Delivery_Takeaway&src=218831309&geo=4852531&from=api&area=reservation_button&slot=1&matchID=1&oos=0&cnt=1&silo=30023&bucket=964305&nrank=1&crank=1&clt=R&ttype=Restaurant&tm=230817579&managed=false&capped=false&gosox=qs47FbMDbcv-HhvPS98PQf-9m8nf2yOS8LWjz44KVNmWpYNNM3AMr4R6hGrqZHR2NGi9I6nuBPmXmunT2F7Y2a3XCquBc3iVrnNbTYLbPn4&cs=1585f0be679e50e35fd75bfc44e0b7ec0",
            booking_partner_id: null,
            racable: false,
            api_bookable: false,
            timeslots: null,
            bestoffer: null,
            timeslot_offers: null,
            button_text: "Order Online",
            disclaimer_text: null,
            banner_text: null,
        },
        establishment_types: [
            {
                key: "10591",
                name: "Restaurants",
            },
        ],
    },
    {
        location_id: "710267",
        name: "Toshi Japanese Restaurant",
        latitude: "43.70384",
        longitude: "-79.78469",
        num_reviews: "82",
        timezone: "America/Toronto",
        location_string: "Brampton, Ontario",
        photo: {
            images: {
                small: {
                    width: "150",
                    url: "https://media-cdn.tripadvisor.com/media/photo-l/08/da/8c/67/salmon.jpg",
                    height: "150",
                },
                thumbnail: {
                    width: "50",
                    url: "https://media-cdn.tripadvisor.com/media/photo-t/08/da/8c/67/salmon.jpg",
                    height: "50",
                },
                original: {
                    width: "854",
                    url: "https://media-cdn.tripadvisor.com/media/photo-o/08/da/8c/67/salmon.jpg",
                    height: "640",
                },
                large: {
                    width: "550",
                    url: "https://media-cdn.tripadvisor.com/media/photo-s/08/da/8c/67/salmon.jpg",
                    height: "412",
                },
                medium: {
                    width: "250",
                    url: "https://media-cdn.tripadvisor.com/media/photo-f/08/da/8c/67/salmon.jpg",
                    height: "187",
                },
            },
            is_blessed: true,
            uploaded_date: "2015-09-05T23:15:03-0400",
            caption: "salmon",
            id: "148540519",
            helpful_votes: "0",
            published_date: "2015-09-05T23:15:03-0400",
            user: {
                user_id: null,
                member_id: "0",
                type: "user",
            },
        },
        awards: [
            {
                award_type: "CERTIFICATE_OF_EXCELLENCE",
                year: "2017",
                images: {
                    small: "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
                    large: "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2017_en_US_large-0-5.jpg",
                },
                categories: [],
                display_name: "Certificate of Excellence 2017",
            },
        ],
        doubleclick_zone: "na.can.ontario",
        preferred_map_engine: "default",
        raw_ranking: "3.382387161254883",
        ranking_geo: "Brampton",
        ranking_geo_id: "154982",
        ranking_position: "29",
        ranking_denominator: "615",
        ranking_category: "restaurant",
        ranking: "#29 of 847 Restaurants in Brampton",
        distance: "2.702609528341196",
        distance_string: "2.7 km",
        bearing: "west",
        rating: "4.0",
        is_closed: false,
        open_now_text: "Open Now",
        is_long_closed: false,
        price_level: "$$ - $$$",
        description: "",
        web_url:
            "https://www.tripadvisor.com/Restaurant_Review-g154982-d710267-Reviews-Toshi_Japanese_Restaurant-Brampton_Ontario.html",
        write_review:
            "https://www.tripadvisor.com/UserReview-g154982-d710267-Toshi_Japanese_Restaurant-Brampton_Ontario.html",
        ancestors: [
            {
                subcategory: [
                    {
                        key: "city",
                        name: "City",
                    },
                ],
                name: "Brampton",
                abbrv: null,
                location_id: "154982",
            },
            {
                subcategory: [
                    {
                        key: "province",
                        name: "Province",
                    },
                ],
                name: "Ontario",
                abbrv: null,
                location_id: "154979",
            },
            {
                subcategory: [
                    {
                        key: "country",
                        name: "Country",
                    },
                ],
                name: "Canada",
                abbrv: null,
                location_id: "153339",
            },
        ],
        category: {
            key: "restaurant",
            name: "Restaurant",
        },
        subcategory: [
            {
                key: "sit_down",
                name: "Sit down",
            },
        ],
        parent_display_name: "Brampton",
        is_jfy_enabled: false,
        nearest_metro_station: [],
        phone: "+1 905-451-1428",
        website: "http://www.toshi.ca",
        address_obj: {
            street1: "10 Gillingham Dr",
            street2: "",
            city: "Brampton",
            state: null,
            country: "Canada",
            postalcode: "L6X 5A5",
        },
        address: "10 Gillingham Dr, Brampton, Ontario L6X 5A5 Canada",
        hours: {
            week_ranges: [
                [],
                [
                    {
                        open_time: 690,
                        close_time: 870,
                    },
                    {
                        open_time: 1020,
                        close_time: 1290,
                    },
                ],
                [
                    {
                        open_time: 690,
                        close_time: 870,
                    },
                    {
                        open_time: 1020,
                        close_time: 1290,
                    },
                ],
                [
                    {
                        open_time: 690,
                        close_time: 870,
                    },
                    {
                        open_time: 1020,
                        close_time: 1290,
                    },
                ],
                [
                    {
                        open_time: 690,
                        close_time: 870,
                    },
                    {
                        open_time: 1020,
                        close_time: 1290,
                    },
                ],
                [
                    {
                        open_time: 690,
                        close_time: 870,
                    },
                    {
                        open_time: 1020,
                        close_time: 1350,
                    },
                ],
                [
                    {
                        open_time: 1020,
                        close_time: 1350,
                    },
                ],
            ],
            timezone: "America/Toronto",
        },
        is_candidate_for_contact_info_suppression: false,
        cuisine: [
            {
                key: "5473",
                name: "Japanese",
            },
            {
                key: "10653",
                name: "Sushi",
            },
            {
                key: "10659",
                name: "Asian",
            },
            {
                key: "10665",
                name: "Vegetarian Friendly",
            },
        ],
        dietary_restrictions: [
            {
                key: "10665",
                name: "Vegetarian Friendly",
            },
        ],
        establishment_types: [
            {
                key: "10591",
                name: "Restaurants",
            },
        ],
    },
    {
        location_id: "708256",
        name: "Red Lobster",
        latitude: "43.7039",
        longitude: "-79.74123",
        num_reviews: "160",
        timezone: "America/Toronto",
        location_string: "Brampton, Ontario",
        photo: {
            images: {
                small: {
                    width: "250",
                    url: "https://media-cdn.tripadvisor.com/media/photo-f/14/db/12/46/meal.jpg",
                    height: "141",
                },
                thumbnail: {
                    width: "50",
                    url: "https://media-cdn.tripadvisor.com/media/photo-t/14/db/12/46/meal.jpg",
                    height: "50",
                },
                original: {
                    width: "1280",
                    url: "https://media-cdn.tripadvisor.com/media/photo-m/1280/14/db/12/46/meal.jpg",
                    height: "720",
                },
                large: {
                    width: "1024",
                    url: "https://media-cdn.tripadvisor.com/media/photo-w/14/db/12/46/meal.jpg",
                    height: "576",
                },
                medium: {
                    width: "550",
                    url: "https://media-cdn.tripadvisor.com/media/photo-s/14/db/12/46/meal.jpg",
                    height: "309",
                },
            },
            is_blessed: true,
            uploaded_date: "2018-09-28T13:59:13-0400",
            caption: "meal",
            id: "349901382",
            helpful_votes: "0",
            published_date: "2018-09-28T13:59:13-0400",
            user: {
                user_id: null,
                member_id: "0",
                type: "user",
            },
        },
        awards: [
            {
                award_type: "CERTIFICATE_OF_EXCELLENCE",
                year: "2014",
                images: {
                    small: "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
                    large: "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2014_en_US_large-0-5.jpg",
                },
                categories: [],
                display_name: "Certificate of Excellence 2014",
            },
        ],
        doubleclick_zone: "na.can.ontario",
        preferred_map_engine: "default",
        raw_ranking: "3.3271403312683105",
        ranking_geo: "Brampton",
        ranking_geo_id: "154982",
        ranking_position: "34",
        ranking_denominator: "615",
        ranking_category: "restaurant",
        ranking: "#33 of 847 Restaurants in Brampton",
        distance: "0.8271849035744784",
        distance_string: "0.8 km",
        bearing: "east",
        rating: "3.5",
        is_closed: false,
        open_now_text: "Open Now",
        is_long_closed: false,
        price_level: "$$ - $$$",
        description: "",
        web_url:
            "https://www.tripadvisor.com/Restaurant_Review-g154982-d708256-Reviews-Red_Lobster-Brampton_Ontario.html",
        write_review:
            "https://www.tripadvisor.com/UserReview-g154982-d708256-Red_Lobster-Brampton_Ontario.html",
        ancestors: [
            {
                subcategory: [
                    {
                        key: "city",
                        name: "City",
                    },
                ],
                name: "Brampton",
                abbrv: null,
                location_id: "154982",
            },
            {
                subcategory: [
                    {
                        key: "province",
                        name: "Province",
                    },
                ],
                name: "Ontario",
                abbrv: null,
                location_id: "154979",
            },
            {
                subcategory: [
                    {
                        key: "country",
                        name: "Country",
                    },
                ],
                name: "Canada",
                abbrv: null,
                location_id: "153339",
            },
        ],
        category: {
            key: "restaurant",
            name: "Restaurant",
        },
        subcategory: [
            {
                key: "sit_down",
                name: "Sit down",
            },
        ],
        parent_display_name: "Brampton",
        is_jfy_enabled: false,
        nearest_metro_station: [],
        phone: "+1 905-459-6334",
        website:
            "https://www.redlobster.ca/locations/list/on/brampton/368-queen-street-e",
        address_obj: {
            street1: "368 Queen St E",
            street2: "",
            city: "Brampton",
            state: null,
            country: "Canada",
            postalcode: "L6V 1C3",
        },
        address: "368 Queen St E, Brampton, Ontario L6V 1C3 Canada",
        hours: {
            week_ranges: [
                [
                    {
                        open_time: 690,
                        close_time: 1230,
                    },
                ],
                [
                    {
                        open_time: 690,
                        close_time: 1230,
                    },
                ],
                [
                    {
                        open_time: 690,
                        close_time: 1230,
                    },
                ],
                [
                    {
                        open_time: 690,
                        close_time: 1230,
                    },
                ],
                [
                    {
                        open_time: 690,
                        close_time: 1230,
                    },
                ],
                [
                    {
                        open_time: 690,
                        close_time: 1290,
                    },
                ],
                [
                    {
                        open_time: 690,
                        close_time: 1290,
                    },
                ],
            ],
            timezone: "America/Toronto",
        },
        is_candidate_for_contact_info_suppression: false,
        cuisine: [
            {
                key: "10643",
                name: "Seafood",
            },
            {
                key: "9908",
                name: "American",
            },
            {
                key: "10992",
                name: "Gluten Free Options",
            },
        ],
        dietary_restrictions: [
            {
                key: "10992",
                name: "Gluten Free Options",
            },
        ],
        booking: {
            provider: "SkipTheDishes",
            url: "https://www.tripadvisor.com/Commerce?p=Delivery_Takeaway&src=218848314&geo=708256&from=api&area=reservation_button&slot=1&matchID=1&oos=0&cnt=1&silo=30023&bucket=964305&nrank=1&crank=1&clt=R&ttype=Restaurant&tm=230817579&managed=false&capped=false&gosox=qs47FbMDbcv-HhvPS98PQf-9m8nf2yOS8LWjz44KVNmWpYNNM3AMr4R6hGrqZHR2NGi9I6nuBPmXmunT2F7Y2WH4u5_7liDONKkFbX9XlGw&cs=1321804315cc29b145103a1ae3dfc73e3",
        },
        reserve_info: {
            id: "708256",
            provider: "SkipTheDishes",
            provider_img:
                "https://static.tacdn.com/img2/eateries/skipthedishes_11.19.2021.png",
            url: "https://www.tripadvisor.com/Commerce?p=Delivery_Takeaway&src=218848314&geo=708256&from=api&area=reservation_button&slot=1&matchID=1&oos=0&cnt=1&silo=30023&bucket=964305&nrank=1&crank=1&clt=R&ttype=Restaurant&tm=230817579&managed=false&capped=false&gosox=qs47FbMDbcv-HhvPS98PQf-9m8nf2yOS8LWjz44KVNmWpYNNM3AMr4R6hGrqZHR2NGi9I6nuBPmXmunT2F7Y2WH4u5_7liDONKkFbX9XlGw&cs=1321804315cc29b145103a1ae3dfc73e3",
            booking_partner_id: null,
            racable: false,
            api_bookable: false,
            timeslots: null,
            bestoffer: null,
            timeslot_offers: null,
            button_text: "Order Online",
            disclaimer_text: null,
            banner_text: null,
        },
        establishment_types: [
            {
                key: "10591",
                name: "Restaurants",
            },
        ],
    },
    {
        location_id: "9581278",
        name: "520 Sushi",
        latitude: "43.697002",
        longitude: "-79.74875",
        num_reviews: "41",
        timezone: "America/Toronto",
        location_string: "Brampton, Ontario",
        photo: {
            images: {
                small: {
                    width: "150",
                    url: "https://media-cdn.tripadvisor.com/media/photo-l/0b/82/0a/d9/520-sushi.jpg",
                    height: "150",
                },
                thumbnail: {
                    width: "50",
                    url: "https://media-cdn.tripadvisor.com/media/photo-t/0b/82/0a/d9/520-sushi.jpg",
                    height: "50",
                },
                original: {
                    width: "720",
                    url: "https://media-cdn.tripadvisor.com/media/photo-o/0b/82/0a/d9/520-sushi.jpg",
                    height: "960",
                },
                large: {
                    width: "550",
                    url: "https://media-cdn.tripadvisor.com/media/photo-p/0b/82/0a/d9/520-sushi.jpg",
                    height: "733",
                },
                medium: {
                    width: "337",
                    url: "https://media-cdn.tripadvisor.com/media/photo-s/0b/82/0a/d9/520-sushi.jpg",
                    height: "450",
                },
            },
            is_blessed: true,
            uploaded_date: "2016-06-04T11:56:19-0400",
            caption: "520 Sushi",
            id: "193071833",
            helpful_votes: "0",
            published_date: "2016-06-04T11:56:19-0400",
            user: {
                user_id: null,
                member_id: "0",
                type: "user",
            },
        },
        awards: [],
        doubleclick_zone: "na.can.ontario",
        preferred_map_engine: "default",
        raw_ranking: "3.296058177947998",
        ranking_geo: "Brampton",
        ranking_geo_id: "154982",
        ranking_position: "38",
        ranking_denominator: "615",
        ranking_category: "restaurant",
        ranking: "#36 of 847 Restaurants in Brampton",
        distance: "0.5970540840781534",
        distance_string: "0.6 km",
        bearing: "south",
        rating: "4.0",
        is_closed: false,
        is_long_closed: false,
        price_level: "$$ - $$$",
        description: "",
        web_url:
            "https://www.tripadvisor.com/Restaurant_Review-g154982-d9581278-Reviews-520_Sushi-Brampton_Ontario.html",
        write_review:
            "https://www.tripadvisor.com/UserReview-g154982-d9581278-520_Sushi-Brampton_Ontario.html",
        ancestors: [
            {
                subcategory: [
                    {
                        key: "city",
                        name: "City",
                    },
                ],
                name: "Brampton",
                abbrv: null,
                location_id: "154982",
            },
            {
                subcategory: [
                    {
                        key: "province",
                        name: "Province",
                    },
                ],
                name: "Ontario",
                abbrv: null,
                location_id: "154979",
            },
            {
                subcategory: [
                    {
                        key: "country",
                        name: "Country",
                    },
                ],
                name: "Canada",
                abbrv: null,
                location_id: "153339",
            },
        ],
        category: {
            key: "restaurant",
            name: "Restaurant",
        },
        subcategory: [],
        parent_display_name: "Brampton",
        is_jfy_enabled: false,
        nearest_metro_station: [],
        phone: "+1 905-457-6593",
        website: "http://www.520sushibrampton.com",
        address_obj: {
            street1: "252 Queen St E",
            street2: "Unit 7",
            city: "Brampton",
            state: null,
            country: "Canada",
            postalcode: "L6V 1C1",
        },
        address: "252 Queen St E Unit 7, Brampton, Ontario L6V 1C1 Canada",
        is_candidate_for_contact_info_suppression: false,
        cuisine: [
            {
                key: "5473",
                name: "Japanese",
            },
            {
                key: "10653",
                name: "Sushi",
            },
            {
                key: "10659",
                name: "Asian",
            },
            {
                key: "10665",
                name: "Vegetarian Friendly",
            },
        ],
        dietary_restrictions: [
            {
                key: "10665",
                name: "Vegetarian Friendly",
            },
        ],
        booking: {
            provider: "SkipTheDishes",
            url: "https://www.tripadvisor.com/Commerce?p=Delivery_Takeaway&src=218815254&geo=9581278&from=api&area=reservation_button&slot=1&matchID=1&oos=0&cnt=1&silo=30023&bucket=964305&nrank=1&crank=1&clt=R&ttype=Restaurant&tm=230817579&managed=false&capped=false&gosox=qs47FbMDbcv-HhvPS98PQf-9m8nf2yOS8LWjz44KVNmWpYNNM3AMr4R6hGrqZHR2NGi9I6nuBPmXmunT2F7Y2cES6PvM-zWZ5BPaier39WI&cs=10a146ce767f56166516576f8e39fdacc",
        },
        reserve_info: {
            id: "9581278",
            provider: "SkipTheDishes",
            provider_img:
                "https://static.tacdn.com/img2/eateries/skipthedishes_11.19.2021.png",
            url: "https://www.tripadvisor.com/Commerce?p=Delivery_Takeaway&src=218815254&geo=9581278&from=api&area=reservation_button&slot=1&matchID=1&oos=0&cnt=1&silo=30023&bucket=964305&nrank=1&crank=1&clt=R&ttype=Restaurant&tm=230817579&managed=false&capped=false&gosox=qs47FbMDbcv-HhvPS98PQf-9m8nf2yOS8LWjz44KVNmWpYNNM3AMr4R6hGrqZHR2NGi9I6nuBPmXmunT2F7Y2cES6PvM-zWZ5BPaier39WI&cs=10a146ce767f56166516576f8e39fdacc",
            booking_partner_id: null,
            racable: false,
            api_bookable: false,
            timeslots: null,
            bestoffer: null,
            timeslot_offers: null,
            button_text: "Order Online",
            disclaimer_text: null,
            banner_text: null,
        },
        establishment_types: [
            {
                key: "10591",
                name: "Restaurants",
            },
        ],
    },
    {
        location_id: "1236569",
        name: "Sunset Grill",
        latitude: "43.70593",
        longitude: "-79.78689",
        num_reviews: "66",
        timezone: "America/Toronto",
        location_string: "Brampton, Ontario",
        photo: {
            images: {
                small: {
                    width: "150",
                    url: "https://media-cdn.tripadvisor.com/media/photo-l/15/36/08/e2/5-strips-of-premium-bacon.jpg",
                    height: "150",
                },
                thumbnail: {
                    width: "50",
                    url: "https://media-cdn.tripadvisor.com/media/photo-t/15/36/08/e2/5-strips-of-premium-bacon.jpg",
                    height: "50",
                },
                original: {
                    width: "1000",
                    url: "https://media-cdn.tripadvisor.com/media/photo-o/15/36/08/e2/5-strips-of-premium-bacon.jpg",
                    height: "749",
                },
                large: {
                    width: "550",
                    url: "https://media-cdn.tripadvisor.com/media/photo-s/15/36/08/e2/5-strips-of-premium-bacon.jpg",
                    height: "412",
                },
                medium: {
                    width: "250",
                    url: "https://media-cdn.tripadvisor.com/media/photo-f/15/36/08/e2/5-strips-of-premium-bacon.jpg",
                    height: "187",
                },
            },
            is_blessed: true,
            uploaded_date: "2018-10-31T12:06:12-0400",
            caption:
                "5 strips of premium bacon, three eggs, and freshly sliced tomatoes served with thick toast. ",
            id: "355862754",
            helpful_votes: "0",
            published_date: "2018-10-31T12:06:12-0400",
            user: {
                user_id: null,
                member_id: "0",
                type: "user",
            },
        },
        awards: [],
        doubleclick_zone: "na.can.ontario",
        preferred_map_engine: "default",
        raw_ranking: "3.2894644737243652",
        ranking_geo: "Brampton",
        ranking_geo_id: "154982",
        ranking_position: "42",
        ranking_denominator: "615",
        ranking_category: "restaurant",
        ranking: "#38 of 847 Restaurants in Brampton",
        distance: "2.904117904717136",
        distance_string: "2.9 km",
        bearing: "west",
        rating: "4.0",
        is_closed: false,
        open_now_text: "Open Now",
        is_long_closed: false,
        price_level: "$$ - $$$",
        description:
            "Looking for the perfect spot to bring the family for some fresh-made breakfast or to catch up with old friends over brunch? Fresh is Tastiest™ is our philosophy here at Sunset Grill – our guests love our food because we use fresh ingredients, healthy cooking methods, deliver generous portions, and provide quick, personalized service. Our focus is providing our guests with great-tasting, made-to-order breakfast, brunch, and lunch favourites. We invite you to try one of our Famous All-Day Breakfast™ dishes such as our classic bacon and eggs with home fries and thick toast, eggs benedict, omelettes, steak and eggs, pancakes, or malted waffles, while you enjoy bottomless refills of our signature blend medium-roast coffee. We also cater to the lunch crowd and have tasty sandwiches, burgers, and salads available that are prepared fresh daily. Stop by, say hi, and give us a try. You won’t be disappointed.",
        web_url:
            "https://www.tripadvisor.com/Restaurant_Review-g154982-d1236569-Reviews-Sunset_Grill-Brampton_Ontario.html",
        write_review:
            "https://www.tripadvisor.com/UserReview-g154982-d1236569-Sunset_Grill-Brampton_Ontario.html",
        ancestors: [
            {
                subcategory: [
                    {
                        key: "city",
                        name: "City",
                    },
                ],
                name: "Brampton",
                abbrv: null,
                location_id: "154982",
            },
            {
                subcategory: [
                    {
                        key: "province",
                        name: "Province",
                    },
                ],
                name: "Ontario",
                abbrv: null,
                location_id: "154979",
            },
            {
                subcategory: [
                    {
                        key: "country",
                        name: "Country",
                    },
                ],
                name: "Canada",
                abbrv: null,
                location_id: "153339",
            },
        ],
        category: {
            key: "restaurant",
            name: "Restaurant",
        },
        subcategory: [
            {
                key: "sit_down",
                name: "Sit down",
            },
        ],
        parent_display_name: "Brampton",
        is_jfy_enabled: false,
        nearest_metro_station: [],
        phone: "+1 905-495-3149",
        website: "http://www.sunsetgrill.ca/",
        email: "comments@sunsetgrill.ca",
        address_obj: {
            street1: "10025 Hurontario St., Unit 13",
            street2: "Hurontario St. & Bovaird Dr. E.",
            city: "Brampton",
            state: null,
            country: "Canada",
            postalcode: "L6Z 0E6",
        },
        address:
            "10025 Hurontario St., Unit 13 Hurontario St. & Bovaird Dr. E., Brampton, Ontario L6Z 0E6 Canada",
        hours: {
            week_ranges: [
                [
                    {
                        open_time: 420,
                        close_time: 930,
                    },
                ],
                [
                    {
                        open_time: 390,
                        close_time: 900,
                    },
                ],
                [
                    {
                        open_time: 390,
                        close_time: 900,
                    },
                ],
                [
                    {
                        open_time: 390,
                        close_time: 900,
                    },
                ],
                [
                    {
                        open_time: 390,
                        close_time: 900,
                    },
                ],
                [
                    {
                        open_time: 390,
                        close_time: 900,
                    },
                ],
                [
                    {
                        open_time: 390,
                        close_time: 930,
                    },
                ],
            ],
            timezone: "America/Toronto",
        },
        is_candidate_for_contact_info_suppression: false,
        cuisine: [
            {
                key: "10699",
                name: "Canadian",
            },
            {
                key: "10676",
                name: "Diner",
            },
        ],
        dietary_restrictions: [],
        booking: {
            provider: "SkipTheDishes",
            url: "https://www.tripadvisor.com/Commerce?p=Delivery_Takeaway&src=218831814&geo=1236569&from=api&area=reservation_button&slot=1&matchID=1&oos=0&cnt=1&silo=30023&bucket=964305&nrank=1&crank=1&clt=R&ttype=Restaurant&tm=230817579&managed=false&capped=false&gosox=qs47FbMDbcv-HhvPS98PQf-9m8nf2yOS8LWjz44KVNmWpYNNM3AMr4R6hGrqZHR2NGi9I6nuBPmXmunT2F7Y2UEhTcpyJ0dw8Vynd09adCA&cs=12c2540bc4931ddff67ad5032db084f94",
        },
        reserve_info: {
            id: "1236569",
            provider: "SkipTheDishes",
            provider_img:
                "https://static.tacdn.com/img2/eateries/skipthedishes_11.19.2021.png",
            url: "https://www.tripadvisor.com/Commerce?p=Delivery_Takeaway&src=218831814&geo=1236569&from=api&area=reservation_button&slot=1&matchID=1&oos=0&cnt=1&silo=30023&bucket=964305&nrank=1&crank=1&clt=R&ttype=Restaurant&tm=230817579&managed=false&capped=false&gosox=qs47FbMDbcv-HhvPS98PQf-9m8nf2yOS8LWjz44KVNmWpYNNM3AMr4R6hGrqZHR2NGi9I6nuBPmXmunT2F7Y2UEhTcpyJ0dw8Vynd09adCA&cs=12c2540bc4931ddff67ad5032db084f94",
            booking_partner_id: null,
            racable: false,
            api_bookable: false,
            timeslots: null,
            bestoffer: null,
            timeslot_offers: null,
            button_text: "Order Online",
            disclaimer_text: null,
            banner_text: null,
        },
        establishment_types: [
            {
                key: "10591",
                name: "Restaurants",
            },
        ],
    },
    {
        location_id: "981681",
        name: "Churrasqueira Nova Esperanca",
        latitude: "43.70096",
        longitude: "-79.77875",
        num_reviews: "25",
        timezone: "America/Toronto",
        location_string: "Brampton, Ontario",
        photo: {
            images: {
                small: {
                    width: "150",
                    url: "https://media-cdn.tripadvisor.com/media/photo-l/10/ad/8a/08/delicious.jpg",
                    height: "150",
                },
                thumbnail: {
                    width: "50",
                    url: "https://media-cdn.tripadvisor.com/media/photo-t/10/ad/8a/08/delicious.jpg",
                    height: "50",
                },
                original: {
                    width: "2000",
                    url: "https://media-cdn.tripadvisor.com/media/photo-o/10/ad/8a/08/delicious.jpg",
                    height: "1500",
                },
                large: {
                    width: "550",
                    url: "https://media-cdn.tripadvisor.com/media/photo-s/10/ad/8a/08/delicious.jpg",
                    height: "413",
                },
                medium: {
                    width: "250",
                    url: "https://media-cdn.tripadvisor.com/media/photo-f/10/ad/8a/08/delicious.jpg",
                    height: "188",
                },
            },
            is_blessed: true,
            uploaded_date: "2017-09-16T13:14:03-0400",
            caption: "Delicious!",
            id: "279808520",
            helpful_votes: "5",
            published_date: "2017-09-16T13:14:03-0400",
            user: {
                user_id: null,
                member_id: "0",
                type: "user",
            },
        },
        awards: [],
        doubleclick_zone: "na.can.ontario",
        preferred_map_engine: "default",
        raw_ranking: "3.2602007389068604",
        ranking_geo: "Brampton",
        ranking_geo_id: "154982",
        ranking_position: "48",
        ranking_denominator: "615",
        ranking_category: "restaurant",
        ranking: "#44 of 847 Restaurants in Brampton",
        distance: "2.2207228915637565",
        distance_string: "2.2 km",
        bearing: "west",
        rating: "4.5",
        is_closed: false,
        is_long_closed: false,
        price_level: "$",
        description: "",
        web_url:
            "https://www.tripadvisor.com/Restaurant_Review-g154982-d981681-Reviews-Churrasqueira_Nova_Esperanca-Brampton_Ontario.html",
        write_review:
            "https://www.tripadvisor.com/UserReview-g154982-d981681-Churrasqueira_Nova_Esperanca-Brampton_Ontario.html",
        ancestors: [
            {
                subcategory: [
                    {
                        key: "city",
                        name: "City",
                    },
                ],
                name: "Brampton",
                abbrv: null,
                location_id: "154982",
            },
            {
                subcategory: [
                    {
                        key: "province",
                        name: "Province",
                    },
                ],
                name: "Ontario",
                abbrv: null,
                location_id: "154979",
            },
            {
                subcategory: [
                    {
                        key: "country",
                        name: "Country",
                    },
                ],
                name: "Canada",
                abbrv: null,
                location_id: "153339",
            },
        ],
        category: {
            key: "restaurant",
            name: "Restaurant",
        },
        subcategory: [
            {
                key: "sit_down",
                name: "Sit down",
            },
        ],
        parent_display_name: "Brampton",
        is_jfy_enabled: false,
        nearest_metro_station: [],
        phone: "+1 905-457-5592",
        website: "http://www.churrasqueirarestaurant.ca/AboutUs.aspx",
        address_obj: {
            street1: "1-110 Brickyard Way",
            street2: "",
            city: "Brampton",
            state: null,
            country: "Canada",
            postalcode: "L6V 4N1",
        },
        address: "1-110 Brickyard Way, Brampton, Ontario L6V 4N1 Canada",
        is_candidate_for_contact_info_suppression: false,
        cuisine: [
            {
                key: "10651",
                name: "Barbecue",
            },
            {
                key: "10654",
                name: "European",
            },
            {
                key: "10680",
                name: "Portuguese",
            },
        ],
        dietary_restrictions: [],
        establishment_types: [
            {
                key: "10591",
                name: "Restaurants",
            },
        ],
    },
    {
        location_id: "12116465",
        name: "Royal Kabob Afghan Cuisine",
        latitude: "43.69942",
        longitude: "-79.74601",
        num_reviews: "12",
        timezone: "America/Toronto",
        location_string: "Brampton, Ontario",
        photo: {
            images: {
                small: {
                    width: "150",
                    url: "https://media-cdn.tripadvisor.com/media/photo-l/0e/c8/0d/64/royal-kabob-afghan-cuisine.jpg",
                    height: "150",
                },
                thumbnail: {
                    width: "50",
                    url: "https://media-cdn.tripadvisor.com/media/photo-t/0e/c8/0d/64/royal-kabob-afghan-cuisine.jpg",
                    height: "50",
                },
                original: {
                    width: "640",
                    url: "https://media-cdn.tripadvisor.com/media/photo-o/0e/c8/0d/64/royal-kabob-afghan-cuisine.jpg",
                    height: "480",
                },
                large: {
                    width: "550",
                    url: "https://media-cdn.tripadvisor.com/media/photo-s/0e/c8/0d/64/royal-kabob-afghan-cuisine.jpg",
                    height: "412",
                },
                medium: {
                    width: "250",
                    url: "https://media-cdn.tripadvisor.com/media/photo-f/0e/c8/0d/64/royal-kabob-afghan-cuisine.jpg",
                    height: "187",
                },
            },
            is_blessed: true,
            uploaded_date: "2017-03-25T20:33:18-0400",
            caption: "Royal kabob afghan cuisine",
            id: "247991652",
            helpful_votes: "0",
            published_date: "2017-03-25T20:33:18-0400",
            user: {
                user_id: null,
                member_id: "0",
                type: "user",
            },
        },
        awards: [],
        doubleclick_zone: "na.can.ontario",
        preferred_map_engine: "default",
        raw_ranking: "3.24408221244812",
        ranking_geo: "Brampton",
        ranking_geo_id: "154982",
        ranking_position: "55",
        ranking_denominator: "615",
        ranking_category: "restaurant",
        ranking: "#50 of 847 Restaurants in Brampton",
        distance: "0.5104442789241838",
        distance_string: "0.5 km",
        bearing: "southeast",
        rating: "5.0",
        is_closed: false,
        is_long_closed: false,
        price_level: "$$ - $$$",
        description: "",
        web_url:
            "https://www.tripadvisor.com/Restaurant_Review-g154982-d12116465-Reviews-Royal_Kabob_Afghan_Cuisine-Brampton_Ontario.html",
        write_review:
            "https://www.tripadvisor.com/UserReview-g154982-d12116465-Royal_Kabob_Afghan_Cuisine-Brampton_Ontario.html",
        ancestors: [
            {
                subcategory: [
                    {
                        key: "city",
                        name: "City",
                    },
                ],
                name: "Brampton",
                abbrv: null,
                location_id: "154982",
            },
            {
                subcategory: [
                    {
                        key: "province",
                        name: "Province",
                    },
                ],
                name: "Ontario",
                abbrv: null,
                location_id: "154979",
            },
            {
                subcategory: [
                    {
                        key: "country",
                        name: "Country",
                    },
                ],
                name: "Canada",
                abbrv: null,
                location_id: "153339",
            },
        ],
        category: {
            key: "restaurant",
            name: "Restaurant",
        },
        subcategory: [],
        parent_display_name: "Brampton",
        is_jfy_enabled: false,
        nearest_metro_station: [],
        phone: "+1 905-450-9924",
        website:
            "https://www.facebook.com/Royal-Kabob-Afghan-Cuisine-427275871109305/",
        address_obj: {
            street1: "284 Queen St E",
            street2: null,
            city: "Brampton",
            state: null,
            country: "Canada",
            postalcode: "L6V 1C2",
        },
        address: "284 Queen St E, Brampton, Ontario L6V 1C2 Canada",
        is_candidate_for_contact_info_suppression: false,
        cuisine: [
            {
                key: "10687",
                name: "Middle Eastern",
            },
            {
                key: "10788",
                name: "Afghani",
            },
        ],
        dietary_restrictions: [],
        booking: {
            provider: "SkipTheDishes",
            url: "https://www.tripadvisor.com/Commerce?p=Delivery_Takeaway&src=218817210&geo=12116465&from=api&area=reservation_button&slot=1&matchID=1&oos=0&cnt=1&silo=30023&bucket=964305&nrank=1&crank=1&clt=R&ttype=Restaurant&tm=230817579&managed=false&capped=false&gosox=qs47FbMDbcv-HhvPS98PQf-9m8nf2yOS8LWjz44KVNmWpYNNM3AMr4R6hGrqZHR2NGi9I6nuBPmXmunT2F7Y2ZoImRo_Kttbu96NX64P9CM&cs=1f3b2d2393e2b2619353492d267466b00",
        },
        reserve_info: {
            id: "12116465",
            provider: "SkipTheDishes",
            provider_img:
                "https://static.tacdn.com/img2/eateries/skipthedishes_11.19.2021.png",
            url: "https://www.tripadvisor.com/Commerce?p=Delivery_Takeaway&src=218817210&geo=12116465&from=api&area=reservation_button&slot=1&matchID=1&oos=0&cnt=1&silo=30023&bucket=964305&nrank=1&crank=1&clt=R&ttype=Restaurant&tm=230817579&managed=false&capped=false&gosox=qs47FbMDbcv-HhvPS98PQf-9m8nf2yOS8LWjz44KVNmWpYNNM3AMr4R6hGrqZHR2NGi9I6nuBPmXmunT2F7Y2ZoImRo_Kttbu96NX64P9CM&cs=1f3b2d2393e2b2619353492d267466b00",
            booking_partner_id: null,
            racable: false,
            api_bookable: false,
            timeslots: null,
            bestoffer: null,
            timeslot_offers: null,
            button_text: "Order Online",
            disclaimer_text: null,
            banner_text: null,
        },
        establishment_types: [
            {
                key: "10591",
                name: "Restaurants",
            },
        ],
    },
    {
        location_id: "3812637",
        name: "Flip's Restaurant",
        latitude: "43.70422",
        longitude: "-79.78533",
        num_reviews: "76",
        timezone: "America/Toronto",
        location_string: "Brampton, Ontario",
        photo: {
            images: {
                small: {
                    width: "150",
                    url: "https://media-cdn.tripadvisor.com/media/photo-l/05/ee/56/a3/flip-s-restaurant.jpg",
                    height: "150",
                },
                thumbnail: {
                    width: "50",
                    url: "https://media-cdn.tripadvisor.com/media/photo-t/05/ee/56/a3/flip-s-restaurant.jpg",
                    height: "50",
                },
                original: {
                    width: "720",
                    url: "https://media-cdn.tripadvisor.com/media/photo-o/05/ee/56/a3/flip-s-restaurant.jpg",
                    height: "960",
                },
                large: {
                    width: "550",
                    url: "https://media-cdn.tripadvisor.com/media/photo-p/05/ee/56/a3/flip-s-restaurant.jpg",
                    height: "733",
                },
                medium: {
                    width: "337",
                    url: "https://media-cdn.tripadvisor.com/media/photo-s/05/ee/56/a3/flip-s-restaurant.jpg",
                    height: "450",
                },
            },
            is_blessed: true,
            uploaded_date: "2014-05-28T10:44:43-0400",
            caption: "Bacon and Eggs with Rye Toast",
            id: "99505827",
            helpful_votes: "1",
            published_date: "2014-05-30T15:20:26-0400",
            user: {
                user_id: null,
                member_id: "0",
                type: "user",
            },
        },
        awards: [
            {
                award_type: "CERTIFICATE_OF_EXCELLENCE",
                year: "2016",
                images: {
                    small: "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_small-0-5.jpg",
                    large: "https://www.tripadvisor.com/img/cdsi/img2/awards/CERTIFICATE_OF_EXCELLENCE_2016_en_US_large-0-5.jpg",
                },
                categories: [],
                display_name: "Certificate of Excellence 2016",
            },
        ],
        doubleclick_zone: "na.can.ontario",
        preferred_map_engine: "default",
        raw_ranking: "3.232496976852417",
        ranking_geo: "Brampton",
        ranking_geo_id: "154982",
        ranking_position: "61",
        ranking_denominator: "615",
        ranking_category: "restaurant",
        ranking: "#56 of 847 Restaurants in Brampton",
        distance: "2.757391740241123",
        distance_string: "2.8 km",
        bearing: "west",
        rating: "4.0",
        is_closed: false,
        open_now_text: "Open Now",
        is_long_closed: false,
        price_level: "$",
        description: "",
        web_url:
            "https://www.tripadvisor.com/Restaurant_Review-g154982-d3812637-Reviews-Flip_s_Restaurant-Brampton_Ontario.html",
        write_review:
            "https://www.tripadvisor.com/UserReview-g154982-d3812637-Flip_s_Restaurant-Brampton_Ontario.html",
        ancestors: [
            {
                subcategory: [
                    {
                        key: "city",
                        name: "City",
                    },
                ],
                name: "Brampton",
                abbrv: null,
                location_id: "154982",
            },
            {
                subcategory: [
                    {
                        key: "province",
                        name: "Province",
                    },
                ],
                name: "Ontario",
                abbrv: null,
                location_id: "154979",
            },
            {
                subcategory: [
                    {
                        key: "country",
                        name: "Country",
                    },
                ],
                name: "Canada",
                abbrv: null,
                location_id: "153339",
            },
        ],
        category: {
            key: "restaurant",
            name: "Restaurant",
        },
        subcategory: [
            {
                key: "sit_down",
                name: "Sit down",
            },
        ],
        parent_display_name: "Brampton",
        is_jfy_enabled: false,
        nearest_metro_station: [],
        phone: "+1 905-452-8188",
        website: "https://www.facebook.com/Flips-Restaurant-104386969611965/",
        address_obj: {
            street1: "575 Main St N",
            street2: "",
            city: "Brampton",
            state: null,
            country: "Canada",
            postalcode: "L6X 0G6",
        },
        address: "575 Main St N, Brampton, Ontario L6X 0G6 Canada",
        hours: {
            week_ranges: [
                [
                    {
                        open_time: 450,
                        close_time: 900,
                    },
                ],
                [
                    {
                        open_time: 450,
                        close_time: 900,
                    },
                ],
                [
                    {
                        open_time: 450,
                        close_time: 900,
                    },
                ],
                [
                    {
                        open_time: 450,
                        close_time: 900,
                    },
                ],
                [
                    {
                        open_time: 450,
                        close_time: 900,
                    },
                ],
                [
                    {
                        open_time: 450,
                        close_time: 900,
                    },
                ],
                [
                    {
                        open_time: 450,
                        close_time: 900,
                    },
                ],
            ],
            timezone: "America/Toronto",
        },
        is_candidate_for_contact_info_suppression: false,
        cuisine: [
            {
                key: "9908",
                name: "American",
            },
            {
                key: "10699",
                name: "Canadian",
            },
        ],
        dietary_restrictions: [],
        booking: {
            provider: "SkipTheDishes",
            url: "https://www.tripadvisor.com/Commerce?p=Delivery_Takeaway&src=218827159&geo=3812637&from=api&area=reservation_button&slot=1&matchID=1&oos=0&cnt=1&silo=30023&bucket=964305&nrank=1&crank=1&clt=R&ttype=Restaurant&tm=230817579&managed=false&capped=false&gosox=qs47FbMDbcv-HhvPS98PQf-9m8nf2yOS8LWjz44KVNmWpYNNM3AMr4R6hGrqZHR2NGi9I6nuBPmXmunT2F7Y2QdHMpeJaEo4VYAa1DtbmzI&cs=1efa4946585efc63297d349036e7edd98",
        },
        reserve_info: {
            id: "3812637",
            provider: "SkipTheDishes",
            provider_img:
                "https://static.tacdn.com/img2/eateries/skipthedishes_11.19.2021.png",
            url: "https://www.tripadvisor.com/Commerce?p=Delivery_Takeaway&src=218827159&geo=3812637&from=api&area=reservation_button&slot=1&matchID=1&oos=0&cnt=1&silo=30023&bucket=964305&nrank=1&crank=1&clt=R&ttype=Restaurant&tm=230817579&managed=false&capped=false&gosox=qs47FbMDbcv-HhvPS98PQf-9m8nf2yOS8LWjz44KVNmWpYNNM3AMr4R6hGrqZHR2NGi9I6nuBPmXmunT2F7Y2QdHMpeJaEo4VYAa1DtbmzI&cs=1efa4946585efc63297d349036e7edd98",
            booking_partner_id: null,
            racable: false,
            api_bookable: false,
            timeslots: null,
            bestoffer: null,
            timeslot_offers: null,
            button_text: "Order Online",
            disclaimer_text: null,
            banner_text: null,
        },
        establishment_types: [
            {
                key: "10591",
                name: "Restaurants",
            },
        ],
    },
    {
        location_id: "4853548",
        name: "Prem Sweets & Restaurant",
        latitude: "43.702896",
        longitude: "-79.78616",
        num_reviews: "21",
        timezone: "America/Toronto",
        location_string: "Brampton, Ontario",
        photo: {
            images: {
                small: {
                    width: "150",
                    url: "https://media-cdn.tripadvisor.com/media/photo-l/0e/65/4e/fa/mixed-dishes.jpg",
                    height: "150",
                },
                thumbnail: {
                    width: "50",
                    url: "https://media-cdn.tripadvisor.com/media/photo-t/0e/65/4e/fa/mixed-dishes.jpg",
                    height: "50",
                },
                original: {
                    width: "2000",
                    url: "https://media-cdn.tripadvisor.com/media/photo-o/0e/65/4e/fa/mixed-dishes.jpg",
                    height: "1500",
                },
                large: {
                    width: "550",
                    url: "https://media-cdn.tripadvisor.com/media/photo-s/0e/65/4e/fa/mixed-dishes.jpg",
                    height: "413",
                },
                medium: {
                    width: "250",
                    url: "https://media-cdn.tripadvisor.com/media/photo-f/0e/65/4e/fa/mixed-dishes.jpg",
                    height: "188",
                },
            },
            is_blessed: true,
            uploaded_date: "2017-02-10T17:49:42-0500",
            caption: "Mixed Dishes",
            id: "241520378",
            helpful_votes: "0",
            published_date: "2017-02-10T17:49:42-0500",
            user: {
                user_id: null,
                member_id: "0",
                type: "user",
            },
        },
        awards: [],
        doubleclick_zone: "na.can.ontario",
        preferred_map_engine: "default",
        raw_ranking: "3.218735456466675",
        ranking_geo: "Brampton",
        ranking_geo_id: "154982",
        ranking_position: "67",
        ranking_denominator: "615",
        ranking_category: "restaurant",
        ranking: "#62 of 847 Restaurants in Brampton",
        distance: "2.8154235253066977",
        distance_string: "2.8 km",
        bearing: "west",
        rating: "4.0",
        is_closed: false,
        open_now_text: "Open Now",
        is_long_closed: false,
        price_level: "$",
        description: "",
        web_url:
            "https://www.tripadvisor.com/Restaurant_Review-g154982-d4853548-Reviews-Prem_Sweets_Restaurant-Brampton_Ontario.html",
        write_review:
            "https://www.tripadvisor.com/UserReview-g154982-d4853548-Prem_Sweets_Restaurant-Brampton_Ontario.html",
        ancestors: [
            {
                subcategory: [
                    {
                        key: "city",
                        name: "City",
                    },
                ],
                name: "Brampton",
                abbrv: null,
                location_id: "154982",
            },
            {
                subcategory: [
                    {
                        key: "province",
                        name: "Province",
                    },
                ],
                name: "Ontario",
                abbrv: null,
                location_id: "154979",
            },
            {
                subcategory: [
                    {
                        key: "country",
                        name: "Country",
                    },
                ],
                name: "Canada",
                abbrv: null,
                location_id: "153339",
            },
        ],
        category: {
            key: "restaurant",
            name: "Restaurant",
        },
        subcategory: [],
        parent_display_name: "Brampton",
        is_jfy_enabled: false,
        nearest_metro_station: [],
        phone: "+1 905-794-1233",
        website: "https://www.facebook.com/premsweets.ca/",
        email: "info@premsweets.ca",
        address_obj: {
            street1: "4550 Ebenezer",
            street2: "Unit 1",
            city: "Brampton",
            state: null,
            country: "Canada",
            postalcode: "L6P 2R2",
        },
        address: "4550 Ebenezer Unit 1, Brampton, Ontario L6P 2R2 Canada",
        hours: {
            week_ranges: [
                [
                    {
                        open_time: 600,
                        close_time: 1260,
                    },
                ],
                [
                    {
                        open_time: 600,
                        close_time: 1260,
                    },
                ],
                [
                    {
                        open_time: 600,
                        close_time: 1260,
                    },
                ],
                [
                    {
                        open_time: 600,
                        close_time: 1260,
                    },
                ],
                [
                    {
                        open_time: 600,
                        close_time: 1260,
                    },
                ],
                [
                    {
                        open_time: 600,
                        close_time: 1320,
                    },
                ],
                [
                    {
                        open_time: 600,
                        close_time: 1320,
                    },
                ],
            ],
            timezone: "America/Toronto",
        },
        is_candidate_for_contact_info_suppression: false,
        cuisine: [
            {
                key: "10346",
                name: "Indian",
            },
            {
                key: "10665",
                name: "Vegetarian Friendly",
            },
            {
                key: "10697",
                name: "Vegan Options",
            },
        ],
        dietary_restrictions: [
            {
                key: "10665",
                name: "Vegetarian Friendly",
            },
            {
                key: "10697",
                name: "Vegan Options",
            },
        ],
        establishment_types: [
            {
                key: "10591",
                name: "Restaurants",
            },
        ],
    },
    {
        location_id: "12234114",
        name: "Annalakshmi",
        latitude: "43.70716",
        longitude: "-79.7901",
        num_reviews: "16",
        timezone: "America/Toronto",
        location_string: "Brampton, Ontario",
        photo: {
            images: {
                small: {
                    width: "150",
                    url: "https://media-cdn.tripadvisor.com/media/photo-l/10/f7/a2/ed/cilantro-mint-masala.jpg",
                    height: "150",
                },
                thumbnail: {
                    width: "50",
                    url: "https://media-cdn.tripadvisor.com/media/photo-t/10/f7/a2/ed/cilantro-mint-masala.jpg",
                    height: "50",
                },
                original: {
                    width: "1008",
                    url: "https://media-cdn.tripadvisor.com/media/photo-o/10/f7/a2/ed/cilantro-mint-masala.jpg",
                    height: "756",
                },
                large: {
                    width: "550",
                    url: "https://media-cdn.tripadvisor.com/media/photo-s/10/f7/a2/ed/cilantro-mint-masala.jpg",
                    height: "412",
                },
                medium: {
                    width: "250",
                    url: "https://media-cdn.tripadvisor.com/media/photo-f/10/f7/a2/ed/cilantro-mint-masala.jpg",
                    height: "188",
                },
            },
            is_blessed: true,
            uploaded_date: "2017-10-14T11:54:48-0400",
            caption: "Cilantro Mint Masala Dosa",
            id: "284664557",
            helpful_votes: "0",
            published_date: "2017-10-14T11:54:48-0400",
            user: {
                user_id: null,
                member_id: "0",
                type: "user",
            },
        },
        awards: [],
        doubleclick_zone: "na.can.ontario",
        preferred_map_engine: "default",
        raw_ranking: "3.1862010955810547",
        ranking_geo: "Brampton",
        ranking_geo_id: "154982",
        ranking_position: "76",
        ranking_denominator: "615",
        ranking_category: "restaurant",
        ranking: "#71 of 847 Restaurants in Brampton",
        distance: "3.18144835339446",
        distance_string: "3.2 km",
        bearing: "west",
        rating: "4.5",
        is_closed: false,
        open_now_text: "Open Now",
        is_long_closed: false,
        price_level: "$$ - $$$",
        description: "",
        web_url:
            "https://www.tripadvisor.com/Restaurant_Review-g154982-d12234114-Reviews-Annalakshmi-Brampton_Ontario.html",
        write_review:
            "https://www.tripadvisor.com/UserReview-g154982-d12234114-Annalakshmi-Brampton_Ontario.html",
        ancestors: [
            {
                subcategory: [
                    {
                        key: "city",
                        name: "City",
                    },
                ],
                name: "Brampton",
                abbrv: null,
                location_id: "154982",
            },
            {
                subcategory: [
                    {
                        key: "province",
                        name: "Province",
                    },
                ],
                name: "Ontario",
                abbrv: null,
                location_id: "154979",
            },
            {
                subcategory: [
                    {
                        key: "country",
                        name: "Country",
                    },
                ],
                name: "Canada",
                abbrv: null,
                location_id: "153339",
            },
        ],
        category: {
            key: "restaurant",
            name: "Restaurant",
        },
        subcategory: [],
        parent_display_name: "Brampton",
        is_jfy_enabled: false,
        nearest_metro_station: [],
        phone: "+1 905-230-3672",
        website: "http://annalakshmi.ca",
        address_obj: {
            street1: "10086 Hurontario St Unit 3",
            street2: "Unit 3 & 4",
            city: "Brampton",
            state: null,
            country: "Canada",
            postalcode: "L7A 1E5",
        },
        address:
            "10086 Hurontario St Unit 3 Unit 3 & 4, Brampton, Ontario L7A 1E5 Canada",
        hours: {
            week_ranges: [
                [
                    {
                        open_time: 660,
                        close_time: 1290,
                    },
                ],
                [
                    {
                        open_time: 720,
                        close_time: 1290,
                    },
                ],
                [
                    {
                        open_time: 660,
                        close_time: 1290,
                    },
                ],
                [
                    {
                        open_time: 660,
                        close_time: 1290,
                    },
                ],
                [
                    {
                        open_time: 660,
                        close_time: 1290,
                    },
                ],
                [
                    {
                        open_time: 660,
                        close_time: 1320,
                    },
                ],
                [
                    {
                        open_time: 660,
                        close_time: 1320,
                    },
                ],
            ],
            timezone: "America/Toronto",
        },
        is_candidate_for_contact_info_suppression: false,
        cuisine: [
            {
                key: "10346",
                name: "Indian",
            },
            {
                key: "10697",
                name: "Vegan Options",
            },
        ],
        dietary_restrictions: [
            {
                key: "10697",
                name: "Vegan Options",
            },
        ],
        booking: {
            provider: "SkipTheDishes",
            url: "https://www.tripadvisor.com/Commerce?p=Delivery_Takeaway&src=218820403&geo=12234114&from=api&area=reservation_button&slot=1&matchID=1&oos=0&cnt=1&silo=30023&bucket=964305&nrank=1&crank=1&clt=R&ttype=Restaurant&tm=230817579&managed=false&capped=false&gosox=qs47FbMDbcv-HhvPS98PQf-9m8nf2yOS8LWjz44KVNmWpYNNM3AMr4R6hGrqZHR2NGi9I6nuBPmXmunT2F7Y2bGmhd2ayFBMnVOIqdRg7xI&cs=1f962c12df48fde40b57aa4eded64c55c",
        },
        reserve_info: {
            id: "12234114",
            provider: "SkipTheDishes",
            provider_img:
                "https://static.tacdn.com/img2/eateries/skipthedishes_11.19.2021.png",
            url: "https://www.tripadvisor.com/Commerce?p=Delivery_Takeaway&src=218820403&geo=12234114&from=api&area=reservation_button&slot=1&matchID=1&oos=0&cnt=1&silo=30023&bucket=964305&nrank=1&crank=1&clt=R&ttype=Restaurant&tm=230817579&managed=false&capped=false&gosox=qs47FbMDbcv-HhvPS98PQf-9m8nf2yOS8LWjz44KVNmWpYNNM3AMr4R6hGrqZHR2NGi9I6nuBPmXmunT2F7Y2bGmhd2ayFBMnVOIqdRg7xI&cs=1f962c12df48fde40b57aa4eded64c55c",
            booking_partner_id: null,
            racable: false,
            api_bookable: false,
            timeslots: null,
            bestoffer: null,
            timeslot_offers: null,
            button_text: "Order Online",
            disclaimer_text: null,
            banner_text: null,
        },
        establishment_types: [
            {
                key: "10591",
                name: "Restaurants",
            },
        ],
    },
    {
        location_id: "976025",
        name: "Kelseys",
        latitude: "43.70736",
        longitude: "-79.78423",
        num_reviews: "70",
        timezone: "America/Toronto",
        location_string: "Brampton, Ontario",
        photo: {
            images: {
                small: {
                    width: "250",
                    url: "https://media-cdn.tripadvisor.com/media/photo-f/0f/08/18/dc/bar-area.jpg",
                    height: "141",
                },
                thumbnail: {
                    width: "50",
                    url: "https://media-cdn.tripadvisor.com/media/photo-t/0f/08/18/dc/bar-area.jpg",
                    height: "50",
                },
                original: {
                    width: "2000",
                    url: "https://media-cdn.tripadvisor.com/media/photo-o/0f/08/18/dc/bar-area.jpg",
                    height: "1125",
                },
                large: {
                    width: "1024",
                    url: "https://media-cdn.tripadvisor.com/media/photo-w/0f/08/18/dc/bar-area.jpg",
                    height: "576",
                },
                medium: {
                    width: "550",
                    url: "https://media-cdn.tripadvisor.com/media/photo-s/0f/08/18/dc/bar-area.jpg",
                    height: "309",
                },
            },
            is_blessed: true,
            uploaded_date: "2017-04-20T07:02:31-0400",
            caption: "Bar area",
            id: "252188892",
            helpful_votes: "0",
            published_date: "2017-04-20T07:02:31-0400",
            user: {
                user_id: null,
                member_id: "0",
                type: "user",
            },
        },
        awards: [],
        doubleclick_zone: "na.can.ontario",
        preferred_map_engine: "default",
        raw_ranking: "3.1437771320343018",
        ranking_geo: "Brampton",
        ranking_geo_id: "154982",
        ranking_position: "102",
        ranking_denominator: "615",
        ranking_category: "restaurant",
        ranking: "#92 of 847 Restaurants in Brampton",
        distance: "2.7229468422711642",
        distance_string: "2.7 km",
        bearing: "west",
        rating: "3.5",
        is_closed: false,
        open_now_text: "Open Now",
        is_long_closed: false,
        price_level: "$$ - $$$",
        description:
            "Kelseys Original Roadhouse. We're about fresh ingredients prepared in-house always indulging outrageously, never letting a road trip become a guilt trip.",
        web_url:
            "https://www.tripadvisor.com/Restaurant_Review-g154982-d976025-Reviews-Kelseys-Brampton_Ontario.html",
        write_review:
            "https://www.tripadvisor.com/UserReview-g154982-d976025-Kelseys-Brampton_Ontario.html",
        ancestors: [
            {
                subcategory: [
                    {
                        key: "city",
                        name: "City",
                    },
                ],
                name: "Brampton",
                abbrv: null,
                location_id: "154982",
            },
            {
                subcategory: [
                    {
                        key: "province",
                        name: "Province",
                    },
                ],
                name: "Ontario",
                abbrv: null,
                location_id: "154979",
            },
            {
                subcategory: [
                    {
                        key: "country",
                        name: "Country",
                    },
                ],
                name: "Canada",
                abbrv: null,
                location_id: "153339",
            },
        ],
        category: {
            key: "restaurant",
            name: "Restaurant",
        },
        subcategory: [
            {
                key: "sit_down",
                name: "Sit down",
            },
        ],
        parent_display_name: "Brampton",
        is_jfy_enabled: false,
        nearest_metro_station: [],
        phone: "+1 905-796-1700",
        website: "https://www.kelseys.ca/",
        address_obj: {
            street1: "70 Quarry Edge Dr",
            street2: "",
            city: "Brampton",
            state: null,
            country: "Canada",
            postalcode: "L6Z 4K2",
        },
        address: "70 Quarry Edge Dr, Brampton, Ontario L6Z 4K2 Canada",
        hours: {
            week_ranges: [
                [
                    {
                        open_time: 660,
                        close_time: 1440,
                    },
                ],
                [
                    {
                        open_time: 660,
                        close_time: 1440,
                    },
                ],
                [
                    {
                        open_time: 660,
                        close_time: 1440,
                    },
                ],
                [
                    {
                        open_time: 660,
                        close_time: 1440,
                    },
                ],
                [
                    {
                        open_time: 660,
                        close_time: 1440,
                    },
                ],
                [
                    {
                        open_time: 660,
                        close_time: 1500,
                    },
                ],
                [
                    {
                        open_time: 660,
                        close_time: 1500,
                    },
                ],
            ],
            timezone: "America/Toronto",
        },
        is_candidate_for_contact_info_suppression: false,
        cuisine: [
            {
                key: "9908",
                name: "American",
            },
            {
                key: "10640",
                name: "Bar",
            },
            {
                key: "10699",
                name: "Canadian",
            },
            {
                key: "10665",
                name: "Vegetarian Friendly",
            },
        ],
        dietary_restrictions: [
            {
                key: "10665",
                name: "Vegetarian Friendly",
            },
        ],
        booking: {
            provider: "OpenTable",
            url: "https://www.tripadvisor.com/Commerce?p=OpenTableRestaurants&src=139275576&geo=976025&from=api&area=reservation_button&slot=2&matchID=1&oos=0&cnt=1&silo=0&bucket=0&nrank=2&crank=2&clt=R&ttype=Restaurant&tm=230817579&managed=false&capped=false&gosox=b11j9Vm_otaRB2A8Qtu7FLnSeCIMSZfUNUDKekvG_sbZpVb7Z5U5cZA98EmySZgTeSPdFiIGiSGs3F0PLshVyo3wHiO_DPXw4aJEHP6WP-M&cs=1f56da038dad5d4a5c933f9e2531a3f4a",
        },
        reserve_info: {
            id: "976025",
            provider: "OpenTable",
            provider_img:
                "https://static.tacdn.com/img2/eateries/Logo_horizontal_RGB-1000x232.png",
            url: "https://www.tripadvisor.com/Commerce?p=OpenTableRestaurants&src=139275576&geo=976025&from=api&area=reservation_button&slot=2&matchID=1&oos=0&cnt=1&silo=0&bucket=0&nrank=2&crank=2&clt=R&ttype=Restaurant&tm=230817579&managed=false&capped=false&gosox=b11j9Vm_otaRB2A8Qtu7FLnSeCIMSZfUNUDKekvG_sbZpVb7Z5U5cZA98EmySZgTeSPdFiIGiSGs3F0PLshVyo3wHiO_DPXw4aJEHP6WP-M&cs=1f56da038dad5d4a5c933f9e2531a3f4a",
            booking_partner_id: "1",
            racable: false,
            api_bookable: true,
            timeslots: null,
            bestoffer: null,
            timeslot_offers: null,
            button_text: "Reserve",
            disclaimer_text: null,
            banner_text: null,
        },
        establishment_types: [
            {
                key: "10591",
                name: "Restaurants",
            },
        ],
    },
    {
        location_id: "5080575",
        name: "Pho Peter Restaurant",
        latitude: "43.69722",
        longitude: "-79.75218",
        num_reviews: "25",
        timezone: "America/Toronto",
        location_string: "Brampton, Ontario",
        photo: {
            images: {
                small: {
                    width: "250",
                    url: "https://media-cdn.tripadvisor.com/media/photo-f/09/b5/37/09/pho-peter-restaurant.jpg",
                    height: "139",
                },
                thumbnail: {
                    width: "50",
                    url: "https://media-cdn.tripadvisor.com/media/photo-t/09/b5/37/09/pho-peter-restaurant.jpg",
                    height: "50",
                },
                original: {
                    width: "1080",
                    url: "https://media-cdn.tripadvisor.com/media/photo-o/09/b5/37/09/pho-peter-restaurant.jpg",
                    height: "601",
                },
                large: {
                    width: "1024",
                    url: "https://media-cdn.tripadvisor.com/media/photo-w/09/b5/37/09/pho-peter-restaurant.jpg",
                    height: "569",
                },
                medium: {
                    width: "550",
                    url: "https://media-cdn.tripadvisor.com/media/photo-s/09/b5/37/09/pho-peter-restaurant.jpg",
                    height: "306",
                },
            },
            is_blessed: true,
            uploaded_date: "2015-12-08T20:38:37-0500",
            caption: "Pho Peter Restaurant",
            id: "162871049",
            helpful_votes: "1",
            published_date: "2015-12-08T20:38:37-0500",
            user: {
                user_id: null,
                member_id: "0",
                type: "user",
            },
        },
        awards: [],
        doubleclick_zone: "na.can.ontario",
        preferred_map_engine: "default",
        raw_ranking: "3.142667293548584",
        ranking_geo: "Brampton",
        ranking_geo_id: "154982",
        ranking_position: "103",
        ranking_denominator: "615",
        ranking_category: "restaurant",
        ranking: "#93 of 847 Restaurants in Brampton",
        distance: "0.5454812412259973",
        distance_string: "0.5 km",
        bearing: "south",
        rating: "4.0",
        is_closed: false,
        is_long_closed: false,
        price_level: "$",
        description: "",
        web_url:
            "https://www.tripadvisor.com/Restaurant_Review-g154982-d5080575-Reviews-Pho_Peter_Restaurant-Brampton_Ontario.html",
        write_review:
            "https://www.tripadvisor.com/UserReview-g154982-d5080575-Pho_Peter_Restaurant-Brampton_Ontario.html",
        ancestors: [
            {
                subcategory: [
                    {
                        key: "city",
                        name: "City",
                    },
                ],
                name: "Brampton",
                abbrv: null,
                location_id: "154982",
            },
            {
                subcategory: [
                    {
                        key: "province",
                        name: "Province",
                    },
                ],
                name: "Ontario",
                abbrv: null,
                location_id: "154979",
            },
            {
                subcategory: [
                    {
                        key: "country",
                        name: "Country",
                    },
                ],
                name: "Canada",
                abbrv: null,
                location_id: "153339",
            },
        ],
        category: {
            key: "restaurant",
            name: "Restaurant",
        },
        subcategory: [],
        parent_display_name: "Brampton",
        is_jfy_enabled: false,
        nearest_metro_station: [],
        phone: "+1 905-455-6611",
        website:
            "https://www.facebook.com/pages/Pho-Peter-Restaurant/137124592966228",
        address_obj: {
            street1: "65 Kennedy Rd N",
            street2: null,
            city: "Brampton",
            state: null,
            country: "Canada",
            postalcode: "L6V 1X6",
        },
        address: "65 Kennedy Rd N, Brampton, Ontario L6V 1X6 Canada",
        is_candidate_for_contact_info_suppression: false,
        cuisine: [
            {
                key: "10659",
                name: "Asian",
            },
            {
                key: "10675",
                name: "Vietnamese",
            },
            {
                key: "10700",
                name: "Soups",
            },
            {
                key: "10665",
                name: "Vegetarian Friendly",
            },
        ],
        dietary_restrictions: [
            {
                key: "10665",
                name: "Vegetarian Friendly",
            },
        ],
        booking: {
            provider: "SkipTheDishes",
            url: "https://www.tripadvisor.com/Commerce?p=Delivery_Takeaway&src=218816960&geo=5080575&from=api&area=reservation_button&slot=1&matchID=1&oos=0&cnt=1&silo=30023&bucket=964305&nrank=1&crank=1&clt=R&ttype=Restaurant&tm=230817579&managed=false&capped=false&gosox=qs47FbMDbcv-HhvPS98PQf-9m8nf2yOS8LWjz44KVNmWpYNNM3AMr4R6hGrqZHR2NGi9I6nuBPmXmunT2F7Y2XmP5LkKo1PYwCCgQvNeVBg&cs=169aa5e560c6cab67f0ea71acaed71ccc",
        },
        reserve_info: {
            id: "5080575",
            provider: "SkipTheDishes",
            provider_img:
                "https://static.tacdn.com/img2/eateries/skipthedishes_11.19.2021.png",
            url: "https://www.tripadvisor.com/Commerce?p=Delivery_Takeaway&src=218816960&geo=5080575&from=api&area=reservation_button&slot=1&matchID=1&oos=0&cnt=1&silo=30023&bucket=964305&nrank=1&crank=1&clt=R&ttype=Restaurant&tm=230817579&managed=false&capped=false&gosox=qs47FbMDbcv-HhvPS98PQf-9m8nf2yOS8LWjz44KVNmWpYNNM3AMr4R6hGrqZHR2NGi9I6nuBPmXmunT2F7Y2XmP5LkKo1PYwCCgQvNeVBg&cs=169aa5e560c6cab67f0ea71acaed71ccc",
            booking_partner_id: null,
            racable: false,
            api_bookable: false,
            timeslots: null,
            bestoffer: null,
            timeslot_offers: null,
            button_text: "Order Online",
            disclaimer_text: null,
            banner_text: null,
        },
        establishment_types: [
            {
                key: "10591",
                name: "Restaurants",
            },
        ],
    },
    {
        location_id: "2423464",
        name: "Lone Star Texas Grill",
        latitude: "43.707542",
        longitude: "-79.7353",
        num_reviews: "94",
        timezone: "America/Toronto",
        location_string: "Brampton, Ontario",
        photo: {
            images: {
                small: {
                    width: "150",
                    url: "https://media-cdn.tripadvisor.com/media/photo-l/16/9a/fc/74/fajita-fiesta-and-an.jpg",
                    height: "150",
                },
                thumbnail: {
                    width: "50",
                    url: "https://media-cdn.tripadvisor.com/media/photo-t/16/9a/fc/74/fajita-fiesta-and-an.jpg",
                    height: "50",
                },
                original: {
                    width: "1280",
                    url: "https://media-cdn.tripadvisor.com/media/photo-m/1280/16/9a/fc/74/fajita-fiesta-and-an.jpg",
                    height: "824",
                },
                large: {
                    width: "1024",
                    url: "https://media-cdn.tripadvisor.com/media/photo-w/16/9a/fc/74/fajita-fiesta-and-an.jpg",
                    height: "659",
                },
                medium: {
                    width: "550",
                    url: "https://media-cdn.tripadvisor.com/media/photo-s/16/9a/fc/74/fajita-fiesta-and-an.jpg",
                    height: "354",
                },
            },
            is_blessed: true,
            uploaded_date: "2019-02-27T11:06:36-0500",
            caption: "Fajita fiesta and an order of con queso",
            id: "379255924",
            helpful_votes: "0",
            published_date: "2019-02-27T11:06:36-0500",
            user: {
                user_id: null,
                member_id: "0",
                type: "user",
            },
        },
        awards: [],
        doubleclick_zone: "na.can.ontario",
        preferred_map_engine: "default",
        raw_ranking: "3.1213953495025635",
        ranking_geo: "Brampton",
        ranking_geo_id: "154982",
        ranking_position: "123",
        ranking_denominator: "615",
        ranking_category: "restaurant",
        ranking: "#111 of 847 Restaurants in Brampton",
        distance: "1.4163411777865538",
        distance_string: "1.4 km",
        bearing: "northeast",
        rating: "3.5",
        is_closed: false,
        open_now_text: "Open Now",
        is_long_closed: false,
        price_level: "$$ - $$$",
        price: "$8 - $33",
        description:
            "Lone Star Texas Grill is Ontario's original Texas-inspired restaurant, serving Canada's award winning fajitas for over 30 years! Enjoy sizzling wood fire grilled fajitas, steak, ribs, Tex-Mex and more. We serve them with only the freshest ingredients, including our house-made signature sauces, and freshly baked tortillas to complete our authentic recipes. Plus, don't miss our complimentary chips & salsa, famous Margaritas and Coronas! Experience the big & bold tastes of Texas, right here at home.",
        web_url:
            "https://www.tripadvisor.com/Restaurant_Review-g154982-d2423464-Reviews-Lone_Star_Texas_Grill-Brampton_Ontario.html",
        write_review:
            "https://www.tripadvisor.com/UserReview-g154982-d2423464-Lone_Star_Texas_Grill-Brampton_Ontario.html",
        ancestors: [
            {
                subcategory: [
                    {
                        key: "city",
                        name: "City",
                    },
                ],
                name: "Brampton",
                abbrv: null,
                location_id: "154982",
            },
            {
                subcategory: [
                    {
                        key: "province",
                        name: "Province",
                    },
                ],
                name: "Ontario",
                abbrv: null,
                location_id: "154979",
            },
            {
                subcategory: [
                    {
                        key: "country",
                        name: "Country",
                    },
                ],
                name: "Canada",
                abbrv: null,
                location_id: "153339",
            },
        ],
        category: {
            key: "restaurant",
            name: "Restaurant",
        },
        subcategory: [
            {
                key: "sit_down",
                name: "Sit down",
            },
        ],
        parent_display_name: "Brampton",
        is_jfy_enabled: false,
        nearest_metro_station: [],
        phone: "+1 905-595-1063",
        website: "http://www.lonestartexasgrill.com",
        email: "brampton@lonestartexasgrill.com",
        address_obj: {
            street1: "156 West Dr",
            street2: "At Queen St E",
            city: "Brampton",
            state: null,
            country: "Canada",
            postalcode: "L6T 5P1",
        },
        address: "156 West Dr At Queen St E, Brampton, Ontario L6T 5P1 Canada",
        hours: {
            week_ranges: [
                [
                    {
                        open_time: 690,
                        close_time: 1260,
                    },
                ],
                [
                    {
                        open_time: 690,
                        close_time: 1260,
                    },
                ],
                [
                    {
                        open_time: 690,
                        close_time: 1260,
                    },
                ],
                [
                    {
                        open_time: 690,
                        close_time: 1260,
                    },
                ],
                [
                    {
                        open_time: 690,
                        close_time: 1260,
                    },
                ],
                [
                    {
                        open_time: 690,
                        close_time: 1320,
                    },
                ],
                [
                    {
                        open_time: 690,
                        close_time: 1320,
                    },
                ],
            ],
            timezone: "America/Toronto",
        },
        is_candidate_for_contact_info_suppression: false,
        cuisine: [
            {
                key: "10345",
                name: "Steakhouse",
            },
            {
                key: "5110",
                name: "Mexican",
            },
        ],
        dietary_restrictions: [],
        booking: {
            provider: "SkipTheDishes",
            url: "https://www.tripadvisor.com/Commerce?p=Delivery_Takeaway&src=218847056&geo=2423464&from=api&area=reservation_button&slot=1&matchID=1&oos=0&cnt=1&silo=30023&bucket=964305&nrank=1&crank=1&clt=R&ttype=Restaurant&tm=230817579&managed=false&capped=false&gosox=qs47FbMDbcv-HhvPS98PQf-9m8nf2yOS8LWjz44KVNmWpYNNM3AMr4R6hGrqZHR2NGi9I6nuBPmXmunT2F7Y2XECTUlz2LF-S1dumlyTGWM&cs=1c1c4c8b8edaef4adedbe3ca6beb96ac9",
        },
        reserve_info: {
            id: "2423464",
            provider: "SkipTheDishes",
            provider_img:
                "https://static.tacdn.com/img2/eateries/skipthedishes_11.19.2021.png",
            url: "https://www.tripadvisor.com/Commerce?p=Delivery_Takeaway&src=218847056&geo=2423464&from=api&area=reservation_button&slot=1&matchID=1&oos=0&cnt=1&silo=30023&bucket=964305&nrank=1&crank=1&clt=R&ttype=Restaurant&tm=230817579&managed=false&capped=false&gosox=qs47FbMDbcv-HhvPS98PQf-9m8nf2yOS8LWjz44KVNmWpYNNM3AMr4R6hGrqZHR2NGi9I6nuBPmXmunT2F7Y2XECTUlz2LF-S1dumlyTGWM&cs=1c1c4c8b8edaef4adedbe3ca6beb96ac9",
            booking_partner_id: null,
            racable: false,
            api_bookable: false,
            timeslots: null,
            bestoffer: null,
            timeslot_offers: null,
            button_text: "Order Online",
            disclaimer_text: null,
            banner_text: null,
        },
        establishment_types: [
            {
                key: "10591",
                name: "Restaurants",
            },
        ],
    },
    {
        location_id: "3662978",
        name: "Pho dau bo",
        latitude: "43.70268",
        longitude: "-79.78575",
        num_reviews: "20",
        timezone: "America/Toronto",
        location_string: "Brampton, Ontario",
        photo: {
            images: {
                small: {
                    width: "250",
                    url: "https://media-cdn.tripadvisor.com/media/photo-f/0d/9e/f3/b5/noodles-just-right.jpg",
                    height: "141",
                },
                thumbnail: {
                    width: "50",
                    url: "https://media-cdn.tripadvisor.com/media/photo-t/0d/9e/f3/b5/noodles-just-right.jpg",
                    height: "50",
                },
                original: {
                    width: "1024",
                    url: "https://media-cdn.tripadvisor.com/media/photo-w/0d/9e/f3/b5/noodles-just-right.jpg",
                    height: "579",
                },
                large: {
                    width: "1024",
                    url: "https://media-cdn.tripadvisor.com/media/photo-o/0d/9e/f3/b5/noodles-just-right.jpg",
                    height: "579",
                },
                medium: {
                    width: "550",
                    url: "https://media-cdn.tripadvisor.com/media/photo-s/0d/9e/f3/b5/noodles-just-right.jpg",
                    height: "311",
                },
            },
            is_blessed: true,
            uploaded_date: "2016-11-14T11:33:31-0500",
            caption: "Noodles just right",
            id: "228520885",
            helpful_votes: "0",
            published_date: "2016-11-14T11:33:31-0500",
            user: {
                user_id: null,
                member_id: "0",
                type: "user",
            },
        },
        awards: [],
        doubleclick_zone: "na.can.ontario",
        preferred_map_engine: "default",
        raw_ranking: "3.108825445175171",
        ranking_geo: "Brampton",
        ranking_geo_id: "154982",
        ranking_position: "134",
        ranking_denominator: "615",
        ranking_category: "restaurant",
        ranking: "#119 of 847 Restaurants in Brampton",
        distance: "2.7816022356291783",
        distance_string: "2.8 km",
        bearing: "west",
        rating: "4.0",
        is_closed: false,
        is_long_closed: false,
        price_level: "$",
        description: "",
        web_url:
            "https://www.tripadvisor.com/Restaurant_Review-g154982-d3662978-Reviews-Pho_dau_bo-Brampton_Ontario.html",
        write_review:
            "https://www.tripadvisor.com/UserReview-g154982-d3662978-Pho_dau_bo-Brampton_Ontario.html",
        ancestors: [
            {
                subcategory: [
                    {
                        key: "city",
                        name: "City",
                    },
                ],
                name: "Brampton",
                abbrv: null,
                location_id: "154982",
            },
            {
                subcategory: [
                    {
                        key: "province",
                        name: "Province",
                    },
                ],
                name: "Ontario",
                abbrv: null,
                location_id: "154979",
            },
            {
                subcategory: [
                    {
                        key: "country",
                        name: "Country",
                    },
                ],
                name: "Canada",
                abbrv: null,
                location_id: "153339",
            },
        ],
        category: {
            key: "restaurant",
            name: "Restaurant",
        },
        subcategory: [
            {
                key: "sit_down",
                name: "Sit down",
            },
        ],
        parent_display_name: "Brampton",
        is_jfy_enabled: false,
        nearest_metro_station: [],
        phone: "+1 905-796-9992",
        website: "http://www.pho-daubo.ca",
        address_obj: {
            street1: "Gillingham",
            street2: null,
            city: "Brampton",
            state: null,
            country: "Canada",
            postalcode: null,
        },
        address: "Gillingham, Brampton, Ontario Canada",
        is_candidate_for_contact_info_suppression: false,
        cuisine: [
            {
                key: "10659",
                name: "Asian",
            },
            {
                key: "10675",
                name: "Vietnamese",
            },
            {
                key: "10700",
                name: "Soups",
            },
        ],
        dietary_restrictions: [],
        booking: {
            provider: "SkipTheDishes",
            url: "https://www.tripadvisor.com/Commerce?p=Delivery_Takeaway&src=218837207&geo=3662978&from=api&area=reservation_button&slot=1&matchID=1&oos=0&cnt=1&silo=30023&bucket=964305&nrank=1&crank=1&clt=R&ttype=Restaurant&tm=230817579&managed=false&capped=false&gosox=qs47FbMDbcv-HhvPS98PQf-9m8nf2yOS8LWjz44KVNmWpYNNM3AMr4R6hGrqZHR2NGi9I6nuBPmXmunT2F7Y2buIXTeT751z1plrlPR_EuU&cs=168b5e5065a4ed653dbabb1ccd1bf63c1",
        },
        reserve_info: {
            id: "3662978",
            provider: "SkipTheDishes",
            provider_img:
                "https://static.tacdn.com/img2/eateries/skipthedishes_11.19.2021.png",
            url: "https://www.tripadvisor.com/Commerce?p=Delivery_Takeaway&src=218837207&geo=3662978&from=api&area=reservation_button&slot=1&matchID=1&oos=0&cnt=1&silo=30023&bucket=964305&nrank=1&crank=1&clt=R&ttype=Restaurant&tm=230817579&managed=false&capped=false&gosox=qs47FbMDbcv-HhvPS98PQf-9m8nf2yOS8LWjz44KVNmWpYNNM3AMr4R6hGrqZHR2NGi9I6nuBPmXmunT2F7Y2buIXTeT751z1plrlPR_EuU&cs=168b5e5065a4ed653dbabb1ccd1bf63c1",
            booking_partner_id: null,
            racable: false,
            api_bookable: false,
            timeslots: null,
            bestoffer: null,
            timeslot_offers: null,
            button_text: "Order Online",
            disclaimer_text: null,
            banner_text: null,
        },
        establishment_types: [
            {
                key: "10591",
                name: "Restaurants",
            },
        ],
    },
    {
        location_id: "9730819",
        name: "Shawarma Corner",
        latitude: "43.69652",
        longitude: "-79.74723",
        num_reviews: "9",
        timezone: "America/Toronto",
        location_string: "Brampton, Ontario",
        photo: {
            images: {
                small: {
                    width: "150",
                    url: "https://media-cdn.tripadvisor.com/media/photo-l/0b/18/af/65/shawarma-corner.jpg",
                    height: "150",
                },
                thumbnail: {
                    width: "50",
                    url: "https://media-cdn.tripadvisor.com/media/photo-t/0b/18/af/65/shawarma-corner.jpg",
                    height: "50",
                },
                original: {
                    width: "2000",
                    url: "https://media-cdn.tripadvisor.com/media/photo-o/0b/18/af/65/shawarma-corner.jpg",
                    height: "1304",
                },
                large: {
                    width: "1024",
                    url: "https://media-cdn.tripadvisor.com/media/photo-w/0b/18/af/65/shawarma-corner.jpg",
                    height: "667",
                },
                medium: {
                    width: "550",
                    url: "https://media-cdn.tripadvisor.com/media/photo-s/0b/18/af/65/shawarma-corner.jpg",
                    height: "359",
                },
            },
            is_blessed: true,
            uploaded_date: "2016-05-03T12:52:41-0400",
            caption: "",
            id: "186167141",
            helpful_votes: "0",
            published_date: "2016-05-03T12:52:41-0400",
            user: {
                user_id: null,
                member_id: "0",
                type: "user",
            },
        },
        awards: [],
        doubleclick_zone: "na.can.ontario",
        preferred_map_engine: "default",
        raw_ranking: "3.0964972972869873",
        ranking_geo: "Brampton",
        ranking_geo_id: "154982",
        ranking_position: "156",
        ranking_denominator: "615",
        ranking_category: "restaurant",
        ranking: "#136 of 847 Restaurants in Brampton",
        distance: "0.6946780387809729",
        distance_string: "0.7 km",
        bearing: "southeast",
        rating: "4.0",
        is_closed: false,
        open_now_text: "Open Now",
        is_long_closed: false,
        price_level: "$",
        description: "",
        web_url:
            "https://www.tripadvisor.com/Restaurant_Review-g154982-d9730819-Reviews-Shawarma_Corner-Brampton_Ontario.html",
        write_review:
            "https://www.tripadvisor.com/UserReview-g154982-d9730819-Shawarma_Corner-Brampton_Ontario.html",
        ancestors: [
            {
                subcategory: [
                    {
                        key: "city",
                        name: "City",
                    },
                ],
                name: "Brampton",
                abbrv: null,
                location_id: "154982",
            },
            {
                subcategory: [
                    {
                        key: "province",
                        name: "Province",
                    },
                ],
                name: "Ontario",
                abbrv: null,
                location_id: "154979",
            },
            {
                subcategory: [
                    {
                        key: "country",
                        name: "Country",
                    },
                ],
                name: "Canada",
                abbrv: null,
                location_id: "153339",
            },
        ],
        category: {
            key: "restaurant",
            name: "Restaurant",
        },
        subcategory: [],
        parent_display_name: "Brampton",
        is_jfy_enabled: false,
        nearest_metro_station: [],
        phone: "+1 905-230-7818",
        website: "https://www.shawarmacornerbrampton.com/",
        address_obj: {
            street1: "239 Queen St E",
            street2: null,
            city: "Brampton",
            state: null,
            country: "Canada",
            postalcode: "L6W 2B6",
        },
        address: "239 Queen St E, Brampton, Ontario L6W 2B6 Canada",
        hours: {
            week_ranges: [
                [
                    {
                        open_time: 540,
                        close_time: 1380,
                    },
                ],
                [
                    {
                        open_time: 540,
                        close_time: 1380,
                    },
                ],
                [
                    {
                        open_time: 540,
                        close_time: 1380,
                    },
                ],
                [
                    {
                        open_time: 540,
                        close_time: 1380,
                    },
                ],
                [
                    {
                        open_time: 540,
                        close_time: 1380,
                    },
                ],
                [
                    {
                        open_time: 540,
                        close_time: 1380,
                    },
                ],
                [
                    {
                        open_time: 540,
                        close_time: 1380,
                    },
                ],
            ],
            timezone: "America/Toronto",
        },
        is_candidate_for_contact_info_suppression: false,
        cuisine: [
            {
                key: "10626",
                name: "Lebanese",
            },
            {
                key: "10687",
                name: "Middle Eastern",
            },
        ],
        dietary_restrictions: [],
        booking: {
            provider: "SkipTheDishes",
            url: "https://www.tripadvisor.com/Commerce?p=Delivery_Takeaway&src=222620739&geo=9730819&from=api&area=reservation_button&slot=1&matchID=1&oos=0&cnt=1&silo=30023&bucket=964305&nrank=1&crank=1&clt=R&ttype=Restaurant&tm=230817579&managed=false&capped=false&gosox=qs47FbMDbcv-HhvPS98PQf-9m8nf2yOS8LWjz44KVNmWpYNNM3AMr4R6hGrqZHR2NGi9I6nuBPmXmunT2F7Y2bDRi-PilObWzvVDPT39jV8&cs=15049d4d336e4a3cbddb79a656b8f4de8",
        },
        reserve_info: {
            id: "9730819",
            provider: "SkipTheDishes",
            provider_img:
                "https://static.tacdn.com/img2/eateries/skipthedishes_11.19.2021.png",
            url: "https://www.tripadvisor.com/Commerce?p=Delivery_Takeaway&src=222620739&geo=9730819&from=api&area=reservation_button&slot=1&matchID=1&oos=0&cnt=1&silo=30023&bucket=964305&nrank=1&crank=1&clt=R&ttype=Restaurant&tm=230817579&managed=false&capped=false&gosox=qs47FbMDbcv-HhvPS98PQf-9m8nf2yOS8LWjz44KVNmWpYNNM3AMr4R6hGrqZHR2NGi9I6nuBPmXmunT2F7Y2bDRi-PilObWzvVDPT39jV8&cs=15049d4d336e4a3cbddb79a656b8f4de8",
            booking_partner_id: null,
            racable: false,
            api_bookable: false,
            timeslots: null,
            bestoffer: null,
            timeslot_offers: null,
            button_text: "Order Online",
            disclaimer_text: null,
            banner_text: null,
        },
        establishment_types: [
            {
                key: "10591",
                name: "Restaurants",
            },
        ],
    },
    {
        location_id: "9405980",
        name: "Up Yer Kilt",
        latitude: "43.70066",
        longitude: "-79.71393",
        num_reviews: "5",
        timezone: "America/Toronto",
        location_string: "Brampton, Ontario",
        awards: [],
        doubleclick_zone: "na.can.ontario",
        preferred_map_engine: "default",
        raw_ranking: "3.092527151107788",
        ranking_geo: "Brampton",
        ranking_geo_id: "154982",
        ranking_position: "163",
        ranking_denominator: "615",
        ranking_category: "restaurant",
        ranking: "#143 of 847 Restaurants in Brampton",
        distance: "3.0022188690810476",
        distance_string: "3 km",
        bearing: "east",
        rating: "4.5",
        is_closed: false,
        is_long_closed: false,
        price_level: "",
        description: "",
        web_url:
            "https://www.tripadvisor.com/Restaurant_Review-g154982-d9405980-Reviews-Up_Yer_Kilt-Brampton_Ontario.html",
        write_review:
            "https://www.tripadvisor.com/UserReview-g154982-d9405980-Up_Yer_Kilt-Brampton_Ontario.html",
        ancestors: [
            {
                subcategory: [
                    {
                        key: "city",
                        name: "City",
                    },
                ],
                name: "Brampton",
                abbrv: null,
                location_id: "154982",
            },
            {
                subcategory: [
                    {
                        key: "province",
                        name: "Province",
                    },
                ],
                name: "Ontario",
                abbrv: null,
                location_id: "154979",
            },
            {
                subcategory: [
                    {
                        key: "country",
                        name: "Country",
                    },
                ],
                name: "Canada",
                abbrv: null,
                location_id: "153339",
            },
        ],
        category: {
            key: "restaurant",
            name: "Restaurant",
        },
        subcategory: [],
        parent_display_name: "Brampton",
        is_jfy_enabled: false,
        nearest_metro_station: [],
        phone: "+1 905-451-5458",
        website: "https://www.facebook.com/upyerkiltpub",
        address_obj: {
            street1: "284 Orenda Road",
            street2: null,
            city: "Brampton",
            state: null,
            country: "Canada",
            postalcode: null,
        },
        address: "284 Orenda Road, Brampton, Ontario Canada",
        is_candidate_for_contact_info_suppression: false,
        cuisine: [
            {
                key: "10670",
                name: "Pub",
            },
        ],
        dietary_restrictions: [],
        establishment_types: [
            {
                key: "10591",
                name: "Restaurants",
            },
        ],
    },
    {
        location_id: "975576",
        name: "Grabba Pizza",
        latitude: "43.70342",
        longitude: "-79.75705",
        num_reviews: "7",
        timezone: "America/Toronto",
        location_string: "Brampton, Ontario",
        awards: [],
        doubleclick_zone: "na.can.ontario",
        preferred_map_engine: "default",
        raw_ranking: "3.0872490406036377",
        ranking_geo: "Brampton",
        ranking_geo_id: "154982",
        ranking_position: "175",
        ranking_denominator: "615",
        ranking_category: "restaurant",
        ranking: "#153 of 847 Restaurants in Brampton",
        distance: "0.4948162137802451",
        distance_string: "0.5 km",
        bearing: "west",
        rating: "4.0",
        is_closed: false,
        open_now_text: "Open Now",
        is_long_closed: false,
        price_level: "$",
        description: "",
        web_url:
            "https://www.tripadvisor.com/Restaurant_Review-g154982-d975576-Reviews-Grabba_Pizza-Brampton_Ontario.html",
        write_review:
            "https://www.tripadvisor.com/UserReview-g154982-d975576-Grabba_Pizza-Brampton_Ontario.html",
        ancestors: [
            {
                subcategory: [
                    {
                        key: "city",
                        name: "City",
                    },
                ],
                name: "Brampton",
                abbrv: null,
                location_id: "154982",
            },
            {
                subcategory: [
                    {
                        key: "province",
                        name: "Province",
                    },
                ],
                name: "Ontario",
                abbrv: null,
                location_id: "154979",
            },
            {
                subcategory: [
                    {
                        key: "country",
                        name: "Country",
                    },
                ],
                name: "Canada",
                abbrv: null,
                location_id: "153339",
            },
        ],
        category: {
            key: "restaurant",
            name: "Restaurant",
        },
        subcategory: [
            {
                key: "sit_down",
                name: "Sit down",
            },
        ],
        parent_display_name: "Brampton",
        is_jfy_enabled: false,
        nearest_metro_station: [],
        phone: "+1 905-454-9200",
        website: "http://grabb-a-pizza.ca/",
        address_obj: {
            street1: "227 Vodden St E #14",
            street2: "Centennial Mall",
            city: "Brampton",
            state: null,
            country: "Canada",
            postalcode: "L6X 2X7",
        },
        address:
            "227 Vodden St E #14 Centennial Mall, Brampton, Ontario L6X 2X7 Canada",
        hours: {
            week_ranges: [
                [
                    {
                        open_time: 660,
                        close_time: 1320,
                    },
                ],
                [
                    {
                        open_time: 660,
                        close_time: 1320,
                    },
                ],
                [
                    {
                        open_time: 660,
                        close_time: 1320,
                    },
                ],
                [
                    {
                        open_time: 660,
                        close_time: 1320,
                    },
                ],
                [
                    {
                        open_time: 660,
                        close_time: 1320,
                    },
                ],
                [
                    {
                        open_time: 660,
                        close_time: 1440,
                    },
                ],
                [
                    {
                        open_time: 660,
                        close_time: 1440,
                    },
                ],
            ],
            timezone: "America/Toronto",
        },
        is_candidate_for_contact_info_suppression: false,
        cuisine: [
            {
                key: "10641",
                name: "Pizza",
            },
        ],
        dietary_restrictions: [],
        booking: {
            provider: "SkipTheDishes",
            url: "https://www.tripadvisor.com/Commerce?p=Delivery_Takeaway&src=218815676&geo=975576&from=api&area=reservation_button&slot=1&matchID=1&oos=0&cnt=1&silo=30023&bucket=964305&nrank=1&crank=1&clt=R&ttype=Restaurant&tm=230817579&managed=false&capped=false&gosox=qs47FbMDbcv-HhvPS98PQf-9m8nf2yOS8LWjz44KVNmWpYNNM3AMr4R6hGrqZHR2NGi9I6nuBPmXmunT2F7Y2eKS2eE1vG3PetAb5dGzCsY&cs=1459cc2d014d5feddb59bf2961449cbd0",
        },
        reserve_info: {
            id: "975576",
            provider: "SkipTheDishes",
            provider_img:
                "https://static.tacdn.com/img2/eateries/skipthedishes_11.19.2021.png",
            url: "https://www.tripadvisor.com/Commerce?p=Delivery_Takeaway&src=218815676&geo=975576&from=api&area=reservation_button&slot=1&matchID=1&oos=0&cnt=1&silo=30023&bucket=964305&nrank=1&crank=1&clt=R&ttype=Restaurant&tm=230817579&managed=false&capped=false&gosox=qs47FbMDbcv-HhvPS98PQf-9m8nf2yOS8LWjz44KVNmWpYNNM3AMr4R6hGrqZHR2NGi9I6nuBPmXmunT2F7Y2eKS2eE1vG3PetAb5dGzCsY&cs=1459cc2d014d5feddb59bf2961449cbd0",
            booking_partner_id: null,
            racable: false,
            api_bookable: false,
            timeslots: null,
            bestoffer: null,
            timeslot_offers: null,
            button_text: "Order Online",
            disclaimer_text: null,
            banner_text: null,
        },
        establishment_types: [
            {
                key: "10591",
                name: "Restaurants",
            },
        ],
    },
    {
        location_id: "8428218",
        name: "Fusion Flame",
        latitude: "43.70493",
        longitude: "-79.72603",
        num_reviews: "14",
        timezone: "America/Toronto",
        location_string: "Brampton, Ontario",
        photo: {
            images: {
                small: {
                    width: "150",
                    url: "https://media-cdn.tripadvisor.com/media/photo-l/08/ba/d7/89/fusion-flame.jpg",
                    height: "150",
                },
                thumbnail: {
                    width: "50",
                    url: "https://media-cdn.tripadvisor.com/media/photo-t/08/ba/d7/89/fusion-flame.jpg",
                    height: "50",
                },
                original: {
                    width: "580",
                    url: "https://media-cdn.tripadvisor.com/media/photo-o/08/ba/d7/89/fusion-flame.jpg",
                    height: "387",
                },
                large: {
                    width: "580",
                    url: "https://media-cdn.tripadvisor.com/media/photo-o/08/ba/d7/89/fusion-flame.jpg",
                    height: "387",
                },
                medium: {
                    width: "550",
                    url: "https://media-cdn.tripadvisor.com/media/photo-s/08/ba/d7/89/fusion-flame.jpg",
                    height: "366",
                },
            },
            is_blessed: true,
            uploaded_date: "2015-08-23T10:06:00-0400",
            caption: "Fusion Flame",
            id: "146462601",
            helpful_votes: "1",
            published_date: "2015-08-23T10:06:00-0400",
            user: {
                user_id: null,
                member_id: "0",
                type: "user",
            },
        },
        awards: [],
        doubleclick_zone: "na.can.ontario",
        preferred_map_engine: "default",
        raw_ranking: "3.08301043510437",
        ranking_geo: "Brampton",
        ranking_geo_id: "154982",
        ranking_position: "181",
        ranking_denominator: "615",
        ranking_category: "restaurant",
        ranking: "#159 of 847 Restaurants in Brampton",
        distance: "2.0493509021401253",
        distance_string: "2 km",
        bearing: "east",
        rating: "4.0",
        is_closed: false,
        open_now_text: "Open Now",
        is_long_closed: false,
        price_level: "$",
        description: "",
        web_url:
            "https://www.tripadvisor.com/Restaurant_Review-g154982-d8428218-Reviews-Fusion_Flame-Brampton_Ontario.html",
        write_review:
            "https://www.tripadvisor.com/UserReview-g154982-d8428218-Fusion_Flame-Brampton_Ontario.html",
        ancestors: [
            {
                subcategory: [
                    {
                        key: "city",
                        name: "City",
                    },
                ],
                name: "Brampton",
                abbrv: null,
                location_id: "154982",
            },
            {
                subcategory: [
                    {
                        key: "province",
                        name: "Province",
                    },
                ],
                name: "Ontario",
                abbrv: null,
                location_id: "154979",
            },
            {
                subcategory: [
                    {
                        key: "country",
                        name: "Country",
                    },
                ],
                name: "Canada",
                abbrv: null,
                location_id: "153339",
            },
        ],
        category: {
            key: "restaurant",
            name: "Restaurant",
        },
        subcategory: [],
        parent_display_name: "Brampton",
        is_jfy_enabled: false,
        nearest_metro_station: [],
        phone: "+1 905-460-1888",
        website: "http://www.fusionflame.ca/",
        email: "info@fusionflame.com",
        address_obj: {
            street1: "155 Clark Blvd",
            street2: null,
            city: "Brampton",
            state: null,
            country: "Canada",
            postalcode: "L6T 4G6",
        },
        address: "155 Clark Blvd, Brampton, Ontario L6T 4G6 Canada",
        hours: {
            week_ranges: [
                [
                    {
                        open_time: 690,
                        close_time: 1320,
                    },
                ],
                [
                    {
                        open_time: 690,
                        close_time: 1320,
                    },
                ],
                [
                    {
                        open_time: 690,
                        close_time: 1320,
                    },
                ],
                [
                    {
                        open_time: 690,
                        close_time: 1320,
                    },
                ],
                [
                    {
                        open_time: 690,
                        close_time: 1320,
                    },
                ],
                [
                    {
                        open_time: 690,
                        close_time: 1350,
                    },
                ],
                [
                    {
                        open_time: 750,
                        close_time: 1350,
                    },
                ],
            ],
            timezone: "America/Toronto",
        },
        is_candidate_for_contact_info_suppression: false,
        cuisine: [
            {
                key: "5379",
                name: "Chinese",
            },
            {
                key: "10659",
                name: "Asian",
            },
        ],
        dietary_restrictions: [],
        establishment_types: [
            {
                key: "10591",
                name: "Restaurants",
            },
        ],
    },
    {
        location_id: "4869092",
        name: "Subway",
        latitude: "43.70375",
        longitude: "-79.78501",
        num_reviews: "7",
        timezone: "America/Toronto",
        location_string: "Brampton, Ontario",
        awards: [],
        doubleclick_zone: "na.can.ontario",
        preferred_map_engine: "default",
        raw_ranking: "3.0802104473114014",
        ranking_geo: "Brampton",
        ranking_geo_id: "154982",
        ranking_position: "189",
        ranking_denominator: "615",
        ranking_category: "restaurant",
        ranking: "#167 of 847 Restaurants in Brampton",
        distance: "2.727637578603375",
        distance_string: "2.7 km",
        bearing: "west",
        rating: "4.0",
        is_closed: false,
        open_now_text: "Open Now",
        is_long_closed: false,
        price_level: "",
        description:
            "Your local Brampton Subway® Restaurant, located at 10 Gillingham Rd, brings delicious ingredients and mouth-watering flavors in billions of sandwich, salad and wrap combinations to you. An alternative to traditional fast food, we offer freshly cut veggies, toppings, protein and freshly-baked bread to create the perfect meal with freshly baked cookies all at a great value! All Subway® Restaurants are independently owned and operated by business owners who employ talented Sandwich Artists™ that are ready to take your order in person, online, in our Subway app, or for delivery.",
        web_url:
            "https://www.tripadvisor.com/Restaurant_Review-g154982-d4869092-Reviews-Subway-Brampton_Ontario.html",
        write_review:
            "https://www.tripadvisor.com/UserReview-g154982-d4869092-Subway-Brampton_Ontario.html",
        ancestors: [
            {
                subcategory: [
                    {
                        key: "city",
                        name: "City",
                    },
                ],
                name: "Brampton",
                abbrv: null,
                location_id: "154982",
            },
            {
                subcategory: [
                    {
                        key: "province",
                        name: "Province",
                    },
                ],
                name: "Ontario",
                abbrv: null,
                location_id: "154979",
            },
            {
                subcategory: [
                    {
                        key: "country",
                        name: "Country",
                    },
                ],
                name: "Canada",
                abbrv: null,
                location_id: "153339",
            },
        ],
        category: {
            key: "restaurant",
            name: "Restaurant",
        },
        subcategory: [
            {
                key: "sit_down",
                name: "Sit down",
            },
        ],
        parent_display_name: "Brampton",
        is_jfy_enabled: false,
        nearest_metro_station: [],
        phone: "+1 905-456-0751",
        website:
            "https://restaurants.subway.com/canada/on/brampton/10-gillingham-rd?utm_source=yext-other&utm_medium=local&utm_term=acq&utm_content=5385&utm_campaign=evergreen-2020&y_source=1_MTQ5MTkyMTItNzY5LWxvY2F0aW9uLndlYnNpdGU%3D",
        address_obj: {
            street1: "10 Gillingham Rd",
            street2: "#117",
            city: "Brampton",
            state: null,
            country: "Canada",
            postalcode: "L6X 4X7",
        },
        address: "10 Gillingham Rd #117, Brampton, Ontario L6X 4X7 Canada",
        hours: {
            week_ranges: [
                [
                    {
                        open_time: 540,
                        close_time: 1440,
                    },
                ],
                [
                    {
                        open_time: 480,
                        close_time: 1440,
                    },
                ],
                [
                    {
                        open_time: 480,
                        close_time: 1440,
                    },
                ],
                [
                    {
                        open_time: 480,
                        close_time: 1440,
                    },
                ],
                [
                    {
                        open_time: 480,
                        close_time: 1440,
                    },
                ],
                [
                    {
                        open_time: 480,
                        close_time: 1440,
                    },
                ],
                [
                    {
                        open_time: 540,
                        close_time: 1440,
                    },
                ],
            ],
            timezone: "America/Toronto",
        },
        is_candidate_for_contact_info_suppression: false,
        cuisine: [
            {
                key: "10666",
                name: "Deli",
            },
        ],
        dietary_restrictions: [],
        establishment_types: [
            {
                key: "10591",
                name: "Restaurants",
            },
        ],
    },
    {
        location_id: "703410",
        name: "Clock N Hen",
        latitude: "43.70426",
        longitude: "-79.72586",
        num_reviews: "6",
        timezone: "America/Toronto",
        location_string: "Brampton, Ontario",
        awards: [],
        doubleclick_zone: "na.can.ontario",
        preferred_map_engine: "default",
        raw_ranking: "3.07611346244812",
        ranking_geo: "Brampton",
        ranking_geo_id: "154982",
        ranking_position: "195",
        ranking_denominator: "615",
        ranking_category: "restaurant",
        ranking: "#172 of 847 Restaurants in Brampton",
        distance: "2.052547685083072",
        distance_string: "2.1 km",
        bearing: "east",
        rating: "4.5",
        is_closed: false,
        open_now_text: "Open Now",
        is_long_closed: false,
        price_level: "$",
        neighborhood_info: [
            {
                location_id: "21001917",
                name: "Bramalea",
            },
        ],
        description: "",
        web_url:
            "https://www.tripadvisor.com/Restaurant_Review-g154982-d703410-Reviews-Clock_N_Hen-Brampton_Ontario.html",
        write_review:
            "https://www.tripadvisor.com/UserReview-g154982-d703410-Clock_N_Hen-Brampton_Ontario.html",
        ancestors: [
            {
                subcategory: [
                    {
                        key: "city",
                        name: "City",
                    },
                ],
                name: "Brampton",
                abbrv: null,
                location_id: "154982",
            },
            {
                subcategory: [
                    {
                        key: "province",
                        name: "Province",
                    },
                ],
                name: "Ontario",
                abbrv: null,
                location_id: "154979",
            },
            {
                subcategory: [
                    {
                        key: "country",
                        name: "Country",
                    },
                ],
                name: "Canada",
                abbrv: null,
                location_id: "153339",
            },
        ],
        category: {
            key: "restaurant",
            name: "Restaurant",
        },
        subcategory: [
            {
                key: "sit_down",
                name: "Sit down",
            },
        ],
        parent_display_name: "Brampton",
        is_jfy_enabled: false,
        nearest_metro_station: [],
        phone: "+1 905-456-1051",
        website:
            "https://www.facebook.com/pages/category/Pub/Clock-N-Hen-132544253437754/",
        address_obj: {
            street1: "71 West Dr",
            street2: "",
            city: "Brampton",
            state: null,
            country: "Canada",
            postalcode: "L6T 5E2",
        },
        address: "71 West Dr, Brampton, Ontario L6T 5E2 Canada",
        hours: {
            week_ranges: [
                [
                    {
                        open_time: 600,
                        close_time: 1560,
                    },
                ],
                [
                    {
                        open_time: 600,
                        close_time: 1560,
                    },
                ],
                [
                    {
                        open_time: 600,
                        close_time: 1560,
                    },
                ],
                [
                    {
                        open_time: 600,
                        close_time: 1560,
                    },
                ],
                [
                    {
                        open_time: 600,
                        close_time: 1560,
                    },
                ],
                [
                    {
                        open_time: 600,
                        close_time: 1560,
                    },
                ],
                [
                    {
                        open_time: 600,
                        close_time: 1560,
                    },
                ],
            ],
            timezone: "America/Toronto",
        },
        is_candidate_for_contact_info_suppression: false,
        cuisine: [
            {
                key: "10662",
                name: "British",
            },
            {
                key: "10668",
                name: "Grill",
            },
        ],
        dietary_restrictions: [],
        establishment_types: [
            {
                key: "10591",
                name: "Restaurants",
            },
        ],
    },
    {
        location_id: "5771950",
        name: "Pizza Pizza",
        latitude: "43.706116",
        longitude: "-79.78222",
        num_reviews: "5",
        timezone: "America/Toronto",
        location_string: "Brampton, Ontario",
        awards: [],
        doubleclick_zone: "na.can.ontario",
        preferred_map_engine: "default",
        raw_ranking: "3.0683698654174805",
        ranking_geo: "Brampton",
        ranking_geo_id: "154982",
        ranking_position: "215",
        ranking_denominator: "615",
        ranking_category: "restaurant",
        ranking: "#188 of 847 Restaurants in Brampton",
        distance: "2.536798748335449",
        distance_string: "2.5 km",
        bearing: "west",
        rating: "4.5",
        is_closed: false,
        is_long_closed: false,
        price_level: "",
        description: "",
        web_url:
            "https://www.tripadvisor.com/Restaurant_Review-g154982-d5771950-Reviews-Pizza_Pizza-Brampton_Ontario.html",
        write_review:
            "https://www.tripadvisor.com/UserReview-g154982-d5771950-Pizza_Pizza-Brampton_Ontario.html",
        ancestors: [
            {
                subcategory: [
                    {
                        key: "city",
                        name: "City",
                    },
                ],
                name: "Brampton",
                abbrv: null,
                location_id: "154982",
            },
            {
                subcategory: [
                    {
                        key: "province",
                        name: "Province",
                    },
                ],
                name: "Ontario",
                abbrv: null,
                location_id: "154979",
            },
            {
                subcategory: [
                    {
                        key: "country",
                        name: "Country",
                    },
                ],
                name: "Canada",
                abbrv: null,
                location_id: "153339",
            },
        ],
        category: {
            key: "restaurant",
            name: "Restaurant",
        },
        subcategory: [],
        parent_display_name: "Brampton",
        is_jfy_enabled: false,
        nearest_metro_station: [],
        phone: "+1 416-967-1111",
        website: "http://www.pizzapizza.ca",
        address_obj: {
            street1: "74 Quarry Edge Dr",
            street2: null,
            city: "Brampton",
            state: null,
            country: "Canada",
            postalcode: "L6V 4K2",
        },
        address: "74 Quarry Edge Dr, Brampton, Ontario L6V 4K2 Canada",
        is_candidate_for_contact_info_suppression: false,
        cuisine: [
            {
                key: "10641",
                name: "Pizza",
            },
        ],
        dietary_restrictions: [],
        establishment_types: [
            {
                key: "10591",
                name: "Restaurants",
            },
        ],
    },
    {
        location_id: "14273020",
        name: "Hero Certified Burgers",
        latitude: "43.70666",
        longitude: "-79.78667",
        num_reviews: "4",
        timezone: "America/Toronto",
        location_string: "Brampton, Ontario",
        photo: {
            images: {
                small: {
                    width: "150",
                    url: "https://media-cdn.tripadvisor.com/media/photo-l/19/fb/04/5a/photo6jpg.jpg",
                    height: "150",
                },
                thumbnail: {
                    width: "50",
                    url: "https://media-cdn.tripadvisor.com/media/photo-t/19/fb/04/5a/photo6jpg.jpg",
                    height: "50",
                },
                original: {
                    width: "1280",
                    url: "https://media-cdn.tripadvisor.com/media/photo-m/1280/19/fb/04/5a/photo6jpg.jpg",
                    height: "960",
                },
                large: {
                    width: "550",
                    url: "https://media-cdn.tripadvisor.com/media/photo-s/19/fb/04/5a/photo6jpg.jpg",
                    height: "413",
                },
                medium: {
                    width: "250",
                    url: "https://media-cdn.tripadvisor.com/media/photo-f/19/fb/04/5a/photo6jpg.jpg",
                    height: "188",
                },
            },
            is_blessed: true,
            uploaded_date: "2019-11-09T15:47:14-0500",
            caption: "",
            id: "435881050",
            helpful_votes: "0",
            published_date: "2019-11-09T15:47:14-0500",
            user: {
                user_id: null,
                member_id: "0",
                type: "user",
            },
        },
        awards: [],
        doubleclick_zone: "na.can.ontario",
        preferred_map_engine: "default",
        raw_ranking: "3.0682733058929443",
        ranking_geo: "Brampton",
        ranking_geo_id: "154982",
        ranking_position: "216",
        ranking_denominator: "615",
        ranking_category: "restaurant",
        ranking: "#189 of 847 Restaurants in Brampton",
        distance: "2.8997503523465795",
        distance_string: "2.9 km",
        bearing: "west",
        rating: "4.5",
        is_closed: false,
        open_now_text: "Open Now",
        is_long_closed: false,
        price_level: "$$ - $$$",
        price: "$5 - $25",
        description: "",
        web_url:
            "https://www.tripadvisor.com/Restaurant_Review-g154982-d14273020-Reviews-Hero_Certified_Burgers-Brampton_Ontario.html",
        write_review:
            "https://www.tripadvisor.com/UserReview-g154982-d14273020-Hero_Certified_Burgers-Brampton_Ontario.html",
        ancestors: [
            {
                subcategory: [
                    {
                        key: "city",
                        name: "City",
                    },
                ],
                name: "Brampton",
                abbrv: null,
                location_id: "154982",
            },
            {
                subcategory: [
                    {
                        key: "province",
                        name: "Province",
                    },
                ],
                name: "Ontario",
                abbrv: null,
                location_id: "154979",
            },
            {
                subcategory: [
                    {
                        key: "country",
                        name: "Country",
                    },
                ],
                name: "Canada",
                abbrv: null,
                location_id: "153339",
            },
        ],
        category: {
            key: "restaurant",
            name: "Restaurant",
        },
        subcategory: [
            {
                key: "fast_food",
                name: "Fast food",
            },
        ],
        parent_display_name: "Brampton",
        is_jfy_enabled: false,
        nearest_metro_station: [],
        phone: "+1 905-230-6800",
        website: "http://heroburgers.com/locations/hurontario-bovaird/",
        email: "H038@heroburgers.com",
        address_obj: {
            street1: "10025 Hurontario Street",
            street2: null,
            city: "Brampton",
            state: null,
            country: "Canada",
            postalcode: "L6Z 0E6",
        },
        address: "10025 Hurontario Street, Brampton, Ontario L6Z 0E6 Canada",
        hours: {
            week_ranges: [
                [
                    {
                        open_time: 660,
                        close_time: 1440,
                    },
                ],
                [
                    {
                        open_time: 660,
                        close_time: 1440,
                    },
                ],
                [
                    {
                        open_time: 660,
                        close_time: 1440,
                    },
                ],
                [
                    {
                        open_time: 660,
                        close_time: 1440,
                    },
                ],
                [
                    {
                        open_time: 660,
                        close_time: 1440,
                    },
                ],
                [
                    {
                        open_time: 660,
                        close_time: 1440,
                    },
                ],
                [
                    {
                        open_time: 660,
                        close_time: 1440,
                    },
                ],
            ],
            timezone: "America/Toronto",
        },
        is_candidate_for_contact_info_suppression: false,
        cuisine: [
            {
                key: "10699",
                name: "Canadian",
            },
        ],
        dietary_restrictions: [],
        booking: {
            provider: "SkipTheDishes",
            url: "https://www.tripadvisor.com/Commerce?p=Delivery_Takeaway&src=218848478&geo=14273020&from=api&area=reservation_button&slot=1&matchID=1&oos=0&cnt=1&silo=30023&bucket=964305&nrank=1&crank=1&clt=R&ttype=Restaurant&tm=230817579&managed=false&capped=false&gosox=qs47FbMDbcv-HhvPS98PQf-9m8nf2yOS8LWjz44KVNmWpYNNM3AMr4R6hGrqZHR2NGi9I6nuBPmXmunT2F7Y2cTk5qahhNWvBmtD21BLrzQ&cs=105d875c4fe28e7cb3f97426527342092",
        },
        reserve_info: {
            id: "14273020",
            provider: "SkipTheDishes",
            provider_img:
                "https://static.tacdn.com/img2/eateries/skipthedishes_11.19.2021.png",
            url: "https://www.tripadvisor.com/Commerce?p=Delivery_Takeaway&src=218848478&geo=14273020&from=api&area=reservation_button&slot=1&matchID=1&oos=0&cnt=1&silo=30023&bucket=964305&nrank=1&crank=1&clt=R&ttype=Restaurant&tm=230817579&managed=false&capped=false&gosox=qs47FbMDbcv-HhvPS98PQf-9m8nf2yOS8LWjz44KVNmWpYNNM3AMr4R6hGrqZHR2NGi9I6nuBPmXmunT2F7Y2cTk5qahhNWvBmtD21BLrzQ&cs=105d875c4fe28e7cb3f97426527342092",
            booking_partner_id: null,
            racable: false,
            api_bookable: false,
            timeslots: null,
            bestoffer: null,
            timeslot_offers: null,
            button_text: "Order Online",
            disclaimer_text: null,
            banner_text: null,
        },
        establishment_types: [
            {
                key: "10591",
                name: "Restaurants",
            },
        ],
    },
    {
        location_id: "795469",
        name: "Frank's Hamburgers",
        latitude: "43.70342",
        longitude: "-79.75705",
        num_reviews: "5",
        timezone: "America/Toronto",
        location_string: "Brampton, Ontario",
        awards: [],
        doubleclick_zone: "na.can.ontario",
        preferred_map_engine: "default",
        raw_ranking: "3.0664684772491455",
        ranking_geo: "Brampton",
        ranking_geo_id: "154982",
        ranking_position: "218",
        ranking_denominator: "615",
        ranking_category: "restaurant",
        ranking: "#191 of 847 Restaurants in Brampton",
        distance: "0.4948162137802451",
        distance_string: "0.5 km",
        bearing: "west",
        rating: "4.5",
        is_closed: false,
        is_long_closed: false,
        price_level: "$",
        price: "$5 - $10",
        description: "",
        web_url:
            "https://www.tripadvisor.com/Restaurant_Review-g154982-d795469-Reviews-Frank_s_Hamburgers-Brampton_Ontario.html",
        write_review:
            "https://www.tripadvisor.com/UserReview-g154982-d795469-Frank_s_Hamburgers-Brampton_Ontario.html",
        ancestors: [
            {
                subcategory: [
                    {
                        key: "city",
                        name: "City",
                    },
                ],
                name: "Brampton",
                abbrv: null,
                location_id: "154982",
            },
            {
                subcategory: [
                    {
                        key: "province",
                        name: "Province",
                    },
                ],
                name: "Ontario",
                abbrv: null,
                location_id: "154979",
            },
            {
                subcategory: [
                    {
                        key: "country",
                        name: "Country",
                    },
                ],
                name: "Canada",
                abbrv: null,
                location_id: "153339",
            },
        ],
        category: {
            key: "restaurant",
            name: "Restaurant",
        },
        subcategory: [
            {
                key: "sit_down",
                name: "Sit down",
            },
        ],
        parent_display_name: "Brampton",
        is_jfy_enabled: false,
        nearest_metro_station: [],
        phone: "+1 905-457-7574",
        address_obj: {
            street1: "227 Vodden St E",
            street2: "Centennial Mall",
            city: "Brampton",
            state: null,
            country: "Canada",
            postalcode: "L6V 1N2",
        },
        address:
            "227 Vodden St E Centennial Mall, Brampton, Ontario L6V 1N2 Canada",
        is_candidate_for_contact_info_suppression: false,
        cuisine: [
            {
                key: "10699",
                name: "Canadian",
            },
        ],
        dietary_restrictions: [],
        establishment_types: [
            {
                key: "10591",
                name: "Restaurants",
            },
        ],
    },
    {
        location_id: "1117186",
        name: "Minar Fine Indian Cuisine INC",
        latitude: "43.70066",
        longitude: "-79.71393",
        num_reviews: "11",
        timezone: "America/Toronto",
        location_string: "Brampton, Ontario",
        awards: [],
        doubleclick_zone: "na.can.ontario",
        preferred_map_engine: "default",
        raw_ranking: "3.065091133117676",
        ranking_geo: "Brampton",
        ranking_geo_id: "154982",
        ranking_position: "221",
        ranking_denominator: "615",
        ranking_category: "restaurant",
        ranking: "#194 of 847 Restaurants in Brampton",
        distance: "3.0022188690810476",
        distance_string: "3 km",
        bearing: "east",
        rating: "3.5",
        is_closed: false,
        open_now_text: "Open Now",
        is_long_closed: false,
        price_level: "$$ - $$$",
        price: "$10 - $15",
        neighborhood_info: [
            {
                location_id: "21001917",
                name: "Bramalea",
            },
        ],
        description: "",
        web_url:
            "https://www.tripadvisor.com/Restaurant_Review-g154982-d1117186-Reviews-Minar_Fine_Indian_Cuisine_INC-Brampton_Ontario.html",
        write_review:
            "https://www.tripadvisor.com/UserReview-g154982-d1117186-Minar_Fine_Indian_Cuisine_INC-Brampton_Ontario.html",
        ancestors: [
            {
                subcategory: [
                    {
                        key: "city",
                        name: "City",
                    },
                ],
                name: "Brampton",
                abbrv: null,
                location_id: "154982",
            },
            {
                subcategory: [
                    {
                        key: "province",
                        name: "Province",
                    },
                ],
                name: "Ontario",
                abbrv: null,
                location_id: "154979",
            },
            {
                subcategory: [
                    {
                        key: "country",
                        name: "Country",
                    },
                ],
                name: "Canada",
                abbrv: null,
                location_id: "153339",
            },
        ],
        category: {
            key: "restaurant",
            name: "Restaurant",
        },
        subcategory: [
            {
                key: "sit_down",
                name: "Sit down",
            },
        ],
        parent_display_name: "Brampton",
        is_jfy_enabled: false,
        nearest_metro_station: [],
        phone: "+1 905-452-3627",
        website: "http://www.minarsweets.ca",
        address_obj: {
            street1: "284 Orenda rd.",
            street2: "",
            city: "Brampton",
            state: null,
            country: "Canada",
            postalcode: "",
        },
        address: "284 Orenda rd., Brampton, Ontario Canada",
        hours: {
            week_ranges: [
                [
                    {
                        open_time: 600,
                        close_time: 1320,
                    },
                ],
                [
                    {
                        open_time: 600,
                        close_time: 1320,
                    },
                ],
                [
                    {
                        open_time: 600,
                        close_time: 1320,
                    },
                ],
                [
                    {
                        open_time: 600,
                        close_time: 1320,
                    },
                ],
                [
                    {
                        open_time: 600,
                        close_time: 1320,
                    },
                ],
                [
                    {
                        open_time: 600,
                        close_time: 1320,
                    },
                ],
                [
                    {
                        open_time: 600,
                        close_time: 1320,
                    },
                ],
            ],
            timezone: "America/Toronto",
        },
        is_candidate_for_contact_info_suppression: false,
        cuisine: [
            {
                key: "10346",
                name: "Indian",
            },
            {
                key: "10643",
                name: "Seafood",
            },
        ],
        dietary_restrictions: [],
        booking: {
            provider: "SkipTheDishes",
            url: "https://www.tripadvisor.com/Commerce?p=Delivery_Takeaway&src=218824800&geo=1117186&from=api&area=reservation_button&slot=1&matchID=1&oos=0&cnt=1&silo=30023&bucket=964305&nrank=1&crank=1&clt=R&ttype=Restaurant&tm=230817579&managed=false&capped=false&gosox=qs47FbMDbcv-HhvPS98PQf-9m8nf2yOS8LWjz44KVNmWpYNNM3AMr4R6hGrqZHR2NGi9I6nuBPmXmunT2F7Y2R8Z0t7Ny6FsKnoRPoov9v0&cs=109d52f246df26526c3c6edb4412ac7e8",
        },
        reserve_info: {
            id: "1117186",
            provider: "SkipTheDishes",
            provider_img:
                "https://static.tacdn.com/img2/eateries/skipthedishes_11.19.2021.png",
            url: "https://www.tripadvisor.com/Commerce?p=Delivery_Takeaway&src=218824800&geo=1117186&from=api&area=reservation_button&slot=1&matchID=1&oos=0&cnt=1&silo=30023&bucket=964305&nrank=1&crank=1&clt=R&ttype=Restaurant&tm=230817579&managed=false&capped=false&gosox=qs47FbMDbcv-HhvPS98PQf-9m8nf2yOS8LWjz44KVNmWpYNNM3AMr4R6hGrqZHR2NGi9I6nuBPmXmunT2F7Y2R8Z0t7Ny6FsKnoRPoov9v0&cs=109d52f246df26526c3c6edb4412ac7e8",
            booking_partner_id: null,
            racable: false,
            api_bookable: false,
            timeslots: null,
            bestoffer: null,
            timeslot_offers: null,
            button_text: "Order Online",
            disclaimer_text: null,
            banner_text: null,
        },
        establishment_types: [
            {
                key: "10591",
                name: "Restaurants",
            },
        ],
    },
    {
        location_id: "10438265",
        name: "Swiss Chalet",
        latitude: "43.706383",
        longitude: "-79.73427",
        num_reviews: "11",
        timezone: "America/Toronto",
        location_string: "Brampton, Ontario",
        photo: {
            images: {
                small: {
                    width: "150",
                    url: "https://media-cdn.tripadvisor.com/media/photo-l/19/a8/7a/b1/otherimage2.jpg",
                    height: "150",
                },
                thumbnail: {
                    width: "50",
                    url: "https://media-cdn.tripadvisor.com/media/photo-t/19/a8/7a/b1/otherimage2.jpg",
                    height: "50",
                },
                original: {
                    width: "1280",
                    url: "https://media-cdn.tripadvisor.com/media/photo-m/1280/19/a8/7a/b1/otherimage2.jpg",
                    height: "853",
                },
                large: {
                    width: "1024",
                    url: "https://media-cdn.tripadvisor.com/media/photo-w/19/a8/7a/b1/otherimage2.jpg",
                    height: "682",
                },
                medium: {
                    width: "550",
                    url: "https://media-cdn.tripadvisor.com/media/photo-s/19/a8/7a/b1/otherimage2.jpg",
                    height: "367",
                },
            },
            is_blessed: true,
            uploaded_date: "2019-10-17T00:47:54-0400",
            caption: "otherimage2",
            id: "430471857",
            helpful_votes: "0",
            published_date: "2019-10-17T00:47:54-0400",
            user: {
                user_id: null,
                member_id: "0",
                type: "user",
            },
        },
        awards: [],
        doubleclick_zone: "na.can.ontario",
        preferred_map_engine: "default",
        raw_ranking: "3.0592854022979736",
        ranking_geo: "Brampton",
        ranking_geo_id: "154982",
        ranking_position: "242",
        ranking_denominator: "615",
        ranking_category: "restaurant",
        ranking: "#213 of 847 Restaurants in Brampton",
        distance: "1.4436863316826563",
        distance_string: "1.4 km",
        bearing: "east",
        rating: "3.5",
        is_closed: false,
        open_now_text: "Open Now",
        is_long_closed: false,
        price_level: "$$ - $$$",
        description:
            "For over 65 years, Swiss Chalet has served Canadians famous Rotisserie Chicken at great value price points.",
        web_url:
            "https://www.tripadvisor.com/Restaurant_Review-g154982-d10438265-Reviews-Swiss_Chalet-Brampton_Ontario.html",
        write_review:
            "https://www.tripadvisor.com/UserReview-g154982-d10438265-Swiss_Chalet-Brampton_Ontario.html",
        ancestors: [
            {
                subcategory: [
                    {
                        key: "city",
                        name: "City",
                    },
                ],
                name: "Brampton",
                abbrv: null,
                location_id: "154982",
            },
            {
                subcategory: [
                    {
                        key: "province",
                        name: "Province",
                    },
                ],
                name: "Ontario",
                abbrv: null,
                location_id: "154979",
            },
            {
                subcategory: [
                    {
                        key: "country",
                        name: "Country",
                    },
                ],
                name: "Canada",
                abbrv: null,
                location_id: "153339",
            },
        ],
        category: {
            key: "restaurant",
            name: "Restaurant",
        },
        subcategory: [
            {
                key: "sit_down",
                name: "Sit down",
            },
        ],
        parent_display_name: "Brampton",
        is_jfy_enabled: false,
        nearest_metro_station: [],
        phone: "+1 905-457-0504",
        website: "https://www.swisschalet.com/",
        email: "swiss1216@cara.com",
        address_obj: {
            street1: "150 West Dr Building D",
            street2: "#d",
            city: "Brampton",
            state: null,
            country: "Canada",
            postalcode: "L6T 5P1",
        },
        address: "150 West Dr Building D #d, Brampton, Ontario L6T 5P1 Canada",
        hours: {
            week_ranges: [
                [
                    {
                        open_time: 660,
                        close_time: 1260,
                    },
                ],
                [
                    {
                        open_time: 660,
                        close_time: 1320,
                    },
                ],
                [
                    {
                        open_time: 660,
                        close_time: 1320,
                    },
                ],
                [
                    {
                        open_time: 660,
                        close_time: 1320,
                    },
                ],
                [
                    {
                        open_time: 660,
                        close_time: 1320,
                    },
                ],
                [
                    {
                        open_time: 660,
                        close_time: 1320,
                    },
                ],
                [
                    {
                        open_time: 660,
                        close_time: 1320,
                    },
                ],
            ],
            timezone: "America/Toronto",
        },
        is_candidate_for_contact_info_suppression: false,
        cuisine: [
            {
                key: "10699",
                name: "Canadian",
            },
            {
                key: "10643",
                name: "Seafood",
            },
            {
                key: "10668",
                name: "Grill",
            },
            {
                key: "10679",
                name: "Healthy",
            },
        ],
        dietary_restrictions: [],
        booking: {
            provider: "SkipTheDishes",
            url: "https://www.tripadvisor.com/Commerce?p=Delivery_Takeaway&src=218846900&geo=10438265&from=api&area=reservation_button&slot=1&matchID=1&oos=0&cnt=1&silo=30023&bucket=964305&nrank=1&crank=1&clt=R&ttype=Restaurant&tm=230817579&managed=false&capped=false&gosox=qs47FbMDbcv-HhvPS98PQf-9m8nf2yOS8LWjz44KVNmWpYNNM3AMr4R6hGrqZHR2NGi9I6nuBPmXmunT2F7Y2Zn8lus2UzcPJR_IQXD5UJg&cs=110ff8965d6434bc00ececb433a19530e",
        },
        reserve_info: {
            id: "10438265",
            provider: "SkipTheDishes",
            provider_img:
                "https://static.tacdn.com/img2/eateries/skipthedishes_11.19.2021.png",
            url: "https://www.tripadvisor.com/Commerce?p=Delivery_Takeaway&src=218846900&geo=10438265&from=api&area=reservation_button&slot=1&matchID=1&oos=0&cnt=1&silo=30023&bucket=964305&nrank=1&crank=1&clt=R&ttype=Restaurant&tm=230817579&managed=false&capped=false&gosox=qs47FbMDbcv-HhvPS98PQf-9m8nf2yOS8LWjz44KVNmWpYNNM3AMr4R6hGrqZHR2NGi9I6nuBPmXmunT2F7Y2Zn8lus2UzcPJR_IQXD5UJg&cs=110ff8965d6434bc00ececb433a19530e",
            booking_partner_id: null,
            racable: false,
            api_bookable: false,
            timeslots: null,
            bestoffer: null,
            timeslot_offers: null,
            button_text: "Order Online",
            disclaimer_text: null,
            banner_text: null,
        },
        establishment_types: [
            {
                key: "10591",
                name: "Restaurants",
            },
        ],
    },
    {
        location_id: "17531565",
        name: 'Fan "D" Flame Restaurant',
        latitude: "43.70233",
        longitude: "-79.78642",
        num_reviews: "3",
        timezone: "America/Toronto",
        location_string: "Brampton, Ontario",
        photo: {
            images: {
                small: {
                    width: "150",
                    url: "https://media-cdn.tripadvisor.com/media/photo-l/1a/67/64/b0/fan-d-flame-restaurant.jpg",
                    height: "150",
                },
                thumbnail: {
                    width: "50",
                    url: "https://media-cdn.tripadvisor.com/media/photo-t/1a/67/64/b0/fan-d-flame-restaurant.jpg",
                    height: "50",
                },
                original: {
                    width: "1280",
                    url: "https://media-cdn.tripadvisor.com/media/photo-m/1280/1a/67/64/b0/fan-d-flame-restaurant.jpg",
                    height: "960",
                },
                large: {
                    width: "550",
                    url: "https://media-cdn.tripadvisor.com/media/photo-s/1a/67/64/b0/fan-d-flame-restaurant.jpg",
                    height: "413",
                },
                medium: {
                    width: "250",
                    url: "https://media-cdn.tripadvisor.com/media/photo-f/1a/67/64/b0/fan-d-flame-restaurant.jpg",
                    height: "188",
                },
            },
            is_blessed: true,
            uploaded_date: "2019-12-26T22:00:25-0500",
            caption: "",
            id: "442983600",
            helpful_votes: "0",
            published_date: "2019-12-26T22:00:25-0500",
            user: {
                user_id: null,
                member_id: "0",
                type: "user",
            },
        },
        awards: [],
        doubleclick_zone: "na.can.ontario",
        preferred_map_engine: "default",
        raw_ranking: "3.0500259399414062",
        ranking_geo: "Brampton",
        ranking_geo_id: "154982",
        ranking_position: "254",
        ranking_denominator: "615",
        ranking_category: "restaurant",
        ranking: "#223 of 847 Restaurants in Brampton",
        distance: "2.8349515685247155",
        distance_string: "2.8 km",
        bearing: "west",
        rating: "4.0",
        is_closed: false,
        is_long_closed: false,
        price_level: "",
        description: "",
        web_url:
            "https://www.tripadvisor.com/Restaurant_Review-g154982-d17531565-Reviews-Fan_D_Flame_Restaurant-Brampton_Ontario.html",
        write_review:
            "https://www.tripadvisor.com/UserReview-g154982-d17531565-Fan_D_Flame_Restaurant-Brampton_Ontario.html",
        ancestors: [
            {
                subcategory: [
                    {
                        key: "city",
                        name: "City",
                    },
                ],
                name: "Brampton",
                abbrv: null,
                location_id: "154982",
            },
            {
                subcategory: [
                    {
                        key: "province",
                        name: "Province",
                    },
                ],
                name: "Ontario",
                abbrv: null,
                location_id: "154979",
            },
            {
                subcategory: [
                    {
                        key: "country",
                        name: "Country",
                    },
                ],
                name: "Canada",
                abbrv: null,
                location_id: "153339",
            },
        ],
        category: {
            key: "restaurant",
            name: "Restaurant",
        },
        subcategory: [],
        parent_display_name: "Brampton",
        is_jfy_enabled: false,
        nearest_metro_station: [],
        phone: "+1 416-953-0700",
        website: "http://www.fandflame.com/site/",
        address_obj: {
            street1: "30 Gillingham Dr #503",
            street2: "Brampton, ON",
            city: "Brampton",
            state: null,
            country: "Canada",
            postalcode: "L6X 4X7",
        },
        address:
            "30 Gillingham Dr #503 Brampton, ON, Brampton, Ontario L6X 4X7 Canada",
        is_candidate_for_contact_info_suppression: false,
        cuisine: [
            {
                key: "10636",
                name: "Filipino",
            },
            {
                key: "10659",
                name: "Asian",
            },
        ],
        dietary_restrictions: [],
        booking: {
            provider: "SkipTheDishes",
            url: "https://www.tripadvisor.com/Commerce?p=Delivery_Takeaway&src=218831169&geo=17531565&from=api&area=reservation_button&slot=1&matchID=1&oos=0&cnt=1&silo=30023&bucket=964305&nrank=1&crank=1&clt=R&ttype=Restaurant&tm=230817579&managed=false&capped=false&gosox=qs47FbMDbcv-HhvPS98PQf-9m8nf2yOS8LWjz44KVNmWpYNNM3AMr4R6hGrqZHR2NGi9I6nuBPmXmunT2F7Y2WZOuMwwSbD04bWIFVniEW0&cs=12fad8c47596fc4ff29135d385635834d",
        },
        reserve_info: {
            id: "17531565",
            provider: "SkipTheDishes",
            provider_img:
                "https://static.tacdn.com/img2/eateries/skipthedishes_11.19.2021.png",
            url: "https://www.tripadvisor.com/Commerce?p=Delivery_Takeaway&src=218831169&geo=17531565&from=api&area=reservation_button&slot=1&matchID=1&oos=0&cnt=1&silo=30023&bucket=964305&nrank=1&crank=1&clt=R&ttype=Restaurant&tm=230817579&managed=false&capped=false&gosox=qs47FbMDbcv-HhvPS98PQf-9m8nf2yOS8LWjz44KVNmWpYNNM3AMr4R6hGrqZHR2NGi9I6nuBPmXmunT2F7Y2WZOuMwwSbD04bWIFVniEW0&cs=12fad8c47596fc4ff29135d385635834d",
            booking_partner_id: null,
            racable: false,
            api_bookable: false,
            timeslots: null,
            bestoffer: null,
            timeslot_offers: null,
            button_text: "Order Online",
            disclaimer_text: null,
            banner_text: null,
        },
        establishment_types: [
            {
                key: "10591",
                name: "Restaurants",
            },
        ],
    },
];

export default App;
