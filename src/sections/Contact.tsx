"use client";

import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import grainImage from "@/assets/images/grain.jpg";
import { useState } from "react";

export const ContactSection = () => {
  const [copied, setCopied] = useState(false);
  const email = "ist.husseinhajghazal@gmail.com";

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy email:', err);
    }
  };

  return (
    <div id="contact" className="py-16 pt-12 lg:py-24 lg:pt-20">
      <div className="container">
        <div className="bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl text-center md:text-left relative overflow-hidden z-0">
          <div
            className="absolute inset-0 opacity-5 -z-10"
            style={{
              backgroundImage: `url(${grainImage.src})`,
            }}
          />
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl">
                Let&apos;s create something amazing together
              </h2>
              <p className="text-sm md:text-base mt-2">
                Ready to bring your next project to life? Let&apos;s connect and
                discuss how I can help you achieve your goals
              </p>
            </div>
            <div>
              <button 
                onClick={handleCopyEmail}
                className="text-white bg-gray-900 hover:bg-white hover:text-gray-900 duration-300 inline-flex items-center px-6 h-12 rounded-xl gap-2 w-max"
              >
                <span className="font-semibold">{copied ? "Copied!" : "Copy Email"}</span>
                <CheckCircleIcon className={`size-4 ${copied ? "text-green-500" : ""}`} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
