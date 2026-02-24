import express from "express"
import jwt from "jsonwebtoken"
const app = express()

const SECRET = "lpu"
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSm9obiIsImVtYWlsIjoiam9obkBnbWFpbC5jb20iLCJyb2xlIjoic3R1ZGVudCIsImlhdCI6MTc3MTgzMzk5OCwiZXhwIjoxNzcxODM3NTk4fQ.gmV8IS_36Wz_euJIVfPuVQjCSNOvnky2gPeJ69RhZVc"

const user = jwt.verify(token, SECRET)
console.log(user)