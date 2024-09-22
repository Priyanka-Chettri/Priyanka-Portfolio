import React from 'react'
import SingleProject from './SingleProject'
import GitVideo from "../assets/GitInsightXvideo.mp4"
import TimeEaseVideo from "../assets/TimeEase.mp4"
import QuizManiaVideo from "../assets/QuizMania.mp4"


function Projects() {
  const gitInsightXDescrip="GitInsightX is a website designed to provide users with a detailed analysis of any GitHub user account."
  const gitInsightTags=[
    "HTML",
    "TailWind CSS",
    "Javascript"
  ]
  const TimeEaseDescrip="It is a landing page of a SaaS product, called TimeEase."
  const TimeEaseTags=[
    "HTML",
    "TailWind CSS",
    "Javascript"
  ]
  const QuizManiaDescrip="A quiz app with multiple categories, where you can  attempt quizzes multiple times with a Clean, user-friendly design."
  const QuizManiaTags=[
    "HTML",
    "TailWind CSS",
    "Javascript"
  ]
  return (
    <div className='bg-gradient-to-b from-[#e6ecfd] to-[#F5E9FF] pb-10 '>

     <p className='text-[41px] text-center pt-20 mb-5 font-bold'>My Work</p>
     <div >
     <SingleProject projectVideo={GitVideo} projectName="GitInsightX" projectDescription={gitInsightXDescrip} projectTags={gitInsightTags}/>
     <SingleProject projectVideo={TimeEaseVideo} projectName="TimeEase" projectDescription={TimeEaseDescrip} projectTags={ TimeEaseTags}/>

     <SingleProject projectVideo={QuizManiaVideo} projectName="QuizMania" projectDescription={QuizManiaDescrip} projectTags={ QuizManiaTags}/>

     </div>

    </div>
  )
}

export default Projects