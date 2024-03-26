import * as bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
export const passwordHash = async (password: string) => {
  console.log(password);

  const salt = await bcrypt.genSaltSync(12);
  const hashedPassword = await bcrypt.hashSync(password, salt);
  console.log(hashedPassword);

  return hashedPassword;
};

export const compareHash = async (password: string, hashedPassword: string) => {
  const isPasswordRight = await bcrypt.compareSync(password, hashedPassword);
  console.log(isPasswordRight);

  return isPasswordRight;
};

export const tokenGenerate = async (userId: string) => {
  const token = jwt.sign({ userId }, "secret", { expiresIn: "1d" });
  return token;
};
