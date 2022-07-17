import React from "react";

export default function Loading() {
  return (
    <div className="flex flex-col gap-10">
      <h1 className="m-0 text-center font-['Amatic_SC'] text-[6vh] opacity-75 animate-[pulse1_2.5s_linear_infinite]">Cooking in progress..</h1>
      <div className="relative m-0 h-[134px]">
        <div className="bubble absolute rounded-[100%] shadow-[0_0_0.25vh_#4d4d4d] mt-[2.5vh] left-[49%] w-[2.5vh] h-[2.5vh] bg-[#fdc800] animate-[bubble_2s_cubic-bezier(0.53,0.16,0.39,0.96)_infinite]"></div>
        <div className="bubble absolute rounded-[100%] shadow-[0_0_0.25vh_#4d4d4d] mt-[3vh] left-[53%] w-[2vh] h-[2vh] bg-[#47b264] animate-[bubble_2s_ease-in-out_0.35s_infinite]"></div>
        <div className="bubble absolute rounded-[100%] shadow-[0_0_0.25vh_#4d4d4d] mt-[1.8vh] left-[44%] w-[1.5vh] h-[1.5vh] bg-[#1470bd] animate-[bubble_1.5s_cubic-bezier(0.53,0.16,0.39,0.96)_0.55s_infinite]"></div>
        <div className="bubble absolute rounded-[100%] shadow-[0_0_0.25vh_#4d4d4d] mt-[2.7vh] left-[47%] w-[1.2vh] h-[1.2vh] bg-[#76469a] animate-[bubble_1.8s_cubic-bezier(0.53,0.16,0.39,0.96)_0.9s_infinite]"></div>
        <div className="bubble absolute rounded-[100%] shadow-[0_0_0.25vh_#4d4d4d] mt-[2.7vh] left-[54%] w-[1.1vh] h-[1.1vh] bg-[#eb5324] animate-[bubble_1.6s_ease-in-out_1s_infinite]"></div>
        <div className="flex items-center justify-center h-full w-full">
          <div className="text-center">
            <div className="relative text-[0] w-[138px]">
                <div className="absolute top-[-5px] w-[10px] h-[10px] rounded-[5px] animate-[piece-0_3.2s_infinite] left-[0] animation-delay-none bg-[#ec2d73]"></div>
                <div className="absolute top-[-5px] w-[10px] h-[10px] rounded-[5px] animate-[piece-1_3.2s_infinite] left-[16px] animation-delay-150 bg-[#eb5324]"></div>
                <div className="absolute top-[-5px] w-[10px] h-[10px] rounded-[5px] animate-[piece-2_3.2s_infinite] left-[32px] animation-delay-300 bg-[#fdc800]"></div>
                <div className="absolute top-[-5px] w-[10px] h-[10px] rounded-[5px] animate-[piece-3_3.2s_infinite] left-[48px] animation-delay-450 bg-[#47b264]"></div>
                <div className="absolute top-[-5px] w-[10px] h-[10px] rounded-[5px] animate-[piece-4_3.2s_infinite] left-[64px] animation-delay-600 bg-[#1470bd]"></div>
                <div className="absolute top-[-5px] w-[10px] h-[10px] rounded-[5px] animate-[piece-3_3.2s_infinite] left-[80px] animation-delay-750 bg-[#76469a]"></div>
                <div className="absolute top-[-5px] w-[10px] h-[10px] rounded-[5px] animate-[piece-2_3.2s_infinite] left-[96px] animation-delay-900 bg-[#ec2d73]"></div>
                <div className="absolute top-[-5px] w-[10px] h-[10px] rounded-[5px] animate-[piece-1_3.2s_infinite] left-[112px] animation-delay-1050 bg-[#eb5324]"></div>
                <div className="absolute top-[-5px] w-[10px] h-[10px] rounded-[5px] animate-[piece-0_3.2s_infinite] left-[128px] animation-delay-1200 bg-[#fdc800]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
