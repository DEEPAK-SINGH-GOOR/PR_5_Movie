const User = require("../models/user.schema");

const createUser = async (req, res) => {
    let { email } = req.body;
    console.log(req.body);
    
    let isUser = await User.findOne({ email: email });
    if (isUser) {
        res.send({ message: "User already exists" });
    } else {
        let data = await User.create(req.body);
        res.send(data);
    }
};

const loginUser = async (req, res) => {
    let { email, password } = req.body;
    let user = await User.findOne({ email: email });
    
    if (!user) {
        return res.send({ message: "User not found" });
    }

    if (user.password !== password) {
        return res.send({ message: "Password is incorrect" });
    }

    res.send({ message: "Logged in successfully", user: user });
};

module.exports = { createUser, loginUser };
