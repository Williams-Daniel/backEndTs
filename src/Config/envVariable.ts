import dotenv from "dotenv"

dotenv.config()

const envVariables = {
    PORT:process.env.PORT!,
    DATABASE:process.env.DATABASE!
}

export default envVariables