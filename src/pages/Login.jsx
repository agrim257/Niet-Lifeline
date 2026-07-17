import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {

    // State to store the email
    const [email, setEmail] = useState("");

    // React Router navigation
    const navigate = useNavigate();

    // Function to send OTP
    const sendOTP = async () => {

        try {

            const response = await axios.post(
                "http://localhost:5000/api/send-otp",
                {
                    email
                }
            );

            console.log(response.data);

            // Navigate to OTP page and send email
            navigate("/otp", {
                state: {
                    email
                }
            });

        } catch (error) {

            console.log("FULL ERROR:");
            console.log(error);

            if (error.response) {
                console.log(error.response.data);
            }

            alert("Something went wrong");

        }

    };

    return (
        <div>

            <h1>NIET Lifeline</h1>

            <h2>Student Login</h2>

            <input
                type="email"
                placeholder="Enter NIET Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <br /><br />

            <button onClick={sendOTP}>
                Send OTP
            </button>

        </div>
    );
}

export default Login;