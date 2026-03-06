import { useNavigate } from "react-router-dom";
import { Check } from "lucide-react";

function FreeTestInstruction() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#f6f9f9] py-16 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow overflow-hidden">
        {/* HEADER */}
        <div className="bg-[#157a74] text-white text-center py-14 px-6">
          <h1 className="text-3xl font-bold">Career Interest Snapshot</h1>

          <p className="mt-2 opacity-90">
            Discover your natural interests in just 10-15 minutes
          </p>
        </div>

        {/* CONTENT */}
        <div className="p-8 space-y-8">
          {/* Overview */}
          <div>
            <h2 className="text-xl font-semibold text-[#157a74]">
              Test Overview
            </h2>

            <p className="text-gray-600 mt-2 leading-relaxed">
              This Free Assessment contains 25 simple statements. Select how much you relate to each statement honestly using a 5-point scale.
            </p>
          </div>

          {/* Guidelines */}
          <div className="bg-[#e8f5f4] p-6 rounded-xl">
            <h3 className="font-semibold text-[#157a74] mb-4">
              Important Guidelines
            </h3>

            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-[#157a74] mt-1" />
                There are NO right or wrong answers.
              </li>

              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-[#157a74] mt-1" />
                Answer based on what feels natural to you.
              </li>

              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-[#157a74] mt-1" />
                Do not overthink - choose your first instinct.
              </li>

              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-[#157a74] mt-1" />
                Takes only 10-15 minutes.
              </li>
            </ul>
          </div>

          {/* Scale */}
          <div>
            <h3 className="font-semibold text-[#157a74] mb-4">
              Response Scale
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 text-center text-sm">
              <div className="bg-red-50 p-3 rounded">
                1 <br /> Strongly Dislike
              </div>
              <div className="bg-orange-50 p-3 rounded">
                2 <br /> Dislike
              </div>
              <div className="bg-gray-100 p-3 rounded">
                3 <br /> Not Sure
              </div>
              <div className="bg-green-50 p-3 rounded">
                4 <br /> Like
              </div>
              <div className="bg-green-100 p-3 rounded">
                5 <br /> Strongly Like
              </div>
            </div>
          </div>

          {/* Button */}
          <div className="text-center pt-6">
            <button
              onClick={() => navigate("/free-test/questions")}
              className="bg-[#f4a63a] text-white px-8 py-3 rounded-lg font-bold hover:opacity-90 transition"
            >
              Start Free Test
            </button>

            <p className="text-sm text-gray-500 mt-3">
              Click when you are ready to begin.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FreeTestInstruction;
