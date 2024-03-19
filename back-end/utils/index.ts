import bcrypt from "bcrypt";
export const passwordHash = async (password: string) => {
  console.log(password);

  const salt = await bcrypt.genSaltSync(12);
  const hashedPassword = await bcrypt.hashSync(password, salt);
  return hashedPassword;
};

export const compareHash = async (password: string, hashedPassword: string) => {
  const isPasswordRight = await bcrypt.compareSync(password, hashedPassword);
  return isPasswordRight;
};
