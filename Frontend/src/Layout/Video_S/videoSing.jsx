import Video_Nav from "../../Component/Video_Nav/video_nav";
import edit from "../../assets/edit.jpg";
import video from "../../assets/videoW.png";
import downArrow from "../../assets/arrow-down.png";
function Video_S() {
  return (
    <section className="w-full md:max:w-[1200px] p-2 sm:p-3 md:p-0">
      <Video_Nav />
      <div className="flex items-center gap-2 md:w-[554px] sm:w-[534px] md:h-[21px] md:flex md:items-center md:justify-center md:gap-[8px] md:ml-12 md:mt-8 sm:flex sm:items-center sm:justify-center sm:gap-[8px]  sm:mt-8">
        <p className=" text-[12px] md:text-[18px] sm:text-[18px] leading-normal font-normal">
          Home
        </p>
        <span>/</span>
        <p className="text-[9px] md:text-[18px] sm:text-[18px] leading-normal font-normal">
          Recent Videos
        </p>
        <span>/</span>
        <p className="text-[10px] md:text-[18px] sm:text-[18px] leading-normal font-medium">
          How To Create A Facebook Ad Listing
        </p>
      </div>
      <div className="md:w-[508px]  sm:w-[508px] flex md:ml-12 mt-7 gap-[24px] items-center">
        <p className="text-[12px] md:ml-[21px] sm:ml-[10px] md:text-[24px] sm:text-[24px] font-semibold leading-normal">
          How To Create A Facebook Ad Listing
        </p>
        <img
          src={edit}
          className="md:w-[24px] md:h-[24px] sm:w-[24px] sm:h-[24px]  w-[19px] h-[19px]"
          alt="edit"
        />
      </div>

      <div className="w-full md:max-w-[1240px] md:mx-auto b mt-8 rounded-xl border border-[#B6B3C6] p-[16px]">
        <img
          src={video}
          className="  object-contain md:object-cover w-full "
          alt="video"
        />
      </div>
      <div className="mt-12  md:max-w-[1240px] md:h-[490px] md:mx-auto flex flex-col gap-[40px] ">
        <div className="md:w-[575px] md:h-[90px] flex items-center  gap-2 md:gap-0 sm:gap-0 sm:flex sm:flex-col md:flex md:flex-col md:items-start sm:items-start">
          <p className=" text-[15px] md:text-[20px] font-medium leading-normal">
            Transcript
          </p>

          <div className=" w-[120px] md:w-[137px] md:h-[51px] rounded border border-[#CFCFCF] flex items-center justify-center gap-[32px] md:mt-5">
            <p className="md:w-[57px] md:h-[19px]">English</p>
            <img src={downArrow} alt="" />
          </div>
        </div>
        <div className="w-full md:max-w-[1240px]  md:h-[360px] sm:h-[360px]">
          <div className="md:w-[1154px]  md:h-[360px] sm:h-[360px] flex flex-col gap-3  sm:gap-4 md:gap-[40px] ">
            <div className=" flex items-center gap-3 md:w-[1028px] md:gap-[40px] md:h-[72px]">
              <h1 className="md:w-[64px] md:h-[26px]  sm:h-[26px]  text-[15px] md:text-[22px] sm:text-[22px] font-medium leading-normal text-[#141414]">
                0.01
              </h1>
              <p className="text-[#000] text-[12px] md:text-[20px] sm:text-[20px] font-[400px] leading-[24px]">
                First step. Open Facebook on your desktop or mobile device and
                locate "Marketplace" in the left-hand menu or at the top of the
                First step. Open Facebook on your desktop or mobile device and
                locate "Marketplace" in the left-hand menu or at the top of the
              </p>
            </div>
            <div className=" flex items-center md:w-[1028px] gap-3  md:gap-[40px] md:h-[72px]">
              <h1 className="w-[64px] md:h-[26px] sm:h-[26px] text-[15px] md:text-[22px] sm:text-[22px]  font-medium leading-normal text-[#141414]">
                0.15
              </h1>
              <p className="text-[#000] text-[12px] md:text-[20px] sm:text-[20px] font-[400px] leading-[24px]">
                First step. Open Facebook on your desktop or mobile device and
                locate "Marketplace" in the left-hand menu or at the top of the
                .Open Facebook on your desktop or mobile device and locate
                "Marketplace" in the left-ha
              </p>
            </div>
            <div className=" flex items-center md:gap-[20px] md:w-[1028px] gap-2  md:h-[72px]">
              <h1 className="w-[64px] h-[26px] sm:h-[26px] sm:text-[22px] text-[15px] md:text-[22px] font-medium leading-normal text-[#141414]">
                0.30
              </h1>
              <p className="text-[#000] text-[12px] md:text-[20px] sm:text-[20px] font-[400px] leading-[24px]">
                First step.Open Facebook on your desktop or mobile device and
                locate "Marketplace" in the left-hand menu or at the top of the
              </p>
            </div>
            <div className=" flex items-center md:w-[1028px] gap-2 md:gap-[20px] md:h-[48px]">
              <h1 className="w-[64px] md:h-[26px] sm:h-[26px]  sm:text-[22px] text-[15px] md:text-[22px] font-medium leading-normal text-[#CFCFCF]">
                1.00
              </h1>
              <p className="text-[#CFCFCF] text-[12px] sm:text-[20px] md:text-[20px] font-[400px] leading-[24px]">
                First step. Open Facebook on your desktop or mobile device and
                locate "Marketplace" in the left-hand menu or at the top of the
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full md:max-w-[1240px] md:h-[199px] md:mx-auto md:mt-20">
        <div className="w-full md:h-[72px]  md:flex md:items-center md:justify-between">
          <div className="md:w-[550px] md:h-[72px] rounded-[12px] border-[0.5px] border-[#E7E7ED] bg-[#E7E7ED] md:flex md:items-center md:justify-between md:p-[24px]">
            <input
              type="text"
              className="w-full  outline-none bg-transparent text-[18px] font-[400px] leading-normal"
              placeholder="enter email of receiver"
            />
            <button
              className="flex items-center justify-center pl-[8px] pr-[8px] bg-[#605C84] rounded-[8px] w-[75px] h-[44px] text-white"
              type="button"
            >
              send
            </button>
          </div>
          <div className="md:w-[600px] md:h-[72px] border-[0.5px] border-[#929292] bg-[#FAFAFA] rounded-[12px] flex items-center justify-between p-[12px]">
            <input
              type="text"
              className="w-[390px] h-[26px] bg-transparent"
              placeholder="https://www.helpmeout/Untitled_Video_20232509"
            />
            <button
              type="button"
              className="w-[137px] h-[44px] border border-[#120B48] flex items-center justify-center gap-2 text-[16px] font-medium leading-[24px] rounded-[8px]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <g clip-path="url(#clip0_611_1568)">
                  <path
                    d="M4.16797 12.4998H3.33464C2.89261 12.4998 2.46868 12.3242 2.15612 12.0117C1.84356 11.6991 1.66797 11.2752 1.66797 10.8332V3.33317C1.66797 2.89114 1.84356 2.46722 2.15612 2.15466C2.46868 1.8421 2.89261 1.6665 3.33464 1.6665H10.8346C11.2767 1.6665 11.7006 1.8421 12.0131 2.15466C12.3257 2.46722 12.5013 2.89114 12.5013 3.33317V4.1665M9.16797 7.49984H16.668C17.5884 7.49984 18.3346 8.24603 18.3346 9.1665V16.6665C18.3346 17.587 17.5884 18.3332 16.668 18.3332H9.16797C8.24749 18.3332 7.5013 17.587 7.5013 16.6665V9.1665C7.5013 8.24603 8.24749 7.49984 9.16797 7.49984Z"
                    stroke="#120B48"
                    stroke-width="1.67"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_611_1568">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              Copy URL
            </button>
          </div>
        </div>
        <div></div>
      </div>
    </section>
  );
}

export default Video_S;
