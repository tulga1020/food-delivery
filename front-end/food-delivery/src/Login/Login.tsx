import UseFormControl from "../components/InputFilled";

export const Login = () => {
  return (
    <div className="w-screen h-9/12 bg-white flex justify-center">
      <div className="w-[448px] h-[549px] bg-green-300 flex flex-col items-center ">
        <div>Нэвтрэх</div>
        <div>
          <form action="login" className="flex flex-col">
            <label>Имэйл</label>
            <UseFormControl />
            <form noValidate autoComplete="off"></form>
          </form>
        </div>
      </div>
    </div>
  );
};
