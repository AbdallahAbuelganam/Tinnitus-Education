import { Volume2, Pill, Ear, Stethoscope, AlertTriangle, Activity, Speech } from "lucide-react";
import tinnitusInfoImage from "../../assets/43abaf932f6f1efbc113a6b5c2552396e63330e0.png";

export function CausesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-4xl mx-auto ">
        <h1 className="text-gray-900 mb-6 text-4xl">Common Causes of Tinnitus</h1>
        
        {/* Header section with text and image side by side */}
        <div className="flex items-start gap-8 mb-10">
          <p className="text-gray-600 flex-1 leading-10 text-[24px]">
            Tinnitus is not a disease, but a symptom of an underlying health condition.
            It is usually a sensorineural response in the brain to damage in the auditory system.
            Although commonly associated with hearing loss,
            tinnitus can result from many different health conditions.
          </p>

          {/* Tinnitus Overview Infographic */}
          <div className="w-3/10 flex-shrink-0">
            <img
              src={tinnitusInfoImage}
              alt="Tinnitus infographic showing symptoms like ringing, buzzing, ear pain, and dizziness, along with causes including loud noises, hearing loss, ear infections, and head injuries"
              className="w-full rounded-lg shadow-md"
            />
          </div>
        </div>

        <div className="space-y-8">
          {/* Hearing Loss */}
          <section className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-teal-600">
            <div className="flex items-start gap-4">
              <div className="bg-teal-100 p-3 rounded-lg flex-shrink-0">
                <Volume2 className="h-6 w-6 text-teal-600" />
              </div>
              <div>
                <h2 className="text-gray-900 mb-3">Hearing Loss</h2>
                <p className="text-gray-600 mb-3">
                  <strong>Age-related hearing loss (Presbycusis): </strong> <br></br>
                  Hearing gradually declines with age, usually starting around 60 years,
                  affecting both ears and mainly high-frequency sounds.
                  This helps explain why tinnitus is common in older adults. 
                </p>
                <p className="text-gray-600">
                  <strong>Noise-induced hearing loss: </strong> <br></br>
                  Exposure to loud sounds—either suddenly or over time—can damage 
                  the auditory system and lead to hearing loss and tinnitus.
                  This may affect one or both ears and often occurs at the frequency of the noise exposure. 
                </p>
              </div>
            </div>
          </section>

          {/* Noise Exposure */}
          <section className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-orange-600">
            <div className="flex items-start gap-4">
              <div className="bg-orange-100 p-3 rounded-lg flex-shrink-0">
                <Ear className="h-6 w-6 text-orange-600" />
              </div>
              <div>
                <h2 className="text-gray-900 mb-3">Obstructions in the Middle Ear </h2>
                <p className="text-gray-600 mb-3">
                  Blockages in the ear canal can increase pressure in the ear and interfere with normal eardrum function,
                  leading to tinnitus. Common causes include excessive earwax,
                  head congestion, loose hair, or foreign objects. In many cases
                  , removing the blockage relieves tinnitus,
                  though prolonged blockage may sometimes cause permanent damage. 
                </p>
              </div>
            </div>
          </section>

          {/* Ear Blockages */}
          <section className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-blue-600">
            <div className="flex items-start gap-4">
              <div className="bg-blue-100 p-3 rounded-lg flex-shrink-0">
                <Activity className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h2 className="text-gray-900 mb-3">Head and Neck Trauma</h2>
                <p className="text-gray-600 mb-3">
                  Injury to the head or neck can affect nerves, blood flow, or muscles, leading to tinnitus.
                  Tinnitus related to head and neck trauma is often perceived as louder and more variable in sound,
                  frequency, and location. 
                </p>
              </div>
            </div>
          </section>

          {/* Medical Conditions */}
          <section className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-red-600">
            <div className="flex items-start gap-4">
              <div className="bg-red-100 p-3 rounded-lg flex-shrink-0">
                <Stethoscope className="h-6 w-6 text-red-600" />
              </div>
              <div>
                <h2 className="text-gray-900 mb-3">Sinus Pressure and Barometric Trauma</h2>
                <p className="text-gray-600 mb-3">
                  Sinus congestion from colds, flu,
                  or sinus infections can create abnormal pressure in the middle ear and lead to tinnitus. 
                  Rapid or extreme changes in air or water pressure (barotrauma),
                  such as during diving, flying under abnormal conditions, or explosive blasts,
                  may also damage the ear and cause tinnitus. 
                </p>
              </div>
            </div>
          </section>

          {/* Blood Vessel Issues */}
          <section className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-pink-600">
            <div className="flex items-start gap-4">
              <div className="bg-pink-100 p-3 rounded-lg flex-shrink-0">
                <AlertTriangle className="h-6 w-6 text-pink-600" />
              </div>
              <div>
                <h2 className="text-gray-900 mb-3">Traumatic Brain Injury (TBI)</h2>
                <p className="text-gray-600 mb-3">
                  Traumatic brain injury, caused by concussive shock,
                  can damage the brain’s auditory processing areas and generate tinnitus symptoms.  
                </p>
              </div>
            </div>
          </section>

          {/* Medications */}
          <section className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-purple-600">
            <div className="flex items-start gap-4">
              <div className="bg-purple-100 p-3 rounded-lg flex-shrink-0">
                <Pill className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <h2 className="text-gray-900 mb-3">Ototoxic Drugs</h2>
                <p className="text-gray-600 mb-3">
                  Tinnitus is a potential side effect of many prescription medications.
                </p>
              </div>
            </div>
          </section>

          {/* Medications */}
          <section className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-indigo-600">
            <div className="flex items-start gap-4">
              <div className="bg-indigo-100 p-3 rounded-lg flex-shrink-0">
                <Speech className="h-6 w-6 text-indigo-600" />{/*speech*/}
              </div>
              <div>
                <h2 className="text-gray-900 mb-3">Temporomandibular Joint Disorder (TMJ)</h2>
                <p className="text-gray-600 mb-3">
                  TMJ disorders can cause tinnitus because the jaw joint is located near the ear 
                  and shares nerve and ligament connections with the middle ear. 
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}