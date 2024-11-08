import Router from "koa-router";
import {
  getCalendars,
  createCalendars,
} from "./controllers/calendarController";

const router = new Router();

router.get("/calendars", getCalendars);
router.post("/calendars", createCalendars);

export default router;
