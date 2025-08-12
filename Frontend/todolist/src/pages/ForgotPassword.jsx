import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/')
        console.log("Password reset request for:", email);
        console.log("Entered new password:", password);
 
    };

    return (
        <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
            <div className="card shadow p-4" style={{ width: "100%", maxWidth: "400px" }}>
                <h2 className="text-center mb-4">Reset Password</h2>
                <p className="text-muted text-center">
                    Enter your email address and your new password.
                </p>
                <form onSubmit={handleSubmit}>
                    
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input
                            type="email"
                            id="email"
                            className="form-control"
                            placeholder="Enter your registered email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                 
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">New Password</label>
                        <input
                            type="password"
                            id="password"
                            className="form-control"
                            placeholder="Enter your new password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                   
                    <button type="submit" className="btn btn-primary w-100 mb-3">
                        Reset Password
                    </button>

                   
                    <div className="text-center" onClick={()=>navigate('/')}>
                        <p className="text-decoration-none">
                            Back to Login
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ForgotPassword;
