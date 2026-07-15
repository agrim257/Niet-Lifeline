import { useState } from "react";
import axios from "axios";
function Login() { 
    const [email, setEmail] = useState("");
    const sendOTP = async () => {
    };

    console.log(email);
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

            <button>
                Send OTP
            </button>
        </div>
    );
}

export default Login;