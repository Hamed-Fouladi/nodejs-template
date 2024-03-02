import { DataSource } from "typeorm";
import { join } from "path";

const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  synchronize: false,
  logging: true,
  migrations: [join(__dirname, "/migrations/*.ts")],
  entities: [join(__dirname, "/models/*.js")],
});

export default AppDataSource;
