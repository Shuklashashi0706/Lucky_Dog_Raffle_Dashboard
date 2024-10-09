import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

const RafflePool = () => {
  const [raffles, setRaffles] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isActive, setIsActive] = useState(false);
  useEffect(() => {
    const fetchMetrics = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `${
            import.meta.env.VITE_BASE_URI
          }/api/v1/raffle-pool?isActive=${isActive}`
        );
        setRaffles(response.data);
        console.log(response.data);
        setLoading(false);
      } catch (err) {
        console.log(err);
        setError("Failed to fetch metrics");
        setLoading(false);
      }
    };

    fetchMetrics();
  }, [isActive]);

  const handleDropdownChange = (e) => {
    setIsActive(e.target.value);
  };

  return (
    <div className="border border-black p-[20px] rounded-[10px]">
      <div className=" flex  justify-between pr-[50px] pl-[0px] mb-[10px]">
        <h2 className="text-[30px] text-black font-bold text-center">
          Active Raffles
        </h2>
        <select value={isActive} onChange={handleDropdownChange} className=" p-[5px] rounded-[10px] ">
          <option value="true">Active Raffles</option>
          <option value="false">Completed Raffles</option>
        </select>
      </div>
      <div className="flex justify-between font-bold text-[20px] mt-[10px] mb-[10px]">
        <p className="w-[20%]">Raffle Id</p>
        <p className="w-[20%]">Raffle Title</p>
        <p className="w-[20%]">Created By</p>
        <p className="w-[20%]">Group</p>
        <p className="w-[20%]">Raffle Pool</p>
      </div>

      <div className="font-medium">
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          raffles?.map((raffle) => (
            <div key={raffle.raffleId} className="flex justify-between">
              <p className="w-[20%]">{raffle.raffleId}</p>
              <p className="w-[20%]">{raffle.raffleTitle}</p>
              <p className="w-[20%]">{raffle.userId}</p>
              <p className="w-[20%]">{raffle.groupName}</p>
              <p className="w-[20%]">{raffle.rafflePool} ETH</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default RafflePool;
