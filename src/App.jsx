import ActiveRaffles from "./components/ActiveRaffles";
import GlobalMetrics from "./components/GlobalMetrics";

function App() {
  return (
    <div className="">
      <div className=" flex justify-center gap-[200px] mt-[100px]">
        <GlobalMetrics />
        <ActiveRaffles />
      </div>
    </div>
  );
}

export default App;
