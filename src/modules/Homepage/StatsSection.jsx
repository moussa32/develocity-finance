import { useState } from "react";
import playIcon from "../../assets/images/playVideoIcon.svg";

export default function StatsSection() {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div className="container mx-auto absolute top-[3950px] md:top-[3850px] lg:top-[3950px] right-0 left-0">
      <div className="mx-auto flex flex-col w-10/12 h-[400px] md:h-[700px] mb-10">
        <div className="w-full h-10 bg-white">
          <div className="flex justify-between items-center h-full w-12/12 md:w-8/12 mr-3">
            <div className="flex ml-4">
              <span className="h-3 w-3 rounded-full bg-[#EE6A5F] "></span>
              <span className="h-3 w-3 rounded-full mx-2 bg-[#F5BE50]"></span>
              <span className="h-3 w-3 rounded-full bg-[#62C554]"></span>
            </div>
            <div className="rounded-sm bg-slate-200 w-3/4 md:w-1/2">
              <h5 className="text-sm py-[2px] text-center text-[#3F444D]">
                develocity.finance/scanner/
              </h5>
            </div>
          </div>
        </div>
        <div
          className={`h-full w-full ${
            !showVideo && "bg-indigo-500"
          } rounded-b-md flex justify-center items-center`}
        >
          <iframe
            className={`${showVideo ? "w-full" : "hidden"} h-full`}
            src="https://www.youtube.com/embed/WjoplqS1u18"
            title="8K VIDEOS | World 8K Videos HDR UltraHD  (120 FPS) | Sony Demo"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          />

          {!showVideo && (
            <button onClick={() => setShowVideo(true)}>
              <img className="w-12 h-48" src={playIcon} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
