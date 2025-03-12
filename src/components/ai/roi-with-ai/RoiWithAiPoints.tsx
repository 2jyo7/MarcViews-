import React from 'react'

const RoiWithAiPoints = () => {

  





 

    const roiWithAiPointsD = [
{
    title: "Process Automation & Efficiency",
    para: [
        "Implement AI-powered automation solutions to streamline repetitive & time consuming tasks.",
      "  Reduce manual efforts and human errors.",
       " Automating decisions-making processes to accelerate response times and operational workflows."
        
    ]
},
{
    title: "  Predictive Analytics & Insights",
    para: [
        "Leveraging AI algorithms to analyze large volumes of data & extract insights.",
       " Make data-driven decisions based on predictive models to optimize operations, marketing campaigns, pricing strategies, and resource allocation.",
        "Anticipating customer behavior, market trends, and demand pattern to make proactive business decisions." 
    ]
},
{
    title: "Enhanced Customer Experience",
    para: [
        "Personalizing customer experiences by leveraging AI-powered recommendation engines and chatbots.",
 "Providing tailored product suggestions, personalized marketing messages, and responsive customer support.",
 "Improving customer satisfaction, loyalty, and retention by delivering customized and relevant experiences."

    ]
},
{
    title: "Fraud Detection and Risk Management:",
    para: [
        " Using AI algorithms to detect anomalies and patterns indicative of fraudulent activities.",
"Enhancing cybersecurity measures by leveraging AI for threat detection, intrusion detection, and vulnerability assessments.",
"Mitigating risks and minimizing losses by identifying potential fraud cases early and taking proactive measures."
    ]
},
{
    title: "Improved Sales and Revenue Generation",
    para: [
        "Utilizing AI-powered sales and marketing automation tools to optimize lead generation, lead scoring, and conversion rates.",
 "Applying AI algorithms to analyze customer behavior and preferences to deliver targeted marketing campaigns.",
 "Optimizing pricing strategies using AI algorithms to maximize profitability and revenue."
    ]
},
{
    title: "Cost Reduction and Resource Optimization:",
    para: [
        "Applying AI techniques, such as machine learning and natural language processing, to accelerate product development and innovation.",
 "Leveraging AI for product recommendation systems, sentiment analysis, and market research.",
"Optimizing research and development processes through AI-driven insights and data analysis."
    ]
},
    ]

  return (
    <section className='py-20'>
    <div className='container mx-auto px-6'>
      <h1 className='text-3xl lg:text-4xl font-bold text-center border-b-4 border-lime-600 pb-4 mb-8'>Ways to generate ROI with AI</h1>
     
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-12'>
        {roiWithAiPointsD.map((item) => (
          <div key={item.title} className=' p-6 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all'>
            <h2 className='text-xl font-semibold mb-4 text-lime-500'>{item.title}</h2>
            <ul className='text-gray-500 list-disc pl-5 space-y-2'>
              {item.para.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
  )
}

export default RoiWithAiPoints
