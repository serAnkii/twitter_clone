import Sidebar from "@/app/Components/Sidebar"
import Mainsection from "@/app/Components/Mainsection"
import Rightsection from "./Components/Rightsection";
const page = () => {
  return (
    <div className="h-full w-[100vw] bg-black flex justify-around relative items-center">
      <div className="w-[80vw] h-screen relative flex">
        <Sidebar/>
        <Mainsection/>
        <Rightsection/>
      </div>
    </div>
  );
};

export default page;
