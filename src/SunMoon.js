import React, { useEffect } from "react";
import PasswordContext from "./context/PasswordContext";

export default function SunMoon() {
  const context = React.useContext(PasswordContext);
  const { positionsunmoon, daynight, csslistjson, cssposition, lsborderradius } = context;
  useEffect(() => {
    positionsunmoon();
    // eslint-disable-next-line
  }, []);
  return (
    <>
      <div className={`${daynight ? "hidden" : "block"} float-left origin-[bottom_center] shadow-[0_0_64px_#fc0,0_0_0_#fc0,-1px_0_20px_4px_#2c0101] z-[-9] rounded-[50%] fixed md:w-[10vw] w-[100px] md:h-[10vw] h-[100px] after:content-[''] after:absolute md:after:top-[2vh] after:top-[12px] md:after:right-[2vw] after:right-[18px] md:after:w-[1.5vw] after:w-[10px] md:after:h-[1.5vw] after:h-[10px] after:opacity-80 after:bg-[#fcf0a3] after:rounded-[44%_40%_60%_24%_/_43%_35%_51%_36%]`} style={{ left: csslistjson[cssposition].leftcsslist + "%", top: csslistjson[cssposition].topcsslist + "%", transform: "rotate(" + csslistjson[cssposition].rotatecsslist + "deg)", }}>
        <div className="w-full h-full animate-[sunrolling_30s_infinite]">
          <div className="w-full h-full rounded-[100%] bg-[#ffdf05] shadow-[0_0_100px_#ffdf05]"></div>
          {[...Array(12).keys()].map((i) => {
            return (
              <div className="absolute top-[-30%] left-[50%] w-[2px] h-[160%]" key={i} style={{ transform: `rotate(${18 * i}deg)` }}>
                <b className="absolute top-0 left-0 w-full h-[12%] bg-[#fed65b] rounded-[50%]"></b>
                <s className="absolute bottom-0 left-0 w-full h-[12%] bg-[#fed65b] rounded-[50%]"></s>
              </div>
            );
          })}
        </div>
      </div>
      <div className={`${daynight ? "block" : "hidden"} fixed overflow-hidden rounded-[50%] w-[25vmin] h-[25vmin] z-[-9] origin-[bottom_center]`} style={{ left: csslistjson[cssposition].leftcsslist + "%", top: csslistjson[cssposition].topcsslist + "%", transform: "rotate(" + csslistjson[cssposition].rotatecsslist + "deg)", }}>
        <div className="absolute overflow-hidden m-[0_auto] z-[12] w-[25vmin] h-[25vmin] top-[calc(50%-12.5vmin)] right-[calc((50%-12.5vmin)_-_-91.1315%)]" style={{ borderRadius: lsborderradius }}></div>
        <div className="relative shadow-[#4b326480_0_0_6.25vmin_0.25vmin_inset] overflow-hidden m-[0_auto] z-[11] w-[25vmin] h-[25vmin] animate-[move-map_30s_infinite_linear] after:content-[''] after:absolute after:w-full after:h-full after:rounded-[100%] after:top-0 after:left-0 after:bg-[radial-gradient(circle_at_50%_30%,#09090700,#00000033_50%,#000_100%)]" style={{ borderRadius: lsborderradius, background: `url("https://thekoushikdurgas.github.io/TKDstroage/img/moonsurface.jpg") repeat-x`, transformStyle: `preserve-3d`, backgroundSize: `auto 100%` }}></div>
      </div>
      {/* <div className="fixed z-[10000] top-0 left-0 hidden md:block">
      </div> */}
    </>
  );
}
