const User = require("../../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const { validateRegisterInput } = require("../../utils/validator");
const { UserInputError } = require("apollo-server");
const {
  SECRET,
 
} = require("../../config");
const checkAuth = require("../../utils/checkAuth");
const Posts = require("../../models/post");
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
    async followUser(_, { userId }, context) {
      try {
        const loggedUser = checkAuth(context);
        const { id } = loggedUser;
        const user = await User.findById(userId);
        const curUser = await User.findById(id);
        if (user) {
          if (user.followers.find((follower) => follower.id === id)) {
            user.followers = user.followers.filter((follower) => {
              follower.id !== id;
            });
            curUser.following = curUser.following.filter(
              (following) => following.id !== userId
            );
          } else {
            user.followers.push(id);
            curUser.following.push(userId);
          }
          await user.save();
          await curUser.save();
          return user;
        } else throw new UserInputError("User not found");
      } catch (err) {
        throw new Error(err);
      }
    },
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
    async profileUpload(_, { profileInput: { bio, DOB, website } }, context) {
      const user = checkAuth(context);
      const { id } = user;
      const loggedUser = await User.findById(id);
      loggedUser.profile = {  bio, DOB, website };
      loggedUser.save();
      posts.save();
      return loggedUser.profile;
    },
    async uploadPhoto(_, { photo }, context) {
      try {
      const user = checkAuth(context);
      const { id } = user;
      const loggedUser = await User.findById(id);
        loggedUser.profilePic = photo;
        loggedUser.save();
        return photo;
      } catch (err) {
        throw new Error("Image could not be uploaded");
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
