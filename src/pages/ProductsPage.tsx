import React from 'react';
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { motion } from 'framer-motion';
import { productCardsData } from "../assets/lib/ProductsData";
import { useParams,useNavigate } from 'react-router-dom';
import { useEffect } from 'react';


const ProductsPage: React.FC = () => {
  const params=useParams<{ productName: string }>()
  const navigate=useNavigate()

  const cardsData= productCardsData[params.productName as string] ;

  if(cardsData===undefined){
    useEffect(()=>{
      navigate("/")
    },[])
    return null
  }

  return (
    <div className='flex flex-col gap-60 min-h-screen mt-[20rem] '>
      <div className='flex justify-center'>
        <div className='flex flex-col items-center w-[90%] sm:w-[70%] gap-16'>
          <AnimatedHeading />
          <p className='text-[16px] font-[500] mt-6 text-center'>
            Streamline hiring, enhance candidate selection, and empower your HR team with AI-driven tools.
          </p>
          <Link to="/product/book-a-demo" className="">
            <button className='px-10 py-6 text-[18px] rounded-md bg-[#0378f5] hover:opacity-90'>
              Get a Demo
            </button>
          </Link>
        </div>
      </div>

      <div className='flex justify-center mb-32'>
        <div className='flex flex-col md:flex-row justify-center items-center w-[90%] gap-14 border-[#131C35] border-b-2 pb-16'>
          {cardsData.map((card, index) => (
            <Link to={`/product/hrServices/${card.link}`} key={index} className="w-full sm:w-3/4 md:w-[30%] ">
              <div className='flex flex-col p-10 gap-7 rounded-lg bg-[#1b1b28] min-h-[360px] hover:bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#4b5364] to-[#0D161C]'>
                <img
                  src={card.img}
                  className='object-contain h-[180px] w-[320px] bg-transparent'
                  alt={card.title}
                />
                <p className='font-semibold text-[18px] text-center'>{card.title}</p>
                <p style={{ color: "#8F97A1" }} className='text-[16px]'>{card.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

const AnimatedHeading: React.FC = () => {
  const letters = [
    'T', 'r', 'a', 'n', 's', 'f', 'o', 'r', 'm', ' ',
    'Y', 'o', 'u', 'r', ' ',
    'H', 'i', 'r', 'i', 'n', 'g', ' ',
    'P', 'r', 'o', 'c', 'e', 's', 's'
  ];

  return (
    <div className="text-[4.8rem] sm:text-[50px] text-center">
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          className={letter === ' ' ? 'w-[10px]' : ''}
          initial={{ opacity: 0, y: 20, color: '#4D4D4D' }}
          animate={{ opacity: 1, y: 0, color: 'white' }}
          transition={{
            opacity: { duration: 0.4, delay: index * 0.1 },
            y: { duration: 0.4, delay: index * 0.1 },
            color: { duration: 0.4, delay: letters.length * 0.07 + index * 0.07 },
          }}
        >
          {letter}
        </motion.span>
      ))}
    </div>
  );
};

export default ProductsPage;
