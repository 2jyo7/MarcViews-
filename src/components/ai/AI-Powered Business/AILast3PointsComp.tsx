import LiFeaturesComp from '@/components/common/LiFeaturesComp '
import React from 'react'

const AILast3PointsComp = ({title, aiListMapping}: {
    title: string,
    aiListMapping: string[],
}) => {
  return (
    <section className="py-12 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-6 md:px-12">
        {/* Section Title */}
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 dark:text-white mb-8">
          Importance of AI
        </h2>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {aiListMapping.map((point, index) => (
            <LiFeaturesComp
              key={index}
              liPoints={point}
              className="bg-white dark:bg-gray-800 border-green-400 px-6 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 text-gray-800 dark:text-gray-300"
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default AILast3PointsComp
