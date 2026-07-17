import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

function Register() {

    // States
    const [name, setName] = useState("");
    const [rollNo, setRollNo] = useState("");
    const [branch, setBranch] = useState("");
    const [year, setYear] = useState("");
    const [section, setSection] = useState("");

    // React Router Hooks
    const location = useLocation();
    const navigate = useNavigate();

    // Email received from OTP Page
    const email = location.state?.email;

    // Register Function
    const registerUser = async () => {

        try {

            const response = await axios.post(
                "http://localhost:5000/api/register",
                {
                    name,
                    email,
                    roll_no: rollNo,
                    branch,
                    year,
                    section
                }
            );

            console.log(response.data);

            alert(response.data.message);

            // Go to Dashboard after successful registration
            navigate("/dashboard");

        } catch (error) {

            console.log(error);

            alert("Registration Failed");

        }

    };

    return (

        <div>

            <h1>NIET Lifeline</h1>

            <h2>Complete Registration</h2>

            <input
                type="text"
                placeholder="Enter Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <br /><br />

            <input
                type="text"
                placeholder="Enter Roll Number"
                value={rollNo}
                onChange={(e) => setRollNo(e.target.value)}
            />

            <br /><br />

            <input
                type="text"
                placeholder="Enter Branch"
                value={branch}
                onChange={(e) => setBranch(e.target.value)}
            />

            <br /><br />

            <input
                type="number"
                placeholder="Enter Year"
                value={year}
                onChange={(e) => setYear(e.target.value)}
            />

            <br /><br />

            <input
                type="text"
                placeholder="Enter Section"
                value={section}
                onChange={(e) => setSection(e.target.value)}
            />

            <br /><br />

            <button onClick={registerUser}>
                Register
            </button>

        </div>

    );

}

export default Register;