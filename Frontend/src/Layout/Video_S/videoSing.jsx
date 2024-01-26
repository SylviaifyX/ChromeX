import Video_Nav from "../../Component/Video_Nav/video_nav";
import edit from "../../assets/edit.jpg";
import video from "../../assets/videoW.png";
import downArrow from "../../assets/arrow-down.png";
function Video_S() {
  return (
    <section className="w-full h-screen md:max:w-[1200px] p-2 sm:p-3  md:p-4 md:h-[1599px]">
      <Video_Nav />
      <div className="flex items-center gap-2 md:w-[554px] sm:w-[534px] md:h-[21px] md:flex md:items-center md:justify-center md:gap-[8px] lg:ml-12 md:mt-8 sm:flex sm:items-center sm:justify-center sm:gap-[8px]  sm:mt-8">
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
      <div className="md:w-[508px]  sm:w-[508px] flex lg:ml-12 mt-7 gap-[24px] items-center">
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
      <div className="md:mt-12  sm:mt-12  sm:gap-[40px] md:max-w-[1240px] md:h-[490px] sm:h-[499px] md:mx-auto flex flex-col  md:gap-[40px] mt-5">
        <div className="md:w-[575px] md:h-[90px] flex items-center  gap-2 md:gap-0 sm:gap-2 sm:flex sm:flex-col md:flex md:flex-col md:items-start sm:items-start">
          <p className=" text-[15px] md:text-[20px] font-medium leading-normal">
            Transcript
          </p>

          <div className=" w-[120px] md:w-[137px] md:h-[51px] rounded border border-[#CFCFCF] flex items-center justify-center gap-[32px] md:mt-5">
            <p className="md:w-[57px] md:h-[19px]">English</p>
            <img src={downArrow} alt="" />
          </div>
        </div>
        <div className="w-full md:max-w-[1240px]  md:h-[360px]  sm:h-[360px] mt-8 md:mt-0">
          <div className="lg:w-[1154px] md:full  md:h-[360px] sm:h-[360px] flex flex-col gap-3  sm:gap-[20px] md:gap-[40px]">
            <div className=" flex items-center gap-3 lg:w-[1028px] md:w-full md:gap-[40px] md:h-[72px]">
              <h1 className="md:w-[64px] md:h-[26px]   sm:h-[26px]  text-[15px] md:text-[22px] sm:text-[22px] font-medium leading-normal text-[#141414]">
                0.01
              </h1>
              <p className="text-[#000] text-[12px] md:text-[20px] sm:text-[20px] font-[400px] leading-[24px]">
                First step. Open Facebook on your desktop or mobile device and
                locate "Marketplace" in the left-hand menu or at the top of the
                First step. Open Facebook on your desktop or mobile device and
                locate "Marketplace" in the left-hand menu or at the top of the
              </p>
            </div>
            <div className=" flex items-center md:w-full lg:w-[1028px] gap-3  md:gap-[40px] md:h-[72px]">
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
            <div className=" flex items-center md:gap-[20px] md:w-full lg:w-[1028px] gap-2  lg:h-[72px]">
              <h1 className="w-[64px] h-[26px] sm:h-[26px] sm:text-[22px] text-[15px] md:text-[22px] font-medium leading-normal text-[#141414]">
                0.30
              </h1>
              <p className="text-[#000] text-[12px] md:text-[20px] sm:text-[20px] font-[400px] leading-[24px]">
                First step.Open Facebook on your desktop or mobile device and
                locate "Marketplace" in the left-hand menu or at the top of the
              </p>
            </div>
            <div className=" flex items-center md:w-full lg:w-[1028px] gap-2 md:gap-[20px] md:h-[48px]">
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
      <div className="w-full md:max-w-[1240px] h-[340px] sm:h-[340px] gap-[40px] md:h-[199px] md:mx-auto md:mt-20  sm:mt-20  flex flex-col md:gap-[40px] mt-10">
        <div className="w-full md:h-[72px]  md:flex  sm:flex sm:items-center sm:justify-center  sm:gap-3 md:items-center md:justify-between">
          <div className="md:w-[550px] md:h-[72px] rounded-[12px] border-[0.5px] border-[#E7E7ED] bg-[#E7E7ED] flex items-center justify-between p-1 h-[55px] md:flex md:items-center md:justify-between md:p-[24px] sm:w-[500px] sm:h-[72px]">
            <input
              type="text"
              className=" md:w-full  sm:w-full outline-none bg-transparent text-[18px] font-[400px] leading-normal"
              placeholder="enter email of receiver"
            />
            <button
              className="flex items-center justify-center pl-[8px] pr-[8px] bg-[#605C84] rounded-[8px] w-[75px] h-[44px] text-white"
              type="button"
            >
              send
            </button>
          </div>
          <div className="lg:w-[600px] md:w-[500px] sm:w-[500px] sm:h-[72px] h-[55px] md:h-[72px] border-[0.5px] border-[#929292] bg-[#FAFAFA] rounded-[12px] flex items-center justify-between sm:gap-2 gap-1 md:gap-3 p-[12px] mt-3 sm:mt-0 md:mt-0">
            <input
              type="text"
              className="lg:w-[390px] h-[26px] bg-transparent w-full text-[9px] md:text-[10px] lg:text-[17px] sm:w-full sm:text-[10px]"
              placeholder="https://www.helpmeout/Untitled_Video_20232509"
            />
            <button
              type="button"
              className="md:w-[137px] w-[75px] p-1 sm:p-1 md:p-0 h-[44px] border border-[#120B48] flex items-center justify-center gap-2 md:text-[16px] text-[10px] font-medium leading-[24px] rounded-[8px]"
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
        <div className=" w-full md:w-[534px] h-[140px] md:h-[87px] inline-flex flex-col items-start gap-[16px]">
          <p className="w-[164px] h-[23px] ml-12 sm:ml-0 md:ml-0 text-[20px] font-medium leading-normal">
            Share your video
          </p>

          <div className="md:w-[450px]  sm:w-[450px]  h-[60px] sm:h-[48px] sm:gap-[16px] md:h-[48px] w-full flex items-center justify-center gap-1 md:gap-[16px]">
            <div className="md:w-[141px] sm:w-[141px] w-[100px] h-[48px] flex  items-center justify-center gap-[8px] p-[12px] rounded-[6px] border border-[#0A0628]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="md:w-[24px] md:h-[24px] sm:w-[24px] sm:h-[24px]  w-[19px] h-[19px]"
                viewBox="0 0 24 24"
                fill="none"
              >
                <g clip-path="url(#clip0_611_1603)">
                  <path
                    d="M24 11.9993C24 5.37187 18.6274 -0.000705719 12 -0.000705719C5.37258 -0.000705719 0 5.37187 0 11.9993C0 17.9888 4.38823 22.9533 10.125 23.8535V15.468H7.07813V11.9993H10.125V9.35554C10.125 6.34805 11.9165 4.68679 14.6576 4.68679C15.9705 4.68679 17.3438 4.92117 17.3438 4.92117V7.87429H15.8306C14.3399 7.87429 13.875 8.7993 13.875 9.74829V11.9993H17.2031L16.6711 15.468H13.875V23.8535C19.6118 22.9533 24 17.9888 24 11.9993Z"
                    fill="#1877F2"
                  />
                  <path
                    d="M16.6711 15.4688L17.2031 12H13.875V9.74899C13.875 8.80001 14.3399 7.875 15.8306 7.875H17.3438V4.92188C17.3438 4.92188 15.9705 4.6875 14.6576 4.6875C11.9165 4.6875 10.125 6.34875 10.125 9.35625V12H7.07812V15.4688H10.125V23.8542C10.7359 23.9501 11.3621 24 12 24C12.6379 24 13.2641 23.9501 13.875 23.8542V15.4688H16.6711Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_611_1603">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <p className="md:w-[77px] sm:w-[77px]  h-auto text-[11px] md:text-[16px] sm:text-[16px] leading-[24px] font-medium tracking-[0.16px]">facebook</p>
            </div>
            <div className="md:w-[141px] sm:w-[141px] w-[100px]  h-[48px] flex items-center justify-center gap-[8px] p-[12px] rounded-[6px] border border-[#0A0628]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="md:w-[24px] md:h-[24px] sm:w-[24px] sm:h-[24px] w-[19px] h-[19px]"
                viewBox="0 0 20 22"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M17.0859 3.87197C15.2061 1.98972 12.7059 0.952615 10.042 0.95166C4.55283 0.95166 0.08547 5.41855 0.08356 10.9092C0.082605 12.6644 0.54147 14.3776 1.41288 15.8874L0 21.0481L5.27909 19.6634C6.7335 20.457 8.37128 20.8748 10.0377 20.8753H10.042C15.5302 20.8753 19.9981 16.4079 20 10.9173C20.0009 8.25627 18.9662 5.7547 17.0859 3.87244V3.87197ZM10.042 19.1935H10.0387C8.55367 19.1931 7.09689 18.7939 5.82583 18.0399L5.52357 17.8604L2.39078 18.6822L3.22686 15.6277L3.03013 15.3144C2.20169 13.9966 1.76383 12.4734 1.76479 10.9097C1.7667 6.3463 5.47963 2.63337 10.0454 2.63337C12.2561 2.63432 14.3342 3.49619 15.8969 5.06091C17.4598 6.62516 18.3197 8.7051 18.3188 10.9163C18.3168 15.4802 14.6039 19.1931 10.042 19.1931V19.1935ZM14.5819 12.9948C14.3332 12.8702 13.1099 12.2685 12.8816 12.1855C12.6534 12.1024 12.4877 12.0609 12.322 12.3101C12.1563 12.5594 11.6793 13.1199 11.5342 13.2856C11.389 13.4518 11.2438 13.4723 10.9951 13.3477C10.7463 13.223 9.94461 12.9604 8.99395 12.1129C8.25433 11.453 7.75483 10.6384 7.60972 10.3892C7.46456 10.1399 7.59444 10.0053 7.71856 9.8816C7.83028 9.76988 7.96733 9.59083 8.09194 9.44566C8.21661 9.30049 8.25767 9.19644 8.34072 9.03071C8.42383 8.86455 8.38228 8.71944 8.32022 8.59477C8.25811 8.47016 7.76061 7.24538 7.55289 6.74738C7.35089 6.26227 7.14561 6.32816 6.99328 6.32004C6.84811 6.31288 6.68244 6.31145 6.51628 6.31145C6.35011 6.31145 6.08078 6.37352 5.85256 6.62277C5.62433 6.87199 4.98162 7.4741 4.98162 8.69838C4.98162 9.92266 5.87311 11.1064 5.99772 11.2725C6.12233 11.4387 7.75244 13.9517 10.2483 15.0299C10.8418 15.2863 11.3054 15.4395 11.6669 15.5542C12.2628 15.7437 12.8052 15.717 13.234 15.653C13.712 15.5814 14.7061 15.0509 14.9133 14.4698C15.1206 13.8887 15.1206 13.3902 15.0585 13.2865C14.9964 13.1829 14.8303 13.1204 14.5815 12.9958L14.5819 12.9948Z"
                  fill="#25D366"
                />
              </svg>
              <p className="w-[81px] h-auto text-[11px] sm:text-[16px] md:text-[16px] leading-[24px] font-medium tracking-[0.16px]">WhatsApp</p>
            </div>
            <div className="md:w-[141px] sm:w-[141px] w-[100px]  h-[48px] flex items-center justify-center gap-[8px] p-[12px] rounded-[6px] border border-[#0A0628]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
               className="md:w-[24px] md:h-[24px] w-[19px] h-[19px]"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
                  fill="url(#paint0_linear_611_1613)"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M4.51633 9.89096C7.4291 8.6137 9.37614 7.78815 10.3574 7.38317C13.13 6.23052 13.7064 6.02803 14.0802 6.01245C14.1581 6.01245 14.345 6.02803 14.4696 6.12149C14.5631 6.19937 14.5942 6.3084 14.6098 6.38628C14.6254 6.46416 14.6409 6.6355 14.6254 6.77569C14.4696 8.3489 13.831 12.1963 13.4883 13.9564C13.3481 14.704 13.0677 14.9533 12.8029 14.9844C12.2266 15.0311 11.7749 14.595 11.2141 14.2368C10.3419 13.6604 9.84343 13.3022 8.98673 12.7414C8.00542 12.0872 8.64405 11.729 9.2048 11.1526C9.34499 10.9969 11.9151 8.676 11.9618 8.45793C11.9618 8.42678 11.9774 8.33332 11.9151 8.2866C11.8528 8.23987 11.7749 8.25544 11.7126 8.27102C11.6191 8.28659 10.2173 9.22117 7.4914 11.0592C7.08642 11.3396 6.72816 11.4642 6.40106 11.4642C6.04281 11.4642 5.35745 11.2617 4.84343 11.0903C4.22038 10.8878 3.72193 10.7788 3.76866 10.4361C3.79982 10.2648 4.04904 10.0779 4.51633 9.89096Z"
                  fill="white"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_611_1613"
                    x1="0"
                    y1="9.99276"
                    x2="19.9855"
                    y2="9.99276"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#2AABEE" />
                    <stop offset="1" stop-color="#229ED9" />
                  </linearGradient>
                </defs>
                
              </svg>
              <p className="w-[73px] h-auto text-[11px] sm:text-[16px] md:text-[16px] leading-[24px] font-medium tracking-[0.16px]">Telegram</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Video_S;
