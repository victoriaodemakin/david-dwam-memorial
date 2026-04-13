import React from "react";
const Section = ({ id, title, children }: { id: string; title: string; children: React.ReactNode }) => {
  return (
    <section id={id} className="min-h-screen py-10 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-serif mb-8 text-center">{title}</h2>
        <div className="animate-fade-in">{children}</div>
      </div>
    </section>
  );
};
export default Section;
