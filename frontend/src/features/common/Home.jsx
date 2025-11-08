import React, { useState } from 'react';
import { Clock, Target, Brain, BookOpen, Bell, BarChart3, StickyNote, Timer, CheckCircle, ArrowRight, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function TimelyLanding() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const features = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Assignment Tracking",
      description: "Never miss a deadline again. Organize all your assignments by class with beautiful, intuitive cards."
    },
    {
      icon: <Timer className="w-6 h-6" />,
      title: "Focus Mode with Pomodoro",
      description: "Built-in focus timer for each assignment. Track exactly how much time you spend studying on each assignment using Pomodoro technique."
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Study Analytics",
      description: "See your focus hours, productivity patterns, and study stats. Understand where your time actually goes."
    },
    {
      icon: <StickyNote className="w-6 h-6" />,
      title: "Smart Notes",
      description: "Create notes within each class, tag them to specific assignments, and view assignment-specific notes instantly."
    },
    {
      icon: <Bell className="w-6 h-6" />,
      title: "Deadline Reminders",
      description: "Get notified via email or SMS before deadlines. Customize your reminder preferences for each assignment."
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Class Organization",
      description: "Manage multiple classes effortlessly. Each class has its own space for assignments, notes, and progress tracking."
    }
  ];

  const stats = [
    { number: "67%", label: "Average Progress Today" },
    { number: "24h", label: "Total Focus Time" },
    { number: "∞", label: "Classes You Can Track" }
  ];

  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(135deg, #f5f7fa 0%, #e9ecef 100%)' }}>
      {/* Hero Section */}
      <section className="px-4 py-20 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="mb-6 text-5xl font-bold text-gray-900 md:text-6xl">
            Track Deadlines.<br />
            <span className="text-green-500">Stay Focused.</span>
          </h1>
          <p className="mb-8 text-xl text-gray-600">
            A deadline tracker built specifically for students. Beautiful UI, powerful features, zero stress about missing assignments.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <button className="flex items-center justify-center gap-2 px-8 py-4 text-lg font-medium text-white transition bg-green-500 rounded-lg hover:bg-green-600">
              Start Tracking Free
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="px-8 py-4 text-lg font-medium text-gray-700 transition border-2 border-gray-300 rounded-lg hover:border-gray-400">
              See How It Works
            </button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-3xl font-bold text-green-500 md:text-4xl">{stat.number}</div>
                <div className="mt-1 text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="max-w-6xl px-4 py-12 mx-auto sm:px-6 lg:px-8">
        <div className="p-8 bg-white border border-gray-200 shadow-xl rounded-xl">
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-gray-900">Today's Overview</h3>
            <p className="text-sm text-gray-500">Saturday, November 8</p>
          </div>
          
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="p-4 bg-white border border-gray-200 rounded-lg">
              <div className="flex items-center gap-2 mb-2 text-sm text-blue-600">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                Due Today
              </div>
              <div className="text-4xl font-bold text-gray-900">3</div>
            </div>
            <div className="p-4 bg-white border border-gray-200 rounded-lg">
              <div className="flex items-center gap-2 mb-2 text-sm text-red-600">
                <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                Overdue
              </div>
              <div className="text-4xl font-bold text-gray-900">1</div>
            </div>
            <div className="p-4 bg-white border border-gray-200 rounded-lg">
              <div className="flex items-center gap-2 mb-2 text-sm text-gray-600">
                <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
                Total Active
              </div>
              <div className="text-4xl font-bold text-gray-900">12</div>
            </div>
            <div className="p-4 bg-white border border-gray-200 rounded-lg">
              <div className="flex items-center gap-2 mb-2 text-sm text-green-600">
                <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                Completed
              </div>
              <div className="text-4xl font-bold text-gray-900">2</div>
            </div>
          </div>

          <div className="mb-4">
            <div className="mb-2 text-sm text-gray-600">Today's Progress</div>
            <div className="w-full h-3 bg-gray-200 rounded-full">
              <div className="h-3 bg-green-500 rounded-full" style={{width: '67%'}}></div>
            </div>
            <div className="mt-1 text-sm text-right text-gray-600">67%</div>
          </div>

          <div className="flex items-start gap-3 p-4 border border-red-200 rounded-lg bg-red-50">
            <div className="text-red-600 mt-0.5">⚠️</div>
            <span className="font-medium text-red-600">1 overdue - catch up today!</span>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="px-4 py-20 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-gray-900">
            Everything You Need to Ace Your Deadlines
          </h2>
          <p className="text-xl text-gray-600">
            More than just a calendar. It's your complete academic productivity system.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div key={index} className="p-6 transition bg-white border border-gray-200 rounded-xl hover:shadow-lg">
              <div className="flex items-center justify-center w-12 h-12 mb-4 text-green-600 bg-green-100 rounded-lg">
                {feature.icon}
              </div>
              <h3 className="mb-2 text-xl font-bold text-gray-900">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 bg-white">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-900">
              Get Started in 3 Simple Steps
            </h2>
          </div>

          <div className="grid gap-12 md:grid-cols-3">
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 text-2xl font-bold text-white bg-green-500 rounded-full">
                1
              </div>
              <h3 className="mb-2 text-xl font-bold text-gray-900">Add Your Classes</h3>
              <p className="text-gray-600">Create classes for each of your courses. Organize everything in one place.</p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 text-2xl font-bold text-white bg-green-500 rounded-full">
                2
              </div>
              <h3 className="mb-2 text-xl font-bold text-gray-900">Track Assignments</h3>
              <p className="text-gray-600">Add deadlines, set priorities, and get reminders. Never miss another due date.</p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 text-2xl font-bold text-white bg-green-500 rounded-full">
                3
              </div>
              <h3 className="mb-2 text-xl font-bold text-gray-900">Focus & Complete</h3>
              <p className="text-gray-600">Use focus mode to study, track your time, and watch your productivity soar.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-20 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="p-12 text-center border-2 border-green-200 bg-green-50 rounded-2xl">
          <h2 className="mb-4 text-4xl font-bold text-gray-900">
            Ready to Stop Stressing About Deadlines?
          </h2>
          <p className="mb-8 text-xl text-gray-700">
            Join students who are taking control of their assignments.
          </p>
          <button className="inline-flex items-center gap-2 px-8 py-4 text-lg font-medium text-white transition bg-green-500 rounded-lg hover:bg-green-600">
            <Link to="/sign_in">Start Using Timely Free</Link>
            <ArrowRight className="w-5 h-5" />
          </button>
          <p className="mt-4 text-sm text-gray-600">No credit card required. Free forever.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-white border-t border-gray-200">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex items-center gap-2">
              <div className="flex items-center justify-center w-8 h-8 bg-green-500 rounded-lg">
                <Clock className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">Timely</span>
            </div>
            <div className="text-sm text-center text-gray-600">
              © 2025 Timely. Made for students who want to stay on top of their game.
              <div className="mt-1">Made by <a href="https://github.com/kyawlinthu123" target='_blank'> <span className='font-semibold'>Kyaw Lin Thu</span> </a></div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}