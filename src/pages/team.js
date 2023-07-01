import React from "react";
import Animated from "@/components/Animated";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
import { motion } from "framer-motion";
import Transition from "@/components/Transition";
// import Program2 from "../../public/images/programs/p2.jpeg";
import Pillar1 from "../../public/images/teams/pillars/Manik.png";
import Pillar3 from "../../public/images/teams/pillars/Rupashi.png";
import Pillar4 from "../../public/images/teams/pillars/Sanjay.png";
import Pillar2 from "../../public/images/teams/pillars/Vriti.png";

import Mentor1 from "../../public/images/teams/mentors/shivangi.png";
import Mentor2 from "../../public/images/teams/mentors/ishan.png";
import Mentor3 from "../../public/images/teams/mentors/vineet.png";
import Mentor4 from "../../public/images/teams/mentors/alisha.png";
import Mentor5 from "../../public/images/teams/mentors/kavi.png";
import Mentor6 from "../../public/images/teams/mentors/arshia.png";

const FramerImage = motion(Image);

const Program = ({ type, title, summary, img }) => {
  return (
    <article
      className="w-full flex flex-col items-center justify-center
    rounded-2xl border border-solid border-dark bg-light
    p-6 relative shadow-2xl
    xs:p-4"
    >
      <div
        className="absolute top-0 -right-3
              -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-2xl
              md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]"
      />
      <Link
        href="/"
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-[2rem]"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>

      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span
          className="text-primary font-medium text-xl lg:text-lg 
        md:text-base "
        >
          {type}
        </span>
        <Link
          href="/"
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2
            className="my-2 w-full text-left text-3xl font-bold uppercase 
          lg:text-2xl sm:text-sm"
          >
            {title}
          </h2>
        </Link>

        <p className="my-2 text-dark sm:text-sm">{summary}</p>
      </div>
    </article>
  );
};

const team = () => {
  // const router = useRouter();

  // const handleClickLogo = (link) => {
  //   router.push(link);
  // };
  return (
    <>
      <Head>
        <title>Our Team</title>
      </Head>
      <main className="border-b-2 border-solid border-dark">
        <Layout>
          <Transition />
          <Animated
            text="Our Team"
            className="mb-20
          lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />

          {/* <div
            className="mb-16 flex items-center self-start mt-2
              lg:self-center "
          >
            <div className="m-auto flex">
              <Link
                href="/"
                className="uppercase mr-10 flex items-center bg-primary text-light 
            p-2.5 px-6 rounded-lg text-lg font-semibold
            hover:bg-light hover:text-primary border
            border-solid border-transparent hover:border-primary
            md:p-2 md:px-4 md:text-base active:bg-light active:text-primary"
              >
                Pillars
              </Link>
              <Link
                href="/mentors"
                className="uppercase flex items-center bg-primary text-light 
            p-2.5 px-6 rounded-lg text-lg font-semibold
            hover:bg-light hover:text-primary border
            border-solid border-transparent hover:border-primary
            md:p-2 md:px-4 md:text-base"
              >
                Mentors
              </Link>
            </div>
          </div> */}

          <Animated
            text="Pillars"
            className="mb-20 !underline !text-3xl
          lg:!text-3xl sm:mb-8 sm:!text-3xl xs:!text-3xl"
          />
          <div
            className="grid grid-cols-12 gap-24 gap-y-32
          xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0"
          >
            <div className="col-span-6 sm:col-span-12">
              <Program
                type=""
                title="Manik Bajaj"
                summary="Our director, has worked as a marketing professional with leading corporations for 27 years. A teacher by qualification, now empowering young girls to effectively communicate to reach their dreams."
                img={Pillar1}
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Program
                type=""
                title="Vriti Bajaj"
                summary="A Research Scholar from University of Delhi. 
                Creatively empowers young people, building safe spaces for over 10 years! 
                Creating leaders who propagate such spaces with thousands across the government 
                and private sector."
                img={Pillar2}
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Program
                type=""
                title="Rupashi Puri"
                summary="Our director, has a degree in human resource management and services 
                from Ryerson University and has worked as a senior manager is CStech for over 6 years."
                img={Pillar3}
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Program
                type=""
                title="Sanjay Kumar"
                summary="A hotel management graduate, is a technical consultant at our organization. Supports in curriculum development , staff development , teaching and training. An entrepreneurial leader building teams."
                img={Pillar4}
              />
            </div>
          </div>

          <Animated
            text="Mentors"
            className="mt-20 mb-20 !underline !text-3xl
          lg:!text-3xl sm:mb-8 sm:!text-3xl xs:!text-3xl"
          />
          <div
            className="grid grid-cols-12 gap-24 gap-y-32
          xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0"
          >
            <div className="col-span-6 sm:col-span-12">
              <Program
                type=""
                title="Shivangi Khattar"
                summary="Shivangi Khattar is a Psychologist with an M.A. in Psychology from Teachers College, Columbia University. 
                She is currently pursuing her PhD in Psychology at Ashoka University."
                img={Mentor1}
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Program
                type=""
                title="Ishan Gupta"
                summary="Stanford university business graduate who has worked with linkedin for 2 years and is now working with Bytedance"
                img={Mentor2}
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Program
                type=""
                title="Vineet Bhalla"
                summary="A lawyer and policy researcher. He secured a B.A., LL.B. (Hons.) degree from the WB National University of Juridical Sciences, 
                Kolkata, and is a member of the Bar Council of Delhi."
                img={Mentor3}
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Program
                type=""
                title="Alisha Kandal"
                summary="Experienced social media manager with a history of working in the luxury goods and jewellery sector."
                img={Mentor4}
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Program
                type=""
                title="Kavi Nanda"
                summary="MBA graduate from the National University of Singapore with a specialization in business strategy."
                img={Mentor5}
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Program
                type=""
                title="Arshia Dar"
                summary="Arshia has worked with several big corporations like amazon and is currently working with Titan as a Product Marketing Strategist. 
                "
                img={Mentor6}
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default team;
