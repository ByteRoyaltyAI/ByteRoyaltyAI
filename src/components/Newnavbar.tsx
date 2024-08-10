import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/img/Brain_Circuit_Final.png";
import { ScrollProgress } from "../components/ScrollProgress";
import { useLocation } from 'react-router-dom';



const Newnavbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeButton, setActiveButton] = useState("home");
    const [projectsHovering, setProjectsHovering] = useState(false);
    const [productsHovering, setProductsHovering] = useState(false);
    const [showProducts,setShowProducts]=useState(false)
    const location =useLocation()
    const isNotHomePath = location.pathname.includes('/product');

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    function scroll(val: string) {
        let element = document.getElementById(`${val}`);

        if (element) {
            const offset = -70; // Adjust 50 according to our need

            // Get the element's top position relative to the viewport
            const elementTop = element.getBoundingClientRect().top;

            // Scroll to the element's position with an offset
            window.scrollBy({
                top: elementTop + offset,
                behavior: 'smooth'
            });
        }
        setActiveButton(val); 

    }

    return (
         <>
        
        <nav
            className={"fixed top-0 left-0 right-0 z-50 bg-gray-800 transition-all"}
            style={{ padding: "19px 0" }}
        >
            <div className=" mx-auto px-4 sm:px-6 lg:px-8 w-full" >
                <div className={"flex items-center  h-16 w-full "+(isNotHomePath?" justify-between px-[3%] sm:px-[10%] :":"justify-around")} >
                    <div className="flex items-center">
                        <img
                            src={Logo}
                            alt="Logo"
                            style={{ width: "50px", height: "50px", borderRadius: "50%" }}
                        />
                        {/* <h3 className="ml-2 text-white text-lg " style={{ fontSize: "20px"}}>FUTURE IS AI</h3> */}
                        <h3 className="ml-2 btn-shine " >IMAIGEN</h3>
                    </div>
                    {/* Nav Buttons Here Large screens */}
                    <div className="hidden  lg:flex items-center space-x-4">
                        <Link to="/">
                        <ScrollLink active={activeButton === "home"} onClick={() => scroll("home")}>
                            <div style={{ padding: "8px 10px" }}>
                                <button>Home</button>
                            </div>
                        </ScrollLink>
                        </Link>

                        {!isNotHomePath &&<>
                        <ScrollLink active={activeButton === "services"} onClick={() => scroll("services")}>
                            <div style={{ padding: "8px 10px" }}>
                                <button> Services</button>
                            </div></ScrollLink>
                        <ScrollLink active={activeButton === "projects"} onClick={() => scroll("projects")} >
                            <div style={{ padding: "8px 10px" }} className="px-8 py10" onMouseEnter={() => setProjectsHovering(true)} onMouseLeave={() => setProjectsHovering(false)}>
                                <button className=" " >
                                    Projects
                                </button>
                                <div onClick={() => scroll("services")} onMouseLeave={() => setProjectsHovering(false)} onMouseEnter={() => setProjectsHovering(true)} className={`${projectsHovering ? 'block' : 'hidden'} absolute mt-7 bg-gray-700 text-white py-2 px-4  rounded-md shadow-lg z-999999999999`}>
                                    <a href="https://fe-finance.de/" className="block mt-4 px-[8px] py-[10px] hover:bg-gray-800 " >Finance</a>
                                    <a href="https://assignmentgpt.ai/" className="block mt-4 px-[8px] py-[10px] hover:bg-gray-800 ">Edu Tech</a>
                                    <a href="https://bluejestic.com/" className="block mt-4 px-[8px] py-[10px] hover:bg-gray-800 ">E-commerce</a>
                                    <a href="https://healthiq.plus/" className="block mt-4 px-[8px] py-[10px] hover:bg-gray-800 ">Health Care</a>
                                    <a href="https://tweetfox.io/" className="block mt-4 px-[8px] py-[10px] hover:bg-gray-800 ">Social Media</a>
                                    <a href="https://ourleisurehome.com/" className="block mt-4 px-[8px] py-[10px] hover:bg-gray-800 ">Real Estate</a>
                                </div></div>
                                </ScrollLink>

                        {/* <ScrollLink active={activeButton === "testimonials"} onClick={() => scroll("testimonials")}>
                            <div style={{ padding: "8px 10px" }}>
                                <button> Testimonials</button>
                            </div></ScrollLink> */}

                        <ScrollLink active={activeButton === "contact"} onClick={() => scroll("contact")}><div style={{ padding: "8px 10px" }}>
                            <button> Contact</button>
                        </div></ScrollLink>
                        </>}
                        
                        <div 
                        className={`text-gray-300 hover:bg-gray-700  px-8 py-6  rounded-md text-lg font-medium ${activeButton === "products" && 'bg-gray-700' }`}
                         onClick={() => setActiveButton("products")}
                         onMouseEnter={() => setProductsHovering(true)} onMouseLeave={() => setProductsHovering(false)}
                         >
                            <div  onMouseLeave={() => setProductsHovering(false)} onMouseEnter={() => setProductsHovering(true)} className={`${productsHovering ? 'block' : 'hidden'} absolute  bg-gray-700 text-white py-2 px-3.5  mt-[4.6rem] rounded-md shadow-lg z-999999999999`}>
                                    <Link to="/product/hr-services" className="block mt-4 mx-[4px] px-4 py-[10px] hover:bg-gray-800 text-[16px]" >Hr Services</Link>
                                    <Link to="" className="block mt-4 mx-[4px] px-4 py-[10px] hover:bg-gray-800 text-[16px]" >Resume Matcher</Link>
                                    <Link to="" className="block mt-4 mx-[4px] px-4 py-[10px] hover:bg-gray-800 text-[16px]" >Loan Validator</Link>
                                </div>
                            <button>Products</button>
                            </div>
                    </div>

                    <div className="-mr-2 flex lg:hidden" style={{ transition: "1s" }}>
                        <button
                            onClick={toggleNavbar}
                            type="button"
                            className="inline-flex items-center justify-center p-4 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white"
                            aria-controls="mobile-menu"
                            aria-expanded={isOpen ? "true" : "false"}
                            style={{ transition: "1s" }}
                        >
                            <span className="sr-only">Open main menu</span>
                            {!isOpen ? (
                                <svg
                                    className="block h-10 w-15"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16m-7 6h7"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    className="block h-10 w-15"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>
            {isOpen && (
                <div className="lg:hidden w-full" id="mobile-menu" style={{ transition: "1s" }}>
                    <div className="flex w-full flex-col items-center mt-4" style={{ transition: "1s" }}>
                        <Link to="/">
                        <ScrollLink active={activeButton === "home"} onClick={() => scroll("home")}><div style={{ width: "200px", padding: "8x", textAlign: "center" }} ><button>Home</button></div></ScrollLink>
                        </Link>
                        {!isNotHomePath &&<>
                        <ScrollLink active={activeButton === "services"} onClick={() => scroll("services")}><div style={{ width: "200px", padding: "8x", textAlign: "center" }} ><button>Services</button></div></ScrollLink>
                        <ScrollLink active={activeButton === "projects"} onClick={() => scroll("projects")}><div style={{ width: "200px", padding: "8x", textAlign: "center" }} >
                            <button >
                                Projects
                            </button>
                            </div></ScrollLink>
                            
                        {/* <ScrollLink active={activeButton === "testimonials"} onClick={() => scroll("testimonials")}><div style={{ width: "200px", padding: "8x", textAlign: "center" }} ><button>Testimonials</button></div></ScrollLink> */}
                        <ScrollLink active={activeButton === "contact"} onClick={() => scroll("contact")}><div style={{ width: "200px", padding: "8x", textAlign: "center" }} ><button>Contact</button></div></ScrollLink>
                        </>}
                        {isNotHomePath && 
                        <Link to="/product/book-a-demo">
                        <ScrollLink active={activeButton === "bookDemo"} onClick={() => setActiveButton("bookDemo")}><div style={{ width: "200px", padding: "8x", textAlign: "center" }} ><button>Book a Demo</button></div>
                        </ScrollLink>
                        </Link>}
                        {/* add sub butons here */}
                        <ScrollLink
                            active={activeButton === "products"}
                            onClick={() => {
                                setActiveButton("products");
                                setShowProducts(prevShowProducts => !prevShowProducts);
                            }}
                            >
                            <div style={{ width: "200px", padding: "8x", textAlign: "center" }} >
                                <button >Products</button></div>
                                </ScrollLink>
                                {
                             <div  className={`${showProducts ? 'block' : 'hidden'} absolute right-5 bg-gray-700 text-white py-2 px-3.5  mt-[4.2rem] rounded-md shadow-lg z-999999999999`}>
                             <Link to="/product/hr-servcies/hrChatbot" className="block mt-4 mx-[4px] px-4 py-[10px] hover:bg-gray-800 text-[16px]" >Hr ChatBot</Link>
                             <Link to="/product/hr-servcies/interviewGeneration" className="block mt-4 mx-[4px] px-4 py-[10px] hover:bg-gray-800 text-[16px]" >Resume Job Matching</Link>
                             <Link to="/product/hr-servcies/resumeMatching" className="block mt-4 mx-[4px] px-4 py-[10px] hover:bg-gray-800 text-[16px]" >AI Interview</Link>
                         </div>
                            }
                    </div>
                </div>
            )}
        </nav>

        <ScrollProgress
          position={"left"}
          color={"orange"}
          height={7}
          smoothness={true}
        />
        
      </> 
    );
};

const ScrollLink = ({  children, active, onClick }: {  children: React.ReactNode; active: boolean; onClick: () => void; }) => {
    return (
        <div
            onClick={onClick}
            className={`text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-lg font-medium ${active ? 'bg-gray-700' : ''}`}
        >
            {children}
        </div>
    );
};

export default Newnavbar;
