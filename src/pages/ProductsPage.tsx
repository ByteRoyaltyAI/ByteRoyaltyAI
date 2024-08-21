import React, { Suspense, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import { ProductPageData } from "../assets/lib/ProductsData";
import NeoAI from '../components/NeoAI';
import Button from '../components/Button';
import { FaBookmark } from "react-icons/fa";
import { BiSolidNavigation } from "react-icons/bi";

const AnimatedHeading = React.lazy(() => import('../components/AnimatedHeading'));

const ProductsPage: React.FC = () => {
  const params = useParams<{ productName: string }>();
  const navigate = useNavigate();
  const productData = ProductPageData[params.productName as string];

  useEffect(() => {
    if (!productData) {
      navigate('/');
    }
  }, [productData, navigate]);

  if (!productData) return null;

  return (
    <div className='flex flex-col gap-60 min-h-screen mt-[20rem]'>
      <div className='flex justify-center'>
        <NeoAI />
        <div className='flex flex-col items-center w-[90%] sm:w-[70%] gap-10'>

          <Suspense fallback={<div>Loading...</div>}>
            <AnimatedHeading title={productData.title} key={params.productName} />
          </Suspense>
          
          <h1 className="font-bold text-center mb-40" style={{ fontSize: "clamp(1.8rem, 5vw, 2.4rem)" }}>
            <span className="remainText">{productData.desc}</span>
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
        <div className='flex flex-col md:flex-row justify-center items-center w-[90%] gap-14 pb-16'>
          {productData.cards?.map((card, index) => (
            <Link to={`/product/hrServices/${card.link}`} key={index} className="w-full sm:w-3/4 md:w-[30%]">
              <div className='flex relative flex-col p-10 gap-7 rounded-lg bg-[#1b1b28] min-h-[360px] hover:bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#4b5364] to-[#0D161C]'>
                <img
                  src={card.img}
                  className='object-contain h-[180px] bg-transparent'
                  alt={card.title}
                />
                <p className='font-semibold text-[18px] text-center'>{card.title}</p>
                <p style={{ color: "#8F97A1" }} className='text-[16px]'>{card.desc}</p>
                <BiSolidNavigation className='absolute top-4 right-4 hover:h-10 hover:w-10' />
              </div>
            </Link>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductsPage;
