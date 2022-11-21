import { data } from "../../data";
import Collapse from "@kunukn/react-collapse";
import { useState } from "react";

const Education: React.FC = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);
  const onInit = () => {
    setIsOpen(false);
  };
  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch(data.cv).then(response => {
        response.blob().then(blob => {
            // Creating new object of PDF file
            const fileURL = window.URL.createObjectURL(blob);
            // Setting various property values
            let alink = document.createElement('a');
            alink.href = fileURL;
            alink.download = 'Omar_Ibrahim_CV.pdf';
            alink.click();
        })
    })
}
  return (
    <article className="Education">
      <section className="blog__wrapper">
        <div className="container">
          <div className="right">
            <h2>University</h2>
            <h3>Pharos University - Alexandria, Egypt </h3>
            <h4>
              Bachelor of Computer Engineering
              <span>September 2015 - July 2020</span>
            </h4>
            <h5>
              GPA 3,058/4.0 <span>Very Good</span>
            </h5>
            <button onClick={() => setIsOpen((state) => !state)}>
              Graduation Project
            </button>
            <Collapse onInit={onInit} isOpen={isOpen}>
              <p>
                <span>Graduation Project:</span> Brain Controlled Smart
                Wheelchair Based on Mental Task Classification TWO integrative
                modules, BCI Wheelchair and E-Health tracking system module.
                Accordingly, in a team of five members, we have succeeded in the
                development of a smart wheelchair that can be moved using brain
                activity signals, Electroencephalography signals, using machine
                learning algorithms for classification, and blink detection
                using camera for safety measures and other controls. An android
                mobile application was developed for monitoring the patients and
                keeping track of their safety and location in real-time. <br />
                <span>Technologies used:</span> Python Multithreading,
                scikit-learn, OpenCV, Dlib, Firebase Authentication, Firebase
                real-time Database, and Google Maps API· <br />
                <span>Dental Clinic Management System:</span> Designed and
                developed full dental management web application by using:
                CodeIgniter Framework, PHP, JavaScript, Ajax, and Bootstrap.
              </p>
            </Collapse>
          </div>
          <div className="left">
            <h2>Internship</h2>
            <h3>Egypt Experts for Software: ERP software development</h3>
            <h4>
              <span>September 2018</span>
            </h4>
            <h3>EPROM PHP web application development</h3>
            <h4>
              <span>July 2018</span>
            </h4>
          </div>
        </div>
      </section>
    <button className="blog__cta"  onClick={onButtonClick}>
    Download My Resume
    </button>
    </article>

  );
};

export { Education };
