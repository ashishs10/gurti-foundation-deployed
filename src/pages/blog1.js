import React from "react";
import Animated from "@/components/Animated";
import Head from "next/head";
import Layout from "@/components/Layout";
import Image from "next/image";

import Transition from "@/components/Transition";
import blog11 from "../../public/images/blogs/blog1-1.png";
import blog12 from "../../public/images/blogs/blog1-2.png";

const blog1 = () => {
  return (
    <>
      <Head>
        <title>Blog: You Matter</title>
      </Head>
      <Transition />
      <Layout className="pt-16">
        <Animated
          text="You matter: It’s okay not to be okay"
          className="mb-16
      lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
        />
        <div className="">
          <h2 className="text-center text-primary text-2xl">
            “Just because no one else can heal or do your inner work for you
            doesn’t mean that you can, should, or need to do it alone” - Lisa
            Olivera
          </h2>
          <p className="mt-10">
            According to the CDC, Mental health includes our emotional,
            psychological, and social well-being. It affects how we think, feel,
            and act. It also helps determine how we handle stress, relate to
            others, and make healthy choices. Mental health is as important as
            physical health at every stage of life, from childhood and
            adolescence through adulthood. But do we really take our mental
            well-being seriously?
          </p>
          <p className="mt-2">
            There are various stages and types of mental health problems
            including eating disorders, anxiety disorders, depression,
            personality disorders, and many more. The DSM-5 (Diagnostic and
            Statistical Manual of Mental Disorders) includes information on
            about 300 mental conditions. This is a handbook published by the
            American Psychiatric Association. It is used by health professionals
            to help identify and diagnose mental illness. Mental illness
            diagnosis is not often completely obvious. In the medical world,
            there is been a lot of discussion concerning what qualifies as a
            mental illness.
          </p>
          <p className="mt-2">
            If it has so many discussions going around it then why at some
            places is it still considered shameful to admit that one has been
            going through these mental health issues? Recently I came across an
            interview of Virat Kohli’s with Star Sports where he said and I
            quote:
          </p>
          <p className="mt-1 text-center">
            <i>
              “I am not shy to admit that I was feeling mentally down. We don’t
              want to be looked at as mentally weak. Trust me, faking to be
              strong is far worse than admitting to being weak.”
            </i>
          </p>
          <Image
            src={blog11}
            alt="blog-image"
            className="rounded-2xl float-left mr-20 mt-5 mb-5 h-[400px]"
          />
          <p className=" mt-2 ">
            I do agree with what he said. I think there is nothing wrong with
            feeling low, not wanting to do the things you usually do, or wanting
            to take a break. There are times when you want to be alone and maybe
            introspect and that’s Okay! And I believe that somebody showing
            their true emotions even if it’s feeling low is the strongest thing
            ever because being vulnerable in front of anybody is not easy and if
            somebody has the courage to do so it needs to be appreciated not
            questioned.
          </p>
          <p className="mt-2">
            But feeling low and not wanting to do anything is not the only
            symptom of mental health problems; there are more to these symptoms
            that affect a person’s daily life drastically. These symptoms can
            include:
          </p>
          <ul className="list-disc lg:pl-5 xl:pl-[500px] mt-1">
            <li>Overthinking about everything</li>
            <li>Unreasonable anger or irritability</li>
            <li>Poor concentration and memory </li>
            <li>Increased or decreased sleep</li>
            <li>Increased or low appetite</li>
            <li>Lack of motivation</li>
            <li>Withdrawing from people and one’s social life</li>
            <li>
              Feelings that life is not worth living or more serious suicidal
              thoughts
            </li>

            <li>
              Not looking after personal hygiene or other responsibilities
            </li>
          </ul>
          <p className="mt-2">
            If one is struggling with any of these issues don’t take it lightly
            and seek professional help from therapists, psychiatrists, or
            psychologists.
          </p>
          <p className="mt-2">
            According to the UN, COVID-19 did more than increase the prevalence
            of mental health issues, it also accelerated positive momentum in
            our communities to raise awareness about these issues and increased
            accessibility to crucial support and services for those affected.
            But still, mental illness is often misrepresented and misunderstood
            — largely because we cannot “see” it. We can’t tell by looking at
            someone how much they are suffering so try to be empathetic toward
            others and try to extend a helping hand wherever they require.
          </p>
          <Image
            src={blog12}
            alt="blog-image"
            className="rounded-2xl float-right mr-20 mt-5 mb-5"
          />

          <p className=" mt-2">
            But most importantly coming back to the question we started with,{" "}
            <i className="text-purple">
              do we really take our mental well-being seriously?
            </i>{" "}
            Give it a thought!
          </p>
          <p className="mt-2">
            Try sharing your story because I think everybody reading this has
            felt mentally down at some point in their life. Music is my way to
            deal with my lows and I am not afraid to take breaks and give myself
            some time to bounce back stronger.
          </p>
          <p className="mt-2">How do you deal with your bad days?</p>
          <p className="mt-2">How do you bounce back stronger each time? </p>
          <p className="mt-2">
            I know you all are strong and hanging in there with that big bright
            smile of yours but let yourself be free by sharing your stories
            because
            <strong> Your story matters! You matter! </strong>
          </p>
          <p className=" mt-2 font-bold text-primary">
            This blog has been conceptualized by Vigyata Gupta a Youth Blogger
            with Gurti Foundation.
          </p>
          <p className="mt-2 font-bold text-primary">
            This mental health awareness month let us know your Story ; Connect
            with us and uncover magic!
          </p>
          <p className="mt-2">
            Website:<span> </span>
            <a
              href="https://www.gurtifoundation.org/"
              className="underline text-blue-600"
            >
              www.gurtifoundation.org
            </a>
          </p>
          <p className="mt-2">
            Linkedin:<span> </span>
            <a
              href="https://www.linkedin.com/company/gurtifoundation"
              className="underline text-blue-600"
            >
              https://www.linkedin.com/company/gurtifoundation/
            </a>
          </p>
          <p className="mt-2">
            Facebook:<span> </span>
            <a
              href="https://www.facebook.com/Gurtifoundation"
              className="underline text-blue-600"
            >
              https://www.facebook.com/Gurtifoundation/
            </a>
          </p>
          <p className="mt-2">
            Instagram:<span> </span>
            <a
              href="https://www.instagram.com/gurti_foundation"
              className="underline text-blue-600"
            >
              https://www.instagram.com/gurti_foundation/
            </a>
          </p>
          <p className="mt-2">
            Intern with us:<span> </span>
            <a
              href="https://forms.gle/9FBmW348fyEuqzjf6"
              className="underline text-blue-600"
            >
              https://forms.gle/9FBmW348fyEuqzjf6
            </a>
          </p>

          <p className="mt-6 text-[#c00000]">
            Gurti Foundation is a Gurgaon based NGO that supports vulnerable
            young girls from low-income families (between 14 -21 years) to
            achieve their dreams.
          </p>

          <p className="mt-6 text-[#c00000]">References: </p>
          <ul className="list-decimal ml-8">
            <li>
              Definition<span> </span>
              <a
                href="https://www.cdc.gov/mentalhealth/"
                className="underline text-blue-600"
              >
                Mental Health | CDC
              </a>
            </li>
            <li>
              Impact of covid 19 -<span> </span>
              <a
                href="https://www.un.org/en/un-chronicle/pandemic-accelerant-how-covid-19-advanced-our-mental-health-priorities"
                className="underline text-blue-600"
              >
                The Pandemic Accelerant: How COVID-19 Advanced Our Mental Health
                Priorities | United Nations
              </a>
            </li>
            <li>
              Types of mental disorder<span> </span>
              <a
                href="https://www.who.int/news-room/fact-sheets/detail/mental-disorders"
                className="underline text-blue-600"
              >
                Mental disorders
              </a>
            </li>
          </ul>
        </div>
      </Layout>
    </>
  );
};

export default blog1;
