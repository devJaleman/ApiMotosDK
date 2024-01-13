import dotenv from 'dotenv';
import pg from 'pg';
const { Pool } = pg;
dotenv.config();

//const around = "pro";
const around = "dev";

const poolHost =  around==='pro'? process.env.DB_HOST:	'localhost';
const poolName =  around==='pro'? process.env.DB_HOST:	'localmotosdk';
const poolUser =  around==='pro'? process.env.DB_HOST:	'postgres';
const poolPass =  around==='pro'? process.env.DB_HOST:	'0';
const poolPort =  around==='pro'? process.env.DB_HOST: 	'5432';

export const pool = new Pool({
	host: 		poolHost,
	database: 	poolName,
  	user: 		poolUser,
  	password: 	poolPass,
  	port: 		poolPort,
});