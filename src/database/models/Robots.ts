import { model, Schema } from "mongoose";

const robotSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  characteristics: {
    speed: {
      type: Number,
      min: 0,
      max: 10,
      required: true,
    },
    stamina: {
      type: Number,
      min: 0,
      max: 10,
      required: true,
    },
    creationDate: {
      type: Date,
      required: true,
    },
  },
});

const Robot = model("Robot", robotSchema, "robots");

export default Robot;
