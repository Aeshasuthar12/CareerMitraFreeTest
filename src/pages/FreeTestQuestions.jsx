import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import freeTestQuestions from "../Data/freeTestQuestions";

function FreeTestQuestions() {

  const [currentQ, setCurrentQ] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [answers, setAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(15 * 60);

  const navigate = useNavigate();

  const scaleOptions = [
    { value: 1, label: "Strongly Like" },
    { value: 2, label: "Like" },
    { value: 3, label: "Not Sure" },
    { value: 4, label: "Dislike" },
    { value: 5, label: "Strongly Dislike" },
  ];

  const progress = ((currentQ + 1) / freeTestQuestions.length) * 100;

  // TIMER
  useEffect(() => {

    const timer = setInterval(() => {

      setTimeLeft((prev) => {

        if (prev <= 1) {

          clearInterval(timer);
          alert("Time is up!");
          submitTest();
          return 0;

        }

        return prev - 1;

      });

    }, 1000);

    return () => clearInterval(timer);

  }, []);

  const formatTime = (seconds) => {

    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;

    return `${mins}:${secs.toString().padStart(2, "0")}`;

  };

  useEffect(() => {

    const id = freeTestQuestions[currentQ].id;
    setSelectedOption(answers[id] || null);

  }, [currentQ, answers]);

  const handleSelect = (value) => {

    const id = freeTestQuestions[currentQ].id;

    setSelectedOption(value);

    setAnswers((prev) => ({
      ...prev,
      [id]: value
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

  // SUBMIT TEST
  const submitTest = async () => {

    try {

      const formattedAnswers = {};

      Object.keys(answers).forEach((key) => {
        formattedAnswers[String(key)] = Number(answers[key]);
      });

      // Ensure all 24 answers exist
      for (let i = 1; i <= 24; i++) {
        if (!formattedAnswers[i]) {
          formattedAnswers[i] = 3;
        }
      }

      const response = await fetch("http://127.0.0.1:8000/submit-test", {

        method: "POST",

        headers: {
          "Content-Type": "application/json"
        },

        body: JSON.stringify({

          name: "Test User",
          email: "test@gmail.com",
          answers: formattedAnswers

        })

      });

      const result = await response.json();

      console.log(result);

      navigate("/result", { state: result });

    } catch (error) {

      console.error(error);
      alert("Failed to submit test");

    }

  };

  return (

    <div className="min-h-screen bg-[#f3f4f6] py-10">

      <div className="max-w-3xl mx-auto space-y-6 px-4">

        <div className="bg-white rounded-xl shadow-sm p-5">

          <div className="flex justify-between items-start">

            <div>

              <h1 className="text-lg font-semibold text-gray-900">
                Career Interest Snapshot
              </h1>

              <p className="text-sm text-gray-600">
                Select how much you relate to each statement.
              </p>

              <p className="text-sm text-gray-500">
                Remember there are NO right or wrong answers here
              </p>

            </div>

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

        </div>

        <div className="bg-white rounded-xl shadow-sm p-8">

          <h2 className="text-lg font-semibold text-gray-900 mb-6">

            {freeTestQuestions[currentQ].question}

          </h2>

          <div className="space-y-3">

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