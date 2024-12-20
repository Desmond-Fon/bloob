import Nav from "../../components/Nav";
import text from '../../assets/text.png'
import aside from '../../assets/aside.png'
import token from '../../assets/token.png'
import foot from '../../assets/foot.png'
import hero from '../../assets/hero.png'
import dex from '../../assets/dex.png'
import xfoot from '../../assets/x-foot.png'
import copy from '../../assets/copy.png'
import section from '../../assets/section.png'
import shadow from '../../assets/head.png'
import Slider from "../../components/Slider";
import { Parallax } from "react-scroll-parallax";
import { useMediaQuery } from "react-responsive";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Landing = () => {
    const isDesktop = useMediaQuery({ minWidth: 1024 });
    const { ref: ref3, inView: inView3 } = useInView({
        triggerOnce: false,
        threshold: 0.5,
    });
    const { ref: ref2, inView: inView2 } = useInView({
        triggerOnce: false,
        threshold: 0.5,
    });
    const { ref: ref1, inView: inView1 } = useInView({
        triggerOnce: false,
        threshold: 0.5,
    });
    const { ref: ref4, inView: inView4 } = useInView({
        triggerOnce: false,
        threshold: 0.5,
    });
    const { ref: ref5, inView: inView5 } = useInView({
        triggerOnce: false,
        threshold: 0.5,
    });

    return (<div className="bg-primary font-short min-h-screen pb-[100px] overflow-hidden">
        {/* <img src={shadow} className="absolute origin-center" alt="" /> */}
        <div className="flex relative z-[2000] justify-center items-center pt-[3%]">
            <Nav />
        </div>
        <div id='home' className="flex justify-center items-center lg:-mt-[60px]">
            <img src={text} alt="" className='w-[90%] lg:w-auto' />
        </div>
        <div className="flex justify-center relative items-center -mt-[100px] lg:-mt-[290px]">
            <Parallax speed={isDesktop ? -20 : -10} className="hidden lg:block">
            <img src={shadow} alt="" className='hidden lg:block lg:w-auto' />
            </Parallax>
            <Parallax speed={isDesktop ? -30 : -10}>
            <img src={hero} alt="" className='w-[100%] lg:hidden' />
            </Parallax>
            <button className="border-[2px] bottom-[20px] lg:bottom-auto absolute border-black rounded-[10px] translate transform origin-center rotate-[-7deg] py-[5px] lg:py-[20px] px-[20px] lg:px-[70px] font-sigmar text-with-border bg-primary transition-transform duration-300 ease-in-out scale-100 hover:scale-110">BUY BLOOB</button>
        </div>
        <div className="mt-[30px] lg:-mt-[280px]">
            <Slider />
        </div>

        <div id='about' className="flex flex-col lg:flex-row justify-center items-center px-[8%] pt-[6%] gap-[30px]">
            <motion.div ref={ref1}
                initial={{ opacity: 0, x: -100 }}
                animate={{
                    opacity: inView1 ? 1 : 0,
                    x: inView1 ? 0 : -100,
                }}
                transition={{ duration: 0.5 }} className="w-full lg:w-1/2"><img src={aside} alt="" className="w-full" /></motion.div>
            <motion.div ref={ref2}
                initial={{ opacity: 0, x: 100 }}
                animate={{
                    opacity: inView2 ? 1 : 0,
                    x: inView2 ? 0 : 100,
                }}
                transition={{ duration: 0.5 }} className="w-full lg:w-1/2 flex flex-col items-center gap-[30px]">
                <h1 className="font-sigmar text-[35px] lg:text-[40px] text-center">About Bloob</h1>
                <p className='text-center lg;text-left'>Bloob is the quirky and lovable memecoin inspired by a character from Matt Furie&apos;s creative universe! Originally depicted as part of a larger art piece featuring an eclectic mix of characters, Bloob is now stepping off the canvas and onto the Base chain. Bringing a wave of fun, creativity, and decentralized excitement, Bloob is here to make waves in the memecoin universe. Built on Base, it&apos;s time to let Bloob shine! </p>
                <div className="flex justify-center items-center gap-[20px] lg:gap-[50px]">
                    <button className="border-[2px] border-black rounded-[5px] py-[6px] lg:py-[10px] px-[20px] lg:px-[50px] font-sigmar text-with-border bg-yellow transform transition-transform duration-300 ease-in-out scale-100 hover:scale-110">BUY NOW</button>
                    <button className="border-[2px] border-black rounded-[5px] py-[6px] lg:py-[10px] px-[20px] lg:px-[50px] font-sigmar text-with-border bg-secondary transform transition-transform duration-300 ease-in-out scale-100 hover:scale-110">BUY NOW</button>
                </div>
            </motion.div>
        </div>

        <div id='tokenomics' className="flex flex-col lg:flex-row mt-[40px] lg:mt-0 justify-center items-center px-4 lg:pl-[8%] lg:pr-[2%] pt-[6%]">
            <motion.div ref={ref3}
                initial={{ opacity: 0, x: 100 }}
                animate={{
                    opacity: inView3 ? 1 : 0,
                    x: inView3 ? 0 : 100,
                }}
                transition={{ duration: 0.5 }} className="w-full lg:w-[40%] flex flex-col items-center gap-[30px]">
                <h1 className="text-[50px] lg:text-[70px] text-center text-with-border">Tokenomics</h1>
                <img src={token} className="w-full" alt="" />
            </motion.div>
            <motion.div ref={ref4}
                initial={{ opacity: 0, x: -100 }}
                animate={{
                    opacity: inView4 ? 1 : 0,
                    x: inView4 ? 0 : -100,
                }}
                transition={{ duration: 0.5 }} className="w-full lg:w-[60%] relative">
                <div className="absolute w-full lg:w-auto bottom-[15%] left-1/2 transform -translate-x-1/2 px-[5px] lg:px-[30px] flex justify-center items-center gap-1 lg:gap-2 py-2 border-[2px] border-black border-b-[5px] rounded-[8px] text-[14px] lg:text-[18px] bg-white">
                    <p className='whitespace-nowrap'>Ca : dgdhjksqajuw2839w8uygww</p> <img src={copy} alt="" className='cursor-pointer' onClick={() => {
                        navigator.clipboard.writeText(
                            "dgdhjksqajuw2839w8uygww"
                        );
                    }} />
                </div>
                <img src={section} alt="" className="w-full" />
            </motion.div>
        </div>

        <motion.div ref={ref5}
            initial={{ opacity: 0, y: -100 }}
            animate={{
                opacity: inView5 ? 1 : 0,
                y: inView5 ? 0 : -100,
            }}
            transition={{ duration: 0.5 }} className="flex justify-center items-center mt-[70px]">
            <div className="bg-secondary flex-col-reverse lg:flex-row flex justify-between items-center w-[85%] rounded-[12px] border-black border-[3px]">
                <div className="lg:pl-[5%] flex flex-col h-full items-center lg:items-start justify-between gap-[30px] lg:gap-[60px]">
                    <h1 className='text-[40px] text-center lg:text-[68px] text-with-border2'>Join the community </h1>
                    <div className="flex flex-col lg:flex-row justify-center items-center gap-[20px] pb-[20px] lg:pb-0 lg:gap-[50px]">
                        <button className="border-[2px] border-black rounded-[8px] py-2 px-[50px] text-black bg-primary text-[24px] border-b-[5px] transform transition-transform duration-300 ease-in-out scale-100 hover:scale-110">Buy Now</button>
                        <div className="flex justify-center items-center gap-3">
                            <img src={dex} alt="" className="transform transition-transform duration-300 ease-in-out scale-100 cursor-pointer hover:scale-110" /><img src={xfoot} alt="" className="transform transition-transform duration-300 ease-in-out scale-100 cursor-pointer hover:scale-110" />
                        </div>
                    </div>
                </div>
                <div className="lg:w-[33%]"><img src={foot} className="w-full" alt="" /></div>
            </div>
        </motion.div>

        <h1 className='text-center font-sigmar mt-[30px]'>Design by Legendvx 2024 ALL RIGHT  RESERVED </h1>
    </div>);
}

export default Landing;