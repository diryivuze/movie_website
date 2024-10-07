import React, { useState } from 'react';

const SignUp = () => {
  const [isSignUp, setIsSignUp] = useState(true);

  const toggleForm = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <div className={`flex w-full max-w-4xl transition-all duration-500 ${isSignUp ? '' : 'flex-row-reverse'}`}>
        
        <div className="w-1/2 bg-white p-8 shadow-lg">
          <h2 className="text-2xl font-bold mb-6">{isSignUp ? 'Sign Up' : 'Log In'}</h2>
          <form>
            {isSignUp && (
              <div className="mb-4">
                <label className="block text-gray-700">Username</label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded"
                  placeholder="Enter your username"
                />
              </div>
            )}
            <div className="mb-4">
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Password</label>
              <input
                type="password"
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Enter your password"
              />
            </div>
            <button
              type="submit"
              className="w-full p-2 bg-teal-500 text-white rounded hover:bg-teal-600"
            >
              {isSignUp ? 'Sign Up' : 'Log In'}
            </button>
          </form>
          <p className="mt-4 text-gray-600 text-sm">
            {isSignUp ? 'Already have an account?' : "Don't have an account?"}{' '}
            <button
              className="text-teal-500 hover:underline"
              onClick={toggleForm}
            >
              {isSignUp ? 'Log In' : 'Sign Up'}
            </button>
          </p>
        </div>

        {/* Welcome Section */}
        <div className="w-1/2 bg-teal-500 text-white flex items-center justify-center p-8">
          <div>
            <h2 className="text-3xl font-bold">
              {isSignUp ? 'Welcome to Our Platform!' : 'Welcome Back!'}
            </h2>
            <p className="mt-4">
              {isSignUp
                ? 'Sign up to start managing your tasks and enjoy our services.'
                : 'Log in to access your dashboard and continue where you left off.'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
