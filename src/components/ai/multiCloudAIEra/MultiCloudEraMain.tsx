import React from 'react'
import MCloudHero from './MCloudHero'
import MCloudIntro from './MCloudIntro'
import MHybridCloud from './MHybridCloud'
import MCDataSecurity from './MCDataSecurity'
import MCAIPipeline from './MCAIPipeline'
import EndppointImgSec from '@/components/solutions/endpoint-security/EndppointImgSec '

const MultiCloudEraMain = () => {
  return (
    <div>
      <MCloudHero />
      <MCloudIntro />
      <MHybridCloud />
      <MCDataSecurity />
      <MCAIPipeline />
      <EndppointImgSec />
    </div>
  )
}

export default MultiCloudEraMain
