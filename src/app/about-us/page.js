import React from 'react'
import AboutSection from '../sections/AboutSection'
import Breadcrumb from '../components/Breadcrumb'

export default function page() {
  return (
    <>
    <Breadcrumb name={'About Us'} />
    <div className='p-6 md:p-8 lg:p-12 2xl:p-20'>
        <AboutSection />
    </div>
    </>
  )
}
