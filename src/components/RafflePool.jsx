import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
const RafflePool = () => {
  const [raffles, setRaffles] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchMetrics = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BASE_URI}/api/v1/raffle-pool`
        );
        setRaffles(response.data);
        console.log(raffles);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch metrics");
        setLoading(false);
      }
    };

    fetchMetrics();
  }, []);
  return (
    <div className=" border border-black p-[20px] rounded-[10px]">
      <h2 className=" text-[30px] text-black font-bold text-center">
        Active Raffles
      </h2>
      <div className="flex justify-between font-bold text-[20px] mt-[10px] mb-[10px]">
        <p>Raffle Id</p>
        <p>Raffle Title</p>
        <p>Raffle Pool</p>
      </div>
      <div className=" font-medium">
        {loading ? (
          <p>loading</p>
        ) : (
          raffles.map((raffle) => (
            <div className=" flex justify-between  ">
              <p>{raffle.raffleId}</p>
              <p>{raffle.raffleTitle}</p>
              <p>{raffle.rafflePool} ETH</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default RafflePool;
