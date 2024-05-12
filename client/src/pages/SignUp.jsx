import React from 'react';

export default function SignIn() {
  return (
    <div className="signup-page flex flex-col md:flex-row justify-center items-center h-screen">
      <div className="left flex flex-col justify-center items-center md:w-1/2 bg-white px-8 py-12">
        <div className="container">
          <div className="header-text text-center">
            <h1 className="text-4xl md:text-7xl mb-1">Welcome</h1>
            <p id="text">It just takes 30 seconds</p>
          </div>
          <main className="mt-8 mb-20 w-full">
            <form className="form flex flex-col items-center">
              <p className="input-username mt-3">
                <input type="text" id="username" name="username" placeholder="Username" required
                  className="h-14 w-full md:w-80 px-4 rounded-md bg-gray-200 shadow-md"/>
              </p>
              <p className="input-email mt-3">
                <input type="email" id="email" name="email" placeholder="Email" required
                  className="h-14 w-full md:w-80 px-4 rounded-md bg-gray-200 shadow-md"/>
              </p>
              <p className="input-password mt-3">
                <input type="password" id="password" name="password" placeholder="Password" required
                  className="h-14 w-full md:w-80 px-4 rounded-md bg-gray-200 shadow-md"/>
              </p>
              <button className="btn-submit bg-blue-500 text-white hover:bg-blue-600 mt-3 h-14 w-full md:w-80 rounded-md shadow-md">SignUp</button>
              <p className="mt-3 text-center">Login with other</p>
              <button className="btn-submit bg-red-500 text-white hover:bg-red-600 h-14 w-full md:w-80 rounded-md shadow-md">SignUp with Google</button>
            </form>
          </main>
        </div>
      </div>
      <div className="right w-full md:w-1/2 hidden md:block">
        <img src="https://img.freepik.com/free-photo/view-3d-boy-spacesuit_23-2150710070.jpg?t=st=1715274348~exp=1715277948~hmac=2c1920928f878cf961cec81a07bf3a036166473aebfdf71aab2f77d503eefe91&w=740"
          alt="logo" className="w-full h-auto rounded-xl"/>
      </div>
    </div>
  );
}
