import Koa from "koa";
import bodyParser from "koa-bodyparser";
import router from "./routes";
import { connectDB } from "./db";

const app = new Koa();

app.use(bodyParser());
app.use(router.routes()).use(router.allowedMethods());

// app.use(async (ctx) => {
//   ctx.body = "Hello, Koa with TypeScript!";
// });
// 连接数据库
connectDB();

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
