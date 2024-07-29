import React, { useState, useEffect, useRef } from "react";
import Button from "./Button";
import axios from "axios";
import { Highlight, themes } from "prism-react-renderer";
import { contactData, toastMessages } from "../assets/lib/data.tsx";
import { useSectionInView } from "../assets/lib/hooks";
import { useLanguage } from "../context/language-context";
import { ToastContainer, toast } from "react-toastify";
import { useTheme } from "../context/theme-context";
import { motion, useScroll, useTransform } from "framer-motion";
import "react-toastify/dist/ReactToastify.css";
// import linkedinicon from "../../assets/icons/linkedinicon.svg";

const Contact: React.FC = () => {

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [cursor, setCursor] = useState<string>("");
  const [lastUpdatedField, setLastUpdatedField] = useState<string | null>(null);
  const { ref } = useSectionInView("Contact");
  const { language } = useLanguage();
  const { theme } = useTheme();
  const [error, setError] = useState<string | any>(null);

  const animationReference = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: animationReference,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  const notifySentForm: React.FormEventHandler<HTMLFormElement> = async (e) => {
    setError(null);
    console.log(error);

    e.preventDefault();
    let data = {
      user_email: email, user_name: name, user_subject: subject, user_message: message
    }
    

    try {

      console.log(JSON.stringify(data));
      // const response = await axios.post("https://imaigen-websitee-backend.onrender.com/send-email", data);
      const response = await axios.post("https://imaigen-website-backend-fgce.vercel.app/send-email", data);
      // const response = await axios.post("http://localhost:5000/send-email", data);
      console.log(response);
      if (language === "DE") {
        toast.success(toastMessages.successEmailSent.de);
      } else {
        toast.success(toastMessages.successEmailSent.en);
      }
      setEmail('');
      setName('');
      setSubject('');
      setMessage('');

    } catch (error) {
      console.log(error);
      if (language === "DE") {
        toast.error(toastMessages.failedEmailSent.de);
      } else {
        toast.error(toastMessages.failedEmailSent.en);
      }
      setError("An Error occured, try again later");
    }
  };

  const handleInputFocus = (fieldName: string) => {
    setCursor(`${fieldName}${cursor}`);
  };

  

  const handleInputChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    if (name === "name") {
      setName(value);
    } else if (name === "email") {
      setEmail(value);
    } else if (name === "subject") {
      setSubject(value);
    } else if (name === "message") {
      setMessage(value);
    }
    setLastUpdatedField(name);
  };

  const [cursorBlink, setCursorBlink] = useState<boolean>(true);

  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setCursorBlink((prev) => !prev);
    }, 400);

    return () => {
      clearInterval(blinkInterval);
    };
  }, []);

  const codeSnippet = `
import "IMAIGEN";

// 🌈 Spreading Our Technologies: 
// Crafting Cosmic Email 🌌

Name : ${name}${lastUpdatedField === "Name" ? (cursorBlink ? "|" : " ") : ""
    }💭\n
Email : ${email}${lastUpdatedField === "Email" ? (cursorBlink ? "|" : " ") : ""
    }📧;

 "AI ignites endless possibilities"
  "AI fuels boundless innovation"

Wishing you from IMAIGEN,
${name}${lastUpdatedField === "name" ? (cursorBlink ? "|" : " ") : ""};
`;
  //   const codeSnippet2 = `
  // // 🚀 Initiating Quantum Email Transmission 🪐
  // const launchEmail = async () => {
  //   try {
  //     const response = await fetch('https://alpaycelik.dev/send',{
  //     method: 'POST',
  //     headers: {'Content-Type': 'application/json'},
  //     body: JSON.stringify({
  //      sender,
  //      recipient,
  //      subject,
  //      message
  //     })
  //    });

  //    if (response.ok) {
  //    console.log('🌌 Transmission successful!');
  //    } else {
  //    console.error('🌠 Cosmic glitch encountered...');
  //    }
  //   } catch (error) {
  //   console.error('🌪 Quantum disturbance detected:', error);
  //   }
  // };
  // // 🚀 Ready for Liftoff? 🛸
  // launchEmail();`;

  return (
    <React.Fragment>
      <section
        className="contact-container w-full min-[1921px]:px-[55rem] pt-36 pb-28"
        id="contact"
      >
        <div
          className="title-container flex flex-col gap-6 justify-center items-center py-16 max-lg:p-16 w-full"
          ref={ref}
        >
          <motion.div
            ref={animationReference}
            style={{
              scale: scaleProgess,
              opacity: opacityProgess,
              textAlign: "center",
            }}
          >
            <div className="rainbow " style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "20px 10px", width: "330px" }}>            <p className="text-[--black] mb-6">
              <div className="waviy">
                <span className="waviy-span" style={{ color: "orange" }}>C</span>
                <span className="waviy-span" style={{ color: "orange" }}>o</span>
                <span className="waviy-span" style={{ color: "orange" }}>n</span>
                <span className="waviy-span" style={{ color: "orange" }}>t</span>
                <span className="waviy-span" style={{ color: "orange" }}>a</span>
                <span className="waviy-span" style={{ color: "orange" }}>c</span>
                <span className="waviy-span" style={{ color: "orange" }}>t</span>

              </div>
            </p>
            </div>
            <br/>
            <center>
              <div style={{ width: "95%" }}>
                <h2 className="text-[--black] text-center">
                  {language === "DE"
                    ? contactData.description.de
                    : contactData.description.en}
                </h2>
              </div>
            </center>
          </motion.div>
        </div>

        <div className="flex flex-row justify-center items-start px-32 pt-32 mb-32 max-lg:flex-col max-lg:p-10">
          <div className="w-1/2  bg-[--darkblue] text-[--white] flex flex-col justify-center items-start gap-24 rounded-2xl p-20 border-solid border-[0.4rem] border-[--lightblue] hover:border-orange duration-500 transition-all  quote-outer-container text-left max-lg:hidden cursor-progress">
            <div style={{ overflowWrap: 'break-word', wordWrap: 'break-word', wordBreak: 'break-all', whiteSpace: 'pre-wrap', maxWidth: '100%', maxHeight: '500px', }}>
              <Highlight
                code={codeSnippet}
                language="tsx"
                theme={themes.nightOwl}
              >
                {({ className, style, tokens, getLineProps, getTokenProps }) => (
                  <pre className={`${className} text-4xl `} style={{ ...style, maxWidth: '100%', maxHeight: '500px', overflowX: 'auto' }}>
                    {tokens.map((line, i) => (
                      <div {...getLineProps({ line, key: i })}>
                        {line.map((token, key) => (
                          <span {...getTokenProps({ token, key })} />
                        ))}
                      </div>
                    ))}
                  </pre>
                )}
              </Highlight>
            </div>

          </div>
          <form
            className="flex flex-col gap-6 justify-center items-center  px-32 w-1/2 max-lg:w-full max-lg:p-10"
            onSubmit={notifySentForm}
            autoComplete="off"
          >
            {contactData.inputfields.map((input, index) => (
              <input
                key={index}
                id={input.id}
                type={input.type}
                placeholder={
                  language === "DE"
                    ? `${input.placeholder.de}`
                    : `${input.placeholder.en}`
                }
                name={input.name}
                value={
                  input.name === "name"
                    ? name
                    : input.name === "email"
                      ? email
                      : input.name === "subject"
                        ? subject
                        : message
                }
                required
                onFocus={() => {
                  handleInputFocus(input.name);
                  setLastUpdatedField(input.name);
                }}
                onMouseEnter={() => {
                  handleInputFocus(input.name);
                  setLastUpdatedField(input.name);
                }}
                onChange={handleInputChange}
                className={`${theme === "dark"
                  ? "bg-[--blackblue] dark-mode-shadow "
                  : "bg-[--icewhite] dark-shadow "
                  }`}
              />
            ))}
            <textarea
              rows={contactData.textarea.rows}
              id="user_message"
              placeholder={
                language === "DE"
                  ? `${contactData.textarea.placeholder.de}`
                  : `${contactData.textarea.placeholder.en}`
              }
              name={contactData.textarea.name}
              onFocus={() => {
                handleInputFocus(contactData.textarea.name);
                setLastUpdatedField(contactData.textarea.name);
              }}
              onMouseEnter={() => {
                handleInputFocus(contactData.textarea.name);
                setLastUpdatedField(contactData.textarea.name);
              }}
              onChange={handleInputChange}
              value={message}
              className={`${theme === "dark"
                ? "bg-[--blackblue] dark-mode-shadow"
                : "bg-[--icewhite] dark-shadow"
                }`}
            />
            <div className="privacy-checkbox flex gap-16">
              <label
                className="block w-2 h-2 cursor-pointer"
                htmlFor="checkbox-label"
              >
                <input
                  type="checkbox"
                  required
                  name="checkbox-label"
                  id="checkbox-label"
                />
                <span className="checkbox"></span>
              </label>
              <p>
                {language === "DE"
                  ? `${contactData.privacyOptIn.checkbox.de}`
                  : `${contactData.privacyOptIn.checkbox.en}`}
              </p>
            </div>
            <p>
              {language === "DE"
                ? `${contactData.privacyOptIn.description.de}`
                : `${contactData.privacyOptIn.description.en}`}
            </p>
            <Button
              value={
                language === "DE"
                  ? `${contactData.button.value.de}`
                  : `${contactData.button.value.en}`
              }
              iconSVG={contactData.icon}
              buttoncolor={contactData.colors.main}
              iconcolor={contactData.colors.icon}
              type="submit"
              elementType="input"
            />
            <ToastContainer
              className="w-max text-3xl block p-3 max-lg:w-full "
              position="bottom-center"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme={theme}
            />
          </form>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Contact;
