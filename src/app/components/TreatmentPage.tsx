import treatmentOptionsImage from "../../assets/cd0ca9da425b028ae59c6b8fdf2f2a02cd296f76.png";
import cbtCycleImage from "../../assets/986b778a9ca1e784006a073db47dcfdb9ad1ea15.png";
import cbtTechniquesImage from "../../assets/deff81a40df72aef69e5e648ae175449e9302afa.png";
import {
  Heart,
  Volume2,
  Brain,
  Pill,
  Sparkles,
  Coffee,
} from "lucide-react";

export function TreatmentPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-teal-600 to-teal-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-white mb-6">
              Management and Treatment
            </h1>
            <p className="text-teal-50 text-lg leading-relaxed">
              There is currently no single cure for tinnitus.
              However, many effective treatments can
              significantly reduce how bothersome tinnitus feels
              by improving emotional well-being, attention, and
              daily functioning rather than eliminating the
              sound itself. Similar to how pain relievers reduce
              headache discomfort without curing the cause,
              tinnitus treatments aim to improve quality of life
              by reducing distress, anxiety, and sleep problems.
              Because tinnitus affects each person differently,
              the most effective management usually combines
              several approaches guided by healthcare
              professionals.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Treatment Approaches Grid */}
          <section className="mb-16">
            <div className="text-center mb-10">
              <h2 className="text-gray-900 mb-3">
                Four Main Treatment Approaches
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                A comprehensive approach to tinnitus management
                typically includes a combination of these four
                strategies
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Card 1 - Wellness */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="bg-gradient-to-r from-green-500 to-green-400 p-6">
                  <div className="flex items-center gap-3 text-white">
                    <Heart className="h-8 w-8" />
                    <h3 className="text-white">
                      General Wellness & Lifestyle Management
                    </h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Overall health and lifestyle can strongly
                    influence how intense tinnitus feels. While
                    lifestyle strategies do not cure tinnitus,
                    they can reduce its impact and make symptoms
                    easier to manage.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-start gap-2">
                      <span className="text-teal-600 mt-1">
                        •
                      </span>
                      <span className="text-gray-700">
                        Maintaining a healthy diet and regular
                        physical activity
                      </span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-teal-600 mt-1">
                        •
                      </span>
                      <span className="text-gray-700">
                        Staying socially active and engaging in
                        enjoyable hobbies
                      </span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-teal-600 mt-1">
                        •
                      </span>
                      <span className="text-gray-700">
                        Practicing stress-reduction techniques
                        (relaxation, breathing exercises,
                        mindfulness)
                      </span>
                    </div>
                  </div>
                  <div className="mt-4 p-4 bg-yellow-50 rounded-lg border-l-4 border-yellow-400">
                    <p className="text-gray-700">
                      <strong>Common Triggers:</strong> Patients
                      are encouraged to identify personal
                      triggers such as stress ⚠️, fatigue, poor
                      sleep 😴, or caffeine sensitivity ☕️
                    </p>
                  </div>
                  <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                    <p className="text-gray-700">
                      Hearing protection is recommended to
                      prevent further hearing damage, although
                      it does not eliminate tinnitus.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 2 - Hearing Aids & Sound Therapy */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="bg-gradient-to-r from-blue-500 to-blue-400 p-6">
                  <div className="flex items-center gap-3 text-white">
                    <Volume2 className="h-8 w-8" />
                    <h3 className="text-white">
                      Hearing Aids & Sound Therapy
                    </h3>
                  </div>
                </div>
                <div className="p-6">
                  <div className="mb-6">
                    <h4 className="text-gray-900 mb-3">
                      🦻 Hearing Aids
                    </h4>
                    <p className="text-gray-700 mb-3">
                      Around 90% of people with chronic tinnitus
                      also have some degree of hearing loss,
                      making hearing evaluation essential.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <span className="text-teal-600 mt-1">
                          ✓
                        </span>
                        <span className="text-gray-700">
                          Amplify external sounds, reducing the
                          contrast with tinnitus
                        </span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-teal-600 mt-1">
                          ✓
                        </span>
                        <span className="text-gray-700">
                          Improve communication and reduce
                          listening effort
                        </span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-teal-600 mt-1">
                          ✓
                        </span>
                        <span className="text-gray-700">
                          Decrease frustration and social
                          isolation
                        </span>
                      </div>
                    </div>
                    <p className="text-gray-600 italic mt-3">
                      Effectiveness improves when hearing aids
                      are combined with tinnitus education and
                      counseling.
                    </p>
                  </div>

                  <div className="border-t pt-6">
                    <h4 className="text-gray-900 mb-3">
                      🔊 Sound Therapy / Sound Enrichment
                    </h4>
                    <p className="text-gray-700 mb-3">
                      Sound therapy uses gentle external sounds
                      to reduce the awareness of tinnitus and
                      support habituation over time.
                    </p>
                    <p className="text-gray-700 mb-3">
                      <strong>Goals of sound therapy:</strong>
                    </p>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-start gap-2">
                        <span className="text-teal-600 mt-1">
                          •
                        </span>
                        <span className="text-gray-700">
                          Mask or soften tinnitus perception
                        </span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-teal-600 mt-1">
                          •
                        </span>
                        <span className="text-gray-700">
                          Shift attention away from tinnitus
                        </span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-teal-600 mt-1">
                          •
                        </span>
                        <span className="text-gray-700">
                          Promote long-term habituation
                        </span>
                      </div>
                    </div>
                    <p className="text-gray-700">
                      <strong>Common sound options:</strong>
                    </p>
                    <div>
                      <div className="grid grid-cols-2 gap-2 mb-4">
                        <div className="text-gray-700">
                          • White noise
                        </div>
                        <div className="text-gray-700">
                          • Nature sounds
                        </div>
                        <div className="text-gray-700">
                          • Fans
                        </div>
                        <div className="text-gray-700">
                          • Background music
                        </div>
                      </div>
                      <div className="text-gray-700  mb-2">
                        • Smartphone apps or sound generators
                        like Starkey Relax and Tinnitus Balance
                        by Phonak
                      </div>
                    </div>
                    <div className="bg-teal-50 p-4 rounded-lg">
                      <p className="text-gray-700 mb-2">
                        <strong>Sound Therapy Examples:</strong>
                      </p>
                      <a
                        href="https://youtube.com/playlist?list=PL3yqEYAelEAOzrYJly2rZAT7_uPPTek3o&si=DIkkDBfjLIQwLXW3"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-teal-600 hover:text-teal-700 underline break-all"
                      >
                        https://youtube.com/playlist?list=PL3yqEYAelEAOzrYJly2rZAT7_uPPTek3o&si=DIkkDBfjLIQwLXW3
                      </a>
                      <p className="text-gray-600 mt-2">
                        This link provides a variety of sound
                        therapy examples, including fire and
                        rain sounds, river sounds, pink noise,
                        cricket sounds, white noise, and many
                        more.
                      </p>
                    </div>
                    <div className="mt-3 p-3 bg-amber-50 border-l-4 border-amber-400 rounded">
                      <p className="text-gray-700">
                        <strong>Note:</strong> Sound therapy
                        should be comfortable and never loud.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 3 - Behavioral Therapy */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="bg-gradient-to-r from-purple-500 to-purple-400 p-6">
                  <div className="flex items-center gap-3 text-white">
                    <Brain className="h-8 w-8" />
                    <h3 className="text-white">
                      Behavioral Therapy
                    </h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 mb-4">
                    Tinnitus often triggers emotional reactions
                    such as anxiety, frustration, poor
                    concentration, or sleep difficulties. These
                    reactions can make tinnitus feel louder and
                    more distressing. Behavioral therapies focus
                    on changing how a person responds to
                    tinnitus, not eliminating the sound itself.
                    The goal is to reduce distress, improve
                    coping, and restore quality of life.
                  </p>

                  <div className="bg-purple-50 p-4 rounded-lg mb-4">
                    <h4 className="text-gray-900 mb-3">
                      ✔ Cognitive Behavioral Therapy (CBT)
                    </h4>
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <span className="text-purple-600 mt-1">
                          •
                        </span>
                        <span className="text-gray-700">
                          Helps identify and change negative
                          thoughts about tinnitus
                        </span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-purple-600 mt-1">
                          •
                        </span>
                        <span className="text-gray-700">
                          Reduces anxiety, fear, and emotional
                          distress
                        </span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-purple-600 mt-1">
                          •
                        </span>
                        <span className="text-gray-700">
                          Improves sleep and concentration
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-gray-50 rounded-lg p-4">
                      <img
                        src={cbtTechniquesImage}
                        alt="CBT Techniques"
                        className="w-full rounded-lg"
                      />
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <img
                        src={cbtCycleImage}
                        alt="CBT Cycle"
                        className="w-full rounded-lg"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 4 - Medications */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="bg-gradient-to-r from-pink-500 to-pink-400 p-6">
                  <div className="flex items-center gap-3 text-white">
                    <Pill className="h-8 w-8" />
                    <h3 className="text-white">
                      Medications (Supportive, Not Curative)
                    </h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 mb-4">
                    Currently, there are no medications approved
                    to cure tinnitus or reverse its neural
                    mechanisms. Medications may be prescribed to
                    manage associated conditions such as:
                  </p>
                  <div className="space-y-2 mb-6">
                    <div className="flex items-start gap-2">
                      <span className="text-teal-600 mt-1">
                        •
                      </span>
                      <span className="text-gray-700">
                        Anxiety
                      </span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-teal-600 mt-1">
                        •
                      </span>
                      <span className="text-gray-700">
                        Depression
                      </span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-teal-600 mt-1">
                        •
                      </span>
                      <span className="text-gray-700">
                        Sleep disturbances
                      </span>
                    </div>
                  </div>

                  <div className="bg-red-50 p-4 mb-6 rounded-lg border-l-4 border-red-400">
                    <p className="text-gray-900 mb-2">
                      📍 <strong>Important notes:</strong>
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <span className="text-red-600 mt-1">
                          •
                        </span>
                        <span className="text-gray-700">
                          These medications do not treat
                          tinnitus directly
                        </span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-red-600 mt-1">
                          •
                        </span>
                        <span className="text-gray-700">
                          They may reduce emotional distress
                          linked to tinnitus
                        </span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-red-600 mt-1">
                          •
                        </span>
                        <span className="text-gray-700">
                          Medical supervision is essential due
                          to possible side effects and
                          interactions
                        </span>
                      </div>
                    </div>
                  </div>
                  <div
                    className="flex items-center p-4 mb-4 text-sm text-yellow-800 border border-yellow-300 rounded-lg bg-yellow-50"
                    role="alert"
                  >
                    {/* Warning Icon */}
                    <svg
                      className="flex-shrink-0 w-5 h-5 mr-3"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8.257 3.099c.765-1.36 2.721-1.36 3.486 0l6.518 11.6c.75 1.334-.213 3-1.742 3H3.48c-1.53 0-2.492-1.666-1.742-3l6.519-11.6zM11 14a1 1 0 11-2 0 1 1 0 012 0zm-1-2a.75.75 0 01-.75-.75V8a.75.75 0 011.5 0v3.25A.75.75 0 0110 12z"
                        clipRule="evenodd"
                      />
                    </svg>

                    {/* Message */}
                    <div>
                      Warning: Self-medication is not
                      recommended.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Treatment Options Visual */}
          <section className="mb-16">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-6">
                <img
                  src={treatmentOptionsImage}
                  alt="Treatment Options for Tinnitus including CBT, Sound Masking, Audiological Evaluation, Hearing Aids, Medications, and General Wellness"
                  className="w-full rounded-lg"
                />
              </div>
            </div>
          </section>

          {/* Key Message */}
          <section className="mb-16">
            <div className="bg-gradient-to-r from-teal-500 to-teal-400 rounded-xl shadow-lg p-8 text-center">
              <Sparkles className="h-12 w-12 text-white mx-auto mb-4" />
              <p className="text-white text-lg leading-relaxed max-w-4xl mx-auto">
                While tinnitus cannot currently be cured, a
                personalized combination of lifestyle
                strategies, audiological care, sound therapy,
                behavioral treatment, and supportive medical
                management can significantly reduce its impact.
                With proper guidance and consistent engagement,
                many people with tinnitus lead full, active, and
                satisfying lives.
              </p>
            </div>
          </section>

          {/* Supportive Activities */}
          <section className="mb-16">
            <div className="text-center mb-10">
              <h2 className="text-gray-900 mb-3">
                Supportive Activities for Well-being
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Engaging in relaxing and enjoyable activities
                can help manage stress and improve quality of
                life
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Relaxation Activities */}
              <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-8 border border-indigo-200">
                <h3 className="text-gray-900 mb-4">
                  Relaxation and Stress Relief Activities
                </h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Relaxing activities such as coloring games can
                  help reduce stress and shift attention away
                  from tinnitus, making them a helpful
                  supportive tool when combined with sound
                  therapy. This link leads to a coloring game
                  with sound for you to explore and enjoy.
                </p>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <a
                    href="https://play.google.com/store/apps/details?id=com.iceors.colorbook.release"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-teal-600 hover:text-teal-700 underline break-all"
                  >
                    Coloring Game App - Google Play Store
                  </a>
                </div>
              </div>

              {/* Enjoyable Activities */}
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-8 border border-amber-200">
                <div className="flex items-center gap-3 mb-4">
                  <Coffee className="h-8 w-8 text-amber-600" />
                  <h3 className="text-gray-900">
                    Enjoyable Activities to Help Manage Tinnitus
                  </h3>
                </div>
                <p className="text-gray-700 mb-6">
                  Doing things you enjoy makes life with
                  tinnitus more pleasant. Look through the
                  options below for an activity you would like
                  to do.
                </p>
                <div className="grid grid-cols-1 gap-3">
                  <div className="flex items-center gap-3 bg-white p-3 rounded-lg shadow-sm">
                    <span className="text-teal-600">☕</span>
                    <span className="text-gray-700">
                      Meeting a friend for coffee
                    </span>
                  </div>
                  <div className="flex items-center gap-3 bg-white p-3 rounded-lg shadow-sm">
                    <span className="text-teal-600">🤝</span>
                    <span className="text-gray-700">
                      Volunteer
                    </span>
                  </div>
                  <div className="flex items-center gap-3 bg-white p-3 rounded-lg shadow-sm">
                    <span className="text-teal-600">🎨</span>
                    <span className="text-gray-700">
                      Write, paint, color or draw
                    </span>
                  </div>
                  <div className="flex items-center gap-3 bg-white p-3 rounded-lg shadow-sm">
                    <span className="text-teal-600">📚</span>
                    <span className="text-gray-700">
                      Learn a new skill
                    </span>
                  </div>
                  <div className="flex items-center gap-3 bg-white p-3 rounded-lg shadow-sm">
                    <span className="text-teal-600">🌳</span>
                    <span className="text-gray-700">
                      Spend time outdoors
                    </span>
                  </div>
                  <div className="flex items-center gap-3 bg-white p-3 rounded-lg shadow-sm">
                    <span className="text-teal-600">🎵</span>
                    <span className="text-gray-700">
                      Play or listen to music
                    </span>
                  </div>
                  <div className="flex items-center gap-3 bg-white p-3 rounded-lg shadow-sm">
                    <span className="text-teal-600">🗺️</span>
                    <span className="text-gray-700">
                      Explore a neighbourhood
                    </span>
                  </div>
                  <div className="flex items-center gap-3 bg-white p-3 rounded-lg shadow-sm">
                    <span className="text-teal-600">⚽</span>
                    <span className="text-gray-700">
                      Play or watch a sport
                    </span>
                  </div>
                  <div className="flex items-center gap-3 bg-white p-3 rounded-lg shadow-sm">
                    <span className="text-teal-600">📖</span>
                    <span className="text-gray-700">
                      Read or listen to an audiobook
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}