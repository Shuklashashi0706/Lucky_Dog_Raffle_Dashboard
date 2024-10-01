import ActiveRaffles from "./components/ActiveRaffles";
import GlobalMetrics from "./components/GlobalMetrics";

function App() {
  return (
    <div className="">
      <h2 className=" text-center text-[60px] text-black font-bold mt-[50px]">
        Dashboard
      </h2>
      <div className=" flex justify-center gap-[100px] mt-[50px] ">
        <GlobalMetrics />
        <ActiveRaffles />
      </div>
    </div>
  );
}

export default App;
