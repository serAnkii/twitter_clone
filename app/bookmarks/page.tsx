import LogoutButton from "../Components/Server-components/LogoutButton";
const page = () => {
  return (
    <div className="h-full w-[100%] overflow-scroll max-md:w-[100%] border-l-[0.5px] border-r-[0.5px] border-gray-600 overflow-x-hidden flex flex-col ">
      <div className="sticky top-0 flex p-3 pl-4 border-b-[1px] border-border justify-between items-center bg-transparent backdrop-blur-sm z-50">
        <h1 className="font-semibold text-2xl text-icon">Bookmarks</h1>
        <LogoutButton />
      </div>
      <div className="w-full h-full flex items-center justify-center">
          <h1 className="text-white">Your Bookmarks Will appear here </h1>
        </div>
    </div>
  );
};

export default page;
