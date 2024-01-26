import adobe from "../assets/Adobe.png";
import tutor from "../assets/tutors.png";
import women from "../assets/woman.png";
import grid from "../assets/grid.png";

export function Collage() {
  return (
    <div className="relative mx-2 grid aspect-[8/5] grid-cols-2 grid-rows-2 gap-4 md:mx-4 md:gap-6">
      <div className="rounded-lg overflow-hidden col-start-1 col-end-2 row-start-1 row-end-2 md:rounded-lg">
        <img src={adobe} alt="" className="h-full w-full" />
      </div>
      <div className="rounded-lg overflow-hidden col-start-1 col-end-2 row-start-2 row-end-3 md:rounded-lg">
        <img src={tutor} alt="" className="h-full w-full" />
      </div>
      <div className="rounded-lg overflow-hidden col-start-2 col-end-3 row-start-1 row-end-3 md:rounded-lg">
        <img src={women} alt="" className="h-full w-full" />
      </div>

      <div className="absolute -z-10 left-[60%] -right-[7%] bottom-[45%] -top-[12%] ">
        <img src={grid} alt="" className="w-full h-full" />
      </div>
      <div className="absolute -z-10 right-[60%] -left-[7%] top-[48%] -bottom-[16%] ">
        <img src={grid} alt="" className="w-full h-full" />
      </div>
    </div>
  );
}
