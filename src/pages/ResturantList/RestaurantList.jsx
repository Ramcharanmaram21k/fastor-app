import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import restaurants from "../../api/mockData.js";
import "./RestaurantList.css";

function RestaurantList() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [error] = useState(""); // For extensible error handling
    const [data, setData] = useState([]);

    useEffect(() => {
        if (localStorage.getItem("isAuthenticated") !== "true") {
            navigate("/login");
            return;
        }
        setLoading(true);
        setTimeout(() => {
            setData(restaurants);
            setLoading(false);
        }, 700); // Simulated API fetch delay
    }, [navigate]);

    return (
        <div className="screen-bg">
            <div className="list-container">
                <div className="list-title">Nearby Restaurants</div>
                {loading ? (
                    <div style={{textAlign: "center", padding: "2rem"}}>Loading...</div>
                ) : error ? (
                    <div style={{color: "red", textAlign: "center"}}>{error}</div>
                ) : (
                    <div className="cards-grid">
                        {data.map((restaurant) => (
                            <div
                                className="restaurant-card"
                                key={restaurant.id}
                                onClick={() => navigate(`/detail/${restaurant.id}`)}
                                tabIndex={0}
                                role="button"
                                aria-label={`View details for ${restaurant.name}`}
                            >
                                <img
                                    src={restaurant.imageURL}
                                    alt={restaurant.name}
                                    className="restaurant-image"
                                />
                                <div className="restaurant-name">{restaurant.name}</div>
                                <div className="restaurant-address">{restaurant.address}</div>
                                <div className="restaurant-rating">⭐ {restaurant.rating}</div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default RestaurantList;
