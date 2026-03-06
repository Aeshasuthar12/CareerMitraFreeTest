import { useState } from "react";
import counsellingImg from "../assets/images/counselling.png";
import reportImg from "../assets/images/report.jpeg";

function Home() {
  const [openFAQ, setOpenFAQ] = useState(null);
  const [modalText, setModalText] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const steps = [
    {
      title: "Personality Test",
      short: "Understand how you prefer to work, interact, and make decisions.",
      full: `The personality assessment helps you understand your working style and preferences. Choosing a career only based on ability, while ignoring how you like to work, is one of the biggest reasons people feel dissatisfied or stressed later in their careers.

This assessment helps you understand whether you prefer structured or flexible environments, people-oriented or independent roles, leadership or individual contribution, and how you respond to pressure and responsibility.

Many students choose careers based only on marks or strengths, without considering their working style. For example, someone who enjoys interaction may feel uncomfortable in isolated or repetitive roles, while someone who prefers structure may feel lost in highly unstructured or constantly changing environments.

Understanding your personality helps you choose career paths where your working style matches the role, leading to better satisfaction, confidence, and long-term growth.

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
      full: `The interest assessment helps you understand the activities and subjects that naturally hold your attention and the kinds of problems you enjoy solving. It identifies the areas you feel curious about and naturally gravitate toward without external pressure.

Interests do not have to be strong passions. Even consistent curiosity or enjoyment in certain areas can help build a satisfying and sustainable career over time.

Many students choose careers based only on marks, trends, or expectations, without considering what genuinely keeps them engaged. When your interests align with your career direction, motivation stays higher and learning feels more meaningful.

The assessment helps you identify career domains aligned with your interests, such as helping people, building or designing things, creative expression, business and strategy, systems and analysis, or science and nature-related fields.

Understanding your interests helps you avoid career choices made only due to pressure and supports long-term satisfaction and career stability.

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
      full: `Aptitude testing helps distinguish effort-based performance from your actual strength areas.It helps you understand where learning feels easier and where you can perform more comfortably over time.

    Many students confuse marks with ability. Marks often reflect effort, practice, or coaching, while aptitude helps identify the areas where you can grow more efficiently and sustainably.

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
• 12–16 page detailed report
• Career fit analysis (API model)
• Recommended career paths
• Stream & subject guidance
• Actionable next steps`,
    },
    {
      title: "Step 3 – Expert Counselling",
      img: counsellingImg,
      short:
        "One-to-one expert session to finalise career direction confidently.",
      full: `In this session, the counsellor explains the assessment results to both parents and students, answers career-related doubts, and helps finalise the best direction based on strengths and interests.

What You Get:
• One-to-one family counselling session
• Report explanation in simple language
• Career & stream clarity
• Action plan for next 2–3 years
• Expert guidance without confusion`,
    },
  ];
  const testimonials = [
    {
      text: "Working with Career Mitra transformed our understanding about our child’s strengths and career direction. The counselling helped us take confident decisions.",
      name: "Sneha Sharma",
      role: "Parent",
    },
    {
      text: "The assessment and counselling gave complete clarity about career options. Now we know the right direction instead of multiple confusing paths.",
      name: "Kavita Mehta",
      role: "Parent",
    },
    {
      text: "Before the test I was confused about my abilities. The report and counselling helped me understand my strengths clearly.",
      name: "Rahul Verma",
      role: "Student",
    },
    {
      text: "Career Mitra helped create alignment between me and my parents regarding my career decisions.",
      name: "Aman Jain",
      role: "Student",
    },
  ];

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

          <button className="bg-[#f4a63a] text-white px-7 py-3 rounded-lg font-bold mt-5">
            Get Started
          </button>
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
          <div className="mt-16 border border-gray-200 rounded-2xl p-8 bg-white shadow  ">
            <h3 className="text-center text-xl  text-[#157a74] font-semibold ">
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
                    Read More
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

          <div className="grid gap-5 mt-5 md:grid-cols-3">
            {[1, 2, 3].map((_, i) => (
              <a
                key={i}
                href="https://youtu.be/qcg_K7I5ygA"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://img.youtube.com/vi/qcg_K7I5ygA/hqdefault.jpg"
                  className="w-full rounded-lg"
                />
              </a>
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

                <div className="mt-5">
                  <p className="font-semibold text-gray-900">{item.name}</p>
                  <p className="text-sm text-gray-500">{item.role}</p>
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
              a: "The counselling session is conducted online in a one-to-one interaction with an expert counsellor. The counsellor explains your assessment report, discusses your strengths, interests, and suitable career options, and answers your questions to help you make informed career decisions. A typical counselling session lasts 30 minutes.",
            },
          ].map((item, index) => (
            <div key={index} className="bg-white mb-3 rounded-lg shadow">
              <div
                className="p-4 cursor-pointer font-bold flex justify-between"
                onClick={() => toggleFAQ(index)}
              >
                {item.q}
                <span>+</span>
              </div>

              {openFAQ === index && <div className="p-4">{item.a}</div>}
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

            <h3 className="text-xl font-bold mb-3">{modalText.title}</h3>

            <p className="text-gray-700 whitespace-pre-line">
              {modalText.full}
            </p>
          </div>
        </div>
      )}
    </>
  );
}

export default Home;
