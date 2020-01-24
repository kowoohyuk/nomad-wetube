import express from "express";
import logger from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import { localsMiddleWares } from "./middleWares";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";
import routes from "./routes";
const app = express();

app.use(helmet());
app.set('view engine', 'pug');
app.use(cookieParser());

//bodyParser를 통해 form의 값을 req의 body로 받아올 수 있다.
app.use(bodyParser.json());
//urlencoded도 필요하다!
app.use(bodyParser.urlencoded({ extended: true}));

app.use(logger("dev"));
app.use(localsMiddleWares);

app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);

export default app;