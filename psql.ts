import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

export default new Pool({
  user: 'postgres',
  password: process.env.PASSWORD,
  host: '0.0.0.0',
  port: 5432,
  database: process.env.DATABASE,
  // ssl: {
  //   rejectUnauthorized: false,
  // },
});
