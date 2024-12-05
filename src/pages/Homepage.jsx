import { useRef, useEffect, useState } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import "../pages/HomepageStyle.css";
import Modal from "../pages/Modal.jsx";
import video1 from "/meVid.mp4";
import video3 from "/me11.mp4";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Homepage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({ text: "", image: "" });
  const [isInView, setIsInView] = useState(false);
  const controls = useAnimation();
  const aboutRef = useRef(null);
  const workRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  const toggleMute = () => {
    setIsMuted(!isMuted);
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
    }
  };

  const fadeIn = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 1 },
  };

  const handleCardClick = (text, image) => {
    setModalContent({ text, image });
    setIsModalOpen(true);
  };

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
        if (entry.isIntersecting) {
          controls.start("visible");
        } else {
          controls.start("hidden");
        }
      },
      { threshold: 0.1 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, [controls]);

  useEffect(() => {
    const cards = document.querySelectorAll(".card");

    cards.forEach((card) => {
      card.addEventListener("touchstart", function () {
        card.classList.add("card-hover");
      });

      card.addEventListener("touchend", function () {
        card.classList.remove("card-hover");
      });
    });

    return () => {
      cards.forEach((card) => {
        card.removeEventListener("touchstart", function () {
          card.classList.add("card-hover");
        });

        card.removeEventListener("touchend", function () {
          card.classList.remove("card-hover");
        });
      });
    };
  }, []);

  return (
    <div style={{ width: "100%", padding: 0, margin: 0, minWidth: "390px", }}>
      <div className="section-container">
        <div
          className="div-container"
          style={{ minWidth: "300px", display: "flex", alignItems: "center", }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
          >
            <h1 style={{ fontSize: "2.8rem" }}>Hello world, my name is</h1>
            <h1 style={styles.specialText}>Cledwyn</h1>
            <h1 style={{ fontSize: "1.8rem", paddingTop: "20px" }}>
              I am pursuing Computer Science (AI) with <br></br> a second major
              in Business Analytics
            </h1>
          </motion.div>
        </div>
        <div
          className="div-container"
          style={{
            minWidth: "390px",
            minHeight: "500px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <motion.img
            src="./me1.jpg"
            className="img-fluid"
            style={{
              width: "80%",
              height: "80%",
              objectFit: "cover",
              borderRadius: "50px",
              marginBottom: "3%",
            }}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.7,
              ease: [0, 0.71, 0.2, 1.01],
              scale: {
                type: "spring",
                damping: 5,
                stiffness: 100,
                restDelta: 0.01,
              },
            }}
          />
        </div>
      </div>

      <section
        id="about"
        className="section-container"
        style={{
          scrollMarginTop: "30px",
          position: "relative",
        }}
      >
        <video
          autoPlay
          loop
          muted
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: -1,
            filter: "brightness(0.8)",
          }}
        >
          <source src="./vid1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div
          style={{
            width: "100%",
            textAlign: "center",
            paddingTop: "5%",
            
          }}
        >
          <h1 style={styles.specialText2}>About Me</h1>
        </div>
        <div
          className="about-container"
          style={{ minWidth: "400px", display: "flex", alignItems: "center" }}
        >
          <motion.div
            style={{
              ...styles.containerCard1,
            }}
            initial="hidden"
          >
            <motion.div className="card" style={styles.card}>
              <div
                className="card-body"
                style={{ marginBottom: "50px", paddingTop: "40px" }}
              >
                <div style={{ marginBottom: "50px" }}>
                  <h2 className="card-title" style={{ fontStyle: "italic" }}>
                    My Passion
                  </h2>
                </div>
                <div style={{ textAlign: "left" }}>
                  <p className="card-text" style={{ fontSize: "1.2rem" }}>
                    I am passionate about artificial intelligence and software
                    development, inspired by technology’s potential to transform
                    lives and industries. I enjoy tackling challenges like
                    designing intuitive interfaces, building scalable systems,
                    and addressing AI’s ethical implications. My curiosity
                    drives continuous learning as I explore emerging trends and
                    tools. With a creative, problem-solving mindset, I aim to
                    build impactful, innovative solutions in this dynamic field.
                  </p>
                </div>
              </div>
            </motion.div>
            <motion.div className="card" style={styles.card}>
              <div
                className="card-body"
                style={{ marginBottom: "50px", paddingTop: "40px" }}
              >
                <div style={{ marginBottom: "50px" }}>
                  <h2 className="card-title" style={{ fontStyle: "italic" }}>
                    My Hobbies
                  </h2>
                </div>
                <div style={{ textAlign: "left" }}>
                  <p className="card-text" style={{ fontSize: "1.2rem" }}>
                    In my free time, I enjoy traveling, with a special love for
                    visiting Korea and exploring its culture. I’m also an active
                    person who loves playing football and tennis, and I have a
                    strong passion for gymming to stay fit and energized.
                  </p>
                </div>
              </div>
            </motion.div>
            <motion.div className="card" style={styles.card}>
              <div
                className="card-body"
                style={{ marginBottom: "50px", paddingTop: "40px" }}
              >
                <div style={{ marginBottom: "50px" }}>
                  <h2 className="card-title" style={{ fontStyle: "italic" }}>
                    More About Me
                  </h2>
                </div>
                <div style={{ textAlign: "left" }}>
                  <p className="card-text" style={{ fontSize: "1.2rem" }}>
                    I am currently in my sophomore year in Singapore Management
                    University, pursing the bachelor's degree of Computer
                    Science specialised in AI with a 2nd major in Business
                    Analytics.
                  </p>
                </div>
                <div style={{ marginTop: "50px" }}>
                  <a
                    href="https://www.linkedin.com/in/cledwyn-chan/"
                    target="_blank"
                    className="btn btn-primary"
                  >
                    My linkedin!
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section
        id="experience"
        className="working-section-container animated-background"
        style={{
          scrollMarginTop: "30px",
          position: "relative",
        }}
        ref={workRef}
      >
        <div
          style={{
            width: "100%",
            textAlign: "center",
            paddingBottom:"30px",
   
          }}
        >
          <h1 style={styles.specialText}>Working Experience</h1>
        </div>
        <div
          className="working-container"
          style={{minWidth: "400px", display: "flex", alignItems: "center" }}
        >
          <motion.div
          style={{
            width:"100%",
            height:"70%",
            
          }}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          <div id="expContainer" className="container" style={{...styles.display}}>
            <motion.div
              className="card"
              style={{...styles.cardContainer}}
              onClick={() =>
                handleCardClick(
                  "As a retail associate at Nike, I provided top-tier customer service, assisting customers with product selection, offering personalized recommendations, and ensuring an exceptional in-store experience. I was responsible for maintaining an organized and visually appealing sales floor, handling transactions efficiently, and staying up-to-date with product knowledge to promote the latest merchandise. My role also included contributing to sales targets, managing stock, and fostering a positive, team-oriented environment to enhance customer satisfaction and loyalty.",
                  "./nike2.jpg"
                )
              }
            >
              <img src="./nike.jpeg" style={styles.cardImg} />
              <div className="layer"></div>
              <div className="info" style={{ color: "white" }}>
                <h3 className="heading">Nike</h3>
                <h4 className="sub-head">Sales Associate</h4>
                <h5 className="year">Mar 2023 - Sep 2023</h5>
                <p></p>
              </div>
            </motion.div>

            <motion.div
              className="card"
              style={{...styles.cardContainer, minHeight:"400px"}}
              onClick={() =>
                handleCardClick(
                  "During the Artbox 2023 expo exhibition, I worked as a salesperson for Oatbedient, where I quickly adapted to the fast-paced environment and effectively engaged with visitors. My ability to grasp new information swiftly allowed me to confidently present our products and address customer inquiries. This not only enhanced the company’s visibility at the event but also earned me positive feedback from my manager, who appreciated my enthusiasm and quick learning ability. My performance contributed to a successful exhibition, showcasing my aptitude for sales and client interaction.",
                  "./oat2.PNG"
                )
              }
            >
              <img src="./oat.jpeg" style={{...styles.cardImg}} />
              <div className="layer"></div>
              <div className="info" style={{ color: "white" }}>
                <h3 className="heading">Oatbedient</h3>
                <h4 className="sub-head">Promoter</h4>
                <h5 className="year">Jan 2023 - Feb 2023</h5>
                <p></p>
              </div>
            </motion.div>

            <motion.div
              {...fadeIn}
              className="card"
              style={{...styles.cardContainer,}}
              onClick={() =>
                handleCardClick(
                  "Led a platoon of 15 in executing various high-stakes missions, including the National Day Parade (NDP). Additionally, played a key role in managing the networking infrastructure, ensuring seamless connectivity between critical equipment, such as establishing and maintaining reliable connections between cameras and the server.",
                  "./army2.jpg"
                )
              }
            >
              <img
                src="./army.jpeg"
                style={{ ...styles.cardImg, minHeight: "400px" }}
              />
              <div className="layer"></div>
              <div className="info" style={{ color: "white" }}>
                <h3 className="heading">15C4I, SAF</h3>
                <h4 className="sub-head">Platoon Sergeant</h4>
                <h5 className="year">Oct 2021 - Nov 2022</h5>
                <p></p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        </div>
        
      </section>
      
      <section
        id="education"
        className="edu-section-container animated-background-star"
        style={{
          scrollMarginTop: "30px",
          position: "relative",
        }}
      >
        <div class="stars">
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star"></div>
        </div>
        <div
          style={{
            width: "100%",
            textAlign: "center",
            paddingBottom:"30px",
            
          }}
        >
          <h1 style={styles.specialText3}>Education</h1>
        </div>
        <div
          className="edu-container"
          style={{ minWidth: "400px", display: "flex", flexWrap:"wrap", padding:"5%", color:"white" }}
        >
          <div style={{width:"100%", height:"30%", display:"flex", alignItems:"center"}} onClick={() =>
                handleCardClick(
                  "Clubs and Societies: Member of EYE Investment and SMU Paw club. \n ",
                  "./scis1.JPG"
                )
              }>
            <div style={{width:"10%", minWidth:"100px"}}>
              <img src="./scis.png" style={{width:"100%", minWidth:"100px", borderRadius:"150px"}} />
            </div>
            <div style={{width:"90%", marginLeft:"5%"}}>
              <h3>Singapore Management University</h3>
              <h5>Computer Science (AI) </h5>
              <h6>Aug 2023 - Jun 2027</h6>
            </div>
          </div>
          <div style={{width:"100%", height:"30%", display:"flex", alignItems:"center", marginTop:"20px"}} onClick={() =>
                handleCardClick(
                  "Subject taken: H2 Chem, H2 Math, H2 Econs, H1 Hist\n Awards: Principal`s Honour for Promos and MYE",
                  "./cjc1.jpg"
                )
              }>
            <div style={{width:"10%", minWidth:"100px"}}>
              <img src="./CJC.png" style={{width:"100%", minWidth:"100px", borderRadius:"150px"}} />
            </div>
            <div style={{width:"90%", marginLeft:"5%"}}>
              <h3>Catholic Junior College</h3>
                <h5>Student</h5>
                <h6>Jan 2019 - Dec 2020</h6>
            </div>
          </div>
          <div style={{width:"100%", height:"30%", display:"flex", alignItems:"center", marginTop:"20px"}} onClick={() =>
                handleCardClick(
                  "Subject taken: H2 Chem, H2 Math, H2 Econs, H1 Hist\n Awards: Principal`s Honour for Promos and MYE",
                  "./cjc1.jpg"
                )
              }>
            <div style={{width:"10%", minWidth:"100px"}}>
              <img src="./manjuju.png" style={{width:"100%", minWidth:"100px", borderRadius:"150px"}} />
            </div>
            <div style={{width:"90%", marginLeft:"5%"}}>
                <h3>Manjusri Secondary School</h3>
                <h5>Student</h5>
                <h6>Jan 2015 - Nov 2018</h6>
            </div>
          </div>
        </div>
        
      </section>
      <section
        id="skills"
        className="skill-section-container"
        style={{
          scrollMarginTop: "30px",
          position: "relative",
        }}
      >
        <div class="snow" style={{backgroundColor: "rgba(0, 0, 0, 0.8)", zIndex:0}}></div>
        <div
          style={{
            width: "100%",
            textAlign: "center",
            paddingBottom:"30px",
            zIndex:1,
          }}
        >
          <h1 style={styles.specialText3}>Skills</h1>
        </div>
        <div
          className="edu-container"
          style={{width:"100%", minWidth: "400px", display: "flex", flexWrap:"wrap", padding:"5%", color:"white", justifyContent:"space-evenly", gap:"20px", zIndex:10, backgroundColor: "rgba(0, 0, 0, 0.4)" }}
        >
          <div style={{width:"40%",minWidth:"350px", height:"30%", display:"flex", alignItems:"center"}} >
            <div style={{width:"30%", minWidth:"100px"}}>
              <img src="./react.png" style={{width:"100%", minWidth:"100px", borderRadius:"50px"}} />
            </div>
            <div style={{width:"90%", marginLeft:"5%"}}>
              <h3>React</h3>
              <h5>Frontend Development with various frameworks (Vite, Next.js) </h5>
            </div>
          </div>

          <div style={{width:"40%",minWidth:"350px", height:"30%", display:"flex", alignItems:"center"}} >
            <div style={{width:"30%", minWidth:"100px"}}>
              <img src="./JavaScript-logo.png" style={{width:"100%", minWidth:"100px", borderRadius:"50px"}} />
            </div>
            <div style={{width:"90%", marginLeft:"5%"}}>
              <h3>JavaScript</h3>
              <h5>Self-taught Java script programming for web app developments and fullstack</h5>  
            </div>
          </div>

          <div style={{width:"40%",minWidth:"350px", height:"30%", display:"flex", alignItems:"center"}} >
            <div style={{width:"30%", minWidth:"100px"}}>
              <img src="./mysql.png" style={{width:"100%", minWidth:"100px", borderRadius:"50px"}} />
            </div>
            <div style={{width:"90%", marginLeft:"5%"}}>
              <h3>MySQL</h3>
              <h5>Experienced in managing databases and creating an efficient and secure database</h5>  
            </div>
          </div>

          <div style={{width:"40%",minWidth:"350px", height:"30%", display:"flex", alignItems:"center"}} >
            <div style={{width:"30%", minWidth:"100px"}}>
              <img src="./spring.webp" style={{width:"100%", minWidth:"100px", borderRadius:"50px"}} />
            </div>
            <div style={{width:"90%", marginLeft:"5%"}}>
              <h3>SpringBoot</h3>
              <h5>Experienced in backend programming with SpringBoot and RESTful apis</h5>  
            </div>
          </div>

          <div style={{width:"40%",minWidth:"350px", height:"30%", display:"flex", alignItems:"center"}} >
            <div style={{width:"30%", minWidth:"100px"}}>
              <img src="./java2.png" style={{width:"100%", minWidth:"100px", borderRadius:"30px"}} />
            </div>
            <div style={{width:"90%", marginLeft:"5%"}}>
              <h3>Java</h3>
              <h5>Advanced Java knowledge in terms of OOP and backend development</h5>  
            </div>
          </div>

          <div style={{width:"40%",minWidth:"350px", height:"30%", display:"flex", alignItems:"center"}} >
            <div style={{width:"30%", minWidth:"100px"}}>
              <img src="./htmlcss.png" style={{width:"100%", minWidth:"100px", borderRadius:"50px"}} />
            </div>
            <div style={{width:"90%", marginLeft:"5%"}}>
              <h3>HTML n CSS</h3>
              <h5>Experience in Web developement with HTML and CSS and different libraries</h5>  
            </div>
          </div>

          <div style={{width:"40%",minWidth:"350px", height:"30%", display:"flex", alignItems:"center"}} >
            <div style={{width:"30%", minWidth:"100px"}}>
              <img src="./c.png" style={{width:"100%", minWidth:"100px", borderRadius:"50px"}} />
            </div>
            <div style={{width:"90%", marginLeft:"5%"}}>
              <h3>C</h3>
              <h5>Basic C knowledge for OS programming</h5>  
            </div>
          </div>
          <div style={{width:"40%",minWidth:"350px", height:"30%", display:"flex", alignItems:"center"}} >
            <div style={{width:"30%", minWidth:"100px"}}>
              <img src="./python.jpeg" style={{width:"100%", minWidth:"100px", borderRadius:"50px"}} />
            </div>
            <div style={{width:"90%", marginLeft:"5%"}}>
              <h3>Python</h3>
              <h5>Experienced using python for simple data analysis and training basic models</h5>  
            </div>
          </div>
        </div>
        
      </section>

      <section
        id="contact"
        className="contact-section-container animated-black-background"
        ref={aboutRef}
      >

        <div
          style={{
            width: "100%",
            textAlign: "center",
            paddingTop: "5%",
            marginBottom:"50px"
          }}
        >
          <h1 style={styles.specialText4}> Contact</h1>
        </div>
        <div style={{display:"flex", flexWrap:"wrap", width:"100%", minWidth:"400px"}}>
          <div style={{ width:"50%", minWidth:"380px", display: "flex", alignItems: "center", }}>
        
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2 }}
            
              >
                <h4 style={{ fontSize: "2rem", color: "white" }}>
                  Want to know more about me?
                </h4>
                <h1 style={styles.specialText3}>
                  Get in touch with me via these platforms!
                </h1>
                <div style={{ marginTop: "80px" }}>
                  <a
                    href="https://www.instagram.com/cledwyn__"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagram style={{ color: "white" }} size={80} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/cledwyn-chan/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ marginLeft: "5%" }}
                  >
                    <FaLinkedin style={{ color: "white" }} size={80} />
                  </a>
                  <a
                    href="mailto:cledwynchan@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ marginLeft: "5%" }}
                  >
                    <MdEmail style={{ color: "white" }} size={80} />
                  </a>
                </div>
            </motion.div>
          </div>
          <div
       style={{ width:"50%", minWidth: "380px", display: "flex", alignItems: "center",justifyContent:"center" }}
     >
       <motion.video
           ref={videoRef}
           muted={isMuted}
           src={video3}
           style={{
             objectFit: "cover",
             height: "500px",
             width: "400px",
             marginTop: "20px",
             borderRadius: "30px",
           }}
           autoPlay
           loop
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ duration: 2 }}
           onClick={toggleMute}
         ></motion.video>
        

     </div>
        </div>
        
        
      </section>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        content={modalContent}
      />
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    flexWrap: "wrap",
    marginTop: "2%",
    height: "110vh",
    scrollMarginTop: "20px",
  },
  containerCard: {
    display: "flex",
    justifyContent: "space-evenly",
    flexWrap: "wrap",
    marginTop: "6%",
    height: "100vh",
    minHeight: "500px",
    maxHeight: "600px",
    marginBottom: "5%",
  },

  containerCard1: {
    display: "flex",
    justifyContent: "space-evenly",
    flexWrap: "wrap",
  },

  specialText: {
    fontSize: "4rem",
    backgroundImage: "url('./bg8.jpeg')",
    backgroundPosition: "center",
    backgroundClip: "text",
    color: "transparent",
  },

  specialText2: {
    fontSize: "4rem",
    backgroundImage: "url('./bg10.jpeg')",
    backgroundPosition: "top",
    backgroundClip: "text",
    color: "transparent",
  },

  specialText3: {
    fontSize: "4rem",
    backgroundImage: "url('./bg5.jpeg')",
    backgroundPosition: "top",
    backgroundClip: "text",
    color: "transparent",
  },

  specialText4: {
    fontSize: "4rem",
    backgroundImage: "url('./bg5.jpeg')",
    backgroundPosition: "left",
    backgroundClip: "text",
    color: "transparent",
  },

  card: {
    width: "30%",
    minWidth: "350px",
    marginBottom: "2%",
    borderRadius: "30px",
    textAlign: "center",
    height: "auto",
    marginTop: "5%",
    color: "white",
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    fontfamily: "sans-serif",
  },

  display: {
    display: "flex",
    justifyContent: "space-evenly",
    gap: "5%",
    overscrollBehaviorX: "contain",
    scrollSnapType: "x mandatory",
    scrollBarWidth: "none",
    width: "100%",
    height: "100%",

  },

  cardContainer: {
    width: "40%",
    height: "100%",
    minWidth: "300px",

    minHeight: "300px",
   
    borderRadius: " 35px",
    overflow: "hidden",
    position: "relative",
    transition: "0.5s",
  },

  cardImg: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transition: "0.5s",
  },

  cardSkillContainer: {
    width: "200px",
    height: "200px",
    minWidth: "200px",
    maxWidth: "200px",
    minHeight: "200px",
    maxheight: "200px",
    borderRadius: " 35px",
    overflow: "hidden",
    position: "relative",
    transition: "0.5s",
  },
};
