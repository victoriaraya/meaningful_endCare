import Image from "next/image";

const About = () => {
  return (
    <div className="flex flex-col gap-14 [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#d2b48c_100%)] text-[#4F7641] h-full px-6 pb-4">
      <div className="flex">
        <div className="flex-col">
          <h1 className="text-4xl text-left pt-4 pb-8">
            About Meaningful EndCare
          </h1>
          <div className="text-lg pb-32">
            <p>
              {" "}
              'A goal without a plan in just a wish.' This quote empasizes the
              importance of having a clear plan to achieve a goal. By creating
              end-of-life plans, you ensure your wishes are respected, lessen
              the emotional and financial burden on loved ones, and bring peace
              of mind to you and your family.{" "}
            </p>
            <br />
            <p>
              Many people have not thought about end-of-life arrangements and
              feel overwhelmed about where to begin. I'm here to help answer
              common questions and provide support throughout the process.{" "}
            </p>
            <br />
            <p>
              My work begins when people are healthy; I help them consider what
              the end of their life might look like and support them in creating
              a plan. For those facing terminal illness or advanced age, I
              assist in developing a personalized plan for a peaceful
              end-of-life experience. After a passing, I guide families in
              wrapping up the affairs of a loved one's life.
            </p>{" "}
            <br />
            <p>
              The goal of Meaningful EndCare is to provide holistic,
              compassionate care that addresses the physical, emotional,
              spiritual, and practical needs of the dying person and their loved
              ones.{" "}
            </p>
          </div>
        </div>
        <Image
          src={"/images/couple.jpg"}
          alt="elderly couple"
          width={400}
          height={500}
          quality={100}
          className="pt-4 pl-4"
        />
      </div>
      <div className="grid grid-cols-2">
        <Image
          src={"/images/holding_hands.jpg"}
          alt="holding hands"
          width={500}
          height={600}
          quality={100}
          className="row-span-2 ml-4 mt-10"
        />
        <h1 className="text-4xl text-left mr-10">About Me</h1>
        <div className="text-lg">
          <p>
            I have always been deeply fascinated by the profound impact that
            compassionate end-of-life support can have on individuals and their
            loved ones. Through personal experiences of over 15 years as a
            hospice and palliative care nurse, I have come to understand the
            importance of hollistic care and the need for compassionate guidance
            during this significant transition.{" "}
          </p>
          <br />{" "}
          <p>
            When death happened, families were not mentally, emotionally and
            financially prepared. My own life experiences have led ME to an
            expanded curiosity about what is possible for end-of-life care.
            Making a formal plan to help the guess work out of what you want and
            communicating that with your loved ones may actually alleviate some
            of the stress that comes with death; like funeral plans, body
            disposition and even what outfit you want to wear.{" "}
          </p>{" "}
          <br />{" "}
          <p>
            Going through end-of-life arrangements is very emotional and the
            end-of-life death doula help the patient and their loved ones find
            peace and ease their anxiety and aid in comfort to promote a
            personalized passage.{" "}
          </p>{" "}
          <br />
          <p>
            I am a certified death doula and certified in advance healthcare
            planning.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
