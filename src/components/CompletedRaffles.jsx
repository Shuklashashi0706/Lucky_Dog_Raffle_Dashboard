import React, { useState, useEffect } from "react";
import axios from "axios";

const CompletedRaffles = () => {
  const [raffles, setRaffles] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCompletedRaffles = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BASE_URI}/api/v1/completed-raffles`
        );
        setRaffles(response.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch completed raffles data");
        setLoading(false);
      }
    };

    fetchCompletedRaffles();
  }, []);

  return (
    <div className="border border-black p-[20px] rounded-[10px]">
      <h2 className="text-[30px] text-black font-bold">Completed Raffles</h2>
      <div className="font-medium">
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          <ul>
            <li>Total Completed Raffles: {raffles.totalCompletedRaffles}</li>
            <li>Time-Based Completed Raffles: {raffles.timeBasedCompletedRaffles}</li>
            <li>Ticket-Based Completed Raffles: {raffles.ticketBasedCompletedRaffles}</li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default CompletedRaffles;
