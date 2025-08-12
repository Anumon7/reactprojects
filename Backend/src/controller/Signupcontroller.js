import bcrypt from "bcryptjs";

export const signup = async (req, res) => {
    const { fullname, email, password } = req.body;
    try {
        const user = []

        const hashedPassword = await bcrypt.hash(password, 10);
        user.push({fullname,email,hashedPassword})

        res.json({
            message: "Signup successful",
            data: {
                fullname,
                email,
            }
        });
    } catch (err) {
        res.status(500).json({ message: "Something went wrong" });
    }
};
