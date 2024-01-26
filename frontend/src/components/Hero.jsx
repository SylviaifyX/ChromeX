import arrowRight from "../assets/arrow-right.svg";
import { Wrapper } from "./Wrapper";
import { Collage } from "./PictureCollage";

export function Hero() {
  return (
    <section>
      <Wrapper className="md:flex md:items-center md:gap-12 md:justify-center ">
        <div className="py-8">
          <h1 className="text-[#141414] font-bold text-4xl min-[852px]:text-5xl">
            Show Them <br />
            Dont Just Tell
          </h1>

          <p className="text-[black] mt-4 max-w-lg">
            Help your friends and loved ones by creating and sending videos on
            how to get things done on a website.
          </p>

          <button className="rounded-md bg-[#120B48] text-white items-center justify-center py-3 px-6 flex flex-nowrap gap-4 mt-8 hover:bg-[#120b48c4]">
            Install HelpMeOut
            <img src={arrowRight} alt="" />
          </button>
        </div>

        <div className="mt-8 mb-16 max-w-lg mx-auto md:mb-24 md:mt-20 md:mx-0">
          <Collage />
        </div>
      </Wrapper>
    </section>
  );
}
