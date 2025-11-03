import React, { useRef, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import restaurants from "../../api/mockData.js";
import "./restaurantDetail.css";
import logoImg from "../../assets/fastor-logo1.png";

function RestaurantDetail() {
    const { id } = useParams();
    const navigate = useNavigate();
    const restaurant = restaurants.find((r) => r.id === Number(id));
    const canvasRef = useRef(null);

    // Logo state
    const [logoSize, setLogoSize] = useState(60);
    const [logoPos, setLogoPos] = useState({
        x: (320 - 60) / 2,
        y: (180 - 60) / 2
    });
    const [dragging, setDragging] = useState(false);

    // Redraw image and logo
    useEffect(() => {
        if (!restaurant) return;
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        const img = new window.Image();
        const logo = new window.Image();

        img.src = restaurant.imageURL;
        logo.src = logoImg;

        img.onload = () => {
            canvas.width = 320;
            canvas.height = 180;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
            logo.onload = () => {
                ctx.shadowColor = dragging ? "rgba(37,99,235,0.4)" : "rgba(60,80,180,0.08)";
                ctx.shadowBlur = dragging ? 15 : 5;
                ctx.globalAlpha = dragging ? 0.7 : 1;
                ctx.drawImage(logo, logoPos.x, logoPos.y, logoSize, logoSize);

                // Reset
                ctx.globalAlpha = 1;
                ctx.shadowBlur = 0;
            };
        };
    }, [restaurant, logoPos, dragging, logoSize]);

    // Utility for hit-testing logo
    const isOverLogo = (mouseX, mouseY) =>
        mouseX >= logoPos.x &&
        mouseX <= logoPos.x + logoSize &&
        mouseY >= logoPos.y &&
        mouseY <= logoPos.y + logoSize;

    // Mouse events
    const handleCanvasMouseDown = (e) => {
        const rect = canvasRef.current.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        if (isOverLogo(mouseX, mouseY)) setDragging(true);
    };
    const handleCanvasMouseMove = (e) => {
        const rect = canvasRef.current.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        // Set move-cursor if over logo
        canvasRef.current.style.cursor = isOverLogo(mouseX, mouseY) || dragging ? "move" : "default";
        if (!dragging) return;
        let newX = mouseX - logoSize / 2;
        let newY = mouseY - logoSize / 2;
        // Clamp
        newX = Math.max(0, Math.min(newX, 320 - logoSize));
        newY = Math.max(0, Math.min(newY, 180 - logoSize));
        setLogoPos({ x: newX, y: newY });
    };
    const handleCanvasMouseUp = () => setDragging(false);

    // Touch handlers
    const handleCanvasTouchStart = (e) => {
        const rect = canvasRef.current.getBoundingClientRect();
        const touch = e.touches[0];
        const mouseX = touch.clientX - rect.left;
        const mouseY = touch.clientY - rect.top;
        if (isOverLogo(mouseX, mouseY)) setDragging(true);
    };
    const handleCanvasTouchMove = (e) => {
        if (!dragging) return;
        const rect = canvasRef.current.getBoundingClientRect();
        const touch = e.touches[0];
        let newX = touch.clientX - rect.left - logoSize / 2;
        let newY = touch.clientY - rect.top - logoSize / 2;
        newX = Math.max(0, Math.min(newX, 320 - logoSize));
        newY = Math.max(0, Math.min(newY, 180 - logoSize));
        setLogoPos({ x: newX, y: newY });
    };
    const handleCanvasTouchEnd = () => setDragging(false);

    // Share image
    const handleShare = async () => {
        const canvas = canvasRef.current;
        canvas.toBlob(async (blob) => {
            const file = new File([blob], "restaurant-image.png", { type: "image/png" });
            if (navigator.share) {
                try {
                    await navigator.share({
                        files: [file],
                        title: `Check out ${restaurant.name}!`,
                        text: `Rated ${restaurant.rating} ⭐`,
                    });
                } catch (err) {
                    alert("Share failed: " + err.message);
                }
            } else {
                alert("Web Share API not supported");
            }
        }, "image/png");
    };

    if (!restaurant) {
        return (
            <div className="screen-bg">
                <div style={{ color: "red" }}>Restaurant not found.</div>
            </div>
        );
    }

    return (
        <div className="screen-bg">
            <div className="detail-card">
                <button className="back-btn" onClick={() => navigate(-1)}>← Back</button>
                <div className="detail-title">{restaurant.name}</div>
                <div className="detail-address">{restaurant.address}</div>
                <div className="detail-rating">⭐ {restaurant.rating}</div>
                <div className="logo-size-controls" style={{margin: '14px 0 5px 0', textAlign:'center'}}>
                    <label htmlFor="logo-size-slider" style={{marginRight:'8px', fontWeight:500}}>Logo Size:</label>
                    <input
                        id="logo-size-slider"
                        type="range"
                        min="30"
                        max="120"
                        value={logoSize}
                        onChange={e => setLogoSize(Number(e.target.value))}
                        style={{verticalAlign:'middle'}}
                    />
                    <span style={{marginLeft:'10px', fontWeight:500, color:'#222'}}>{logoSize}px</span>
                </div>
                <div className="canvas-box">
                    <canvas
                        ref={canvasRef}
                        width={320}
                        height={180}
                        className="detail-canvas"
                        onMouseDown={handleCanvasMouseDown}
                        onMouseMove={handleCanvasMouseMove}
                        onMouseUp={handleCanvasMouseUp}
                        onMouseLeave={handleCanvasMouseUp}
                        onTouchStart={handleCanvasTouchStart}
                        onTouchMove={handleCanvasTouchMove}
                        onTouchEnd={handleCanvasTouchEnd}
                    />
                </div>
                <button className="share-btn" onClick={handleShare}>Share Image</button>
            </div>
        </div>
    );
}

export default RestaurantDetail;
