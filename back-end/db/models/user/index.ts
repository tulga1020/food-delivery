import { Model, models, model, Schema } from "mongoose";

export type UserModelType = {
  _id: Schema.Types.ObjectId;
  name: string;
  email: string;
  phone: string;
  password: string;
  isAdmin?: boolean;
};
const Userschema = new Schema<UserModelType>({
  name: { type: String, required: true },
  email: { type: String, require: true },
  phone: { type: String, require: true },
  password: { type: String, require: true },
  isAdmin: { type: Boolean, default: false, require: false },
});
export const UserModel: Model<UserModelType> =
  models["Users"] || model("Users", Userschema);
