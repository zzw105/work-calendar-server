import mongoose, { Schema, Document } from "mongoose";

export interface calendarType extends Document {
  list: { [key: string]: string };
}

const calendarSchema = new Schema<calendarType>({
  list: { type: Array, required: true },
});

// 临时存储用户数据的模拟数据库
// export const calendars: calendarType[] = [
//   { "2024-11-08": "123", "2024-11-09": "123" },
// ];

export const calendars = mongoose.model<calendarType>(
  "calendar",
  calendarSchema
);
