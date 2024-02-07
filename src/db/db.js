import dotenv from 'dotenv'
import pg from 'pg'
const { Pool } = pg
dotenv.config()

//const around = "pro";
const around = 'dev'

const poolHost =
   around === 'pro' ? process.env.PRO_DB_HOST : process.env.DEV_DB_HOST
const poolName =
   around === 'pro' ? process.env.PRO_DB_NAME : process.env.DEV_DB_NAME
const poolUser =
   around === 'pro' ? process.env.PRO_DB_USER : process.env.DEV_DB_USER
const poolPass =
   around === 'pro' ? process.env.PRO_DB_PASS : process.env.DEV_DB_PASS
const poolPort =
   around === 'pro' ? process.env.PRO_DB_PORT : process.env.DEV_DB_PORT

export const pool = new Pool({
   host: poolHost,
   database: poolName,
   user: poolUser,
   password: poolPass,
   port: poolPort,
})
