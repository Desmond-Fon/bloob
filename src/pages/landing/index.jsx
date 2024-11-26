import Nav from "../../components/Nav";
import text from '../../assets/text.png'
import aside from '../../assets/aside.png'
import token from '../../assets/token.png'
import foot from '../../assets/foot.png'
import dex from '../../assets/dex.png'
import xfoot from '../../assets/x-foot.png'
import copy from '../../assets/copy.png'
import section from '../../assets/section.png'
import shadow from '../../assets/head.png'
import Slider from "../../components/Slider";

const Landing = () => {
    return (<div className="bg-primary font-short min-h-screen pb-[100px]">
        {/* <img src={shadow} className="absolute origin-center" alt="" /> */}
        <div className="flex relative z-[2000] justify-center items-center pt-[3%]">
            <Nav />
        </div>
        <div id='home' className="flex justify-center items-center lg:-mt-[60px]">
            <img src={text} alt="" />
        </div>
        <div className="flex justify-center relative items-center lg:-mt-[290px]">
            <img src={shadow} alt="" />
            <button className="border-[2px] absolute border-black rounded-[10px] translate transform origin-center rotate-[-7deg] h-[50px] px-[70px] font-sigmar text-with-border bg-primary">BUY BLOOB</button>
        </div>
        <div className="lg:-mt-[280px]">
            <Slider />
        </div>

        <div id='about' className="flex justify-center items-center px-[8%] pt-[6%] gap-[30px]">
            <div className="w-1/2"><img src={aside} alt="" className="w-full" /></div>
            <div className="w-1/2 flex flex-col items-center gap-[30px]">
                <h1 className="font-sigmar text-[40px] text-center">About Bloob</h1>
                <p>Bloob is the quirky and lovable memecoin inspired by a character from Matt Furie&apos;s creative universe! Originally depicted as part of a larger art piece featuring an eclectic mix of characters, Bloob is now stepping off the canvas and onto the Base chain. Bringing a wave of fun, creativity, and decentralized excitement, Bloob is here to make waves in the memecoin universe. Built on Base, it&apos;s time to let Bloob shine! </p>
                <div className="flex justify-center items-center gap-[50px]">
                    <button className="border-[2px] border-black rounded-[5px] h-[50px] px-[50px] font-sigmar text-with-border bg-yellow">BUY NOW</button>
                    <button className="border-[2px] border-black rounded-[5px] h-[50px] px-[50px] font-sigmar text-with-border bg-secondary">BUY NOW</button>
                </div>
            </div>
        </div>

        <div id='tokenomics' className="flex justify-center items-center pl-[8%] pr-[2%] pt-[6%]">
            <div className="w-[40%] flex flex-col items-center gap-[30px]">
                <h1 className="text-[70px] text-center text-with-border">Tokenomics</h1>
                <img src={token} className="w-full" alt="" />
            </div>
            <div className="w-[60%] relative">
                <div className="absolute bottom-[15%] px-[30px] flex justify-center items-center gap-2 py-2 border-[2px] border-black border-b-[5px] rounded-[8px] text-[18px] right-[20%] bg-white"><p>Ca : dgdhjksqajuw2839w8uygww</p> <img src={copy} alt="" /></div>
                <img src={section} alt="" className="w-full" /></div>
        </div>

        <div className="flex justify-center items-center mt-[70px]">
            <div className="bg-secondary flex justify-between items-center w-[85%] rounded-[12px] border-black border-[3px]">
                <div className="pl-[5%] flex flex-col h-full items-start justify-between gap-[60px]">
                    <h1 className='text-[68px] text-with-border2'>Join the community </h1>
                    <div className="flex justify-center items-center gap-[50px]">
                        <button className="border-[2px] border-black rounded-[8px] py-2 px-[50px] text-black bg-primary text-[24px] border-b-[5px]">Buy Now</button>
                       <div className="flex justify-center items-center gap-3">
                        <img src={dex} alt="" /><img src={xfoot} alt="" />
                       </div>
                    </div>
                </div>
                <div className="w-[33%]"><img src={foot} className="w-full" alt="" /></div>
            </div>
        </div>

        <h1 className='text-center font-sigmar mt-[30px]'>Design by Legendvx 2024 ALL RIGHT  RESERVED </h1>
    </div>);
}

export default Landing;