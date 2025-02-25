import CardComp from '@/components/common/CardDesign/Card1 ';
import React from 'react';

const ITMGallery = () => {
  const imtGalleryD = [
    {
      title: "DevSecOps",
      imgUrl: "https://plus.unsplash.com/premium_photo-1726754457459-d2dfa2e3a434?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dGVjaCUyMGRldmVsb3BtZW50JTIwb3BlcmF0aW9ufGVufDB8fDB8fHww"
    },
    {
      title: "Artificial Intelligence",
      imgUrl: "https://images.unsplash.com/photo-1697577418970-95d99b5a55cf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGFydGlmaWNpYWwlMjBpbnRlbGlpZ2VuY2V8ZW58MHx8MHx8fDA%3D"
    },
    {
      title: "Server",
      imgUrl: "https://images.unsplash.com/photo-1571786256017-aee7a0c009b6?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "Storage",
      imgUrl: "https://images.unsplash.com/photo-1580106815433-a5b1d1d53d85?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNlcnZlcnxlbnwwfHwwfHx8MA%3D%3D"
    },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 w-full">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          IT Modernization Gallery
        </h2>
        
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {imtGalleryD.map((imtd) => (
            <div key={imtd.title} className=" flex justify-center items-center">
              <CardComp imgUrl={imtd.imgUrl} title={imtd.title} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ITMGallery;
