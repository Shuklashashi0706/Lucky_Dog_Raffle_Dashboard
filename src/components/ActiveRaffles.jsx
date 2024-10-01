import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
const ActiveRaffles = () => {
  const [raffles, setRaffles] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchMetrics = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BASE_URI}/api/v1/active-raffles`
        );
        setRaffles(response.data);
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
      <h2 className=" text-[30px] text-black font-bold">Active Raffles</h2>
      <div className=" font-medium">
        {loading ? (
          <p>loading</p>
        ) : (
          <ul>
            <li>Total Active Raffles: {raffles.activeRafflesCount}</li>
            <li>Time Bound Raffles: {raffles.timeBoundRafflesCount}</li>
            <li>Ticket Bound Raffles: {raffles.ticketBoundRafflesCount}</li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default ActiveRaffles;
