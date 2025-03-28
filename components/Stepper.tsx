'use client'

import { useRouter } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import { StepOne } from './StepOne'
import { StepTwo } from './StepTwo'
import { StepThree } from './StepThree'
import { StepFour } from './StepFour'
import { StepFive } from './StepFive'
import { useStepper } from '@/hooks/useSteppers'

const Stepper = () => {
  const router = useRouter()
const currentStep=1 ;
const stepperData = useStepper();
  const stepRefs = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
  ]
const locale  = 'en';
  useEffect(() => {
    // if (currentStep === 5) {
    //   // If the current step is 5, navigate to another page using Next.js router
    //   router.push('/')// Replace '/your-target-page' with the actual target page path
      
    // }
  }, [currentStep, router])

  const greens = [] as number[]
  const oranges = [] as number[]
  const grays = [] as number[]
  for (let i = 1; i <= currentStep; ++i) {
    greens.push(i)
  }
  for (let i = currentStep + 2; i <= 5; ++i) {
    grays.push(i)
  }
  oranges.push(currentStep + 1)

  return (
    
    <section className="mx-auto  w-full max-w-screen-xl items-center justify-between gap-x-4 px-4 md:justify-normal md:px-8 py-3 mb-10 stepper">
      <style>
        {`
      .step-border {
      
        transition: border-color 2s;
      }

      .color {
        color: gray;
      }
      ${greens
        .map(
          (i) => `
      .step-border.step${i} {
        border-color: #159789;
      }
      .color${i} {
        color: #159789;
      }
      `
        )
        .join('')}
      ${oranges
        .map(
          (i) => `
      .step-border.step${i} {
        border-color: #fc710b;
      }
      .color${i} {
        color: #fc710b;
      }
      `
        )
        .join('')}
      ${grays
        .map(
          (i) => `
      .step-border.step${i} {
        --tw-text-opacity: 1;
        border-color: #fec02f;
      }
      .color${i} {
        --tw-text-opacity: 1;
        color: #fec02f;
      }
      `
        )
        .join('')}
    `}
      </style>
      <div className='mt-10'>
      
        <StepOne stepRefs={stepRefs}  stepperData={stepperData} />
        <StepTwo
          stepRefs={stepRefs}
          router={router}
          
          stepperData={stepperData}
        />
        <StepThree
          stepRefs={stepRefs}
          router={router}
          
          stepperData={stepperData}
        />
        <StepFour
          stepRefs={stepRefs}
          router={router}
          
          stepperData={stepperData}
        />
        <StepFive
          stepRefs={stepRefs}
          router={router}
          
          stepperData={stepperData}
        />
      </div>
     
    </section>
   
  )
}

export default Stepper
