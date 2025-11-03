import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

function Login() {
    const [mobile, setMobile] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!/^\d{10}$/.test(mobile)) {
            setError("Please enter a valid 10-digit mobile number.");
            return;
        }
        setError("");
        navigate("/otp", { state: { mobile } });
    };

    return (
        <div className="screen-bg">
            <form className="center-card" onSubmit={handleSubmit}>
                <div className="form-title">Login</div>
                <label className="form-label">Mobile Number</label>
                <input
                    type="tel"
                    className="form-input"
                    maxLength={10}
                    placeholder="Enter 10-digit number"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value.replace(/\D/, ""))}
                />
                {error && <div className="form-error">{error}</div>}
                <button type="submit" className="form-button">
                    Send OTP
                </button>
            </form>
        </div>
    );
}
export default Login;
