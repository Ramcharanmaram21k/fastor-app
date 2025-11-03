import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Otp.css";

const HARDCODED_OTP = "123456";

function Otp() {
    const [otp, setOtp] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const location = useLocation();
    const mobile = location.state?.mobile;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (otp !== HARDCODED_OTP) {
            setError("Invalid OTP. Please try 123456.");
            return;
        }
        setError("");
        localStorage.setItem("isAuthenticated", "true");
        navigate("/list");
    };

    return (
        <div className="otp-container">
            <form className="otp-form" onSubmit={handleSubmit}>
                <div className="form-title">OTP Verification</div>
                <div style={{textAlign: "center", color: "#555", fontSize: "0.95rem", marginBottom: "10px"}}>
                    Sent to: <span style={{ fontWeight: "500" }}>{mobile || "your mobile"}</span>
                </div>
                <label className="form-label">Enter OTP</label>
                <input
                    type="number"
                    maxLength={6}
                    className="form-input"
                    placeholder="Enter 6-digit OTP"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value.slice(0, 6))}
                />
                {error && <div className="form-error">{error}</div>}
                <button type="submit" className="form-button">
                    Verify
                </button>
            </form>
        </div>
    );
}

export default Otp;
