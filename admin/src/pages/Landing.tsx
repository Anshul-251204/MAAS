import React from "react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useNavigate } from "react-router-dom";
const Testimonials: React.FC = () => {
  const testimonials = [
    {
      img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      text: "StoreLaunch made it incredibly easy to get my business online. I was up and running in minutes!",
      userDetails: "Sophia Carter, Founder of 'EcoLiving'",
    },
    {
      img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      text: `The built-in marketing tools are a game-changer. I've seen a significant increase in sales since switching to StoreLaunch.`,
      userDetails: "Ethan Bennett, Owner of 'GearUp'",
    },
    {
      img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      text: "StoreLaunch made it incredibly easy to get my business online. I was up and running in minutes!",
      userDetails: "Sophia Carter, Founder of 'EcoLiving'",
    },
  ];
  return (
    <div>
      <h2 className="px-4 pt-5 pb-3 text-[22px] leading-tight font-bold tracking-[-0.015em] text-[#0d141c]">
        Loved by entrepreneurs everywhere
      </h2>

      <div className="flex justify-between gap-4 p-4">
        {testimonials.map((testimonial,idx) => (
          <div key={idx} className="flex h-full min-w-40 flex-1 flex-col gap-4 rounded-lg">
            <div className="flex aspect-square h-[40vh] w-full flex-col overflow-hidden rounded-xl bg-cover bg-center bg-no-repeat">
              <img
                className="h-full w-full object-cover"
                src={testimonial.img}
                alt=""
              />
            </div>
            <div>
              <p className="text-base leading-normal font-medium text-[#0d141c]">
                {testimonial.text}
              </p>
              <p className="text-sm leading-normal font-normal text-[#49739c]">
                {testimonial.userDetails}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
const Landing: React.FC = () => {
  const navigate = useNavigate();

  const redirectToOnBoarding = () => {
    navigate("/onboarding");
  };
  return (
    <div className="group/design-root relative flex size-full min-h-screen flex-col overflow-x-hidden bg-slate-50">
      <div className="layout-container flex h-full grow flex-col">
        <header className="flex items-center justify-between border-b border-solid border-b-[#e7edf4] px-10 py-3 whitespace-nowrap">
          <div className="flex items-center gap-4 text-[#0d141c]">
            <div className="size-4">
              <svg
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 42.4379C4 42.4379 14.0962 36.0744 24 41.1692C35.0664 46.8624 44 42.2078 44 42.2078L44 7.01134C44 7.01134 35.068 11.6577 24.0031 5.96913C14.0971 0.876274 4 7.27094 4 7.27094L4 42.4379Z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
            <h2 className="text-lg leading-tight font-bold tracking-[-0.015em] text-[#0d141c]">
              StoreLaunch
            </h2>
          </div>
          <div className="flex flex-1 justify-end gap-8">
            <div className="flex items-center gap-9">
              <a
                className="text-sm leading-normal font-medium text-[#0d141c]"
                href="#"
              >
                Features
              </a>
              <a
                className="text-sm leading-normal font-medium text-[#0d141c]"
                href="#"
              >
                Pricing
              </a>
              <a
                className="text-sm leading-normal font-medium text-[#0d141c]"
                href="#"
              >
                Testimonials
              </a>
              <a
                className="text-sm leading-normal font-medium text-[#0d141c]"
                href="#"
              >
                FAQ
              </a>
            </div>
            <div className="flex gap-2">
              <Button onClick={redirectToOnBoarding}>
                <span className="truncate">Get Started Free</span>
              </Button>
              <Button variant={"outline"}>
                <span className="truncate">Watch Demo</span>
              </Button>
            </div>
          </div>
        </header>
        <div className="flex flex-1 justify-center px-40 py-5">
          <div className="layout-content-container flex max-w-[960px] flex-1 flex-col">
            <div className="@container">
              <div className="flex flex-col gap-6 px-4 py-10 @[480px]:gap-8 @[864px]:flex-row">
                <div className="aspect-video w-full rounded-xl bg-cover bg-center bg-no-repeat @[480px]:h-auto @[480px]:min-w-[400px] @[864px]:w-full">
                  <img
                    className="h-full w-full rounded-2xl object-cover"
                    src="landing-page-store-image.jpg"
                    alt=""
                  />
                </div>
                <div className="flex flex-col gap-6 @[480px]:min-w-[400px] @[480px]:gap-8 @[864px]:justify-center">
                  <div className="flex flex-col gap-2 text-left">
                    <h1 className="text-4xl leading-tight font-black tracking-[-0.033em] text-[#0d141c] @[480px]:text-5xl @[480px]:leading-tight @[480px]:font-black @[480px]:tracking-[-0.033em]">
                      Build Your Store. Zero Skills Required.
                    </h1>
                    <h2 className="text-sm leading-normal font-normal text-[#0d141c] @[480px]:text-base @[480px]:leading-normal @[480px]:font-normal">
                      Launch your online business instantly with our
                      plug-and-play marketplace builder. No coding. No design.
                      Just simple setup.
                    </h2>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <Button onClick={redirectToOnBoarding}>
                      <span className="truncate">Get Started Free</span>
                    </Button>
                    <Button variant={"outline"}>
                      <span className="truncate">Watch Demo</span>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="@container flex flex-col gap-10 px-4 py-10">
              <div className="flex flex-col gap-4">
                <h1 className="tracking-light max-w-[720px] text-[32px] leading-tight font-bold text-[#0d141c] @[480px]:text-4xl @[480px]:leading-tight @[480px]:font-black @[480px]:tracking-[-0.033em]">
                  Everything You Need to Succeed
                </h1>
                <p className="max-w-[720px] text-base leading-normal font-normal text-[#0d141c]">
                  Our platform provides all the tools necessary to build and
                  grow your online store, from setup to marketing.
                </p>
              </div>
              <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-0">
                <div className="flex flex-1 flex-col gap-3 rounded-lg border border-[#cedbe8] bg-slate-50 p-4">
                  <div
                    className="text-[#0d141c]"
                    data-icon="Storefront"
                    data-size="24px"
                    data-weight="regular"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24px"
                      height="24px"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M232,96a7.89,7.89,0,0,0-.3-2.2L217.35,43.6A16.07,16.07,0,0,0,202,32H54A16.07,16.07,0,0,0,38.65,43.6L24.31,93.8A7.89,7.89,0,0,0,24,96v16a40,40,0,0,0,16,32v64a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V144a40,40,0,0,0,16-32ZM54,48H202l11.42,40H42.61Zm50,56h48v8a24,24,0,0,1-48,0Zm-16,0v8a24,24,0,0,1-48,0v-8ZM200,208H56V151.2a40.57,40.57,0,0,0,8,.8,40,40,0,0,0,32-16,40,40,0,0,0,64,0,40,40,0,0,0,32,16,40.57,40.57,0,0,0,8-.8Zm-8-72a24,24,0,0,1-24-24v-8h48v8A24,24,0,0,1,192,136Z"></path>
                    </svg>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h2 className="text-base leading-tight font-bold text-[#0d141c]">
                      Instant Store Setup
                    </h2>
                    <p className="text-sm leading-normal font-normal text-[#49739c]">
                      Fill in a few details and your store is ready.
                    </p>
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-3 rounded-lg border border-[#cedbe8] bg-slate-50 p-4">
                  <div
                    className="text-[#0d141c]"
                    data-icon="GlobeHemisphereWest"
                    data-size="24px"
                    data-weight="regular"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24px"
                      height="24px"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm88,104a87.62,87.62,0,0,1-6.4,32.94l-44.7-27.49a15.92,15.92,0,0,0-6.24-2.23l-22.82-3.08a16.11,16.11,0,0,0-16,7.86h-8.72l-3.8-7.86a15.91,15.91,0,0,0-11-8.67l-8-1.73L96.14,104h16.71a16.06,16.06,0,0,0,7.73-2l12.25-6.76a16.62,16.62,0,0,0,3-2.14l26.91-24.34A15.93,15.93,0,0,0,166,49.1l-.36-.65A88.11,88.11,0,0,1,216,128ZM143.31,41.34,152,56.9,125.09,81.24,112.85,88H96.14a16,16,0,0,0-13.88,8l-8.73,15.23L63.38,84.19,74.32,58.32a87.87,87.87,0,0,1,69-17ZM40,128a87.53,87.53,0,0,1,8.54-37.8l11.34,30.27a16,16,0,0,0,11.62,10l21.43,4.61L96.74,143a16.09,16.09,0,0,0,14.4,9h1.48l-7.23,16.23a16,16,0,0,0,2.86,17.37l.14.14L128,205.94l-1.94,10A88.11,88.11,0,0,1,40,128Zm102.58,86.78,1.13-5.81a16.09,16.09,0,0,0-4-13.9,1.85,1.85,0,0,1-.14-.14L120,174.74,133.7,144l22.82,3.08,45.72,28.12A88.18,88.18,0,0,1,142.58,214.78Z"></path>
                    </svg>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h2 className="text-base leading-tight font-bold text-[#0d141c]">
                      Custom Domain Support
                    </h2>
                    <p className="text-sm leading-normal font-normal text-[#49739c]">
                      Connect your own brand domain in minutes.
                    </p>
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-3 rounded-lg border border-[#cedbe8] bg-slate-50 p-4">
                  <div
                    className="text-[#0d141c]"
                    data-icon="Megaphone"
                    data-size="24px"
                    data-weight="regular"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24px"
                      height="24px"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M240,120a48.05,48.05,0,0,0-48-48H152.2c-2.91-.17-53.62-3.74-101.91-44.24A16,16,0,0,0,24,40V200a16,16,0,0,0,26.29,12.25c37.77-31.68,77-40.76,93.71-43.3v31.72A16,16,0,0,0,151.12,214l11,7.33A16,16,0,0,0,186.5,212l11.77-44.36A48.07,48.07,0,0,0,240,120ZM40,199.93V40h0c42.81,35.91,86.63,45,104,47.24v65.48C126.65,155,82.84,164.07,40,199.93Zm131,8,0,.11-11-7.33V168h21.6ZM192,152H160V88h32a32,32,0,1,1,0,64Z"></path>
                    </svg>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h2 className="text-base leading-tight font-bold text-[#0d141c]">
                      Built-in Marketing (MAAS)
                    </h2>
                    <p className="text-sm leading-normal font-normal text-[#49739c]">
                      Smart marketing tools to grow your business.
                    </p>
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-3 rounded-lg border border-[#cedbe8] bg-slate-50 p-4">
                  <div
                    className="text-[#0d141c]"
                    data-icon="Code"
                    data-size="24px"
                    data-weight="regular"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24px"
                      height="24px"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M69.12,94.15,28.5,128l40.62,33.85a8,8,0,1,1-10.24,12.29l-48-40a8,8,0,0,1,0-12.29l48-40a8,8,0,0,1,10.24,12.3Zm176,27.7-48-40a8,8,0,1,0-10.24,12.3L227.5,128l-40.62,33.85a8,8,0,1,0,10.24,12.29l48-40a8,8,0,0,0,0-12.29ZM162.73,32.48a8,8,0,0,0-10.25,4.79l-64,176a8,8,0,0,0,4.79,10.26A8.14,8.14,0,0,0,96,224a8,8,0,0,0,7.52-5.27l64-176A8,8,0,0,0,162.73,32.48Z"></path>
                    </svg>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h2 className="text-base leading-tight font-bold text-[#0d141c]">
                      No Coding Required
                    </h2>
                    <p className="text-sm leading-normal font-normal text-[#49739c]">
                      Focus on your business, not tech.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <h2 className="px-4 pt-5 pb-3 text-[22px] leading-tight font-bold tracking-[-0.015em] text-[#0d141c]">
              How It Works
            </h2>
            <div className="grid grid-cols-[40px_1fr] gap-x-2 px-4">
              <div className="flex flex-col items-center gap-1 pt-3">
                <div className="aspect-square size-6 rounded-full bg-cover bg-center bg-no-repeat">
                  {" "}
                  <img
                    className="rounded-2xl"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAXDRswqbOHyeZL3gEQvclaMVPJREX5pQP6JPhU-cZIB1bBf6RbgemzEZk3XlnQaOB2vUJS6SnfHg-XhRM6MizwEq6pHDbfWt7Zrmq47UwrQuXrLA2JhLuHxZ5XVe1g4-TQ-JZd5mHHTZDDdVj0lQEfyONFtksgw01VIxUPH7bW9Ti758x5pO3KowlbsmmrL6u9YxsY2_vxVf9rUXsCSGYXr-rkMjHl57NZ6-AAA8o8ajz7gu_YoFxUY8zOyx5vM0U2b9jYHzfzRzs"
                  />
                </div>
                <div className="h-2 w-[1.5px] grow bg-[#cedbe8]"></div>
              </div>
              <div className="flex flex-1 flex-col py-3">
                <p className="text-base leading-normal font-medium text-[#0d141c]">
                  Enter Your Details
                </p>
                <p className="text-base leading-normal font-normal text-[#49739c]">
                  Fill out our simple form with your business information.
                </p>
              </div>
              <div className="flex flex-col items-center gap-1">
                <div className="h-2 w-[1.5px] bg-[#cedbe8]"></div>
                <div className="aspect-square size-6 rounded-full bg-cover bg-center bg-no-repeat">
                  {" "}
                  <img
                    className="rounded-2xl"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCfpHE_MLaSc7ELufT75GX5h1I-qzYBLaKAz957qGv745hxkHyy63sQjy7ftiYq1dtOZK3QQ6GnkNDp2_7jGtZb8mN5V9PZlEqs5WMs9J00Be1hK-6plCDwwBV9XAcpKAM6j498AB2mxZrPmr-LPgYmwkFrJ3eUpiP7n0Wp2pP-x3ge_QlF17zJDmhEGBgmgORVFmyQaWacK4454TROB295Ps0YKCpkNcqBTawA2naFOL0izvJ6tqQDvUXJTttiPA-Ql_KPo9d9Dt8"
                  />{" "}
                </div>
                <div className="h-2 w-[1.5px] grow bg-[#cedbe8]"></div>
              </div>
              <div className="flex flex-1 flex-col py-3">
                <p className="text-base leading-normal font-medium text-[#0d141c]">
                  Choose Your Store Name
                </p>
                <p className="text-base leading-normal font-normal text-[#49739c]">
                  Select a unique name for your store or let our generator
                  suggest one.
                </p>
              </div>
              <div className="flex flex-col items-center gap-1 pb-3">
                <div className="h-2 w-[1.5px] bg-[#cedbe8]"></div>
                <div className="aspect-square size-6 rounded-full bg-cover bg-center bg-no-repeat">
                  <img
                    className="rounded-2xl"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuABtciCGcXj2jvDZPmnJ8RqE1QoZZYiO6I_XBUDtnAzXAhA8Dfw33_-T9yzXWgrQPUZ6jwjJz1R79vacScUwGcIe7pBZ1nBH7yhWDuCBhlvJ6BoHSm_0efiK5fImZ2p_ssVTnBzNvjutecYDYjjEFIIvnUjz1tajBDIpYvuA_7XVeSP1NTjicfPr75lIIMB_TdYZJxpKTjHV1X3Ou76IwyT-4NA0dhd57FxqQol1YxpZAnnVN8hU5Odwufs2PSqKjTOxILus9QDfJU"
                  />
                </div>
              </div>
              <div className="flex flex-1 flex-col py-3">
                <p className="text-base leading-normal font-medium text-[#0d141c]">
                  Launch Instantly
                </p>
                <p className="text-base leading-normal font-normal text-[#49739c]">
                  Your store goes live immediately, ready to accept orders.
                </p>
              </div>
            </div>

            <Testimonials />
            <h2 className="px-4 pt-5 pb-3 text-[22px] leading-tight font-bold tracking-[-0.015em] text-[#0d141c]">
              Pricing
            </h2>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(228px,1fr))] gap-2.5 px-4 py-3 @3xl:grid-cols-4">
              <div className="flex flex-1 flex-col gap-4 rounded-xl border border-solid border-[#cedbe8] bg-slate-50 p-6">
                <div className="flex flex-col gap-1">
                  <h1 className="text-base leading-tight font-bold text-[#0d141c]">
                    Starter
                  </h1>
                  <p className="flex items-baseline gap-1 text-[#0d141c]">
                    <span className="text-4xl leading-tight font-black tracking-[-0.033em] text-[#0d141c]">
                      Free
                    </span>
                    <span className="text-base leading-tight font-bold text-[#0d141c]">
                      /month
                    </span>
                  </p>
                </div>
                <Button onClick={redirectToOnBoarding}>
                  <span className="truncate">Get Started Free</span>
                </Button>

                <div className="flex flex-col gap-2">
                  <div className="flex gap-3 text-[13px] leading-normal font-normal text-[#0d141c]">
                    <div
                      className="text-[#0d141c]"
                      data-icon="Check"
                      data-size="20px"
                      data-weight="regular"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20px"
                        height="20px"
                        fill="currentColor"
                        viewBox="0 0 256 256"
                      >
                        <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"></path>
                      </svg>
                    </div>
                    Get your store online instantly
                  </div>
                  <div className="flex gap-3 text-[13px] leading-normal font-normal text-[#0d141c]">
                    <div
                      className="text-[#0d141c]"
                      data-icon="Check"
                      data-size="20px"
                      data-weight="regular"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20px"
                        height="20px"
                        fill="currentColor"
                        viewBox="0 0 256 256"
                      >
                        <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"></path>
                      </svg>
                    </div>
                    Basic features
                  </div>
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-4 rounded-xl border border-solid border-[#cedbe8] bg-slate-50 p-6">
                <div className="flex flex-col gap-1">
                  <div className="flex items-center justify-between">
                    <h1 className="text-base leading-tight font-bold text-[#0d141c]">
                      Pro
                    </h1>
                    <p className="rounded-xl bg-[#0d80f2] px-3 py-[3px] text-center text-xs leading-normal font-medium tracking-[0.015em] text-slate-50">
                      Most Popular
                    </p>
                  </div>
                  <p className="flex items-baseline gap-1 text-[#0d141c]">
                    <span className="text-4xl leading-tight font-black tracking-[-0.033em] text-[#0d141c]">
                      $29
                    </span>
                    <span className="text-base leading-tight font-bold text-[#0d141c]">
                      /month
                    </span>
                  </p>
                </div>
                <button className="flex h-10 max-w-[480px] min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-xl bg-[#e7edf4] px-4 text-sm leading-normal font-bold tracking-[0.015em] text-[#0d141c]">
                  <span className="truncate">Choose Pro</span>
                </button>
                <div className="flex flex-col gap-2">
                  <div className="flex gap-3 text-[13px] leading-normal font-normal text-[#0d141c]">
                    <div
                      className="text-[#0d141c]"
                      data-icon="Check"
                      data-size="20px"
                      data-weight="regular"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20px"
                        height="20px"
                        fill="currentColor"
                        viewBox="0 0 256 256"
                      >
                        <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"></path>
                      </svg>
                    </div>
                    Custom domain
                  </div>
                  <div className="flex gap-3 text-[13px] leading-normal font-normal text-[#0d141c]">
                    <div
                      className="text-[#0d141c]"
                      data-icon="Check"
                      data-size="20px"
                      data-weight="regular"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20px"
                        height="20px"
                        fill="currentColor"
                        viewBox="0 0 256 256"
                      >
                        <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"></path>
                      </svg>
                    </div>
                    Branding tools
                  </div>
                  <div className="flex gap-3 text-[13px] leading-normal font-normal text-[#0d141c]">
                    <div
                      className="text-[#0d141c]"
                      data-icon="Check"
                      data-size="20px"
                      data-weight="regular"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20px"
                        height="20px"
                        fill="currentColor"
                        viewBox="0 0 256 256"
                      >
                        <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"></path>
                      </svg>
                    </div>
                    Marketing tools
                  </div>
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-4 rounded-xl border border-solid border-[#cedbe8] bg-slate-50 p-6">
                <div className="flex flex-col gap-1">
                  <h1 className="text-base leading-tight font-bold text-[#0d141c]">
                    Growth
                  </h1>
                  <p className="flex items-baseline gap-1 text-[#0d141c]">
                    <span className="text-4xl leading-tight font-black tracking-[-0.033em] text-[#0d141c]">
                      $79
                    </span>
                    <span className="text-base leading-tight font-bold text-[#0d141c]">
                      /month
                    </span>
                  </p>
                </div>
                <button className="flex h-10 max-w-[480px] min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-xl bg-[#e7edf4] px-4 text-sm leading-normal font-bold tracking-[0.015em] text-[#0d141c]">
                  <span className="truncate">Choose Growth</span>
                </button>
                <div className="flex flex-col gap-2">
                  <div className="flex gap-3 text-[13px] leading-normal font-normal text-[#0d141c]">
                    <div
                      className="text-[#0d141c]"
                      data-icon="Check"
                      data-size="20px"
                      data-weight="regular"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20px"
                        height="20px"
                        fill="currentColor"
                        viewBox="0 0 256 256"
                      >
                        <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"></path>
                      </svg>
                    </div>
                    Advanced analytics
                  </div>
                  <div className="flex gap-3 text-[13px] leading-normal font-normal text-[#0d141c]">
                    <div
                      className="text-[#0d141c]"
                      data-icon="Check"
                      data-size="20px"
                      data-weight="regular"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20px"
                        height="20px"
                        fill="currentColor"
                        viewBox="0 0 256 256"
                      >
                        <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"></path>
                      </svg>
                    </div>
                    Automation
                  </div>
                  <div className="flex gap-3 text-[13px] leading-normal font-normal text-[#0d141c]">
                    <div
                      className="text-[#0d141c]"
                      data-icon="Check"
                      data-size="20px"
                      data-weight="regular"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20px"
                        height="20px"
                        fill="currentColor"
                        viewBox="0 0 256 256"
                      >
                        <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"></path>
                      </svg>
                    </div>
                    Priority support
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-3 p-4">
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger>Do I need coding skills</AccordionTrigger>
                  <AccordionContent>
                    No, StoreLaunch is designed for users with no coding
                    experience. Our intuitive interface allows you to build your
                    store without writing a single line of code.{" "}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger> Can I use my own domain?</AccordionTrigger>
                  <AccordionContent>
                    No, StoreLaunch is designed for users with no coding
                    experience. Our intuitive interface allows you to build your
                    store without writing a single line of code.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger>
                    {" "}
                    What kind of support do you offer?
                  </AccordionTrigger>
                  <AccordionContent>
                    No, StoreLaunch is designed for users with no coding
                    experience. Our intuitive interface allows you to build your
                    store without writing a single line of code.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
            <div className="@container">
              <div className="flex flex-col justify-end gap-6 px-4 py-10 @[480px]:gap-8 @[480px]:px-10 @[480px]:py-20">
                <div className="flex flex-col items-center gap-2 text-center">
                  <h1 className="tracking-light max-w-[720px] text-[32px] leading-tight font-bold text-[#0d141c] @[480px]:text-4xl @[480px]:leading-tight @[480px]:font-black @[480px]:tracking-[-0.033em]">
                    Ready to Launch Your Dream?
                  </h1>
                </div>
                <div className="flex flex-1 justify-center">
                  <div className="flex justify-center">
                    <Button className="px-12 py-7" size={"lg"}>
                      <span className="truncate text-xl">
                        Start Your Store Today 🚀
                      </span>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="flex justify-center">
          <div className="flex max-w-[960px] flex-1 flex-col">
            <footer className="@container flex flex-col gap-6 px-5 py-10 text-center">
              <div className="flex flex-wrap items-center justify-center gap-6 @[480px]:flex-row @[480px]:justify-around">
                <a
                  className="min-w-40 text-base leading-normal font-normal text-[#49739c]"
                  href="#"
                >
                  About
                </a>
                <a
                  className="min-w-40 text-base leading-normal font-normal text-[#49739c]"
                  href="#"
                >
                  Contact
                </a>
                <a
                  className="min-w-40 text-base leading-normal font-normal text-[#49739c]"
                  href="#"
                >
                  Privacy
                </a>
                <a
                  className="min-w-40 text-base leading-normal font-normal text-[#49739c]"
                  href="#"
                >
                  Terms
                </a>
              </div>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="#">
                  <div
                    className="text-[#49739c]"
                    data-icon="TwitterLogo"
                    data-size="24px"
                    data-weight="regular"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24px"
                      height="24px"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M247.39,68.94A8,8,0,0,0,240,64H209.57A48.66,48.66,0,0,0,168.1,40a46.91,46.91,0,0,0-33.75,13.7A47.9,47.9,0,0,0,120,88v6.09C79.74,83.47,46.81,50.72,46.46,50.37a8,8,0,0,0-13.65,4.92c-4.31,47.79,9.57,79.77,22,98.18a110.93,110.93,0,0,0,21.88,24.2c-15.23,17.53-39.21,26.74-39.47,26.84a8,8,0,0,0-3.85,11.93c.75,1.12,3.75,5.05,11.08,8.72C53.51,229.7,65.48,232,80,232c70.67,0,129.72-54.42,135.75-124.44l29.91-29.9A8,8,0,0,0,247.39,68.94Zm-45,29.41a8,8,0,0,0-2.32,5.14C196,166.58,143.28,216,80,216c-10.56,0-18-1.4-23.22-3.08,11.51-6.25,27.56-17,37.88-32.48A8,8,0,0,0,92,169.08c-.47-.27-43.91-26.34-44-96,16,13,45.25,33.17,78.67,38.79A8,8,0,0,0,136,104V88a32,32,0,0,1,9.6-22.92A30.94,30.94,0,0,1,167.9,56c12.66.16,24.49,7.88,29.44,19.21A8,8,0,0,0,204.67,80h16Z"></path>
                    </svg>
                  </div>
                </a>
                <a href="#">
                  <div
                    className="text-[#49739c]"
                    data-icon="FacebookLogo"
                    data-size="24px"
                    data-weight="regular"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24px"
                      height="24px"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm8,191.63V152h24a8,8,0,0,0,0-16H136V112a16,16,0,0,1,16-16h16a8,8,0,0,0,0-16H152a32,32,0,0,0-32,32v24H96a8,8,0,0,0,0,16h24v63.63a88,88,0,1,1,16,0Z"></path>
                    </svg>
                  </div>
                </a>
                <a href="#">
                  <div
                    className="text-[#49739c]"
                    data-icon="InstagramLogo"
                    data-size="24px"
                    data-weight="regular"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24px"
                      height="24px"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160ZM176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24Zm40,152a40,40,0,0,1-40,40H80a40,40,0,0,1-40-40V80A40,40,0,0,1,80,40h96a40,40,0,0,1,40,40ZM192,76a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z"></path>
                    </svg>
                  </div>
                </a>
              </div>
              <p className="text-base leading-normal font-normal text-[#49739c]">
                © 2024 StoreLaunch. All rights reserved.
              </p>
            </footer>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Landing;
