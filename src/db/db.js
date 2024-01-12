import pg from 'pg';
const { Pool } = pg;
export const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'motosdk',
  password: '0',
  port: 5432, 
});