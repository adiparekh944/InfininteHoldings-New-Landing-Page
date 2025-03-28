import React from 'react';

export const About = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-medium text-white mb-8">About Us</h1>
      <div className="prose prose-invert max-w-none">
        <p className="text-xl text-neutral-200 mb-6">
          At Gravity Team, we are on the mission to balance the supply and demand across crypto markets worldwide. 
          We are a crypto native market maker founded by traders, developers, and innovators who are strong 
          believers and supporters of the future of decentralization and digital assets.
        </p>
      </div>
    </div>
  );
};