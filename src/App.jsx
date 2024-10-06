import ActiveRaffles from "./components/ActiveRaffles";
import GlobalMetrics from "./components/GlobalMetrics";
import CompletedRaffles from "./components/CompletedRaffles";
import RevenueDistribution from "./components/RevenueDistribution";
import RafflePool from "./components/RafflePool";
function App() {
  return (
    <div className="">
      <h2 className=" text-center text-[60px] text-black font-bold mt-[50px]">
        Dashboard
      </h2>
      <div className=" m-5 grid grid-cols-2 gap-5 mt-[50px] ">
        <GlobalMetrics />
        <ActiveRaffles />
        <CompletedRaffles />
        <RevenueDistribution />
      </div>
      <div className=" w-[60%] mx-auto ">
        <RafflePool />
      </div>
    </div>
  );
}

export default App;
