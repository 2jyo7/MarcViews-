import React from 'react'
import IAMHero from './IAMHero'
import IAMIntro from './IAMIntro'
import IAMMI from './IAMMI'
import PrivacyProgram from './PrivacyProgram'
import IAMWyouGet from './IAMWyouGet'
import IAMHelp from './IAMHelp'
import EndppointImgSec from '../endpoint-security/EndppointImgSec'
import IAMBenefit from './IAMBenefit'

const IdentityAMangMain = () => {
  return (
    <div>
      <IAMHero />
      <IAMIntro />
      <IAMMI />
      <PrivacyProgram />
      <IAMWyouGet />
      <IAMHelp />
      <IAMBenefit />
      <EndppointImgSec />
    </div>
  )
}

export default IdentityAMangMain
