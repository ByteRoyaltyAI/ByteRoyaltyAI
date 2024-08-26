

const ServicesFooter = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center gap-10 min-h-screen px-10 bg-gradient-to-br from-[#042638] via-[#083849] to-[#053142]">
        <div className="w-full lg:w-2/5 space-y-10">
          <p className="font-bold text-[40px] w-2/3">The Imaigen process</p>
          <p className="font-semibold text-[20px]">
            Our process is a systematic journey comprising four stages:
            Discovery, Proposal, Implementation, and Optimization.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 w-full lg:w-3/5 py-40 gap-32">
          <div className="flex flex-col justify-center items-center rounded-full text-center border-[#3C5866] border-2 space-y-5 h-[36rem] w-[36rem]  sm:h-[38rem] sm:w-[38rem] bg-gradient-to-br from-[#0C2E3F] to-[#0D3847] ">
            <p className="text-[45px] font-bold">01</p>
            <p className="text-[24px] font-semibold">Discovery Call</p>
            <p className="text-[15px] font-[500] w-[80%]">
              We begin by thoroughly understanding your objectives.
            </p>
          </div>

          <div className="flex flex-col justify-center items-center rounded-full text-center border-[#3C5866] border-2 space-y-5  h-[36rem] w-[36rem]  sm:h-[38rem] sm:w-[38rem] bg-gradient-to-br from-[#0C2E3F] to-[#0D3847] mt-0 md:mt-40">
            <p className="text-[45px] font-bold">02</p>
            <p className="text-[24px] font-semibold">Proposal</p>
            <p className="text-[15px] font-[500] w-[80%]">
              We propose the infrastructure, systems, and processes to achieve
              those goals.
            </p>
          </div>

          <div className="flex flex-col justify-center items-center rounded-full text-center border-[#3C5866] border-2 space-y-5 h-[36rem] w-[36rem]  sm:h-[38rem] sm:w-[38rem] bg-gradient-to-br from-[#0C2E3F] to-[#0D3847]  mt-0 md:-mt-40">
            <p className="text-[45px] font-bold">03</p>
            <p className="text-[24px] font-semibold">
              Implementation and Execution
            </p>
            <p className="text-[15px] font-[500] w-[80%]">
              We execute the project plan, which can involve building, testing,
              deploying and supporting the software.
            </p>
          </div>

          <div className="flex flex-col justify-center items-center rounded-full text-center border-[#3C5866] border-2 space-y-5 h-[36rem] w-[36rem]  sm:h-[38rem] sm:w-[38rem] bg-gradient-to-br from-[#0C2E3F] to-[#0D3847] ">
            <p className="text-[45px] font-bold">04</p>
            <p className="text-[24px] font-semibold">
              Evaluation and Maintenance
            </p>
            <p className="text-[15px] font-[500] w-[80%]">
              We assess the results, incorporate feedback and continually
              improve.
            </p>
          </div>
        </div>
      </div>
  )
}

export default ServicesFooter
