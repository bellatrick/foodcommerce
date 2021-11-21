const User = require("../../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const { validateRegisterInput } = require("../../utils/validator");
const { UserInputError } = require("apollo-server");
const {
  SECRET,
 
} = require("../../config");
const generateToken = (res) => {
  return jwt.sign(
    {
      id: res._id,
      email: res.email,
      username: res.username,
    },
    SECRET,
    { expiresIn: "5h" }
  );
};
module.exports = {
  Mutation: {
    async login(_, { username, password }) {
      try {
        const user = await User.findOne({ username });
        if (!user) {
          throw new UserInputError("Wrong credentials", {
            errors: {
              username: "user not found",
            },
          });
        }
        const match = await bcrypt.compare(password, user.password);
        if (!match) {
          throw new UserInputError("Wrong credentials", {
            errors: {
              username: "wrong credentials",
            },
          });
        }
        const token = generateToken(user);
        return {
          ...user._doc,
          id: user._id,
          token,
        };
      } catch (err) {
        console.log(err);
      }
    },
    async register(_, { registerInput: { username, email, password } }) {
      const { valid, errors } = validateRegisterInput(
        username,
        email,
        password
      );
      if (!valid) {
        throw new UserInputError("Errors", { errors });
      }
      const user = await User.findOne({ username });
      if (user) {
        throw new UserInputError("username is taken", {
          errors: {
            username: "username is taken",
          },
        });
      }
      password = await bcrypt.hash(password, 12);
      const newUser = new User({
        email,
        username,
        password,
        createdAt: new Date().toISOString(),
      });
      const res = await newUser.save();
      const token = generateToken(res);
      return {
        ...res._doc,
        id: res._id,
        token,
      };
    },
  },
};
