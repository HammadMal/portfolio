import React from "react";
import Sidebar from "./components/sidebar";
import picture from "./assets/picture.jpg";
import reactlogo from "./assets/react-logo.png";
import nodelogo from "./assets/node-logo.png";
import expresslogo from "./assets/express-logo.png";
import reactnative from "./assets/react-native-logo.png";
import habibuni from "./assets/logo.jpg";
import agakhan from "./assets/akhss.png";
import bvs from "./assets/bvslogo.png";
import ContactForm from "./components/ContactForm";


function App() {
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-white text-gray-800 flex flex-col md:flex-row">
      {/* Sidebar */}
      <Sidebar scrollToSection={scrollToSection} />

      {/* Main Content */}
      <main className="flex-1 md:ml-64 p-4 md:p-6">
        {/* Home Section */}
        <section
          id="home"
          className="bg-white rounded-lg shadow-md min-h-screen flex flex-col items-center justify-center px-4 md:px-12"
        >
          {/* Profile Picture */}
          <div className="w-24 h-24 md:w-48 md:h-48 flex-shrink-0 rounded-full overflow-hidden border-4 border-blue-600 mb-6">
            <img
              src={picture}
              alt="Hammad Malik"
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-4">
            Hi! I am Hammad Malik, Welcome to my Portfolio.
          </h1>
          <p className="mt-4 text-gray-600 text-center text-base md:text-lg">
            Explore my journey, skills, and projects as a software developer. Feel free to get in touch!
          </p>

          {/* Download CV Button */}
          <a
            href="/mycv.pdf" // Replace with the actual path to your CV
            download="Hammad_Malik_CV.pdf" // Set the download file name
            className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition-all duration-300 text-sm md:text-base"
          >
            Download My CV!
          </a>
        </section>

        {/* About Section */}
        <section
          id="about"
          className="bg-white rounded-lg shadow-md min-h-screen flex flex-col items-center justify-center px-4 md:px-12 text-center"
        >
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-extrabold text-blue-600 mb-6">Who am I?</h1>
            <h2 className="text-lg md:text-xl font-medium text-gray-800 mb-4">
              I am a student currently enrolled in Habib University. I am also a Software Developer!
            </h2>
            <p className="text-gray-600 mb-4 text-sm md:text-base">
              I'm a passionate software developer with experience in building dynamic and user-friendly web applications.
              Dedicated Computer Science student at Habib University with a focus on web and app development.
              Proficient in HTML, CSS, JavaScript, React.js, Node.js, and Python. Skilled in creating user-friendly
              interfaces and efficient backend solutions.
            </p>

            {/* Aspirations */}
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Aspirations</h3>
            <p className="text-gray-600 mb-4 text-sm md:text-base">
              I am eager to step into the cloud industry and explore opportunities in cloud computing. Currently, I am actively
              learning Microsoft Azure fundamentals to build a strong foundation in cloud technologies.
            </p>

            {/* Ongoing Learning */}
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Ongoing Learning</h3>
            <p className="text-gray-600 text-sm md:text-base">
              I am continuously expanding my knowledge in software development and technology. Recently, I have been focusing on:
            </p>
            <ul className="list-disc list-inside mt-4 text-center text-gray-600 text-sm md:text-base">
              <li>Mastering cloud computing with Microsoft Azure.</li>
              <li>Enhancing my backend skills with Node.js and Express.js.</li>
              <li>Improving my understanding of modern frontend frameworks like React.js.</li>
              <li>Exploring DevOps practices and tools to streamline software development.</li>
            </ul>

            {/* Interests */}
            <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-2">Interests</h3>
            <p className="text-gray-600 text-sm md:text-base">
              Beyond coding, I am intrigued by:
            </p>
            <ul className="list-disc list-inside mt-4 text-center  text-gray-600 text-sm md:text-base">
              <li>Artificial Intelligence and its potential in transforming industries.</li>
              <li>Cybersecurity to ensure safe and reliable software systems.</li>
              <li>Developing scalable, cloud-native applications.</li>
            </ul>
          </div>
        </section>

        {/* Services Section */}
        <section
          id="services"
          className="bg-white rounded-lg shadow-md min-h-screen flex flex-col items-center justify-center px-4 md:px-12 text-center"
        >
          <div className="max-w-4xl">
            <h1 className="text-3xl md:text-4xl font-extrabold text-blue-600 mb-6">My Services!</h1>
            <p className="text-gray-700 mb-8 text-sm md:text-base leading-relaxed">
              I specialize in delivering cutting-edge solutions to help you achieve your goals. Below are the core services I provide:
            </p>
            {/* Service List */}
            <ul className="space-y-6 md:space-y-8">
              <li className="text-xl md:text-2xl font-semibold text-gray-800 bg-blue-100 rounded-md p-4 shadow-md">
                Web Application Development
              </li>
              <li className="text-xl md:text-2xl font-semibold text-gray-800 bg-blue-100 rounded-md p-4 shadow-md">
                Mobile Application Development
              </li>
              <li className="text-xl md:text-2xl font-semibold text-gray-800 bg-blue-100 rounded-md p-4 shadow-md">
                API Development & Integration
              </li>
            </ul>
            {/* Technology Logos */}
            <div className="flex flex-wrap justify-center gap-6 mt-12">
              <img src={reactlogo} alt="React" className="w-100 h-20"  />
              <img src={nodelogo} alt="Node.js" className="w-100 h-20" />
              <img src={expresslogo} alt="Express.js" className="w-100 h-20"/>
              <img src={reactnative} alt="React Native" className="w-100 h-20"/>
            </div>
          </div>
        </section>


        {/* Skills Section */}
        <section
          id="skills"
          className="bg-white rounded-lg shadow-md min-h-screen flex flex-col items-center justify-center px-4 md:px-12 text-center"
        >
          <div className="max-w-4xl">
            <h1 className="text-3xl md:text-4xl font-extrabold text-blue-600 mb-6">
              My Skills
            </h1>

            <div className="space-y-8 md:space-y-12">
              {/* Frontend Development */}
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  Frontend Development
                </h2>
                <p className="text-gray-700 text-sm md:text-base">
                  HTML, CSS/SCSS/SASS, Tailwind CSS, React-Strap, Material-UI, ReactJS
                </p>
              </div>

              {/* Backend Development */}
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  Backend Development
                </h2>
                <p className="text-gray-700 text-sm md:text-base">
                  NodeJS, Express, React-Native, Android Studio
                </p>
              </div>

              {/* Databases */}
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Databases</h2>
                <p className="text-gray-700 text-sm md:text-base">
                  SQL Server, SQLite, MongoDB/Mongoose, Firebase
                </p>
              </div>

              {/* Programming Languages */}
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  Programming Languages
                </h2>
                <p className="text-gray-700 text-sm md:text-base">
                  JavaScript, Python, C/C++
                </p>
              </div>

              {/* Frameworks */}
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Frameworks</h2>
                <p className="text-gray-700 text-sm md:text-base">
                  PyQT, DB Designer
                </p>
              </div>
            </div>
          </div>
        </section>




        {/* Education Section */}
<section
  id="education"
  className="bg-white rounded-lg shadow-md min-h-screen flex flex-col items-center justify-center px-4 md:px-12 text-center"
>
  <div className="max-w-4xl">
    <h1 className="text-3xl md:text-4xl font-extrabold text-blue-600 mb-6 p-4">Education</h1>

    {/* Habib University */}
    <div className="mb-8 flex flex-col md:flex-row items-center text-center md:text-left">
      <div className="w-200 h-25 mr-10 bg-gray-200 rounded-full overflow-hidden mr-4 mb-4 md:mb-0">
        {/* Logo Placeholder */}
        <img src={habibuni}  alt="Habib University Logo" className="w-full h-full object-cover " />
      </div>
      <div>
        <h2 className="text-2xl font-semibold text-gray-800">Habib University</h2>
        <h3 className="text-lg font-medium text-blue-600">Bachelors in Computer Science</h3>
        <p className="text-gray-600 mt-2">
          Pursuing a bachelor's degree in Computer Science, gaining in-depth knowledge of advanced computer science concepts
          and their practical applications. Currently a student committed to mastering both theoretical principles and
          real-world software development practices.
        </p>
      </div>
    </div>

    {/* Aga Khan Higher Secondary School System */}
    <div className="mb-8 flex flex-col md:flex-row items-center text-center md:text-left">
      <div className="w-200 h-30  rounded-full overflow-hidden mr-4 mb-4 md:mb-0">
    {/* Logo Placeholder */}
        <img src={agakhan} alt="Aga Khan School Logo" className="w-full h-full object-cover" />
      </div>
      <div>
        <h2 className="text-2xl font-semibold text-gray-800">
         Aga Khan Higher Secondary School System
        </h2>
        <h3 className="text-lg font-medium text-blue-600">Science General | HSSC</h3>
        <p className="text-gray-600 mt-2">
          Achieved 85% (2019 - 2021) in HSSC, focusing on core subjects such as Computer Science,
          Mathematics, and Physics. Certification recognized by the Aga Khan University Examination Board (AKUEB).
        </p>
      </div>
    </div>

    {/* Bai Virbaiji Soparivala Parsi High School */}
    <div className="flex flex-col md:flex-row items-center text-center md:text-left -ml-5">
      <div className="w-22 h-25 rounded-full overflow-hidden  mb-4 md:mb-0">
        {/* Logo Placeholder */}
        <img src={bvs} alt="BVS High School Logo" className="w-full h-full object-cover" />
      </div>
      <div>
        <h2 className="text-2xl font-semibold text-gray-800">
          Bai Virbaiji Soparivala Parsi High School
        </h2>
        <h3 className="text-lg font-medium text-blue-600">SSC Pre-Medical</h3>
        <p className="text-gray-600 mt-2">
          Studied SSC with a strong emphasis on Mathematics, Physics, Chemistry, and Biology. Gained foundational skills
          essential for advanced scientific studies.
        </p>
      </div>
    </div>
  </div>
</section>

        {/* <section>

        <div className="max-w-4xl">


            <h1 className=" text-center text-3xl md:text-4xl font-extrabold text-blue-600 mb-6 p-4">Projects</h1>
          </div>





          
        </section> */}


<section
          id="work"
          className="bg-white rounded-lg shadow-md min-h-screen flex flex-col items-center justify-center px-4 md:px-12 text-center"
        >
          <div className="max-w-4xl">
            <h1 className="text-3xl md:text-4xl font-extrabold text-blue-600 mb-6 p-4">
              Projects
            </h1>

            {/* Project 1 */}
            <div className="mb-8 text-left">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">ShedUTrack</h2>
              <p className="text-sm text-gray-600 italic mb-1">
                Habib University Scheduling Assistant | CS370 (Aug 2024 - Dec 2024)
              </p>
              <p className="text-gray-700 mb-2">
                ShedUTrack is a scheduling assistant designed for students to manage their courses, track tasks, view grades, SGPA/CGPA, and build timetables. Includes a "what if" feature to simulate academic progress.
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Tech Stack:</strong> MERN Stack, React Native, Vercel, Heroku, MongoDB.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://lnkd.in/eT5wmKSK"
                  className="text-blue-600 underline hover:text-blue-800"
                >
                  Web App
                </a>
                <a
                  href="https://lnkd.in/eSRZ6znK"
                  className="text-blue-600 underline hover:text-blue-800"
                >
                  Mobile App
                </a>
              </div>
            </div>

            {/* Project 2 */}
            <div className="mb-8 text-left">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">HU-Gym-and-Recreation-Portal</h2>
              <p className="text-sm text-gray-600 italic mb-1">
                Database Systems | CS335 (Oct 2023 - Dec 2023)
              </p>
              <p className="text-gray-700 mb-2">
                A portal for the HU community offering fitness-related services such as gym fee payment, event sign-ups, locker registration, and team management.
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Tech Stack:</strong> Python (PyQt6) frontend, MSSQL backend.
              </p>
              <a
                href="https://github.com/HammadMal/HU-Gym-and-Recreation-Portal---Database-Systems"
                className="text-blue-600 underline hover:text-blue-800"
              >
                GitHub Repository
              </a>
            </div>

            {/* Project 3 */}
            <div className="mb-8 text-left">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Pacman Pursuit</h2>
              <p className="text-sm text-gray-600 italic mb-1">
                OOP and Design Methodologies (Oct 2023 - Dec 2023)
              </p>
              <p className="text-gray-700 mb-2">
                A game combining Pac-Man and the World's Hardest Game, leveraging OOP principles such as inheritance, polymorphism, and operator overloading. Players navigate mazes, avoid ghosts, and collect items.
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Tech Stack:</strong> C++, SDL 2.0.
              </p>
              <a
                href="https://github.com/breehaqasim/Pacman-Pursuit---OOP"
                className="text-blue-600 underline hover:text-blue-800"
              >
                GitHub Repository
              </a>
            </div>

            {/* Project 4 */}
            <div className="text-left">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">RISC V Pipelined and Single Cycled Implementation</h2>
              <p className="text-sm text-gray-600 italic mb-1">
                Computer Architecture Project (Apr 2024 - May 2024)
              </p>
              <p className="text-gray-700 mb-2">
                Designed a 5-stage pipelined processor to execute a sorting algorithm. Converted a single cycle processor to a pipelined version, implemented in Verilog HDL with the sorting algorithm in RISC-V assembly language.
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Tech Stack:</strong> Verilog HDL, RISC-V Assembly.
              </p>
              <p className="text-gray-700">Skills: Verilog</p>
            </div>
          </div>
        </section>


        <section
  id="contact"
  className="bg-white rounded-lg shadow-md min-h-screen flex flex-col items-center justify-center px-4 md:px-12 text-center"
>
  <div className="max-w-4xl">
    {/* Section Title */}
    <h1 className="text-3xl md:text-4xl font-extrabold text-blue-600 mb-6">
      Contact Me!
    </h1>

    {/* Contact Details */}
    <div className="mb-8">
      <p className="text-lg text-gray-700">
        <strong>Email:</strong> <a href="mailto:Hammadmalik40a@gmail.com" className="text-blue-600 hover:underline">Hammadmalik40a@gmail.com</a>
      </p>
      <p className="text-lg text-gray-700">
        <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/hammad-malik-a4883a212/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">View Profile</a>
      </p>
      <p className="text-lg text-gray-700">
        <strong>Phone:</strong> <a href="tel:+923020241682" className="text-blue-600 hover:underline">+92 302 0241682</a>
      </p>
    </div>

    <ContactForm />

  </div>
</section>


      </main>
    </div>
  );
}

export default App;
