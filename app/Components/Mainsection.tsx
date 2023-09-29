
import "@/app/globals.css"

const Mainsection = () => {
  return (  
    <main className="h-full w-[50%] overflow-scroll max-md:w-[100%]">
      <h1 className="text-xl font-bold p-6 backdrop-blur bg-black/10 sticky top-0 ">
        Home
      </h1>
      <div className="border-t-[0.5px] px-4 border-b-[0.5px] flex items-stretch py-6 space-x-2 border-gray-600 relative">
        <div className="w-11 h-11 bg-slate-400 rounded-full flex-none"></div>
        
      </div>
      <div className="w-full " >
        <div className="w-50 h-64 bg-white"><h1>hello</h1></div>
        <div className="w-50 h-64 bg-slate-300"> dahdf</div>
        <div className="w-50 h-64 bg-slate-600"></div>
        <div className="w-100"></div>
        <div className="w-50"></div>
      </div>
    </main>
  )
}

export default Mainsection