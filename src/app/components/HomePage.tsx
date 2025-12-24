import tinnitusHeroImage from "../../assets/d2f668c5-f066-4ad6-bce4-62f8b83f9f1b.jpg";
import objectiveTinnitusImage from "../../assets/47a58b29-2577-4afa-9586-e18960d05a8b.jpg";
import subjectiveTinnitusImage from "../../assets/ed077d7f-8f91-474f-b728-06134a99a58e.jpg";
import { Stethoscope, BookOpen, Heart, Video } from "lucide-react";

import { Page } from "../types";

interface HomePageProps {
  onNavigate?: (page: Page) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div className="bg-white">
      {/* Quick Info Cards */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center mb-10 text-gray-900">What You'll Learn</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <button
              onClick={() => onNavigate?.('home')}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer text-left w-full"
            >
              <div className="bg-teal-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <span className="text-teal-600">1</span>
              </div>
              <h3 className="text-gray-900 mb-2">Definition</h3>
              <p className="text-gray-600">
                What tinnitus is and how it affects people
              </p>
            </button>
            <button
              onClick={() => onNavigate?.('causes')}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer text-left w-full"
            >
              <div className="bg-teal-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <span className="text-teal-600">2</span>
              </div>
              <h3 className="text-gray-900 mb-2">Common Causes</h3>
              <p className="text-gray-600">
                Understanding what leads to tinnitus
              </p>
            </button>
            <button
              onClick={() => onNavigate?.('Diagnosis')}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer text-left w-full"
            >
              <div className="bg-teal-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <span className="text-teal-600">3</span>
              </div>
              <h3 className="text-gray-900 mb-2">Diagnosis</h3>
              <p className="text-gray-600">
                How doctors identify and evaluate tinnitus
              </p>
            </button>
            <button
              onClick={() => onNavigate?.('Treatment')}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer text-left w-full"
            >
              <div className="bg-teal-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <span className="text-teal-600">4</span>
              </div>
              <h3 className="text-gray-900 mb-2">Management</h3>
              <p className="text-gray-600">
                Treatment options and coping strategies
              </p>
            </button>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <h1 className="text-teal-500 mb-4 text-4xl leading-loose">What is Tinnitus?</h1>
        <div className="grid lg:grid-cols-[3fr_1fr] gap-12 items-start">
          <div className="">
            <h3 className="text-teal-800 mb-6 text-2xl">Definition</h3>
            <p className="text-gray-600 mb-6">
              Tinnitus is the perception of sound when no actual external noise is present.
              While it is commonly referred to as "ringing in the ears,"
              tinnitus can manifest many different perceptions of sound,
              including buzzing, hissing, whistling, swooshing, and clicking.
              In some rare cases, tinnitus patients report hearing music.
              Tinnitus can be both an acute (temporary) condition or a chronic (ongoing) health condition.
            </p>

            <p className="text-gray-600 mb-6">
              Approximately 1 person in every 10 has tinnitus.
            </p>

            <p className="text-gray-600 mb-6">
              Subjective Tinnitus: Head or ear noises that are perceivable only to the specific patient.
              Subjective tinnitus is usually traceable to auditory and neurological reactions to hearing
              loss but can also be caused by an array of other catalysts.
              More than 99% of all reported tinnitus cases are of the subjective variety.
            </p>

            <p className="text-gray-600 mb-6">
              Objective Tinnitus: Head or ear noises that are audible to other people, as well as the patient.
              These sounds are usually produced by internal functions in the body's circulatory (blood flow)
              and somatic (musculoskeletal movement)  systems.
              Objective tinnitus is very rare, representing less than 1% of total tinnitus cases.                                                    It is not loud enough to be heard from a distance but is detectable using a stethoscope or sensitive microphone. Most of the time, a doctor notices objective tinnitus during an ear examination.
            </p>

          </div>
          <div className="flex flex-col gap-6">
            <img
              src={tinnitusHeroImage}
              alt="Illustration showing various tinnitus sounds - humming, ringing, buzzing, crackling, roaring"
              className="w-full rounded-lg shadow-lg"
            />
            <span className="flex flex-row gap-4">
              <img
                src={subjectiveTinnitusImage}
                alt="Subjective tinnitus icon"
                className="w-1/2 rounded-lg shadow-lg"
              />
              <img
                src={objectiveTinnitusImage}
                alt="Objective tinnitus icon"
                className="w-1/2 rounded-lg shadow-lg"
              />
            </span>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-3 mb-9">
            <Video className="h-9 w-9 mt-1.5 text-teal-600" />
            <h2 className="text-center text-gray-800 text-[32px] font-bold">What does tinnitus sound like?</h2>
          </div>

          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Video 1 */}
            <div>
              <h3 className="text-gray-900 mb-4 ">Sound 1: 4000 Hz Tone</h3>
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
                  src="https://www.youtube.com/embed/qfyYOS_h9g0?si=V-_uaHDhMV-DE2KM"
                  title="Understanding Tinnitus: An Overview"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            {/* Video 2 */}
            <div>
              <h3 className="text-gray-900 mb-4">Sound 2: 7500 Hz Tone</h3>
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
                  src="https://www.youtube.com/embed/jHhjWxBWLmQ?si=csCfGXNs7eufav3D"
                  title="Tinnitus Treatment Options Explained"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            {/* Video 3 */}
            <div>
              <h3 className="text-gray-900 mb-4">Sound 3: Tea Kettle</h3>
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
                  src="https://www.youtube.com/embed/QWet16GQYig?si=haYGFJI9MvjqKi5p"
                  title="Understanding Tinnitus: An Overview"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            {/* Video 4 */}
            <div>
              <h3 className="text-gray-900 mb-4">Sound 4: Buzzing or Cicada</h3>
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
                  src="https://www.youtube.com/embed/L0beyOv0Tes?si=PC6o5Ozza_Gs7hO-"
                  title="Tinnitus Treatment Options Explained"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            {/* Video 5 */}
            <div>
              <h3 className="text-gray-900 mb-4">Sound 5: Static</h3>
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
                  src="https://www.youtube.com/embed/tfNncvhTsog?si=WT8YsnYvToLGVqUx"
                  title="Understanding Tinnitus: An Overview"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            {/* Video 6 */}
            <div>
              <h3 className="text-gray-900 mb-4">Sound 6: Screeching</h3>
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
                  src="https://www.youtube.com/embed/jcyDteTqnPw?si=JYCbSatGrn8HBbvN"
                  title="Tinnitus Treatment Options Explained"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            {/* Video 7 */}
            <div >
              <h3 className="text-gray-900 mb-4">Sound 7: Electric</h3>
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
                  src="https://www.youtube.com/embed/NDsxXgBa5Zo?si=OVlTb9vXWi_5pJeh"
                  title="Understanding Tinnitus: An Overview"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            {/* Video 8 */}
            <div>
              <h3 className="text-gray-900 mb-4">Sound 8: Roaring</h3>
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
                  src="https://www.youtube.com/embed/k-VPVAUcpgI?si=m5e0BzdYXwP2cWdE"
                  title="Tinnitus Treatment Options Explained"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-teal-600 rounded-lg p-8 text-center text-white">
          <h2 className="mb-4">Important Note</h2>
          <p className="max-w-2xl mx-auto">
            This website is for educational purposes only and should not replace
            professional medical advice. If you're experiencing tinnitus, please
            consult with a healthcare provider for proper diagnosis and treatment.
          </p>
        </div>
      </section>
    </div>
  );
}