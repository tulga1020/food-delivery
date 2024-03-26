import { Typography, TextField, Button } from "@mui/material";
export const RestoreStep1 = (props: any) => {
  const { userEmail } = props;
  return (
    <div className="w-[448px] h-[310px] ">
      <Typography> Нууц үг сэргээх</Typography>
      <TextField
        className="w-full h-12"
        variant="filled"
        label="Имэйл"
        value={userEmail}
      />
      <Button disabled>Үргэлжлүүлэх</Button>
    </div>
  );
};
