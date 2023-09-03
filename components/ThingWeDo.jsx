import React from 'react'


const techServices = [
  {
    service: "Web Development",
    icon: `
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path d="M3 21h18V8H3v13zM19 10h-2V8h2v2zm0 2h-2v2h2v-2zm0 4h-2v2h2v-2zm-3-6H8V8h8v2zm0 4h-8v-2h8v2zm0 4h-8v-2h8v2z"/>
        </svg>
      `,
  },
  {
    service: "Mobile App Development",
    icon: `
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path d="M5 3h10a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm10 2H5v12h10V5zM8 17H7v-2h1v2zm0-4H7v-2h1v2zm0-4H7V7h1v2zm9 8h-1v-2h1v2zm0-4h-1v-2h1v2zm0-4h-1V7h1v2z"/>
        </svg>
      `,
  },
  {
    service: "UI/UX Design",
    icon: `
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 18h-2v-2h2v2zm0-4h-2v-7h2v7z"/>
        </svg>
      `,
  },
  {
    service: "Custom Software Development",
    icon: `
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path d="M20 19H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2zm-16-2h16V7H4v10z"/>
        </svg>
      `,
  },
  {
    service: "E-commerce Solutions",
    icon: `
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path d="M21 12h-3v8h-4v-8H3v-2h11V2h4v8h3v2zM8 4v6h8V4H8z"/>
        </svg>
      `,
  },
  {
    service: "Cloud Computing",
    icon: `
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path d="M20 10H9v2h11v-2zm0-4H9v2h11V6zm0-4H9v2h11V2zm0 16H9v2h11v-2z"/>
        </svg>
      `,
  },
  {
    service: "Cybersecurity Services",
    icon: `
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path d="M4 4v6H2V4c0-1.1.9-2 2-2h6v2H4zM2 20h6v2H4c-1.1 0-2-.9-2-2v-6h2v8zm16-2h-6v2h6c1.1 0 2-.9 2-2v-6h-2v8zm-8 2H4c-1.1 0-2-.9-2-2v-6h2v8h6v2zm8-4h-6v2h6v-2zm0-4h-6v2h6v-2zm0-4h-6v2h6V6z"/>
        </svg>
      `,
  },
  {
    service: "AI and Machine Learning",
    icon: `
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path d="M20 18c0 1.1-.9 2-2 2H6c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2h12c1.1 0 2 .9 2 2v12zm-2 0H6V6h12v12zM11 17h2v-2h-2v2zm3-9l-1 4-4-2h5z"/>
        </svg>
      `,
  },
  {
    service: "IoT Solutions",
    icon: `
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path d="M11 15v6h2v-6h-2zm-2-4h4V5h-4v6zm6 0h4V5h-4v6z"/>
        </svg>
      `,
  },
  {
    service: "Blockchain Development",
    icon: `
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path d="M7 2h10v2H7zM5 5h14v4H5zm16 4v12c0 1.1-.9 2-2 2H5a2 2 0 0 1-2-2V9c0-1.1.9-2 2-2h6V5c0-1.1.9-2 2-2h4a2 2 0 0 1 2 2z"/>
        </svg>
      `,
  },
  {
    service: "Data Analytics",
    icon: `
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path d="M7 19h2V3H7v16zm4 0h2V7h-2v12zm4 0h2V11h-2v8zm2-14h-2v2h2V5zm0 4h-2v2h2V9z"/>
        </svg>
      `,
  },
  {
    service: "Digital Marketing",
    icon: `
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path d="M3 3h18v2H3zm9 4H4v10h8V7zm9 0h-8v10h8V7z"/>
        </svg>
      `,
  },
  {
    service: "IT Consulting",
    icon: `
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path d="M22 19H2V5h7V3H2c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h20c1.1 0 2-.9 2-2v-2h-2v2zM9 16H4V7h5v9zm11-2h-5V7h5v7z"/>
        </svg>
      `,
  },
  {
    service: "DevOps Services",
    icon: `
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path d="M20 16v-3h-4v3h-3v-3H4v3H1v2h3v3h3v-3h9v3h3v-2h-3v-3h-2zM6 9h12v2H6z"/>
        </svg>
      `,
  },
  {
    service: "Tech Training",
    icon: `
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path d="M20 18H4c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2zM6 12l6-3 6 3V6H6v6zm12-8v2H6V4h12z"/>
        </svg>
      `,
  },
];




const ThingWeDo = () => {
  return (
    <div className='relative bg-csmidnight text-cswhite py-16  '
      style={{
        boxShadow: '0 22px  70px 4px rgba(0, 0, 0, 1)'
      }}
    >
      <div id='titleDesc' className='text-cspurple text-6xl text-center font-bold py-12'>
        All Your Needs Covered
      </div>
      <div className="tech-services flex flex-wrap justify-center items-center px-24 ">
        {techServices.map((service, index) => (
          <div key={index} className="tech-service   my-3 max-w-fit group">
            <div className='max-w-fit bg-red-50 border-csslate border-2 rounded-full px-4 items-center justify-center  flex py-4 text-csmidnight space-x-4 m-2 text-center duration-300 cursor-pointer group-hover:shadow-lg shadow-cswhite relative group-hover:-translate-y-4 group-hover:mx-4  group-hover:px-8 group-hover:py-4'>
              <div className='group-hover:scale-125 duration-300' dangerouslySetInnerHTML={{ __html: service.icon }}></div>
              <p>{service.service}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ThingWeDo
