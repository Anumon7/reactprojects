import bcrypt from "bcryptjs";

const users = []; // global, outside signup function

export const signup = async (req, res) => {
  try {
    const { fullname, email, password } = req.body;
    
    if (!password) {
        return res.status(400).json({ message: "Password is required" });
      }

    const hashedPassword = await bcrypt.hash(password, 10);

    users.push({ fullname, email, password: hashedPassword });
    console.log(users,'users')

    res.json({
      message: "Signup successful",
      data: {
        fullname,
        email,
      }
    });
  } catch (err) {
    console.log(err.message)
    res.status(500).json({ message: "Something went wrong" });
  }
};
