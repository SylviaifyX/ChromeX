import Rec from "../assets/rec.png";
import { Wrapper } from "./Wrapper";

export function HowItWorks() {
  const howItWorks = [
    {
      title: "Record Screen",
      description:
        'Click the "Start Recording" button in our extension. choose which part of your screen to capture and who you want to send it to.',
      image: Rec,
    },
    {
      title: " Share Your Recording",
      description:
        "We generate a shareable link for your video. Simply send it to your audience via email or copy the link to send via any platform.",
      image: Rec,
    },
    {
      title: "Learn Effortlessly",
      description:
        "Recipients can access your video effortlessly through the provided link, with our user-friendly interface suitable for everyone.",
      image: Rec,
    },
  ];

  return (
    <section id="how-it-works">
      <Wrapper className="py-8">
        <h1 className="text-3xl font-bold text-center text-[#141414]">
          How it works{" "}
        </h1>

        <ul className="mt-10 flex flex-col gap-16 md:flex-row">
          {howItWorks.map(({ title, description, image }, index) => (
            <Li
              title={title}
              description={description}
              image={image}
              key={index}
              index={index + 1}
            />
          ))}
        </ul>
      </Wrapper>
    </section>
  );
}

const Li = ({ title, description, image, index }) => {
  return (
    <li className="max-w-md mx-auto md:mx-0">
      <div className="mx-auto bg-[#1B233D] h-10 w-10 grid place-items-center text-2xl font-semibold rounded-full text-white">
        {index}
      </div>
      <h1 className="text-2xl text-[#1B233D] font-semibold text-center mt-6">
        {title}{" "}
      </h1>
      <p className="text-center text-[#616163] mt-3">{description}</p>
      <div className="mt-12">
        <img src={image} alt="record" />
      </div>
    </li>
  );
};
