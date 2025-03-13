import React from "react";

const COpenRoles = () => {
  const openRoles = [
    {
      title: "Network Security Infrastructure (Security)",
      jobDesc: "Job Description:",
      jobInfo:
        "As Senior Network Security Infrastructure Specialist, your primary focus will be to maintain the integrity of the deployed network security asset data, document how it is deployed, proactively evaluate how it is operating, and develop plans to optimize the environment.",
      MainResponse: "Main Responsibilities:",
      MRPoints: [
        "Working with professionals and management to identify opportunities for improvements in people, processes, and technology.",
        "Leading team members on the development of methods, techniques, and various analytical approaches.",
        "Guiding team members to solve significant problems/issues.",
        "Proactive management and performance of service suppliers and/or manufacturer activities to align with expected service levels.",
      ],
      ANAReqTitle: "Academic And Experience Requirements:",
      ANARpoints: {
        title:
          "The ideal candidate would meet all, or most of the below criteria:",
        para: [
          "Bachelor’s degree in Information Technology, Computer Science, Engineering, or related field.",
          "At least 6-8 years relevant and practical experience in a Network operations role.",
          "Extensive in-depth knowledge of Network services and infrastructure with emphasis on network security.",
          "Experience working in large/global enterprise IT with multiple distributed branch/campus sites.",
        ],
      },
      ExpInAutomationT:
        "Experience in Network Automation and DevOps practices is highly desirable.",
      ExpINAutopoints: {
        title: "Skills/Competencies/Other Requirements:",
        para: {
          title: "Skills/Competencies/Other Requirements:",
          points: [
            "Excellent written and spoken English.",
            "Excellent interpersonal and communication skills, able to interact with all layers of management.",
            "Ability to work with minimal supervision and little to no instructions.",
            "Strong leadership and coaching skills.",
          ],
        },
      },
      InfoForAppT: "Information For Applicants:",
      InfoForApppara:
        "We appreciate your interest in working with us; however, only those applicants selected for interviews will be contacted. Final candidates for this position may be required to undergo a security screening, including a criminal records check.",
    },
  ];

  return (
    <section className="p-10 min-h-screen bg-radial-color">
      <div className="max-w-5xl container bg-white mx-auto shadow-xl rounded-lg p-10">
        <h1 className="text-4xl font-semibold text-gray-800 mb-8 text-center">
          Open Roles
        </h1>
        {openRoles.map((role, index) => (
          <div key={index} className="mb-10 p-6 ">
            <h2 className="text-3xl font-semibold text-gray-700">
              {role.title}
            </h2>
            <p className="text-gray-700 mt-4">
              <strong className="text-lg">{role.jobDesc}</strong> {role.jobInfo}
            </p>

            <h3 className="text-2xl font-semibold text-gray-700 mt-6">
              {role.MainResponse}
            </h3>
            <ul className="list-disc list-inside text-gray-600 mt-3 space-y-2">
              {role.MRPoints.map((point, idx) => (
                <li key={idx} className="pl-2">
                  {point}
                </li>
              ))}
            </ul>

            <h3 className="text-2xl font-semibold text-gray-700 mt-6">
              {role.ANAReqTitle}
            </h3>
            <p className="text-gray-600 mt-2 font-medium">
              {role.ANARpoints.title}
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-3 space-y-2">
              {role.ANARpoints.para.map((req, idx) => (
                <li key={idx} className="pl-2">
                  {req}
                </li>
              ))}
            </ul>

            <h3 className="text-2xl font-semibold text-gray-700 mt-6">
              {role.ExpInAutomationT}
            </h3>

            <h3 className="text-2xl font-semibold text-gray-700 mt-6">
              {role.ExpINAutopoints.title}
            </h3>
            <ul className="list-disc list-inside text-gray-600 mt-3 space-y-2">
              {role.ExpINAutopoints.para.points.map((skill, idx) => (
                <li key={idx} className="pl-2">
                  {skill}
                </li>
              ))}
            </ul>

            <h3 className="text-2xl font-semibold text-gray-700 mt-6">
              {role.InfoForAppT}
            </h3>
            <p className="text-gray-600 mt-3">{role.InfoForApppara}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default COpenRoles;
