import { connectToDatabase } from "./db/db-connect";
import App from "./app";
import homeRoutes from './routes/home.routes';

connectToDatabase().then(() => {
    console.log('Success');
  });
  
const server = new App();

server.listen();

server.app.use('/', homeRoutes);

