'use client';
import { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';
import chevronLeft from '@iconify/icons-fa/chevron-left';
import chevronRight from '@iconify/icons-fa/chevron-right';
import Image from 'next/image';
import Link from 'next/link';
import { coreml, openai, opencv, pdfkit, swift, swiftdata, swiftui, uikit } from '@/public/assets/project/visaku/technology';
import { mapkit, weatherkit } from '@/public/assets/project/weatherway/technology';
import { arkit } from '@/public/assets/project/tomatomurderer/technology';
import { avfoundation, firebase, gemini } from '@/public/assets/project/pawse/technology';
import { healthkit, watchkit } from '@/public/assets/project/couchhamster/technology';
import { appstore, figma, github, testflight } from '@/public/assets';

const projects = [
  {
    title: 'Visaku',
    description: [
      'Visaku is a streamlined solution designed to take the stress out of visa applications. This app addresses common pain points such as confusing requirements, frustrating photo compliance, and documentation hassles. With a focus on efficiency and user-friendliness, the app even provides document preparation in Bahasa Indonesia to make the process more accessible.',
    ],
    features: [
      'OCR Integration: Extract data instantly by taking pictures of your documents directly within the app.',
      'Auto-Fill Forms: Save time by automatically populating application details.',
      'Document Preparation: Get clear instructions in Bahasa Indonesia for stress-free compliance.',
      'AI Itinerary Generator: Easily create itinerary document required for visa applications.',
      'Photo Maker: Ensure your photo meets all visa specifications with an in-app tool.',
    ],
    image: '/assets/project/visaku/home.png',
    technologies: [
      { name: 'PdfKit', asset: pdfkit },
      { name: 'SwiftUI', asset: swiftui },
      { name: 'UIKit', asset: uikit },
      { name: 'CoreML', asset: coreml },
      { name: 'Swift', asset: swift },
      { name: 'SwiftData', asset: swiftdata },
      { name: 'OpenCV', asset: opencv },
      { name: 'OpenAI', asset: openai },
    ],
    category: 'iOS',
    github: 'https://github.com/InsidersID/Visaku',
    figma:
      'https://www.figma.com/proto/qbaHOTABwQy8FwMpcJxYC6/VISAKU?page-id=2113%3A4530&node-id=3615-4007&node-type=canvas&viewport=196%2C-67%2C0.12&t=ncg3Hmv01Fv9uUpp-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=2113%3A6723',
    appstore: 'https://apps.apple.com/id/app/visaku-teman-perjalanan-kamu/id6737880907',
  },
  {
    title: 'Advisa',
    description: [
      'AdVisa is an app that help Indonesian Individual traveller to prepare documents to applying Visa. Created to address common travel preparation issues like lengthy research due to scattered information and challenges in filling out visa forms without context.',

      'The app offers a tailored list of required documents, a scan-and-extract feature for auto-filling, and Quick Assist for easy guidance. AdVisa also compiles completed documents into a single, locally stored file, allowing users to easily access, print, and present them to the relevant institutions, ultimately saving time and simplifying the travel preparation process.',
    ],
    image: '/assets/project/advisa/home.png',
    technologies: [
      { name: 'PdfKit', asset: pdfkit },
      { name: 'SwiftUI', asset: swiftui },
      { name: 'UIKit', asset: uikit },
      { name: 'CoreML', asset: coreml },
      { name: 'Swift', asset: swift },
      { name: 'SwiftData', asset: swiftdata },
      { name: 'OpenCV', asset: opencv },
    ],
    category: 'iOS',
    github: 'https://github.com/lonard2/adVisa',
    figma:
      'https://www.figma.com/proto/WFuG6whFiCzqecQJoYJpzM/AdVisa%3A-Your-Visa-Advisor?page-id=360%3A21489&node-id=360-21489&node-type=canvas&t=Dgcq2XGhjXBNKNXp-0&scaling=scale-down&content-scaling=fixed&starting-point-node-id=438%3A12241',
    testflight: 'https://testflight.apple.com/join/ay14eGEr',
  },
  {
    title: 'WeatherWay',
    description: [
      'WeatherWay is an application designed to provide up-to-date weather information along the route of a trip. By entering the departure and destination points, the application provides real-time weather updates for the travel location.',
      'This feature allows users to effectively prepare for changing weather conditions during the trip. This application is very useful for drivers who want to avoid unexpected delays due to changing weather conditions. With an intuitive interface, WeatherWay ensures that users have the information they need for a safe and efficient trip.',
    ],
    image: '/assets/project/weatherway/home.png',
    technologies: [
      { name: 'Swift', asset: swift },
      { name: 'SwiftUI', asset: swiftui },
      { name: 'WeatherKit', asset: weatherkit },
      { name: 'MapKit', asset: mapkit },
    ],
    category: 'iOS',
    github: 'https://github.com/JonathanAaron3005/Nano-3_WeatherMap-main',
    figma:
      'https://www.figma.com/proto/rM0XQe1pAb302rHJ7p8NY7/Nano-B1-weatherway?page-id=134%3A19791&node-id=352-8556&viewport=1207%2C362%2C0.3&t=4judym16pCHBnKQz-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=352%3A8556',
  },
  {
    title: 'Pawse',
    description: [
      'Pawse is an app designed to help users manage their mental health through emotional reflection and fun activities. The app aims to provide daily support in understanding how users feel, helping them process emotions in a positive way, and offering recommendations for activities that can improve their mood.',
    ],
    image: '/assets/project/pawse/home.jpeg',
    technologies: [
      { name: 'Swift', asset: swift },
      { name: 'SwiftUI', asset: swiftui },
      { name: 'Firebase', asset: firebase },
      { name: 'Gemini', asset: gemini },
      { name: 'AVFoundation', asset: avfoundation },
    ],
    category: 'iOS',
    github: 'https://github.com/PAWse-AppleDeveloper/Pawse',
    figma: 'https://www.figma.com/proto/luDDLTxdgjOttSwY1CkvFp/PETA?page-id=1%3A3&node-id=654-1164&node-type=canvas&t=YGQqltqLyZw3kC9o-0&scaling=scale-down&content-scaling=fixed&starting-point-node-id=654%3A1164&show-proto-sidebar=1',
  },
  {
    title: 'TomatoMurderer',
    description: [
      `Tomato Murderer is a murder-mystery hidden object game with a little twist of comedy. This game utilizes the Augmented Reality (AR) technology into the gameplay for a more immersive and interesting experience. If you're wondering about the gameplay or even about why the game itself called "Tomato Murderer", then try it out yourself!`,
    ],
    image: '/assets/project/tomatomurderer/home.jpeg',
    technologies: [
      { name: 'Swift', asset: swift },
      { name: 'SwiftUI', asset: swiftui },
      {
        name: 'ARKit',
        asset: arkit,
      },
    ],
    category: 'iOS',
    github: 'https://github.com/notwatermango/TomatoMurderer',
  },
  {
    title: 'CouchHamster',
    description: [
      `CouchHamster is named after the English idiom 'Couch Potato,' which typically describes someone leading a sedentary lifestyle, often lounging on a sofa. However, in contrast to this passive image, CouchHamster encourages users to cultivate healthy habits both for themselves and their virtual hamster companions. The app reinvents the notion of being a 'couch potato' by transforming it into an opportunity for active engagement and nurturing care.`,
    ],
    image: '/assets/project/couchhamster/home.png',
    technologies: [
      { name: 'Swift', asset: swift },
      { name: 'SwiftUI', asset: swiftui },
      {
        name: 'HealthKit',
        asset: healthkit,
      },
      {
        name: 'WatchKit',
        asset: watchkit,
      },
    ],
    category: 'WatchOS',
    figma: 'https://www.figma.com/design/4i2WrEuZCFA4jEyyrNvAy2/CouchHamster?node-id=0-1&t=91hESiXtzuTsCCtZ-1',
    github: 'https://github.com/hendralijaya/CouchHamster',
  },
];

const ProjectsPage = () => {
  const [currentProject, setCurrentProject] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const toggleCurtains = (callback: () => void) => {
    setIsOpen(false);
    setTimeout(() => {
      callback();
      setIsOpen(true);
    }, 1000);
  };

  const showProject = (index: number) => {
    setCurrentProject(index);
  };

  return (
    <div className="overflow-hidden bg-gray-900 text-white h-screen relative">
      <nav
        id="nav"
        className={`absolute top-5 right-5 flex items-center justify-center p-4 bg-gradient-to-r from-pink-500 to-red-500 rounded-full shadow-lg transition-opacity duration-200 z-20 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <Link href="/" className="text-white text-lg px-4 py-2 rounded hover:bg-white hover:bg-opacity-20 transition">
          Home
        </Link>
        <Link href="/projects" className="text-white text-lg px-4 py-2 rounded hover:bg-white hover:bg-opacity-20 transition">
          Projects
        </Link>
      </nav>
      <div className="relative w-screen h-screen overflow-hidden">
        <button
          className={`nav-button left-button absolute top-1/2 transform -translate-y-1/2 left-5 p-4 text-lg text-white bg-gradient-to-r from-pink-500 to-red-500 rounded-full shadow-lg hover:bg-gradient-to-r hover:from-red-500 hover:to-pink-500 transition z-20 ${
            isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          } ${currentProject === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
          onClick={() => {
            if (currentProject > 0) {
              toggleCurtains(() => {
                showProject((currentProject - 1 + projects.length) % projects.length);
              });
            }
          }}
          disabled={currentProject === 0}
        >
          <Icon icon={chevronLeft} />
        </button>
        <button
          className={`nav-button right-button absolute top-1/2 transform -translate-y-1/2 right-5 p-4 text-lg text-white bg-gradient-to-r from-pink-500 to-red-500 rounded-full shadow-lg hover:bg-gradient-to-r hover:from-red-500 hover:to-pink-500 transition z-20 ${
            isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          } ${currentProject === projects.length - 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
          onClick={() => {
            if (currentProject < projects.length - 1) {
              toggleCurtains(() => {
                showProject((currentProject + 1) % projects.length);
              });
            }
          }}
          disabled={currentProject === projects.length - 1}
        >
          <Icon icon={chevronRight} />
        </button>
        <div
          className={`curtain left-curtain absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-red-800 to-red-900 shadow-inner transition-transform duration-1000 ${isOpen ? '-translate-x-full' : 'translate-x-0'}`}
          style={{ boxShadow: 'inset 0 0 20px rgba(0, 0, 0, 0.8)', zIndex: 50 }}
        ></div>
        <div
          className={`curtain right-curtain absolute top-0 right-0 w-1/2 h-full bg-gradient-to-r from-red-800 to-red-900 shadow-inner transition-transform duration-1000 ${isOpen ? 'translate-x-full' : 'translate-x-0'}`}
          style={{ boxShadow: 'inset 0 0 20px rgba(0, 0, 0, 0.8)', zIndex: 50 }}
        ></div>
        <div className="content relative flex justify-center items-center w-full h-full">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`project flex flex-col md:flex-row h-full w-full max-w-5xl mx-auto bg-gray-800 p-8 rounded-lg shadow-lg transition-opacity duration-200 ${index === currentProject ? 'opacity-100' : 'opacity-0 hidden'}`}
            >
              <div className="flex flex-col flex-wrap">
                <div className="flex flex-row gap-x-8">
                  <div className="w-full">
                    <Image src={project.image} alt={project.title} width={200} height={200} className="rounded-lg" />
                  </div>
                  <div>
                    <h1 className="text-2xl font-semibold mb-4">{project.title}</h1>
                    {project.description.map((paragraph, i) => (
                      <p key={i} className="text-lg mb-4">
                        {paragraph}
                      </p>
                    ))}
                    {project.features && (
                      <ul className="list-disc list-inside text-md mb-4">
                        {project.features.map((feature, i) => (
                          <li key={i}>{feature}</li>
                        ))}
                      </ul>
                    )}
                    <div className="flex flex-row flex-wrap gap-x-8">
                      {project.github && (
                        <Link href={project.github} target="_blank" rel="noopener noreferrer">
                          <Image src={github} alt="Github" width={80} height={80} className="bg-white rounded-full" />
                        </Link>
                      )}
                      {project.figma && (
                        <Link href={project.figma} target="_blank" rel="noopener noreferrer">
                          <Image src={figma} alt="Figma" width={80} height={80} />
                        </Link>
                      )}
                      {project.appstore && (
                        <Link href={project.appstore} target="_blank" rel="noopener noreferrer">
                          <Image src={appstore} alt="App Store" width={240} height={240} />
                        </Link>
                      )}
                      {project.testflight && (
                        <Link href={project.testflight} target="_blank" rel="noopener noreferrer">
                          <Image src={testflight} alt="TestFlight" width={80} height={80} />
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-between flex-grow">
                  <div className="flex flex-col mt-4 gap-y-4">
                    <h3 className="text-2xl font-semibold">Technologies</h3>
                    <div className="flex flex-wrap gap-4">
                      {project.technologies.map((tech, i) => (
                        <div key={i} className="flex flex-col items-center">
                          {typeof tech === 'object' && tech.asset && <Image src={tech.asset} alt={tech.name} width={80} height={80} className="mb-2" />}
                          <span>{typeof tech === 'object' ? tech.name : tech}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <div className="text-lg">iOS</div>
                    <div className="text-lg">
                      {currentProject + 1}/{projects.length}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
