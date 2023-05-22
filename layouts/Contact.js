import config from "@config/config.json";
import {useState} from "react";
import { markdownify } from "@lib/utils/textConverter";

const Contact = ({ data }) => {
  const { frontmatter } = data;
  const { title, info } = frontmatter;
  const { contact_form_action } = config.params;
 // States for contact form fields
 const [fullname, setFullname] = useState("");
 const [email, setEmail] = useState("");
 const [subject, setSubject] = useState("");
 const [message, setMessage] = useState("");

 //   Form validation state
 const [errors, setErrors] = useState({});

 //   Setting button text on form submission
 const [buttonText, setButtonText] = useState("Send");

 // Setting success or failure messages states
 const [showSuccessMessage, setShowSuccessMessage] = useState(false);
 const [showFailureMessage, setShowFailureMessage] = useState(false);

 // Validation check methods
 const handleValidation = () => {

   let tempErrors = {};
   let isValid = true;

   if (fullname.length <= 0) {
     tempErrors["fullname"] = true;
     isValid = false;
   }
   if (email.length <= 0) {
     tempErrors["email"] = true;
     isValid = false;
   }
   if (subject.length <= 0) {
     tempErrors["subject"] = true;
     isValid = false;
   }
   if (message.length <= 0) {
     tempErrors["message"] = true;
     isValid = false;
   }

   setErrors({ ...tempErrors });
   console.log("errors", errors);
   return isValid;
 };

  const handleSubmit = async (e) => {
    e.preventDefault();
 
    let isValidForm = handleValidation();
    console.log("isValidForm",isValidForm);
    if (isValidForm) {
      setButtonText("Sending");
      console.log(email, fullname, subject, message);
      const res = await fetch("/api/sendgrid", {
        body: JSON.stringify({
          email: email,
          fullname: fullname,
          subject: subject,
          message: message,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });
 
      const { error } = await res.json();
      if (error) {
        console.log(error);
        setShowSuccessMessage(false);
        setShowFailureMessage(true);
        setButtonText("Send");
        return;
      }
      setShowSuccessMessage(true);
      setShowFailureMessage(false);
      setButtonText("Send");
    }
 
  };


  return (
    <section className="section">
      <div className="container">
        {markdownify(title, "h1", "text-center font-normal")}
        <div className="section row pb-0">
          <div className="col-12 md:col-6 lg:col-7">
            <form
              className="contact-form"
              method="POST"
              onSubmit={handleSubmit}
            >
              <div className="mb-3">
                <input
                  className="form-input w-full rounded"
                  name="fullname"
                  placeholder="Name"
                  type="text"
                  value={fullname}
                  onChange={(e) => {
                    setFullname(e.target.value);
                  }}
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  className="form-input w-full rounded"
                  name="email"
                  type="email"
                  placeholder="Your email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  className="form-input w-full rounded"
                  name="subject"
                  type="text"
                  placeholder="Subject"
                  value={subject}
                  onChange={(e) => {
                    setSubject(e.target.value);
                  }}
                  required
                />
              </div>
              <div className="mb-3">
                <textarea
                  className="form-textarea w-full rounded-md"
                  rows="7"
                  placeholder="Your message"
                  value={message}
                  onChange={(e) => {
                    setMessage(e.target.value);
                  }}
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Send Now
              </button>
            </form>
          </div>
          <div className="content col-12 md:col-6 lg:col-5">
            {markdownify(info.title, "h4")}
            {markdownify(info.description, "p", "mt-4")}
            <ul className="contact-list mt-5">
              {info.contacts.map((contact, index) => (
                <li key={index}>
                  {markdownify(contact, "strong", "text-dark")}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
