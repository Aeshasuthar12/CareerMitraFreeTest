import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import freeTestQuestions from "../Data/freeTestQuestions";

function FreeTestQuestions() {
  const [step, setStep] = useState("start"); // "start" | "test"
  const [currentQ, setCurrentQ] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [answers, setAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(15 * 60);
  

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phonenumber, setPhone] = useState("");

  const navigate = useNavigate();

  const scaleOptions = [
    { value: 1, label: "Strongly Disike" },
    { value: 2, label: "DisLike" },
    { value: 3, label: "Not Sure" },
    { value: 4, label: "Like" },
    { value: 5, label: "Strongly Like" },
  ];

  const progress = ((currentQ + 1) / freeTestQuestions.length) * 100;

  // TIMER
  useEffect(() => {
    if (step !== "test") return;
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          console.log("Time is up!");
          submitTest();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [step]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  useEffect(() => {
    if (step !== "test") return;
    const id = freeTestQuestions[currentQ].id;
    setSelectedOption(answers[id] || null);
  }, [currentQ, answers, step]);

  const handleSelect = (value) => {
    const id = freeTestQuestions[currentQ].id;

    setSelectedOption(value);

    setAnswers((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleNext = () => {
    if (selectedOption === null) return;

    if (currentQ < freeTestQuestions.length - 1) {
      setCurrentQ((prev) => prev + 1);
    } else {
      submitTest();
    }
  };

  const submitTest = async () => {
    if (!name || !email) {
      alert("Enter name & email");
      return;
    }

    try {
      // ✅ map A1,B2 → 1–24
      const formattedAnswers = {};

      freeTestQuestions.forEach((q, index) => {
        formattedAnswers[String(index + 1)] = answers[q.id] ?? 3;
      });

      const payload = {
        name,
        email,
        answers: formattedAnswers,
      };

      console.log("FINAL PAYLOAD:", payload);

      const response = await fetch("http://127.0.0.1:8000/submit-test", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      console.log("BACKEND RESPONSE:", data);

      if (!response.ok) {
        alert("Backend error ❌");
        return;
      }

      alert("Test submitted successfully And See Results ✅");

      // ✅ pass backend data to result page
      navigate("/result", {
        state: {
          ...data, // backend result
          name, // frontend name
          email, // frontend email
          phonenumber, // frontend phone number
        },
      });
    } catch (error) {
      console.error("ERROR:", error);
      alert("Failed to connect backend ❌");
    }
  };
  // ---------------- UI ----------------
  if (step === "start") {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f3f4f6]">
        <div className="bg-white rounded-xl shadow p-8 w-full max-w-md space-y-4">
          <h1 className="text-xl font-semibold text-gray-900 text-center">
            Enter Your Details
          </h1>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg"
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg"
          />
          <input
            type="text"
            placeholder="Phone Number"
            value={phonenumber}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full px-4 py-2 border rounded"
          />
          <button
            onClick={() => {
              if (!name || !email) {
                console.error("Name or email missing");
                return;
              }
              setStep("test");
            }}
            className="w-full bg-[#157a74] text-white py-2 rounded-lg font-semibold hover:bg-[#13665f]"
          >
            Start Test
          </button>
        </div>
      </div>
    );
  }

  // Test Step
  return (
    <div className="min-h-screen bg-[#f3f4f6] py-10">
      <div className="max-w-3xl mx-auto space-y-6 px-4">
        {/* QUESTION CARD */}
        <div className="bg-white rounded-xl shadow-sm p-8">
          <div className="flex justify-between items-start mb-4">
            <h2 className="text-lg font-semibold text-gray-900">
              {freeTestQuestions[currentQ].question}
            </h2>
            <span className="text-[#157a74] text-sm font-medium">
              {formatTime(timeLeft)}
            </span>
          </div>

          <div className="mt-4 w-full bg-gray-200 h-2 rounded-full overflow-hidden">
            <div
              className="bg-[#157a74] h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="space-y-3 mt-6">
            {scaleOptions.map((opt) => (
              <button
                key={opt.value}
                onClick={() => handleSelect(opt.value)}
                className={`w-full text-left px-5 py-4 rounded-xl border-2 transition-all duration-200 ${
                  selectedOption === opt.value
                    ? "border-[#157a74] bg-[#e8f5f4] text-[#157a74]"
                    : "border-gray-300 hover:border-gray-400 bg-white"
                }`}
              >
                {opt.value}. {opt.label}
              </button>
            ))}
          </div>

          <div className="flex justify-between items-center mt-8">
            <p className="text-sm text-gray-500">
              Question {currentQ + 1} / {freeTestQuestions.length}
            </p>
            <button
              onClick={handleNext}
              disabled={selectedOption === null}
              className={`px-6 py-2 rounded-lg font-semibold transition ${
                selectedOption
                  ? "bg-[#157a74] text-white hover:bg-[#13665f]"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
            >
              {currentQ === freeTestQuestions.length - 1
                ? "Submit"
                : "Next Question >"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FreeTestQuestions;
