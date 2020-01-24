import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

mongoose.connect(
  process.env.MONGO_URL, 
  {
    // 신버전의 몽구스는 Configuration을 보낼 수 있다.
    useNewUrlParser: true,
    useFindAndModify: false
  }
);

const db = mongoose.connection;

const handleOpen = () =>
  console.log('✔ Connected to DB');
const handleError = error =>
  console.log('❌ Error On DB Connection:${error');

db.once("open", handleOpen);
db.on("error", handleError);
