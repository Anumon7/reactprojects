import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Email:", email);
        console.log("Password:", password);
        navigate('/home');
     
    };

    const handleForgot = () => {
        navigate('/forgotpassword');
    };

    const handleSignup = () => {
        navigate('/signup');
    };

    return (
        <div className="d-flex vh-100">
            <div
                className="d-none d-md-flex flex-column justify-content-center align-items-center text-white p-5"
                style={{
                    flex: 1,
                    backgroundImage: "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <h1>Welcome Back!</h1>
                <p className="lead">
                    Access your account to continue enjoying our services.
                </p>
            </div>

            <div className="d-flex justify-content-center align-items-center flex-column" style={{ flex: 1, backgroundColor: "#6ca193" }}>
                <div className="card shadow p-4" style={{ width: "100%", maxWidth: "400px" }}>
                    <h2 className="text-center mb-4">Login</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email address</label>
                            <input
                                type="email"
                                id="email"
                                className="form-control"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input
                                type="password"
                                id="password"
                                className="form-control"
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>

                        
                        <div className="text-end mb-3">
                            <p
                                className="text-primary text-decoration-none"
                                style={{ cursor: "pointer" }}
                                onClick={handleForgot}
                            >
                                Forgot Password?
                            </p>
                        </div>

                       
                        <button type="submit" className="btn btn-primary w-100 mb-2">
                            Login
                        </button>

                       
                        <button
                            type="button"
                            className="btn btn-outline-secondary w-100"
                            onClick={handleSignup}
                        >
                            Sign Up
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
