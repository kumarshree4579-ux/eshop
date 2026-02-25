import dotenv from 'dotenv'

dotenv.config();

const EnvData={
    PORT:process.env.PORT||3000,
    DB_URL:process.env.DB_URL,
    JWT_SECRET:process.env.JWT_SECRET,
    Email_User: process.env.Email_User,
    Email_Pass:process.env.Email_Pass
}

export default EnvData