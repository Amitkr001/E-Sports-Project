import User from '../models/user.model.js';

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
