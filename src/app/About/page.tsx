import React from "react";

const Page = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-rose-100 rounded-lg shadow-lg">
      <h1 className="text-4xl font-bold text-center text-pink-700 mb-6">
        About Us
      </h1>

      <section className="text-lg space-y-4">
        <p>
          Welcome to <span className="font-semibold">AQSA AURA</span>, a place
          where fashion meets creativity. We are passionate about providing you
          with the latest trends, styling tips, and product recommendations to
          help you express your unique personality through fashion.
        </p>

        <p>
          Our mission is simple: to inspire confidence and individuality through
          every outfit you wear. Whether you are a fashion enthusiast or just
          looking for a few styling tips, AQSA AURA is here to guide you on your
          journey.
        </p>

        <h2 className="text-2xl font-semibold text-pink-700 mt-6">
          Our Vision
        </h2>
        <p>
          We believe that fashion is a form of self-expression and should
          empower individuals to feel confident and beautiful. Our vision is to
          create a space that offers style inspiration, practical advice, and
          quality content that helps you build a wardrobe that reflects your
          true self.
        </p>

        <h2 className="text-2xl font-semibold text-pink-700 mt-6">
          What We Offer
        </h2>
        <ul className="list-disc ml-6">
          <li>Fashion inspiration for all occasions</li>
          <li>Curated style guides and tips</li>
          <li>Product reviews and shopping recommendations</li>
          <li>Personalized fashion advice for your style journey</li>
        </ul>

        <p className="mt-6">
          Thank you for being part of AQSA AURA! We hope you enjoy exploring our
          content and find inspiration to enhance your style.
        </p>
      </section>
    </div>
  );
};

export default Page;
