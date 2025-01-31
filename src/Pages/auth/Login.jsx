import { useEffect, useState } from "react";
import AuthImage from "../../assets/Red-and-Black-Monogram-Sports-Baseball-Club-Logo.png";
import Button from "../../components/Button";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authContext";

const Login = () => {

    const navigate = useNavigate();

    const [credentials, setCredentials] = useState({
        email: "",
        password: "",
    });

    const { signInWithGoogle, user } = useAuth();


    useEffect(() => {
        if (user) {
            navigate("/get-start");
        }
    }, [user, navigate]);

    const handleGoogleSignIn = async () => {
        try {
            await signInWithGoogle();
        } catch (error) {
            console.error("Error signing in with Google:", error.message);
        }
    };



    const handleChange = (e) => {
        const { name, value } = e.target;
        setCredentials((prev) => ({
            ...prev,
            [name]: value,
        }));
    };


    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("http://localhost:5000/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(credentials),
            });

            const result = await response.json();
            if (response.ok) {
                alert("Login successful!");
                navigate("/playsection");
            } else {
                alert(result.message || "Invalid email or password.");
            }
        } catch (error) {
            console.error("Error during login:", error.message);
            alert("An error occurred. Please try again later.");
        }
    };



    return (
        <div
            style={{
                backgroundImage: `url(${AuthImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
            className="h-screen w-full bg-black relative"
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-[#1B1B2E] bg-opacity-90"></div>

            {/* Content */}
            <div className="relative z-10 h-full flex flex-col justify-center items-center p-4 lg:p-10 text-white">
                <h2 className="text-xl mb-4 text-center lg:text-3xl lg:mb-8 font-black uppercase">
                    Continue Playing Baseball Gaming Championship
                </h2>

                <div className="flex items-center w-full max-w-lg lg:max-w-2xl">
                    <div className="w-full py-8 px-6 bg-[#2C2C44] bg-opacity-70 rounded-lg border-4">
                        {/* Header */}
                        <div className="flex items-center gap-3 pb-6">
                            <span className="bg-white h-10 w-10 rounded-full"></span>
                            <h3 className="text-xl lg:text-2xl font-bold capitalize">
                                Welcome Back to MBL
                            </h3>
                        </div>

                        {/* Form */}
                        <form
                            onSubmit={handleSubmit}
                            className="flex flex-col gap-4 h-[350px] lg:h-full overflow-y-auto scrollbar-none"
                        >
                            <div className="flex flex-col lg:flex-row gap-2">
                                <input

                                    type="email"
                                    className="bg-transparent border p-3 flex-1 rounded-lg text-sm lg:text-base"
                                    placeholder="Enter Your Email"
                                    value={credentials.email}
                                    onChange={handleChange}
                                    required
                                />
                                <input

                                    type="password"
                                    className="bg-transparent border p-3 flex-1 rounded-lg text-sm lg:text-base"
                                    placeholder="Enter Your Password"
                                    value={credentials.password}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <p>
                                Don't have an account?{" "}
                                <Link to="/register" className="underline hover:text-blue-400">
                                    <i>Register</i>
                                </Link>
                            </p>

                            <Button
                                type="submit"
                                className="border rounded-lg py-3 w-full text-sm lg:text-base"
                            >
                                Login
                            </Button>

                            <button
                                type="button"
                                onClick={handleGoogleSignIn}
                                className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-lg"
                            >
                                Login with Google
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
