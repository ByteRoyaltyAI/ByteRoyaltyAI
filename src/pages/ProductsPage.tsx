import React from 'react';
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { motion } from 'framer-motion';
import { ProductPageData } from "../assets/lib/ProductsData";
import { useParams,useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import NeoAI from '../components/NeoAI';
import Button from '../components/Button';
import { FaBookmark } from "react-icons/fa";
import { BiSolidNavigation } from "react-icons/bi";

const ProductsPage: React.FC = () => {
  const params=useParams<{ productName: string }>()
  const navigate=useNavigate()
  
  const productData=ProductPageData[params.productName as string] 

  if(productData===undefined){
    useEffect(()=>{
      navigate("/")
    },[])
    return null
  }

  return (
    <div className='flex flex-col gap-60 min-h-screen mt-[20rem] '>
      <div className='flex justify-center'>
        <NeoAI/>
        <div className='flex flex-col items-center w-[90%] sm:w-[70%] gap-10'>
          <AnimatedHeading title={productData.title}/>
          <h1 className="font-bold text-center mb-40" style={{fontSize: "clamp(1.8rem, 5vw, 2.4rem)"}}>
          <span className="remainText ">{productData.desc}</span>
        </h1>

            <Button
            label="Book a Demo"
            link='/product/book-a-demo'
            iconSVG={FaBookmark}
            buttoncolor={"main-btn"}
          />
        </div>
      </div>

      <div className='flex justify-center mb-32'>
        <div className='flex flex-col md:flex-row justify-center items-center w-[90%] gap-14 pb-16 '>
          {productData.cards?.map((card, index) => (
            <Link to={`/product/hrServices/${card.link}`} key={index} className="w-full sm:w-3/4 md:w-[30%] ">
              <div className='flex  relative flex-col p-10 gap-7 rounded-lg bg-[#1b1b28] min-h-[360px] hover:bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#4b5364] to-[#0D161C]'>
                <img
                  src={card.img}
                  className='object-contain h-[180px]  bg-transparent'
                  alt={card.title}
                />
                <p className='font-semibold text-[18px] text-center'>{card.title}</p>
                <p style={{ color: "#8F97A1" }} className='text-[16px]'>{card.desc}</p>
                <BiSolidNavigation className='absolute top-4 right-4 hover:h-10 hover:w-10 '/>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

const AnimatedHeading: React.FC<{title:string}> = ({title}) => {
  const letters = title.split("")

  return (
    <div className=" text-center " 
    style={{
      fontSize: "clamp(4rem, 5vw, 7rem)",
      textShadow: "0 0 10px rgba(0,255,255,0.5)",
      height: "clamp(4rem, 15vw, 8rem)",
      fontWeight: "600",
      marginBottom: "50px",
    }}>
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          className={letter === ' ' ? 'w-[10px]' : ''}
          initial={{ opacity: 0, y: 20, color: 'black' }}
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
