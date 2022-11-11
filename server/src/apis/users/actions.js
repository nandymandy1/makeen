import { User } from "../../models";

const REGISTER_USER = async (req, res) => {
  try {
    const { username, email } = req.body;

    let user = await User.findOne({ username });
    if (user) {
      return res.status(400).json({
        message: "Username is already taken.",
      });
    }

    user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({
        message: "Email is already registred.",
      });
    }

    user = await User.create(req.body);

    const token = await user.generateJWT();

    return res.status(201).json({
      token,
      user: user.getUserInfo(),
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "Internal Server Error.",
    });
  }
};

const AUTHENTICATE_USER = async (req, res) => {
  const result = await User.authenticateUser(req.body);
  const { status, ...rest } = result;

  if (!status) {
    return res.status(status).json(rest);
  }

  return res.status(status).json(rest);
};

const GET_AUTH_USER = async (req, res) => res.status(200).json(req.user);

export { REGISTER_USER, AUTHENTICATE_USER, GET_AUTH_USER };
