import React from "react";
import { useLocation } from "react-router-dom";
import { BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";

function Result() {

  const location = useLocation();
  const result = location.state;

  console.log("Backend Result:", result);

  if (!result) {
    return <h2>No result data found</h2>;
  }

  return (
    <div className="p-10">

      <h1 className="text-2xl font-bold mb-6">Your Career Result</h1>

      <p>Analytical Score: {result.analytical}</p>
      <p>Business Score: {result.business}</p>
      <p>Creative Score: {result.creative}</p>
      <p>People Score: {result.people}</p>
      <p>Practical Score: {result.practical}</p>
      <p>Structure Score: {result.structure}</p>

      <h2 className="mt-6 font-semibold">Top Clusters</h2>

      <ul>
        {result.top_clusters.map((cluster, index) => (
          <li key={index}>{cluster}</li>
        ))}
      </ul>

    </div>
  );
}

export default Result;