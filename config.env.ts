import { config } from 'dotenv';
config();

export const envConfig = {
  DB_URL: process.env.DB_URL ?? '',
  DB_NAME: process.env.DB_NAME ?? 'nojau',
  PORT: process.env.PORT ?? '',
  JWT_SECRET: process.env.JWT_SECRET
};
