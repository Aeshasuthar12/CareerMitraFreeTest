import { useLocation, useNavigate } from "react-router-dom";

export default function Result() {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <button
          onClick={() => navigate("/")}
          className="bg-[#157a74] text-white px-6 py-2 rounded-lg shadow"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f4f7f7] py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-lg">

        {/* 🔥 HEADER */}
        <div className="text-center mb-8">
          <h2 className="text-lg font-semibold text-gray-800">
            {state.name}
          </h2>
          <p className="text-gray-500 text-sm">{state.email}</p>
          <p className="text-gray-400 text-xs">{state.phonenumber}</p>

          <h1 className="text-2xl font-bold mt-3 text-[#157a74]">
            Your Career Result 🎯
          </h1>
        </div>

        {/* 🔥 GRAPH CARD */}
        <div className="mb-10 bg-[#f9fbfb] p-6 rounded-xl shadow-sm">
          <div className="relative h-64 border-b border-l border-gray-300">

            {/* Y AXIS */}
            <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-gray-400 pl-1">
              <span>100%</span>
              <span>75%</span>
              <span>50%</span>
              <span>25%</span>
              <span>0%</span>
            </div>

            {/* BARS */}
            <div className="flex items-end justify-between h-full ml-8 pr-2">
              {state.clusters.map((c, i) => {
                const percentage = (c.score / 24) * 100;

                const getColor = (band) => {
                  if (band === "High") return "bg-[#16a34a]";
                  if (band === "Moderate") return "bg-[#f59e0b]";
                  return "bg-[#ef4444]";
                };

                return (
                  <div key={i} className="flex flex-col items-center justify-end h-full w-full">

                    {/* % */}
                    <span className="text-xs font-semibold mb-1 text-gray-700">
                      {percentage.toFixed(2)}%
                    </span>

                    {/* BAR */}
                    <div
                      className={`w-10 ${getColor(c.band)} rounded-t-lg shadow`}
                      style={{
                        height: `${percentage}%`,
                        minHeight: "6px",
                      }}
                    />
                  </div>
                );
              })}
            </div>
          </div>

          {/* LABELS */}
          <div className="flex justify-between ml-8 mt-3">
            {state.clusters.map((c, i) => (
              <div key={i} className="w-full text-center">
                <p className="text-xs text-gray-600 leading-tight">
                  {c.cluster}
                </p>
              </div>
            ))}
          </div>

          {/* LEGEND */}
          <div className="mt-5 text-sm text-center space-x-6">
            <span className="text-[#16a34a] font-medium">High</span>
            <span className="text-[#f59e0b] font-medium">Moderate</span>
            <span className="text-[#ef4444] font-medium">Low</span>
          </div>
        </div>

        {/* 🔥 TOP CLUSTERS */}
        <div className="mt-8">
          <h2 className="font-semibold mb-3 text-gray-800">
            Top Clusters
          </h2>
          <div className="flex flex-wrap gap-3">
            {state.top_clusters.map((c, i) => (
              <span
                key={i}
                className="px-4 py-1 bg-[#e6f4f3] text-[#157a74] rounded-full text-sm font-medium"
              >
                {c}
              </span>
            ))}
          </div>
        </div>

        {/* 🔥 CAREERS */}
        <div className="mt-8">
          <h2 className="font-semibold mb-3 text-gray-800">
            Recommended Careers(It's just a snapshot,for detailed career options, consider taking the full test)
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {state.careers.map((career, i) => (
              <div
                key={i}
                className="p-4 border rounded-xl bg-white shadow-sm hover:shadow-md transition"
              >
                {career}
              </div>
            ))}
          </div>
        </div>

        {/* 🔥 BACK BUTTON */}
        <button
          onClick={() => navigate("/")}
          className="mt-8 w-full bg-[#157a74] text-white py-2 rounded-lg font-semibold hover:bg-[#13665f]"
        >
           Back to Home
        </button>

      </div>
    </div>
  );
}