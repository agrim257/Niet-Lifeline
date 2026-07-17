import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

function OTP() {

    const [otp, setOtp] = useState("");

    const location = useLocation();
    const navigate = useNavigate();

    const email = location.state?.email;

    const verifyOTP = async () => {

        try {

            const response = await axios.post(
                "http://localhost:5000/api/verify-otp",
                {
                    email,
                    otp
                }
            );

            console.log(response.data);

            if (response.data.isRegistered) {

    navigate("/dashboard");

} else {

    navigate("/register", {
        state: {
            email
        }
    });

}

        } catch (error) {

            console.log(error);

            alert("Invalid OTP");

        }

    };

    return (
        <div>

            <h1>NIET Lifeline</h1>

            <h2>Verify OTP</h2>

            <input
                type="text"
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
            />

            <br /><br />

            <button onClick={verifyOTP}>
                Verify OTP
            </button>

        </div>
    );
}

export default OTP;               