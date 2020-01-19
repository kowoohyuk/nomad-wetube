import routes from "./routes";

export const localsMiddleWares = (req, res, next) => {
  //locals에 설정한 프로퍼티는 전역 변수처럼 사용 가능하다. main.pug에서 #{siteName}로 사용
  res.locals.siteName = 'WeTube';
  res.locals.routes = routes;
  next();
};