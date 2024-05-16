import jwt from 'jsonwebtoken';
import User from '../models/user.model.js'; // Importing User model from the correct path

export const signup = async (req, res) => {
  const { username, email, password } = req.body;
  
  // Check if any required fields are missing or invalid
  if (!username || !email || !password || password.length < 6 || password === "" || username === "" || email === "") {
    return res.status(400).json({ message: 'Please enter all the fields' });
  }
  try {
    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User with this email already exists' });
    }

    // Create a new user instance
    const newUser = new User({
      username,
      email,
      password,
    });

    // Save the new user to the database
    await newUser.save();

    // Send a success response
    return res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    // Handle any errors that occur during user creation or database interaction
    console.error('Error creating user:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

export const signin = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password || email === '' || password === '') {
    return res.status(400).json({ message: 'Please enter email and password' });
  }

  try {
    // Find the user by email
    const validUser = await User.findOne({ email });
    if (!validUser) {
      return res.status(400).json({ message: 'User does not exist' });
    }

    // Check if the provided password matches the user's password
    if (validUser.password !== password) {
      return res.status(400).json({ message: 'Incorrect password' });
    } 

    // Generate JWT token
    const token = jwt.sign({ _id: validUser._id }, process.env.JWT_SECRET);

    // Set cookie with the token and send user data in the response
    const { password: pass, ...rest } = validUser._doc;
    res.status(200)
      .cookie('access_token', token, { httpOnly: true })
      .json(rest); // Send user data without the password field
  } catch (error) {
    // Handle any errors
    console.error('Error signing in:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};
