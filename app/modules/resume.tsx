'use client';
import '/public/css/resume.css';
import Title from './title';
import Skill from './skill';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import Info from './info';

export default function Resume() {
  return (
    <>
      <div className="resume-main">
        <div className="white-space mb-1" />
        <div className="white-spacee" id="resume" />
        <div className="info-main">
          <div className="info-container">
            <div className="resume-title">
              <div className="floating-square" />
              <div className="mb-10 mt-20 text-center text-5xl font-extrabold leading-none tracking-tight text-gray-900 sm:text-3xl  md:text-5xl lg:text-5xl  dark:text-white">
                RESUME
              </div>
            </div>
            <div className="info-title">
              <div
                id="workexperience"
                className="mb-7 text-4xl font-extrabold leading-none tracking-tight text-gray-900 sm:text-3xl  md:text-4xl lg:text-4xl  dark:text-white"
              >
                Work Experience
              </div>
            </div>
            <Info>
              <div className=" mb-1 text-3xl font-extrabold leading-none tracking-tight text-gray-900 sm:text-2xl  md:text-3xl lg:text-3xl  dark:text-white">
                DOST Project LODI
              </div>

              <Title
                title="Intern Developer"
                size={2}
                mb={1}
                color="black"
                additional="break-words"
              />
              <li>
                Developing modules and web pages with React JS and API routes
                with Laravel
              </li>
              <li>Debugging assigned modules and web pages</li>
              <li>
                Debugging coworker&apos;s webpages and modules, and finishing
                unfinished modules
              </li>
            </Info>
            <Info>
              <Title
                title="SKYWORKSTECH SOFTWARE DEVELOPMENT SERVICES"
                size={3}
                mb={1}
                color="white"
                additional="break-words"
              />

              <Title
                title="Freelance Developer"
                size={2}
                mb={1}
                color="black"
              />
              <li>
                Developing client&apos;s request with PHP, JavaScript, HTML and
                CSS
              </li>
            </Info>
          </div>
        </div>
        <div className="info-container">
          <div className="info-title">
            <Title
              title="Certifications"
              size={4}
              mb={7}
              additional="text-left"
              color="white"
              id="certifications"
            />
          </div>
          <Info>
            <Title
              title="DOST, Project League of Developers Initiative (LODI) Certificate of Completion"
              size={1}
              mb={2}
              color="black"
            />
          </Info>
          <Info>
            <Title
              title="DICT-LMS, Programming for Intermediate Users Using Python Certificate of Completion"
              size={1}
              mb={2}
              color="black"
            />
          </Info>
          <Info>
            <Title
              title="DICT-LMS, Advanced Level of Cloud Computing Certificate of Completion"
              size={1}
              mb={2}
              color="black"
            />
          </Info>
          <Info>
            <Title
              title="DICT-LMS, Advanced Level of Software Engineering Certificate of Completion"
              size={1}
              mb={2}
              color="black"
            />
          </Info>
        </div>
        <div className="info-container">
          <div className="info-title">
            <Title
              title="School Works"
              size={4}
              mb={7}
              additional="text-left"
              color="white"
              id="projects"
            />
          </div>
          <Info>
            <Title
              title="Software Engineering Project"
              size={3}
              mb={1}
              color="white"
            />

            <p>
              Used Azure in handling and managing Laravel API server for:
              <br />
              <a href="https://vitalsynch.vercel.app/" target="_blank">
                https://vitalsynch.vercel.app/
              </a>
            </p>
          </Info>
          <Info>
            <Title title="Thesis" size={3} mb={1} color="white" />

            <p>
              ToMaTo-EN: Utilizing EfficientNet for Tooth-Marked Tongue
              Recognition
            </p>
          </Info>
        </div>
        <div className="info-container">
          <div className="info-title">
            <Title
              title="Education"
              size={4}
              mb={7}
              additional="text-left"
              color="white"
              id="education"
            />
          </div>
          <Info>
            <Title
              title="Dasmarinas Integrated High School"
              size={3}
              mb={1}
              color="white"
            />

            <div>
              <Title title="Junior High School" size={2} mb={1} color="black" />
              2014-2018
            </div>
          </Info>
          <Info>
            <Title
              title="Emilio Aguinaldo College Cavite"
              size={3}
              mb={1}
              color="white"
            />

            <div>
              <Title title="Senior High School" size={2} mb={1} color="black" />
              2018-2020
            </div>
          </Info>
          <Info>
            <Title
              title="Polytechnic University of the Philippines"
              size={3}
              mb={1}
              color="white"
            />

            <div>
              <Title
                title="BS Computer Science"
                size={2}
                mb={1}
                color="black"
              />
              2020-Present
              <li>GPA Average of 1.39 </li>
              <li>Latest 1.38, 4th year 1st Semester</li>
            </div>
          </Info>
        </div>

        <div className="info-container">
          <div className="info-title">
            <Title
              title="Skills"
              size={4}
              mb={7}
              additional="text-left"
              color="white"
              id="skills"
            />
          </div>
          <Info>
            <div>
              <Title title="Python" size={2} mb={1} color="white" />
              <div
                className={`mb-4 h-2.5 w-full rounded-full bg-gray-200 dark:bg-gray-700`}
              >
                <div
                  className="h-2.5 rounded-full bg-blue-600"
                  style={{ width: '70%' }}
                />
              </div>
            </div>
            <Skill title="C, C++, Java" percentage={45} color="blue" />
            <Skill title="HTML, CSS, PHP, JS" percentage={60} color="blue" />
            <Skill title="Laravel and React JS" percentage={60} color="blue" />
            <Skill title="Next JS and Django" percentage={50} color="blue" />
            <Skill
              title="Computer Literacy (Photo editing, Video editing, making power point presentation, etc. )"
              percentage={60}
              color="blue"
            />
          </Info>
        </div>
      </div>
    </>
  );
}
