import CardImgT3 from '@/components/common/CardDesign/CardImgT3 ';
import React from 'react'

const AIdeployFeature = () => {

    const aiDData  = [
        { title:  "Personal agents", imgUrl: "https://img1.wsimg.com/isteam/ip/9e261d50-bf0d-4aa5-ada1-a6f6f1c7a1f6/Screenshot_25-1-2025_125116_.jpeg/:/cr=t:0%25,l:9.2%25,w:81.6%25,h:100%25/rs=w:365,h:365,cg:true"},
        { title:  "Business process agents", imgUrl: "https://img1.wsimg.com/isteam/ip/9e261d50-bf0d-4aa5-ada1-a6f6f1c7a1f6/Screenshot_25-1-2025_125123_.jpeg/:/cr=t:0%25,l:10.21%25,w:78.23%25,h:100%25/rs=w:365,h:365,cg:true"},
        { title:  "Organizational agents", imgUrl: "https://img1.wsimg.com/isteam/ip/9e261d50-bf0d-4aa5-ada1-a6f6f1c7a1f6/Screenshot_25-1-2025_125131_.jpeg/:/cr=t:0%25,l:9.13%25,w:85.45%25,h:100%25/rs=w:365,h:365,cg:true"},
        { title:  "Cross-organizational agents", imgUrl: "https://img1.wsimg.com/isteam/ip/9e261d50-bf0d-4aa5-ada1-a6f6f1c7a1f6/Screenshot_25-1-2025_125137_.jpeg/:/cr=t:0%25,l:12.4%25,w:75.21%25,h:100%25/rs=w:365,h:365,cg:true"},
        { title:  "Enrich employee experiences", imgUrl: "https://img1.wsimg.com/isteam/ip/9e261d50-bf0d-4aa5-ada1-a6f6f1c7a1f6/Screenshot_25-1-2025_125145_.jpeg/:/cr=t:0%25,l:8.49%25,w:83.02%25,h:100%25/rs=w:365,h:365,cg:true"},
        { title:  "Reinvent customer engagement", imgUrl: "https://img1.wsimg.com/isteam/ip/9e261d50-bf0d-4aa5-ada1-a6f6f1c7a1f6/Screenshot_25-1-2025_12525_.jpeg/:/cr=t:0%25,l:8.72%25,w:82.57%25,h:100%25/rs=w:365,h:365,cg:true"},
        { title:  "Reshape business processes", imgUrl: "https://img1.wsimg.com/isteam/ip/9e261d50-bf0d-4aa5-ada1-a6f6f1c7a1f6/Screenshot_25-1-2025_125213_.jpeg/:/cr=t:0%25,l:7.41%25,w:85.19%25,h:100%25/rs=w:365,h:365,cg:true"},
        { title:  "Bend the curve on innovation", imgUrl: "https://img1.wsimg.com/isteam/ip/9e261d50-bf0d-4aa5-ada1-a6f6f1c7a1f6/Screenshot_25-1-2025_125221_.jpeg/:/cr=t:0%25,l:9.91%25,w:80.19%25,h:100%25/rs=w:365,h:365,cg:true"},
    ]

  return (
    <section className='bg-gray-100 py-12'>
      <div className='container mx-auto px-6 lg:px-12'>
        <h2 className='text-3xl font-bold text-center text-gray-900 mb-6'>AI & its Deployment</h2>
        <div className='w-20 h-1 flex justify-start bg-blue-500 mx-auto mb-8'></div>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
          {
            aiDData.map(aid => (
              <CardImgT3 key={aid.title} title={aid.title} imgUrl={aid.imgUrl} className='bg-white' />
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default AIdeployFeature;
