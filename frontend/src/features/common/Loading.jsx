// different loading animations generated using claudeAI
import React from "react";

export default function Loading({ size = "medium", fullScreen = false }) {
  // Size variants
  const sizeClasses = {
    small: "w-6 h-6 border-2",
    medium: "w-10 h-10 border-3",
    large: "w-16 h-16 border-4"
  };

  const spinner = (
    <div
      className={`${sizeClasses[size]} border-gray-200 border-t-green-500 rounded-full animate-spin`}
    ></div>
  );

  // Full screen loading
  if (fullScreen) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/80 backdrop-blur-sm">
        {spinner}
      </div>
    );
  }

  // Inline loading (default)
  return (
    <div className="flex items-center justify-center py-8">
      {spinner}
    </div>
  );
}

// Optional: Export additional loading variants
export function LoadingDots({ color = "green" }) {
  const colorClasses = {
    green: "bg-green-500",
    gray: "bg-gray-500",
    blue: "bg-blue-500",
    purple: "bg-purple-500"
  };

  return (
    <div className="flex items-center justify-center gap-2 py-8">
      <div className={`w-2 h-2 ${colorClasses[color]} rounded-full animate-bounce`}></div>
      <div className={`w-2 h-2 ${colorClasses[color]} rounded-full animate-bounce`} style={{ animationDelay: '0.1s' }}></div>
      <div className={`w-2 h-2 ${colorClasses[color]} rounded-full animate-bounce`} style={{ animationDelay: '0.2s' }}></div>
    </div>
  );
}

export function LoadingPulse() {
  return (
    <div className="flex items-center justify-center py-8">
      <div className="w-10 h-10 bg-green-500 rounded-full animate-pulse"></div>
    </div>
  );
}

export function LoadingSkeleton() {
  return (
    <div className="py-4 space-y-3">
      {/* Card skeleton */}
      <div className="p-4 bg-white border border-gray-200 rounded-lg animate-pulse">
        <div className="w-3/4 h-4 mb-2 bg-gray-200 rounded"></div>
        <div className="w-1/2 h-3 mb-3 bg-gray-200 rounded"></div>
        <div className="flex gap-2">
          <div className="w-16 h-6 bg-gray-200 rounded"></div>
          <div className="w-16 h-6 bg-gray-200 rounded"></div>
        </div>
      </div>
      <div className="p-4 bg-white border border-gray-200 rounded-lg animate-pulse">
        <div className="w-2/3 h-4 mb-2 bg-gray-200 rounded"></div>
        <div className="w-1/3 h-3 mb-3 bg-gray-200 rounded"></div>
        <div className="flex gap-2">
          <div className="w-16 h-6 bg-gray-200 rounded"></div>
          <div className="w-16 h-6 bg-gray-200 rounded"></div>
        </div>
      </div>
    </div>
  );
}