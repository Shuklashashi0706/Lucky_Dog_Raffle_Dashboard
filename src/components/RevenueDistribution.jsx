import React, { useState, useEffect } from "react";
import axios from "axios";

const RevenueDistribution = () => {
  const [revenue, setRevenue] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRevenueDistribution = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BASE_URI}/api/v1/revenue-distribution`
        );
        setRevenue(response.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch revenue distribution data");
        setLoading(false);
      }
    };

    fetchRevenueDistribution();
  }, []);

  return (
    <div className="border border-black p-[20px] rounded-[10px]">
      <h2 className="text-[30px] text-black font-bold">
        Total Revenue Distribution
      </h2>
      <div className="font-medium">
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          <ul>
            <li>Platform Revenue: {revenue.platformRevenue} ETH</li>
            <li>TG Owner Revenue: {revenue.tgOwnerRevenue} ETH</li>
            <li>Referrer Earnings: {revenue.referrerEarnings} ETH</li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default RevenueDistribution;
