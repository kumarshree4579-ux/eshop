import User from "../model/UserModel.js";
import GenerateToken from '../middleware/GenerateToken.js'
import { sendEmail } from "../utils/sendEmail.js";

export const createUser = async (req, res) => {
    try {
        const { name, email, mobile } = req.body;
        if (!email || !mobile) {
            return res.status(400).json({ message: "Email and mobile are required", success: false })
        }
        const otp = Math.floor(1000 + Math.random() * 9999)
        const user = await User.findOne({ email })
        if (user) {
            user.otp = otp;
            await user.save()
            sendEmail({ email: email, subject: `OTP for login is ${otp}`, msg: `<p>Your OTP for login is <b>${otp}</b></p>` })
            return res.status(200).json({ message: "User already exist", success: true })
        }
        const newUser = await User.create({ name, email, mobile, otp });
        if (!newUser) {
            return res.status(400).json({ message: "User not created", success: false })
        }
        sendEmail({ email: email, subject: `OTP for login is ${otp}`, msg: `<p>Your OTP for login is <b>${otp}</b></p>` })
        return res.status(200).json({ message: "User created successfully", success: true })
    } catch (error) {
        return res.status(500).json({ message: "Internal Server Error", success: false, error })
    }
}
export const verifyOTP = async (req, res) => {
    try {
        const { email, otp } = req.body;
        if (!email || !otp) {
            return res.status(400).json({ message: "All fields required", success: false })
        }
        const user = await User.findOne({ email })
        if (!user) {
            return res.status(404).json({ message: "User not found", success: false })
        }
        if (user.otp != otp) {
            console.log("UserOTP" + user.otp + " & OTP is " + otp)
            return res.status(401).json({ message: "Invalid OTP", success: false })
        }
        user.otp = null
        await user.save()
        const token = GenerateToken(user._id)
        return res.status(200).json({ message: "OTP Verified successfully", success: true, token })

    } catch (error) {
        return res.status(500).json({ message: "Internal Server Error", success: false, error })
    }
} 