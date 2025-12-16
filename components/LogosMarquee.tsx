"use client";

import React from "react";
import Container from "./Container";

type Product = "Inbox" | "Studio" | "Elevate";
type Testimonial = {
  product: Product;
  quote: string;
  name: string;
  avatar?: string;
};

const testimonials: Testimonial[] = [
  // Studio
  {
    product: "Studio" as const,
    quote:
      "Love working with Trackstack. The team is super professional, and the services are really good. I’ve been getting way more promos lately because of the inbox, and the studio is growing every day! Really thanks, you guys are the best!",
    name: "Brad Brunner",
  },
  {
    product: "Studio" as const,
    quote:
      "Trackstack has been a game-changer. It powers everything behind Serotonin Studio — from handling demo submissions to managing student tracks. It’s honestly helped me future-proof my music career and run things way more smoothly. Couldn’t recommend it enough.",
    name: "Brendan James",
  },
  {
    product: "Studio" as const,
    quote:
      "Since joining the platform, our studio has experienced a 3x increase in member engagement and a steady stream of new client sign-ups every month. It’s helped us grow faster and more efficiently than we ever expected. I finally feel like we’re running the business instead of chasing it.",
    name: "Freddy (Kick&Bass)",
  },
  {
    product: "Studio" as const,
    quote:
      "This platform has completely transformed the way we operate. We’ve doubled our monthly revenue and built a stronger community around our studio. It’s been the single most impactful decision we’ve made for our growth.",
    name: "Timmy P",
  },
  // Inbox
  {
    product: "Inbox" as const,
    quote:
      "Trackstack’s inbox has completely streamlined my process when it comes to receiving new music from producers worldwide. Having a central hub for all submission enables me to check promos efficiently, ensuring everyone’s beats are heard. It’s also given me the opportunity to reach out to the artists directly, to let them know I’ve been supporting their tracks in my live shows, or to offer additional feedback. It’s become an essential tool for me, and has resolved a lot of problems previously faced when digging for fresh tunes!",
    name: "James Poole",
  },
  {
    product: "Inbox" as const,
    quote:
      "Trackstack completely revolutionised my workflow and made managing a busy demo inbox so much easier. It’s transformed how our team runs the label - collaboration is smoother, and our communication with artists has never been better. The platform's design keeps everyone in the loop, making feedback and responses more transparent and timely.",
    name: "Dan Costello",
  },
  {
    product: "Inbox" as const,
    quote:
      "Inbox is the most streamlined and stress free tool for sending and receiving music. It simplifies what seems like a complex world into a few clicks. I have had music signed and great feedback/reactions to my music from top artists through the use of inbox. Trackstack have really nailed it with this.",
    name: "Tim Taylor",
  },
  {
    product: "Inbox" as const,
    quote:
      "While it usually took me days to go through demos and promos, I can now go through everything and keep my tracks organised within a few hours. Inbox is a game changer.",
    name: "Detlef",
  },
  {
    product: "Inbox" as const,
    quote:
      "Trackstack has created a one stop shop for all our submissions. Can easily breeze through one place instead of 4 different sources. 10 out of 10 software.",
    name: "Ky William",
  },
  {
    product: "Inbox" as const,
    quote:
      "Trackstack has been such a lifesaver when it comes to receiving promos! Having everything in one place makes it so much easier to be organised and unlike emails and DM’s nothing gets missed. Not to mention makes sending demos and keeping track of them super easy too!",
    name: "Jenny C",
  },
  {
    product: "Inbox" as const,
    quote:
      "Im part of Inbox since the beginning, and i can tell im a lucky one. It has changed the game of my dj sets, my record label and generally everything.",
    name: "Reelow",
  },
  {
    product: "Inbox" as const,
    quote:
      "Inbox means I can listen to every demo and promo fast during my busy schedule. Getting back to artists is important to me and Flow Inbox makes this easy and reliable",
    name: "Jamie Jones",
  },
  {
    product: "Inbox" as const,
    quote:
      "It's so much better for everyone because it means I can keep on top of Demos and promos easily. I can give feedback to every single song. Everyone will know definitely whether the song is being listened to or not. It's just a much better process.",
    name: "Patrick Topping",
  },
  {
    product: "Inbox" as const,
    quote:
      "Trackstack Inbox has completely transformed how we manage demos. Before, we were juggling emails and a Trello board just to stay on top of submissions and A&R conversations. It was messy, time-consuming, and things would often slip through the cracks. Since switching to Trackstack Inbox, everything is finally in one place — submissions, feedback, internal notes, and decision-making. It keeps our entire A&R process organised and efficient, and we’re now able to give every track the attention it deserves without anything getting lost or forgotten. It’s streamlined our workflow massively and made communication between the team so much easier.",
    name: "Black 7",
  },
  {
    product: "Inbox" as const,
    quote:
      "Trackstack is a brilliant forward thinking platform that allows DJ's and Producers to share promos directly with some of the biggest DJ's and labels in the world with the ability to get feedback, live support or records signed to those labels. Being able to track if your promos are being downloaded or supported vs trying to email DJ's/Labels directly is incredibly helpful for me and has lead to getting a number of tracks signed and some massive DJ support via platform. It is now my go to site to check promos & send promos too!",
    name: "DJ SKT",
  },
  {
    product: "Inbox" as const,
    quote:
      "Trackstack has made managing promos and demos more streamlined. It’s helped me stay organised, go through submissions efficiently, and ensures everything that is sent to my inbox here gets listened to.",
    name: "Niteplan",
  },
  {
    product: "Inbox" as const,
    quote:
      "Trackstack inbox for me is not only about ease and all of these things, but about finding new artists who I haven’t heard of before and connecting with people who maybe don’t have the outlets there music deserves",
    name: "Kodewerk",
  },
  // Studio
  {
    product: "Studio" as const,
    quote:
      "Working with Trackstack has been a great experience. The team have been very friendly & supportive throughout my journey, and I am confident my studio is ready to be launched to the world. They were encouraging of my ideas and helped me improve my product. Would highly recommend working with these guys.",
    name: "Kev Christopher",
  },
  // Inbox
  {
    product: "Inbox" as const,
    quote:
      "Having a trackstack to receive promos and send to labels has made the process much more enjoyable and easy. Very simple to use and streamlines the process to not having to dig like crazy to find emails for bigger DJs/labels. It’s also helped me stay much more organised sorting promos for myself!",
    name: "James Wyler",
  },
  {
    product: "Inbox" as const,
    quote:
      "I can say that trackstack takes me to the next level of helping and showing my skills to the new producers who want to make a step in their carrer. Having this opportunity i'm really gladful.",
    name: "Gruuvelements",
  },
  {
    product: "Inbox" as const,
    quote:
      "Before Trackstack, I was constantly sending out demos and promos, never knowing if anyone was actually listening. Now, I can see exactly when DJs, artists, and labels check out my tracks. It’s been a game-changer TrackStack has propelled me into the music industry by giving me visibility and real engagement. Thanks to this, I’ve landed major releases on respected labels that once felt out of reach.",
    name: "Charlesworth",
  },
  {
    product: "Inbox" as const,
    quote:
      "Trackstack for me has been a total game changer. Not only does it speed up the demo process, Visually for me It makes things so much easier too. I can’t imagine going back to emails now, I’m with Trackstack for the foreseeable that’s for sure. The team are amazing to work alongside too.",
    name: "Mike Morrisey",
  },
  // Studio
  {
    product: "Studio" as const,
    quote:
      "Trackstack Studio has proven to be an incredibly valuable and seamless platform for anyone diving into music education. As a subscription-based learning hub, it offers a smooth, intuitive experience that makes learning music production, mixing, and industry skills both accessible and enjoyable. From the moment you sign up, the platform is easy to navigate, with a clean interface that helps you find exactly what you need without any friction. Overall, Trackstack Studio takes the guesswork out of music education. It’s reliable, thoughtfully designed, and clearly built with creators in mind. Whether you’re aiming to go professional or just hone your skills, Trackstack makes the journey smooth, efficient, and genuinely enjoyable for both creator and subscriber.",
    name: "Karl Lingard",
  },
  // Inbox
  {
    product: "Inbox" as const,
    quote:
      "Trackstack has been a total game changer for my career as a producer, allowing me to get my music in front of DJs who were previously out of reach",
    name: "Davide T",
  },
];

const Card: React.FC<Testimonial> = ({ quote, name, product, avatar }) => (
  <div className="rounded-2xl bg-trackstack-midnight95 border border-white/10 p-4 sm:p-6 space-y-3 sm:space-y-4">
    <div>
      <img
        src="https://cdn.prod.website-files.com/67bc62de4fbee3526afb633e/67c7fa45625c01d90c747a52_Vector2345.svg"
        loading="lazy"
        alt=""
      />
      <p className="text-white/80 text-sm sm:text-base leading-snug mt-2">{quote}</p>
    </div>
    <div className="flex items-center gap-3">
      {avatar ? (
        <img src={avatar} loading="lazy" alt="" className="h-8 w-8 sm:h-10 sm:w-10 rounded-full object-cover" />
      ) : (
        <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-white/10 flex items-center justify-center text-[0.625em] sm:text-xs text-white/70">
          {product}
        </div>
      )}
      <div>
        <div className="text-white font-medium text-sm sm:text-base">{name}</div>
        <div className="text-white/60 text-xs sm:text-sm">{product}</div>
      </div>
    </div>
  </div>
);

const LogosMarquee: React.FC = () => {
  const colLeft = testimonials.filter((_, i) => i % 3 === 0);
  const colMid = testimonials.filter((_, i) => i % 3 === 1);
  const colRight = testimonials.filter((_, i) => i % 3 === 2);

  return (
  <section className="py-24">
    <Container>
      <div className="mb-12">
        <div className="font-mono text-xs font-medium text-white/60">TESTIMONIALS</div>
        <h2 className="text-4xl md:text-5xl font-normal leading-tight">Preferred by Professionals</h2>
      </div>

      {/* Mobile single-column marquee */}
      <div className="md:hidden">
        <div className="relative">
          <div
            className="h-[22.5em] overflow-hidden"
            style={{
              WebkitMaskImage:
                'linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,1) 12%, rgba(0,0,0,1) 88%, rgba(0,0,0,0))',
              maskImage:
                'linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,1) 12%, rgba(0,0,0,1) 88%, rgba(0,0,0,0))',
            }}
          >
            <div className="flex flex-col gap-4 will-change-transform" style={{ animation: 'marquee-up 80s linear infinite' }}>
              <div className="flex flex-col gap-4">
                {testimonials.map((t, i) => (
                  <Card key={`m-${i}`} {...t} />
                ))}
              </div>
              <div className="flex flex-col gap-4" aria-hidden="true">
                {testimonials.map((t, i) => (
                  <Card key={`m-dup-${i}`} {...t} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop 3-column marquee */}
      <div className="hidden md:block">
        <div className="relative">
          <div
            className="grid grid-cols-3 gap-6"
            style={{
              WebkitMaskImage:
                'linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,1) 12%, rgba(0,0,0,1) 88%, rgba(0,0,0,0))',
              maskImage:
                'linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,1) 12%, rgba(0,0,0,1) 88%, rgba(0,0,0,0))',
            }}
          >
          {/* Left column (scrolls down) */}
          <div className="h-[32.5em] overflow-hidden">
            <div className="flex flex-col gap-6 will-change-transform" style={{ animation: 'marquee-down 80s linear infinite' }}>
              <div className="flex flex-col gap-6">
                {colLeft.map((t, i) => (
                  <Card key={`left-${i}`} {...t} />
                ))}
              </div>
              <div className="flex flex-col gap-6" aria-hidden="true">
                {colLeft.map((t, i) => (
                  <Card key={`left-dup-${i}`} {...t} />
                ))}
              </div>
            </div>
          </div>

          {/* Middle column (scrolls up) */}
          <div className="h-[32.5em] overflow-hidden">
            <div className="flex flex-col gap-6 will-change-transform" style={{ animation: 'marquee-up 80s linear infinite' }}>
              <div className="flex flex-col gap-6">
                {colMid.map((t, i) => (
                  <Card key={`mid-${i}`} {...t} />
                ))}
              </div>
              <div className="flex flex-col gap-6" aria-hidden="true">
                {colMid.map((t, i) => (
                  <Card key={`mid-dup-${i}`} {...t} />
                ))}
              </div>
            </div>
          </div>

          {/* Right column (scrolls down) */}
          <div className="h-[32.5em] overflow-hidden">
            <div className="flex flex-col gap-6 will-change-transform" style={{ animation: 'marquee-down 80s linear infinite' }}>
              <div className="flex flex-col gap-6">
                {colRight.map((t, i) => (
                  <Card key={`right-${i}`} {...t} />
                ))}
              </div>
              <div className="flex flex-col gap-6" aria-hidden="true">
                {colRight.map((t, i) => (
                  <Card key={`right-dup-${i}`} {...t} />
                ))}
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </Container>
    {/* Local keyframes for continuous marquee animation */}
    <style jsx global>{`
      @keyframes marquee-down {
        0% { transform: translateY(0); }
        100% { transform: translateY(-50%); }
      }
      @keyframes marquee-up {
        0% { transform: translateY(-50%); }
        100% { transform: translateY(0); }
      }
    `}</style>
  </section>
  );
};

export default LogosMarquee;
