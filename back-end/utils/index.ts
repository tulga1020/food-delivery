import bcrypt from "bcrypt";
export const passwordHash = async (password: string) => {
  const salt = await bcrypt.genSalt(123);
  const hashedPassword = await bcrypt.hash(password, salt);
  return hashedPassword;
};

export const compareHash = async (password: string, hashedPassword: string) => {
  const isPasswordRight = await bcrypt.compare(password, hashedPassword);
  return isPasswordRight;
};
