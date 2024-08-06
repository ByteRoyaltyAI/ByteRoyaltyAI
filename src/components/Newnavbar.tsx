import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/img/Brain_Circuit_Final.png";

const Newnavbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeButton, setActiveButton] = useState("home");
    const [isHovering, setIsHovering] = useState(false);

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
        setActiveButton(val); // Set active button on click

    }

    return (
        <nav
            className={"fixed top-0 left-0 right-0 z-50 bg-gray-800 transition-all"}
            style={{ padding: "19px 0" }}
        >
            <div className=" mx-auto px-4 sm:px-6 lg:px-8 w-full" >
                <div className="flex items-center justify-around h-16 w-full" >
                    <div className="flex items-center">
                        <img
                            src={Logo}
                            alt="Logo"
                            style={{ width: "50px", height: "50px", borderRadius: "50%" }}
                        />
                        {/* <h3 className="ml-2 text-white text-lg " style={{ fontSize: "20px"}}>FUTURE IS AI</h3> */}
                        <h3 className="ml-2 btn-shine " >IMAIGEN</h3>
                    </div>
                    <div className="hidden  lg:flex items-center space-x-4">
                        <NavLink to="/" active={activeButton === "home"} onClick={() => scroll("home")}>
                            <div style={{ padding: "8px 10px" }}>
                                <button>Home</button>
                            </div>
                        </NavLink>
                        <NavLink to="/" active={activeButton === "services"} onClick={() => scroll("services")}>
                            <div style={{ padding: "8px 10px" }}>
                                <button> Services</button>
                            </div></NavLink>

                            <div style={{ padding: "8px 10px" }} onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>
                        <NavLink to="/" active={activeButton === "projects"} onClick={() => scroll("projects")} >
                                <button className="hover:text-gray-300" >
                                    Projects
                                </button>
                                </NavLink>
                                <div onClick={() => scroll("services")} onMouseLeave={() => setIsHovering(false)} onMouseEnter={() => setIsHovering(true)} className={`${isHovering ? 'block' : 'hidden'} absolute bg-gray-700 text-white py-2 px-4 mt-2 rounded-md shadow-lg z-999999999999`}>
                                    <a href="https://fe-finance.de/" className="block mt-4 px-[8px] py-[10px] hover:bg-gray-800 " >Finance</a>
                                    <a href="https://assignmentgpt.ai/" className="block mt-4 px-[8px] py-[10px] hover:bg-gray-800 ">Edu Tech</a>
                                    <a href="https://bluejestic.com/" className="block mt-4 px-[8px] py-[10px] hover:bg-gray-800 ">E-commerce</a>
                                    <a href="https://healthiq.plus/" className="block mt-4 px-[8px] py-[10px] hover:bg-gray-800 ">Health Care</a>
                                    <a href="https://tweetfox.io/" className="block mt-4 px-[8px] py-[10px] hover:bg-gray-800 ">Social Media</a>
                                    <a href="https://ourleisurehome.com/" className="block mt-4 px-[8px] py-[10px] hover:bg-gray-800 ">Real Estate</a>
                                </div></div>

                        <NavLink to="/" active={activeButton === "testimonials"} onClick={() => scroll("testimonials")}>
                            <div style={{ padding: "8px 10px" }}>
                                <button> Testimonials</button>
                            </div></NavLink>
                        {/* <NavLink to="/" active={activeButton === "aboutus"} onClick={() => scroll("aboutus")}><div style={{ padding: "8px 10px" }}>
                            <button> About Us</button>
                        </div></NavLink> */}

                        <NavLink to="/" active={activeButton === "contact"} onClick={() => scroll("contact")}><div style={{ padding: "8px 10px" }}>
                            <button> Contact</button>
                        </div></NavLink>
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
                        <NavLink to="/" active={activeButton === "home"} onClick={() => scroll("home")}><div style={{ width: "200px", padding: "8x", textAlign: "center" }} ><button>Home</button></div></NavLink>
                        <NavLink to="/" active={activeButton === "services"} onClick={() => scroll("services")}><div style={{ width: "200px", padding: "8x", textAlign: "center" }} ><button>Services</button></div></NavLink>
                        <NavLink to="/" active={activeButton === "projects"} onClick={() => scroll("projects")}><div style={{ width: "200px", padding: "8x", textAlign: "center" }} >
                            <button className="hover:text-gray-300" onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>
                                Projects
                            </button>
                            <div onClick={() => scroll("services")} onMouseLeave={() => setIsHovering(false)} onMouseEnter={() => setIsHovering(true)} className={`${isHovering ? 'block' : 'hidden'} absolute bg-gray-700 text-white py-2 px-4 mt-2 rounded-md shadow-lg`}>
                                <a href="/" style={{ width: "200px", padding: "8x", textAlign: "center" }} className="block mt-4" >Health Care</a>
                                <a href="/" style={{ width: "200px", padding: "8x", textAlign: "center" }} className="block mt-4">Machine Learning</a>
                                <a href="/" style={{ width: "200px", padding: "8x", textAlign: "center" }} className="block mt-4">Cloud Computing</a>
                            </div></div></NavLink>
                        <NavLink to="/" active={activeButton === "aboutus"} onClick={() => scroll("aboutus")}><div style={{ width: "200px", padding: "8x", textAlign: "center" }} ><button>About</button></div></NavLink>
                        <NavLink to="/" active={activeButton === "testimonials"} onClick={() => scroll("testimonials")}><div style={{ width: "200px", padding: "8x", textAlign: "center" }} ><button>Testimonials</button></div></NavLink>
                        <NavLink to="/" active={activeButton === "contact"} onClick={() => scroll("contact")}><div style={{ width: "200px", padding: "8x", textAlign: "center" }} ><button>Contact</button></div></NavLink>
                    </div>
                </div>
            )}
        </nav>
    );
};

const NavLink = ({ to, children, active, onClick }: { to: string; children: React.ReactNode; active: boolean; onClick: () => void; }) => {
    return (
        <Link
            to={to}
            onClick={onClick}
            className={`text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-lg font-medium ${active ? 'bg-gray-700' : ''}`}
        >
            {children}
        </Link>
    );
};

export default Newnavbar;
