import bcrypt from "bcryptjs";

const users = []; 

export const signup = async (req, res) => {
  try {
    const { fullname, email, password } = req.body;

    // // 1. Validate fullname
    // if (!fullname || fullname.trim().length === 0) {
    //   return res.status(400).json({ message: "Full name is required" });
    // }

    if (!email) {
      return res.status(400).json({ message: "Email is required" });
    }
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(email)) {
      return res.status(400).json({ message: "Invalid email format" });
    }
    const userExists = users.some(user => user.email === email);
    if (userExists) {
      return res.status(409).json({ message: "Email already registered" });
    }
    if (!password) {
      return res.status(400).json({ message: "Password is required" });
    }
    if (password.length < 6) {
      return res.status(400).json({ message: "Password must be at least 6 characters long" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    users.push({ fullname, email, password: hashedPassword });
    console.log(users, "users");
    return res.status(201).json({
      message: "Signup successful",
      data: { fullname, email }
    });

  } catch (err) {
    console.error(err.message);
    return res.status(500).json({ message: "Something went wrong" });
  }
};
