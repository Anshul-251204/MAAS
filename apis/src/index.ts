import app from "./app";
import env from "./config/env";
import connectDB from "./db/connect";

const MONGO_URI = env.DB.url!;
const DB_NAME = env.DB.name!;

connectDB(MONGO_URI, DB_NAME)
  .then(() => {
    app.listen(env.PORT, () => {
      console.log(`⚙️  Server is running on PORT ${env.PORT} `);
    });
  })
  .catch((err) => {
    console.log(`mongo db connection failed on error :: ${err}`);
  });
