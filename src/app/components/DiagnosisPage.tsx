import cbtImage from "../../assets/986b778a9ca1e784006a073db47dcfdb9ad1ea15.png";
import earAnatomyImage from "../../assets/f7dd390f86ef2cfd1210d1c6c3f5f472ac7bebfc.png";
import {
  ClipboardList,
  Headphones,
  Brain,
  Pill,
  Music,
  Shield,
} from "lucide-react";
import { useState } from "react";

export function DiagnosisPage() {
  const [answers, setAnswers] = useState<{
    [key: number]: number;
  }>({});
  const [showScore, setShowScore] = useState(false);

  const questions = [
    "Because of your tinnitus, is it difficult for you to concentrate?",
    "Does the loudness of your tinnitus make it difficult for you to hear people?",
    "Does your tinnitus make you angry?",
    "Does your tinnitus make you feel confused?",
    "Because of your tinnitus, do you feel desperate?",
    "Do you complain a great deal about your tinnitus?",
    "Because of your tinnitus, do you have trouble falling to sleep at night?",
    "Do you feel as though you cannot escape your tinnitus?",
    "Does your tinnitus interfere with your ability to enjoy your social activities (such as going out to dinner, to the movies)?",
    "Because of your tinnitus, do you feel frustrated?",
    "Because of your tinnitus, do you feel that you have a terrible disease?",
    "Does your tinnitus make it difficult for you to enjoy life? ",
    "Does your tinnitus interfere with your job or household responsibilities? ",
    "Because of your tinnitus, do you find that you are often irritable?",
    "Because of your tinnitus, is it difficult for you to read?",
    "Does your tinnitus make you upset?",
    "Do you feel that your tinnitus problem has placed stress on your relationships with members of your family and friends?",
    "Do you find it difficult to focus your attention away from your tinnitus and on other things?",
    "Do you feel that you have no control over your tinnitus?",
    "Because of your tinnitus, do you often feel tired?",
    "Because of your tinnitus, do you feel depressed?",
    "Does your tinnitus make you feel anxious?",
    "Do you feel that you can no longer cope with your tinnitus?",
    "Does your tinnitus get worse when you are under stress?",
    "Does your tinnitus make you feel insecure?",
  ];

  const handleAnswerChange = (
    questionIndex: number,
    points: number,
  ) => {
    setAnswers((prev) => ({
      ...prev,
      [questionIndex]: points,
    }));
    setShowScore(false);
  };

  const calculateScore = () => {
    const total = Object.values(answers).reduce(
      (sum, points) => sum + points,
      0,
    );
    return total;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (Object.keys(answers).length === questions.length) {
      setShowScore(true);
      // Scroll to score section
      setTimeout(() => {
        document
          .getElementById("score-section")
          ?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      alert("Please answer all questions before submitting.");
    }
  };

  const getScoreInterpretation = (score: number) => {
    if (score <= 16) {
      return {
        level: "Slight or no handicap",
        color: "bg-green-100 border-green-600 text-green-900",
      };
    } else if (score <= 36) {
      return {
        level: "Mild",
        color:
          "bg-yellow-100 border-yellow-600 text-yellow-900",
      };
    } else if (score <= 56) {
      return {
        level: "Moderate",
        color:
          "bg-orange-100 border-orange-600 text-orange-900",
      };
    } else if (score <= 76) {
      return {
        level: "Severe",
        color: "bg-red-100 border-red-600 text-red-900",
      };
    } else {
      return {
        level: "Catastrophic",
        color: "bg-red-200 border-red-800 text-red-950",
      };
    }
  };

  const totalScore = calculateScore();
  const interpretation = getScoreInterpretation(totalScore);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-teal-500 mb-4 text-4xl leading-loose">
          Diagnosis
        </h1>

        {/* Header section with text and image side by side on large screens,
    stacked on small screens */}
        <div className="flex flex-col md:flex-row items-start gap-8 mb-12">
          {/* Text Section */}
          <div className="flex-1">
            <p className="text-teal-800 mb-1 text-2xl">
              🩺 Measuring tinnitus :
            </p>

            <p className="text-gray-600 text-xl mt-4">
              Tinnitus is a common condition, and in many cases
              it can be successfully managed when properly
              evaluated. Because tinnitus is a subjective
              experience, diagnosis does not rely on a single
              test. Instead, clinicians use a step-by-step
              assessment to understand its cause,
              characteristics, and impact on daily life.
              Diagnosis is the first step toward reclaiming
              control and peace of mind.
            </p>
          </div>

          {/* Image Section */}
          <div className="w-full md:w-5/10 flex-shrink-0">
            <img
              src={earAnatomyImage}
              alt="Detailed anatomy of the ear showing cochlea, internal carotid artery, internal jugular vein, damaged hairs inside cochlea, and temporomandibular joint"
              className="w-full rounded-lg shadow-md"
            />
          </div>
        </div>

        {/* Treatment Options */}
        <section className="mb-12">
          <div className="space-y-6">
            {/* Sound Therapy */}
            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-blue-600">
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-lg flex-shrink-0">
                  <Music className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-gray-900 mb-3">
                    physical and clinical step (The first
                    visit🔎){" "}
                  </h3>
                  <p className="text-gray-600 mb-3">
                    Before advanced testing, the evaluation
                    begins with essential clinical steps to rule
                    out simple and treatable causes.
                    Professional Consultation{" "}
                    <strong>
                      A hearing health professional reviews:
                    </strong>
                  </p>
                  <div className="bg-blue-50 p-4 mb-2 rounded-lg">
                    <ul className="space-y-1 text-blue-800">
                      <li>• Medical history</li>
                      <li>• Tinnitus onset and duration.</li>
                      <li>• Noise exposure</li>
                      <li>
                        • Medication use (especially ototoxic
                        drugs)
                      </li>
                      <li>• Lifestyle and stress factors</li>
                    </ul>
                  </div>
                  <p className="text-gray-600 mb-3">
                    Ear Examination 👂 Otoscopic inspection to
                    check for:
                  </p>
                  <div className="bg-blue-50 p-4 mb-2 rounded-lg">
                    <ul className="space-y-1 text-blue-800">
                      <li>• Earwax buildup</li>
                      <li>• Infections</li>
                      <li>• Middle ear abnormalities</li>
                    </ul>
                  </div>
                  <p className="text-gray-600 mb-3">
                    Identifying Contributing Factors Rule out
                    related issues: Clinicians check if other
                    conditions are increasing tinnitus burden,
                    such as: Anxiety or depression Jaw issues
                  </p>
                </div>
              </div>
            </div>

            {/* CBT and Counseling */}
            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-purple-600">
              <div className="flex items-start gap-4">
                <div className="bg-purple-100 p-3 rounded-lg flex-shrink-0">
                  <Brain className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-gray-900 mb-3">
                    Important Diagnostic Tools for Tinnitus
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Note: Your specialist will determine which
                    tests are necessary for your specific case.
                    Not all patients require every test listed.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600 mt-1">
                        •
                      </span>
                      <span>
                        <strong>
                          Pure Tone & Speech Audiometry{" "}
                        </strong>
                        This assessment identifies whether
                        hearing loss is present and determines
                        its degree and configuration across
                        frequencies. Because tinnitus is
                        frequently associated with hearing loss,
                        this test is considered a core component
                        of tinnitus evaluation. Typical
                        duration: approximately 20 minutes The
                        test is non-invasive and painless.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600 mt-1">
                        •
                      </span>
                      <span>
                        <strong>
                          Loudness Discomfort Level (LDL){" "}
                        </strong>
                        This test determines the sound intensity
                        level at which external sounds become
                        uncomfortable, helping to assess sound
                        sensitivity (hyperacusis).<br></br>
                        The results support clinical decisions
                        related to:<br></br>• Sound therapy
                        <br></br>• Hearing aid fitting and
                        adjustment<br></br>• Gradual sound
                        desensitization programs<br></br>
                        Typical duration: 5–10 minutes
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600 mt-1">
                        •
                      </span>
                      <span>
                        <strong>
                          Tinnitus-Specific Measures{" "}
                        </strong>
                        These specialized tests are used to
                        document tinnitus characteristics and
                        help guide individualized, sound-based
                        management approaches when appropriate.
                        <p className="mt-3">
                          <strong>● Pitch Matching </strong>
                          Identifies the frequency that most
                          closely resembles the patient’s
                          tinnitus perception. Typical duration:
                          5–10 minutes
                        </p>
                        <p className="mt-3">
                          <strong>● Loudness Matching </strong>
                          Involves presenting tinnitus-like
                          sounds to the patient to determine the
                          perceived loudness of their tinnitus.
                          The clinician may adjust pitch and
                          combine multiple sounds to closely
                          recreate the tinnitus perception. This
                          process provides an important baseline
                          measure for monitoring progress and
                          customizing tinnitus management
                          therapies. Typical duration: 5–10
                          minutes
                        </p>
                        <p className="mt-3">
                          <strong>
                            ● Minimum Masking Level (MML){" "}
                          </strong>
                          Determines the lowest level of
                          external narrowband noise that masks
                          (covers) the tinnitus. MML offers an
                          estimate of how loud the tinnitus is
                          perceived and is used in tinnitus
                          masking and sound therapy planning.
                          Typical duration: 5 minutes
                        </p>
                        <p className="mt-3">
                          <strong>
                            ● Residual Inhibition{" "}
                          </strong>
                          Evaluates whether tinnitus is
                          temporarily reduced or suppressed
                          following exposure to a specific
                          sound. The presence of residual
                          inhibition may indicate a positive
                          response to sound-based treatments.
                          Typical duration: 5 minutes
                        </p>
                      </span>
                    </li>

                    <li className="flex items-start gap-2">
                      <span className="text-purple-600 mt-1">
                        •
                      </span>
                      <span>
                        <strong>Advanced Imaging (MRI) </strong>
                        In rare cases, MRI may be recommended if
                        clinical evaluation suggests a specific
                        underlying cause.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Tinnitus Retraining Therapy */}
            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-green-600">
              <div className="flex items-start gap-4">
                <div className="bg-green-100 p-3 rounded-lg flex-shrink-0">
                  <Shield className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-gray-900 mb-3">
                    Self-Assessment Tool: Visual Analog Scale
                    (VAS) 💡
                  </h3>
                  <p className="text-gray-600 mb-3">
                    The Visual Analog Scale (VAS) is a simple
                    self-monitoring tool used to help patients
                    describe their tinnitus experience. The
                    scale ranges from 0 (No Tinnitus) to 10
                    (Extremely Loud or Distressing).
                  </p>
                  <div className="bg-green-50 p-4 mb-3 rounded-lg">
                    <p className="text-green-600 mb-2">
                      <strong>
                        Patients use the VAS to rate:
                      </strong>
                    </p>
                    <ul className="space-y-1 text-green-600">
                      <li>• Tinnitus loudness</li>
                      <li>• Level of distress</li>
                      <li>• Impact on quality of life (QOL)</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 p-4 mb-2 rounded-lg">
                    <p className="text-green-600 mb-2">
                      <strong>
                        This tool helps patients and clinicians:
                      </strong>
                    </p>
                    <ul className="space-y-1 text-green-600">
                      <li>• Track changes over time</li>
                      <li>• Measure response to treatment</li>
                      <li>
                        • Encourage active patient involvement
                        in care
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Medications */}
            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-orange-600">
              <div className="flex items-start gap-4">
                <div className="bg-orange-100 p-3 rounded-lg flex-shrink-0">
                  <Pill className="h-6 w-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-gray-900 mb-3">
                    Measuring the “Tinnitus Burden” (Your
                    Experience)
                  </h3>
                  <p className="text-gray-600 mb-3">
                    Tinnitus is a personal experience. Its
                    impact depends on how it affects your daily
                    life, not just how loud the sound is.
                  </p>
                  <p className="text-gray-600">
                    *Important:<br></br>
                    These tools do not diagnose tinnitus, but
                    they are essential for:<br></br>● Measuring
                    its impact on daily functioning<br></br>●
                    Monitoring progress over time<br></br>●
                    Evaluating treatment outcomes
                  </p>

                  <p className="text-gray-600 my-3">
                    <strong>Common Questionnaires Used:</strong>
                  </p>
                  <ul className="space-y-1 text-gray-600">
                    <li>• Tinnitus Functional Index (TFI)</li>
                    <p className="mb-3">
                      Evaluates how tinnitus affects daily life
                      across multiple areas, including sleep,
                      concentration, and relaxation.
                    </p>
                    <li>• Tinnitus Handicap Inventory (THI)</li>
                    <p className="mb-3">
                      A brief questionnaire used to assess how
                      much tinnitus interferes with everyday
                      activities.
                    </p>
                    <li>
                      • Tinnitus Reaction Questionnaire (TRQ)
                    </li>
                    <p className="mb-3">
                      Focuses on the emotional and psychological
                      distress associated with tinnitus.
                    </p>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex items-center gap-3 mb-6">
            <ClipboardList className="h-8 w-8 text-teal-600" />
            <h1 className="text-gray-900">
              Tinnitus handicap Inventory (THI)
            </h1>
          </div>

          {/* Instructions */}
          <div className="bg-teal-50 border-l-4 border-teal-600 p-6 mb-8 rounded-r-lg">
            <h2 className="text-gray-900 mb-3">
              Instructions:
            </h2>
            <p className="text-gray-700 mb-3">
              The purpose of this questionnaire is to identify,
              quantify, and evaluate the difficulties that you
              may be experiencing because of tinnitus. Please do
              not skip any questions. When you have answered all
              the questions, add up your total score, based on
              the values for each response.
            </p>
            <p className="text-gray-700 mb-3">
              For each question, select one of the following
              options:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-1 mb-3">
              <li>
                <strong>Yes</strong> - if the statement applies
                to you most or all of the time
              </li>
              <li>
                <strong>Sometimes</strong> - if the statement
                applies to you occasionally
              </li>
              <li>
                <strong>No</strong> - if the statement rarely or
                never applies to you
              </li>
            </ul>
            <p className="text-gray-700 text-sm italic">
              Note: This form is for informational purposes only
              and should not take the place of consultation and
              evaluation by a healthcare professional.
            </p>
          </div>

          {/* Assessment Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {questions.map((question, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm border border-gray-200"
              >
                <p className="text-gray-900 mb-4">
                  <span className="text-teal-600 font-semibold">
                    Question {index + 1}:
                  </span>{" "}
                  {question}
                </p>
                <div className="space-y-2">
                  <label className="flex items-center gap-3 cursor-pointer hover:bg-gray-50 p-3 rounded-lg transition-colors">
                    <input
                      type="radio"
                      name={`question-${index}`}
                      value="4"
                      checked={answers[index] === 4}
                      onChange={() =>
                        handleAnswerChange(index, 4)
                      }
                      className="w-4 h-4 text-teal-600 focus:ring-teal-500"
                    />
                    <span className="text-gray-700">
                      Yes (4 points)
                    </span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer hover:bg-gray-50 p-3 rounded-lg transition-colors">
                    <input
                      type="radio"
                      name={`question-${index}`}
                      value="2"
                      checked={answers[index] === 2}
                      onChange={() =>
                        handleAnswerChange(index, 2)
                      }
                      className="w-4 h-4 text-teal-600 focus:ring-teal-500"
                    />
                    <span className="text-gray-700">
                      Sometimes (2 points)
                    </span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer hover:bg-gray-50 p-3 rounded-lg transition-colors">
                    <input
                      type="radio"
                      name={`question-${index}`}
                      value="0"
                      checked={answers[index] === 0}
                      onChange={() =>
                        handleAnswerChange(index, 0)
                      }
                      className="w-4 h-4 text-teal-600 focus:ring-teal-500"
                    />
                    <span className="text-gray-700">
                      No (0 points)
                    </span>
                  </label>
                </div>
              </div>
            ))}

            {/* Submit Button */}
            <div className="flex justify-center pt-6">
              <button
                type="submit"
                className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-lg shadow-md transition-colors"
              >
                Calculate My Score
              </button>
            </div>
          </form>

          {/* Score Display */}
          {showScore && (
            <div id="score-section" className="mt-12 mb-8">
              <div
                className={`p-8 rounded-lg border-l-4 ${interpretation.color}`}
              >
                <h2 className="mb-4">
                  Your Assessment Results
                </h2>
                <div className="mb-4">
                  <p className="text-2xl mb-2">
                    Total Score:{" "}
                    <span className="font-bold">
                      {totalScore}
                    </span>{" "}
                    out of 100
                  </p>
                  <p className="text-xl">
                    Impact Level:{" "}
                    <span className="font-bold">
                      {interpretation.level}
                    </span>
                  </p>
                </div>
              </div>

              {/* Score Interpretation Guide */}
              <div className="mt-8 bg-gray-50 p-6 rounded-lg">
                <h3 className="text-gray-900 mb-4">
                  Score Interpretation Guide
                </h3>
                <div className="space-y-2 text-gray-700">
                  <p>
                    <strong>0-16:</strong> slight or no handicap
                    (Grade 1)
                  </p>
                  <p>
                    <strong>18-36:</strong> mild handicap (Grade
                    2)
                  </p>
                  <p>
                    <strong>38-56:</strong> moderate handicap
                    (Grade 3)
                  </p>
                  <p>
                    <strong>58-76:</strong> severe handicap
                    (Grade 4)
                  </p>
                  <p>
                    <strong>78-100:</strong> catastrophic
                    handicap (Grade 5)
                  </p>
                </div>
              </div>
            </div>
          )}
        </section>


      </div>
    </div>
  );
}