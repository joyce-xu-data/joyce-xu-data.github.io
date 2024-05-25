import dotenv from "dotenv";
import express from 'express';
import methodOverride from 'method-override';
import session from 'express-session';
import pg from "pg";
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url'; 
import blogPostRoutes from './routes/blogPost.mjs'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3001;
dotenv.config();


const db = new pg.Client({
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  database: process.env.PG_DB,
  password: process.env.PG_PASSWORD,
  port: process.env.PG_PORT,
});


db.connect();
export {db};


app.use(cors()); // CORS should come first to ensure CORS headers are applied
app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies
app.use(methodOverride('_method'));

app.use('/api', blogPostRoutes);


app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

app.use((error, req, res, next) => {
  console.error(error);
  res.status(500).send('Internal Server Error');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});