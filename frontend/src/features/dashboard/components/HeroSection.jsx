import React from 'react';

export default function HeroSection() {
  // TODO: Get actual user name from auth context
  const userName = "kyawlinthu"; // Replace with actual user data

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good morning";
    if (hour < 18) return "Good afternoon";
    return "Good evening";
  };

  return (
    <div className="mb-8">
      <h1 className="mb-2 text-3xl font-bold text-gray-900">
        {getGreeting()}, {userName}
      </h1>
      <p className="text-base text-gray-600">
        Let's stay on top of your deadlines and make today productive
      </p>
    </div>
  );
}