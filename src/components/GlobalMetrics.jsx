import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
const GlobalMetrics = () => {
  const [metrics, setMetrics] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchMetrics = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BASE_URI}/api/v1/global-metrics`
        );
        setMetrics(response.data);
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
      <h2 className=" text-[30px] text-black font-bold">Global Metrics</h2>
      <div className=" font-medium">
        {loading ? (
          <p>loading</p>
        ) : (
          <ul>
            <li>Total Raffles Created: {metrics.raffleCount}</li>
            <li>
              Total Registered Users: {metrics.metrics.totalRegisteredUsers}
            </li>
            <li>
              Total Tickets Purchased: {metrics.metrics.totalTicketsPurchased}
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default GlobalMetrics;
