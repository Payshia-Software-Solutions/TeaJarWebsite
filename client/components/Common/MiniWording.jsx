import React from "react";

function MiniWording() {
  return (
    <section className="bg-babout py-16">
      <div className="mx-auto max-w-screen-xl px-8 py-4 sm:px-6 lg:px-10">
        <div className="relative">
          {/* Decorative quotation marks */}
          <span className="absolute -top-4 left-0 text-white opacity-20 text-6xl font-serif">
            "
          </span>
          <span className="absolute -bottom-4 right-0 text-white opacity-20 text-6xl font-serif">
            "
          </span>

          <blockquote className="px-4">
            <p className="text-center text-white text-2xl sm:text-3xl md:text-4xl leading-relaxed font-serif">
              Tea is more than a drink; it's a moment of serenity, a touch of
              warmth, and a bridge between souls. Savor the simplicity, and let
              each sip tell its story.
            </p>
          </blockquote>
        </div>
      </div>
    </section>
  );
}

export default MiniWording;
