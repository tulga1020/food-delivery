import { Login } from "@/Login/Login";
import Image from "next/image";
export default function Home({ children }) {
  return (
    <div>
      <Login />
    </div>
  );
}
