import Image from "next/image";
import Link from "next/link";
import CustomCursor from "./CustomCursor";
import { motion } from 'framer-motion'

const Hero = () => {
    return (
      <motion.header 
      initial={{  opacity:0 }}
      whileInView={{ opacity:1 }}
      viewport={{ once: true }}
      transition={{ duration: 2.4 }} className="relative  flex flex-col justify-between h-screen isolate bg-black cursor-none">
        <CustomCursor/>
             {/* <Image
     placeholder="blur"
     blurDataURL="/assets/hero.png"
      src="/assets/hero.png"
      objectFit="contain"
      layout="fill"
      className="relative  -z-10"
    //   sizes="(max-width: 768px) 100vw,
    //           (max-width: 1200px) 50vw,
    //           33vw"
    /> */}
    <div>
    <img src="/assets/hero.png" className="w-full absolute top-0 -z-20" alt="" />
    </div>
    
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
    
        <div className=" mx-auto max-w-2xl pb-56 md:pb-10  ">
        <div className="justify-center mb-6  w-full  flex ">
        <img src="/assets/logo.png" className="bg-white/70 backdrop-blur-3xl w-40 rounded-lg px-3 py-2" alt="" />
      </div>
          <motion.div initial={{  y:100 }}
     whileInView={{ y:0 }}
     viewport={{ once: true }}
     transition={{ duration: 1 }} className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Start exploring <br/>the unexplored 
            </h1>
            {/* <p className="mt-6 text-lg leading-8 text-gray-600">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
              fugiat veniam occaecat fugiat aliqua.
            </p> */}
            <div className="mt-10 flex items-center justify-center gap-x-6">
           
          <Link href='#search'>
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-400 ring-1 ring-gray-100/20 hover:ring-gray-100/50">
              Scroll down to search spaceX capsules.{' '}
              {/* <a href="#" className="font-semibold text-indigo-600">
                <span className="absolute inset-0" aria-hidden="true" />
                Read more <span aria-hidden="true">&rarr;</span>
              </a> */}
            </div>
            </Link>
            
          </div>
            </motion.div>
        </div>
        {/* <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div> */}
      </motion.header>
    );
  };
  
  export default Hero;
  