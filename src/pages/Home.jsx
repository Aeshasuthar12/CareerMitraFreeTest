import { useState } from "react";
import counsellingImg from "../assets/images/counselling.png";
import reportImg from "../assets/images/report.jpeg";
import { useNavigate } from "react-router-dom";

function Home() {
  const [openFAQ, setOpenFAQ] = useState(null);
  const [modalText, setModalText] = useState(null);

  const navigate = useNavigate();

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const steps = [
    {
      title: "Personality Test",
      short:
        "Understand how you prefer to work and make decisions, and the environments.",
      full: `Many students and parents focus only on marks or external factors when choosing a career, without understanding the student's personality and working style. This can lead to misalignment between the student's natural preferences and their chosen career path, resulting in dissatisfaction and lack of motivation.

Approach: The personality assessment helps you understand your working style and preferences.This assessment helps you understand whether you prefer structured or flexible environments, people-oriented or independent roles, leadership or individual contribution, and how you respond to pressure and responsibility.

What You Get:
• Your working style and preference analysis
• Understanding of people-oriented vs independent roles
• Leadership and collaboration preferences
• Pressure and work-environment suitability insights
• Personality–career alignment clarity`,
    },

    {
      title: "Interest Test",
      short:
        "Discover what naturally keeps you engaged and motivated for long-term career satisfaction.",
      full: `Many students choose careers based on external pressure, trends, or marks, without understanding what truly interests them. This can lead to dissatisfaction and burnout in the long run.

Approach: The interest assessment helps you understand the activities and subjects that naturally hold your attention and the kinds of problems you enjoy solving. 
The assessment helps you identify career domains aligned with your interests, such as helping people, building or designing things, creative expression, business and strategy, systems and analysis, or science and nature-related fields.

What You Get:
• Interest profile across multiple career domains
• Areas that naturally keep you engaged
• Motivation and preference insights
• Career direction aligned with your interests
• Clarity without pressure or confusion`,
    },
    {
      title: "Aptitude Test",
      short:
        "Understand your strengths and discover what you can learn and perform comfortably.",
      full: `Many students confuse marks with ability. Marks often reflect effort, practice, or coaching, while aptitude helps identify the areas where you can grow more efficiently and sustainably.

Approach: Aptitude testing helps distinguish effort-based performance from your actual strength areas.It helps you understand where learning feels easier and where you can perform more comfortably over time.
      Understanding your aptitude helps you choose career paths where your strengths match the demands of the field, making learning easier and reducing future stress or burnout.

What You Get:
   • Verbal reasoning analysis (language, comprehension, communication)
   • Numerical reasoning analysis (maths, data, problem-solving)
   • Logical reasoning assessment (patterns, analytical thinking)
   • Spatial ability insights (visualisation, design, mechanics)`,
    },
  ];

  const stepTwoThree = [
    {
      title: "Step 2 – Career Report",
      img: reportImg,
      short: "Personalised report with best career options and roadmap.",
      full: `You receive a detailed, easy-to-understand report combining Aptitude, Personality, and Interest results. The report highlights suitable career paths, recommended streams, strengths, and areas to improve.

What You Get:
• 16–19 page detailed career report
• Complete API-based analysis (Aptitude, Personality, Interest)
• Identification of strengths and improvement areas
• Recommended career paths based on your profile
• Stream and subject selection guidance
• Career fit and suitability analysis
• Clear action steps for future planning`,
    },
    {
      title: "Step 3 – Expert Counselling",
      img: counsellingImg,
      short:
        "One-to-one expert session to finalise career direction confidently.",
      full: `In this session, the counsellor explains the assessment results to both parents and students, answers career-related doubts, and helps finalise the best direction based on strengths and interests.

What You Get:
• One-to-one 30-45 minutes counselling session 
• Report explanation in simple language
• Career & stream clarity
• Action plan for future steps
• Expert guidance without confusion
• Opportunity to ask personal career-related questions
• Clear understanding of next academic and career decisions`,
    },
  ];
  const testimonials = [
    {
      text: "We were worried about our child. Career-Mitra helped us understand what we could not understand about our Child and his Strengths. We now understand that our Son can do many things in his Career.",
      name: "Raghav's Mother",
      role: "Parent",
    },
    {
      text: "Career-Mitra Test and Counselling was like Google Map for us. Instead of various paths, we can now choose the correct path for our son.",
      name: "Anthony Martin",
      role: "Parent",
    },
    {
      text: "Career-Mitra helped in creating a huge alignment between me and my parents, specially my father. Now I understand my strengths and most importantly my father understand the same.",
      name: "Raghav",
      role: "Student",
    },
    {
      text: "Before the test, I had lot of concerns about how my mind works, what slows me down, etc. I also wanted clarity on my Career options which did not restrict me. The test report and counselling cleared the doubts and I can now pursue my career path.",
      name: "Ronit Martin",
      role: "Student",
    },
  ];
  const videos = ["qcg_K7I5ygA", "qcg_K7I5ygA", "qcg_K7I5ygA"];

  return (
    <>
      {/* HERO */}
      <section className="bg-[#157a74] text-white text-center pt-30 pb-30 px-5 flex items-center min-h-[78vh]">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold">
            One Step Away from Career Clarity
          </h1>

          <p className="mt-3">
            Scientific Career Test + Expert Career Counselling
          </p>

          <div className="mt-3">
            <span className="inline-block bg-[#e0f2f1] text-[#157a74] px-3 py-1 rounded-full m-1">
              16,000+ Students Guided
            </span>
            <span className="inline-block bg-[#e0f2f1] text-[#157a74] px-3 py-1 rounded-full m-1">
              Expert Counsellors
            </span>
            <span className="inline-block bg-[#e0f2f1] text-[#157a74] px-3 py-1 rounded-full m-1">
              Trusted Platform
            </span>
          </div>

          <div className="mt-5 flex flex-col items-center gap-3">
            {/* Get Started Button */}
            <button className="bg-[#f4a63a] text-white px-7 py-3 rounded-lg font-bold">
              Get Started
            </button>

            {/* Free Test Button */}
            <button
              className="bg-[#f4a63a] text-white px-7 py-3 rounded-lg font-bold "
              onClick={() => navigate("/free-test-instruction")}
            >
              Try Our Free Test
            </button>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-[#f6f9f9] py-24 px-5">
        <div className="max-w-6xl mx-auto">
          {/* HEADING */}
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900">How It Works</h2>

            <p className="text-gray-600 mt-4 text-lg leading-relaxed">
              A simple scientific process designed to help students and parents
              make confident career decisions step by step.
            </p>

            <div className="w-16 h-1 bg-[#157a74] mx-auto mt-6 rounded"></div>
          </div>

          {/* STEP 1 */}
          <div className="mt-16 border border-gray-200 rounded-2xl p-8 bg-white shadow">
            <h3 className="text-center text-xl text-[#157a74] font-semibold">
              Step 1 – Assessment Tests
            </h3>

            <div className="grid md:grid-cols-3 gap-8 mt-8">
              {steps.map((item, i) => (
                <div
                  key={i}
                  onClick={() => setModalText(item)}
                  className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition duration-300 cursor-pointer"
                >
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#157a74] text-white font-semibold mb-5">
                    {String.fromCharCode(65 + i)}
                  </div>

                  <h4 className="text-xl font-semibold text-gray-900">
                    {item.title}
                  </h4>

                  <p className="text-gray-600 mt-3 leading-relaxed">
                    {item.short}
                  </p>

                  <button
                    onClick={() => setModalText(item)}
                    className="text-[#157a74] font-semibold mt-3 hover:underline"
                  >
                    Read More →
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* STEP 2 & 3 */}
          <div className="grid md:grid-cols-2 gap-8 mt-14 max-w-4xl mx-auto">
            {stepTwoThree.map((item, i) => (
              <div
                key={i}
                onClick={() => setModalText(item)}
                className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-48 mb-4 mx-auto"
                />

                <h3 className="text-xl text-center font-semibold text-[#157a74]">
                  {item.title}
                </h3>

                <p className="text-gray-600 text-center mt-3 leading-relaxed">
                  {item.short}
                </p>

                <button
                  onClick={() => setModalText(item)}
                  className="block mx-auto text-[#157a74] font-semibold mt-3 hover:underline"
                >
                  Read More →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-16 px-5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center text-2xl font-bold">
            Student Feedback & Testimonials
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-5">
            {videos.map((id, i) => (
              <div
                key={i}
                className="relative w-full pt-[56.25%] rounded-lg overflow-hidden"
              >
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${id}`}
                  title={`Student Feedback ${i + 1}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SUCCESS STORIES */}
      <section className="bg-[#e8f5f4] py-16 px-5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center text-2xl font-bold mb-10">
            Success Stories
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow relative">
                <div className="text-yellow-400 mb-3">⭐⭐⭐⭐⭐</div>

                {/* Quote Icon */}
                <div className="absolute top-4 right-5 text-gray-200 text-5xl">
                  ”
                </div>

                <p className="text-gray-700 italic leading-relaxed">
                  "{item.text}"
                </p>

                <div className="flex items-center gap-3 mt-5">
                  <div className="w-12 h-12 rounded-full bg-[#157a74] flex items-center justify-center text-white font-semibold shadow-md">
                    {item.name
                      .split(" ")
                      .map((word) => word.charAt(0))
                      .join("")}
                  </div>

                  <div>
                    <p className="font-semibold text-gray-900">{item.name}</p>
                    <p className="text-sm text-gray-500">{item.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center text-2xl font-bold">
            Frequently Asked Questions
          </h2>

          {[
            {
              q: "Why should I choose Career Mitra over other career guidance platforms?",
              a: "Unlike generic advice, Career Mitra focuses on understanding you first. Through structured assessments and expert counselling, we help you identify career paths that truly match your strengths, interests, and long-term goals. The recommendations are personalized, data-driven and based on future-trends, so you get clarity instead of confusion.",
            },
            {
              q: "How will Career Mitra help me understand my career?",
              a: "Career Mitra helps you understand your career by analyzing your personality, interests, and aptitude through a structured assessment. Based on your results, a detailed report highlights your strengths, suitable career options, and areas of improvement. With the help of expert counselling, you gain clarity about the right career direction and can make informed decisions about your future.",
            },
            {
              q: "Who can take this test?",
              a: "The test is suitable for students from Class 9 to 12, college students, graduates, and anyone seeking career clarity or direction.",
            },
            {
              q: "Is the career test accurate?",
              a: "Yes, the assessment is scientifically designed to evaluate personality, interests, and aptitude . It helps to provide reliable career guidance based on your profile.",
            },
            {
              q: "What happens after the test is completed?",
              a: "After completing the assessment, you receive a detailed report that will include strengths, weaknesses, and suitable career options. Based on this report, you can schedule a one-to-one counselling session with our expert to discuss your results and get personalized career guidance.",
            },
            {
              q: "Is counselling compulsory after the test?",
              a: "While counselling is not compulsory, it is highly recommended to get the most out of your test results. The counsellor can help you understand your report in depth, answer any questions you may have, and provide personalized advice to help you make informed career decisions.",
            },

            {
              q: "How is the counselling session conducted?",
              a: "The counselling session is conducted online/offline in a one-to-one interaction with an expert counsellor. The counsellor explains your assessment report, discusses your strengths, interests, and suitable career options, and answers your questions to help you make informed career decisions. A typical counselling session lasts 30 minutes.",
            },
          ].map((item, index) => (
            <div key={index} className="bg-white mb-3 rounded-lg shadow">
              <div
                className="p-4 cursor-pointer font-bold flex justify-between items-center"
                onClick={() => toggleFAQ(index)}
              >
                {item.q}
                <span className="text-xl font-bold">
                  {openFAQ === index ? "−" : "+"}
                </span>
              </div>

              {openFAQ === index && (
                <div className="p-4 text-gray-600">{item.a}</div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* TEXT MODAL */}
      {modalText && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 px-4"
          onClick={() => setModalText(null)}
        >
          <div
            className="bg-white max-w-2xl w-full p-6 rounded-xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setModalText(null)}
              className="absolute top-3 right-4 text-xl text-gray-500 hover:text-black"
            >
              ✕
            </button>

            <h3 className="text-xl font-bold mb-4">{modalText.title}</h3>

            <div className="text-gray-700 whitespace-pre-line leading-relaxed">
              {modalText.full.split("\n").map((line, i) => {
                if (line.startsWith("Trouble:")) {
                  return (
                    <p key={i}>
                      <strong>Trouble:</strong>
                      {line.replace("Trouble:", "")}
                    </p>
                  );
                }

                if (line.startsWith("Approach:")) {
                  return (
                    <p key={i}>
                      <strong>Approach:</strong>
                      {line.replace("Approach:", "")}
                    </p>
                  );
                }

                if (line.startsWith("What You Get:")) {
                  return (
                    <p key={i} className="mt-3">
                      <strong>What You Get:</strong>
                    </p>
                  );
                }

                return <p key={i}>{line}</p>;
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Home;
