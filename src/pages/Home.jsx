
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="bg-[#157a74] min-h-screen flex items-center justify-center text-white px-5">
      <div className="text-center">
        
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Career Test
        </h1>

        <p className="mb-6 text-lg">
          Click below to start your free test
        </p>

        <button
          onClick={() => navigate("/free-test-instruction")}
          className="bg-[#f4a63a] hover:bg-[#e6952f] transition px-8 py-3 rounded-lg font-bold text-lg shadow-md"
        >
          Start Free Test →
        </button>

      </div>
    </div>
  );
}

export default Home;

