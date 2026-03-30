import React from 'react';
import Reveal from './Reveal';

export default function Education() {
  return (
    <section id="education" className="py-20 px-6 bg-[#1c1b1b]">
      <Reveal>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-10 font-headline">EDUCATION</h2>
          <div className="space-y-6">
            {[
              { school: "Vellore Institute of Technology, Vellore TamilNadu", degree: "B.Tech CSE", val: "7.43 CGPA" },
              { school: "Bhartiya School,Sikar, Rajasthan", degree: "12th / Intermediate", val: "90.6%" },
              { school: "Lotus Valley Convent School, Dholpur, Rajasthan", degree: "10th / Matriculation", val: "86.3%" }
            ].map((edu, i) => (
              <div key={i} className="glass-card p-6 rounded-xl flex justify-between items-center group cursor-default">
                <div>
                  <h3 className="text-xl font-bold group-hover:text-primary-container transition-colors">{edu.school}</h3>
                  <p className="text-gray-400 text-sm">{edu.degree}</p>
                </div>
                <p className="text-2xl font-bold gradient-text">{edu.val}</p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}