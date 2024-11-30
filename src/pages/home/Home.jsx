import React, { useState } from "react";
import Navbar from "../../shared/Navbar/Navbar";
import Slider from "../../components/slider/Slider";
import TouristSpotSomething from "../../components/TouristSpotSomething/TouristSpotSomething";
import { Link, useLoaderData } from "react-router-dom";
import TourismCard from "../../components/TourismCard/TourismCard";
import Footer from "../../shared/Footer/Footer";

export default function () {
    const tourisms = useLoaderData();
    const [dataLength, setDataLength] = useState(12);
    return (
        <div>
            <Navbar></Navbar>
            <Slider></Slider>
            <TouristSpotSomething></TouristSpotSomething>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {tourisms.slice(0, dataLength).map((tourism) => (
                    <TourismCard
                        key={tourism._id}
                        tourism={tourism}
                    ></TourismCard>
                ))}
            </div>
            <div className="text-center mt-4 mb-4">
                <Link to="/allTouristSpot">
                    <button className="btn btn-primary">Show All</button>
                </Link>
            </div>
            <Footer></Footer>
        </div>
    );
}
