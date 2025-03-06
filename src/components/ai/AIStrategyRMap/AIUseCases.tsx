"use client"
import Button from '@/components/common/Button ';
import LiFeaturesComp from '@/components/common/LiFeaturesComp ';
import React, { useState } from 'react';

const AIUseCases = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (index: string) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  const aiUseCasesData = [
    {
      title: 'Business Strategy Opportunities',
      info: [
        {
          title: 'Exploring',
          paraT: [
            'AI objectives support business objectives',
            'AI used for real-time decision-making'
          ]},
          {title: 'Planning',
          paraT: [
            'Prioritized, approved, and socialized use cases for AI',
            'AI used for real-time decision-making'
          ]},
          {title: 'Implementing',
          paraT: [
            'Prioritized, approved, and socialized use cases for AI',
            'AI objectives support business objectives',
            'AI used for real-time decision-making',
            'A clear investment plan or AI implementation across the business'
          ]},
          {title: 'Scaling',
          paraT: [
            'Prioritized, approved, and socialized use cases for AI',
            'A clear investment plan for AI implementation across the business'
          ]},
          {title: 'Realizing',
          paraT: [
            'Prioritized, approved, and socialized use cases for AI',
            'A clear investment plan for AI implementation across the business'
          ]}
        
      ]
    },
    {
        title: "Technology and Data Strategy Opportunities",
        info:[ {
        title:    "Exploring",
paraT: [
"Access to complete and relevant data for AI modeling purposes",
" Using AI for improving security",
" Dedicated cloud infrastructure"]},
{title: "Planning",
paraT: [
"Access to complete and relevant data for AI modeling purposes ",
"Dedicated cloud infrastructure" ]},
{title: "Implementing",
paraT: [
"Access to complete and relevant data for AI modeling purposes",
"Dedicated cloud infrastructure ",
"Data accurately represents relevant customers and business objectives",]},
{title:" Scaling",
paraT: [
" Data accurately represents relevant customers and business objectives",
"Access to complete and relevant data for AI modeling purposes"
]},
{title: "Realizing",
paraT:[
"Data accurately represents relevant customers and business objectives",
"Access to complete and relevant data for AI modeling purposes",
"Having the right data in the right format"]}
        ]
    },
    {
        title: "Drivers of AI Strategy and experience",
        info:[ {
        title:    "Exploring",
paraT: [
"Processes to create a standard repeatable process for development and deployment of AI",
"Diversity of roles and experiences of people involved in AI projects",
"Identifying AI models best suited for an organization’s AI use cases"]},
{title: "Planning",
paraT: [
"Identifying AI models best suited for an organization’s AI use cases", 
"Processes and workflows to create a standard repeatable process for development and deployment of AI" ]},
{title: "Implementing",
paraT: [
"Identifying AI models best suited for an organization’s AI use cases", 
"Diversity of roles and experiences of people involved in AI projects"]},
{title:" Scaling",
paraT: [
"Processes and workflows to create a repeatable process for development and deployment of AI solutions",
"Identifying AI models best suited for an organization’s AI use cases"]},
{title: "Realizing",
paraT:[
"Processes and workflows to create a repeatable process for development and deployment of AI solutions",
"Identifying AI models best suited for an organization’s AI use cases"]}
        ]
    },
    {
        title: "Organization and Culture Opportunities",
        info:[ {
        title:    "Exploring",
paraT: [
"Leadership has clearly communicated vision and importance of AI",
"Availability of experts to contribute to AI projects"]},

{title: "Realizing",
paraT:[
"Leadership has clearly communicated vision and importance of AI",
"Availability of experts to contribute to AI projects",
"Employee understanding of how AI supports strategy"]}
        ]
    },
    {
        title: "AI Governance Opportunities",
        info:[ {
        title:    "Exploring",
paraT: [
"Controls for ensuring transparency, explainability, and interpretability of results",
"Security and compliance for third party sharing of AI-generated data",
"Assessing the impact of AI on people, organizations, and society ",
"AI system accountability for bias, impacts, safety, and security"],},
{title: "Planning",
paraT: [
"Controls for ensuring transparency, explainability, and interpretability of results",
"Security and compliance for third party sharing of AI-generated data",
"AI system accountability for bias, impacts, safety, and security" ],},
{title: "Implementing",
paraT: [
"Controls for ensuring transparency, explainability, and interpretability of results",
"AI proactively prevents cyberattacks on infrastructure and data",
"AI system accountability for bias, impacts, safety, and security"],},
{title:" Scaling",
paraT: [
"Systems to inform AI use cases, performance metrics, and limitations",
"AI proactively prevents cyberattacks on infrastructure and data",
"System to address copyright and IP ownership",
"Controls for storage, processing, and sharing of sensitive information and personally identifiable information (PII)",
"Controls for ensuring transparency, explainability, and interpretability of results"],},
{title: "Realizing",
paraT:[
"Systems to inform AI use cases, performance metrics, and limitations",
"Controls for storage, processing, and sharing of sensitive information and personally identifiable information (PII)"]}
        ]
    }
  ];

  return (
    <section className="bg-gray-100 py-12 px-6">
      <div className="max-w-5xl mx-auto container">
        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-900 text-center mb-10">
          Top AI Opportunities & Use Cases
        </h1>

        {/* Use Cases Section */}
        <div className="space-y-6">
          {aiUseCasesData.map((useCase) => (
            <div key={useCase.title} className="bg-white p-6 rounded-2xl shadow-lg transition-all">
              {/* Dropdown Button */}
              <button
                className="w-full text-left text-xl font-semibold text-gray-800 flex justify-between items-center py-2"
                onClick={() => toggleDropdown(useCase.title)}
              >
                {useCase.title}
                <span className="text-2xl font-bold">
                  {openDropdown === useCase.title ? '−' : '+'}
                </span>
                </button>

{/* Dropdown Content */}
<div
  className={`mt-4 text-gray-600 overflow-hidden transition-all duration-300 ${
    openDropdown === useCase.title ? 'max-h-auto opacity-100' : 'max-h-0 opacity-0'
  }`}
>
  {useCase.info.map((infoItem) => (
    <div key={infoItem.title} className="mb-5 border-l-4 border-orange-500 pl-4">
      <h2 className="text-lg font-semibold text-gray-700 mb-2">{infoItem.title}</h2>
      <ul className="list-disc pl-6 space-y-1">
        {infoItem.paraT.map((point, index) => (
          <li key={index} className="text-gray-700">
            {point}
          </li>
        ))}
      </ul>
    </div>
  ))}
</div>
</div>
))}
</div>

{/* Buttons Section */}
<div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
<Button label="BOOK A POC Call" className="py-4 " />
<Button
label="Book An Assessment Review Session"
className="py-4"
/>
</div>
</div>
</section>
  );
};

export default AIUseCases;
