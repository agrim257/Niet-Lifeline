const express = require("express");

const router = express.Router();
const db = require("../database/db");
// Temporary OTP Storage
const otpStore = {};

// Generate OTP
router.post("/send-otp", (req, res) => {

    const { email } = req.body;

    const otp = Math.floor(100000 + Math.random() * 900000);

    const sql = `
INSERT INTO otp (email, otp)
VALUES (?, ?)
ON DUPLICATE KEY UPDATE otp = VALUES(otp)
`;

    db.query(sql, [email, otp], (err, result) => {

        if (err) {
            console.log(err);

            return res.status(500).json({
                success: false,
                message: "Database Error"
            });
        }

        console.log("Email:", email);
        console.log("Generated OTP:", otp);
        console.log("OTP Saved Successfully");

        res.status(200).json({
            success: true,
            message: "OTP Generated Successfully"
        });

    });

});

// Verify OTP
// Verify OTP
router.post("/verify-otp", (req, res) => {

    const { email, otp } = req.body;

    // Check OTP in database
    const verifyQuery = "SELECT * FROM otp WHERE email = ? AND otp = ?";

    db.query(verifyQuery, [email, otp], (err, result) => {

        if (err) {
            console.log(err);

            return res.status(500).json({
                success: false,
                message: "Database Error"
            });
        }

        // OTP not found
        if (result.length === 0) {

            return res.status(400).json({
                success: false,
                message: "Invalid OTP"
            });

        }

        // Delete OTP after successful verification
        const deleteQuery = "DELETE FROM otp WHERE email = ?";

        db.query(deleteQuery, [email], (err) => {

            if (err) {
                console.log(err);

                return res.status(500).json({
                    success: false,
                    message: "Database Error"
                });
            }

            // Check if user is already registered
            const checkUserQuery = "SELECT * FROM users WHERE email = ?";

            db.query(checkUserQuery, [email], (err, userResult) => {

                if (err) {
                    console.log(err);

                    return res.status(500).json({
                        success: false,
                        message: "Database Error"
                    });
                }

                // User already registered
                if (userResult.length > 0) {

                    return res.status(200).json({
                        success: true,
                        message: "Login Successful",
                        isRegistered: true
                    });

                }

                // New user
                return res.status(200).json({
                    success: true,
                    message: "Registration Required",
                    isRegistered: false
                });

            });

        });

    });

});
router.post("/register", (req, res) => {

    const { name, email, roll_no, branch, year, section } = req.body;

    const sql = `
    INSERT INTO users
    (name, email, roll_no, branch, year, section)
    VALUES (?, ?, ?, ?, ?, ?)
    `;

    db.query(
        sql,
        [name, email, roll_no, branch, year, section],
        (err, result) => {

            if (err) {
                console.log(err);

                return res.status(500).json({
                    success: false,
                    message: "Registration Failed"
                });
            }

            return res.status(201).json({
                success: true,
                message: "Registration Successful"
            });

        }
    );

});
module.exports = router;  


