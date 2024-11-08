import { Context } from "koa";
import { calendars, calendarType } from "../models/calendar";

export const getCalendars = async (ctx: Context) => {
  const allCalendars = await calendars.find();
  ctx.body = {
    code: 200,
    data: allCalendars[0].list,
  };
};

export const createCalendars = async (ctx: Context) => {
  const allCalendars = await calendars.find();
  const newUser: calendarType = ctx.request.body as calendarType;
  await calendars.findByIdAndUpdate(
    allCalendars[0]._id,
    { list: newUser },
    { new: true }
  );
  // const calendar = new calendars({ list: newUser });
  // await calendar.save();
  // newUser.id = calendars.length ? calendars[calendars.length - 1].id + 1 : 1;
  // calendars.push(newUser);
  // ctx.body = newUser;
  ctx.body = {
    code: 200,
    data: true,
  };
};

// export const updateUser = (ctx: Context) => {
//   const id = Number(ctx.params.id);
//   const index = calendars.findIndex((u) => u.id === id);
//   if (index > -1) {
//     calendars[index] = { ...calendars[index], ...ctx.request.body };
//     ctx.body = calendars[index];
//   } else {
//     ctx.status = 404;
//   }
// };

// export const deleteUser = (ctx: Context) => {
//   const id = Number(ctx.params.id);
//   const index = calendars.findIndex((u) => u.id === id);
//   if (index > -1) {
//     calendars.splice(index, 1);
//     ctx.status = 204;
//   } else {
//     ctx.status = 404;
//   }
// };
