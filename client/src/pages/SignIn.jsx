import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function SignIn() {
  const [formData, setFormData] = React.useState({
    email: '',
    password: ''
  });

  const navigate = useNavigate();

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await fetch('/api/auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        const data = await res.json();
        // Assuming data contains user information or token
        navigate('/'); // Redirect to home screen after successful login
      } else {
        // Handle login failure (e.g., show error message)
        console.error('Login failed:', res.statusText);
      }
    } catch (error) {
      console.error('Error during signin:', error);
    }
  };

  return (
    <div className="signUp-page flex flex-col md:flex-row justify-center items-center h-screen mt-5">
      <div className="left flex flex-col justify-center items-center md:w-1/2 bg-white px-8 py-12">
        <div className="container">
          <div className="header-text text-center">
            <h1 className="text-4xl md:text-7xl mb-1">Welcome</h1>
            <p id="text">It just takes 30 seconds</p>
          </div>
          <main className="mt-8 mb-20 w-full">
            <form className="form flex flex-col items-center" onSubmit={handleSubmit}>
              <p className="input-email mt-3">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  required
                  className="h-14 w-full md:w-80 px-4 rounded-md bg-gray-200 shadow-md"
                  onChange={handleChange}
                />
              </p>
              <p className="input-password mt-3">
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Password"
                  required
                  className="h-14 w-full md:w-80 px-4 rounded-md bg-gray-200 shadow-md"
                  onChange={handleChange}
                />
              </p>
              <button
                className="btn-submit bg-blue-500 text-white hover:bg-blue-600 mt-3 h-14 w-full md:w-80 rounded-md shadow-md"
              >
                Sign In
              </button>
              <p className="mt-3 text-center">Login with other</p>
              <button
                className="btn-submit bg-red-500 text-white hover:bg-red-600 h-14 w-full md:w-80 rounded-md shadow-md"
              >
                Sign In with Google
              </button>
              <p>Haven't account create one ? <a className='link text-red-600' href="/signup">signUp</a></p>
            </form>
          </main>
        </div>
      </div>
      <div className="right w-full md:w-1/2 hidden md:block">
        <img
          src="https://img.freepik.com/free-photo/view-3d-boy-spacesuit_23-2150710070.jpg?t=st=1715274348~exp=1715277948~hmac=2c1920928f878cf961cec81a07bf3a036166473aebfdf71aab2f77d503eefe91&w=400"
          alt="logo"
          className="w-full h-auto md:hidden rounded-xl"
        />
        <img
          src="https://img.freepik.com/free-photo/view-3d-boy-spacesuit_23-2150710070.jpg?t=st=1715274348~exp=1715277948~hmac=2c1920928f878cf961cec81a07bf3a036166473aebfdf71aab2f77d503eefe91&w=740"
          alt="logo"
          className="w-full h-auto md:block hidden rounded-xl"
        />
      </div>
    </div>
  );
}
