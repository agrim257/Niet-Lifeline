import Register from "./pages/Register";
import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import OTP from "./pages/OTP";

function App() {

    return (

        <Routes>

            <Route
                path="/"
                element={<Login />}
            />

            <Route
                path="/otp"
                element={<OTP />}
            />
<Route
    path="/register"
    element={<Register />}
/>
        </Routes>

    );

}

export default App;