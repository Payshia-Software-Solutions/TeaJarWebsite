"use client";
import React from "react";
import LazyLoadSection from "@/components/LazyLoadingSection";

function CTA() {
  return (
    <LazyLoadSection>
      <section className="">
        <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
            <div className="relative z-10 lg:py-16">
              <div className="relative h-64 sm:h-80 lg:h-full">
                <img
                  alt=""
                  src="/assets/cta.jpg"
                  className="absolute inset-0 h-full w-full object-cover rounded-3xl"
                />
              </div>
            </div>

            <div className="relative flex items-center bg-gray-100">
              <span className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100"></span>

              <div className="p-8 sm:p-16 lg:p-24">
                <h2 className="text-2xl font-bold sm:text-3xl">
                  A little about Tea Jar and the KDU Group
                </h2>

                <p className="mt-4 text-gray-600">
                  We are perceived as one of the pre-eminent and largest tea
                  manufacturers in Sri Lanka, provisioning a 4 percent of the
                  entire tea production in the country. Under the brand name
                  “Tea Jar” at K.D.U. Exports, we produce 11 million teas
                  consisting 6 percent of the Low Grown category, within Sri
                  lanka. Going from strength to strength, sustaining from the
                  K.D.U GROUP, the synthesis of ingrained commitment, dedication
                  and diligence has put ourselves at the summit of the tea
                  industry. We are a great equalizer, a demanding attention from
                  the counter of the smallest eatery to the most exclusive
                  tea-bars in the world. Proudly claiming for a history of more
                  than three decades of tea production, teas from Tea Jar
                  possesses unique and specific characteristics of quality and
                  taste attributed by the Passion and Provenance of the unique
                  manufacturing practices, that have been mastered over the
                  years, infused with contemporary creativity and imagination to
                  satisfy the most judicious aficionado.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </LazyLoadSection>
  );
}

export default CTA;
