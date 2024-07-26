const user = require("../model/user.model");
const mongoose = require("mongoose");

const register = async (req, res) => {
  try {
    const data = new user({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password,
    });
    const { email } = req.body;
    const existUser = await user.findOne({ email });
    if (existUser) {
      return res.json({
        success: 0,
        message:
          "Already add this user on this mailid so please User unique mailid",
      });
    } else {
      const adduser = await new user(data).save();
      if (!adduser) {
        return res.json({
          success: 0,
          message: "User not Registerd.",
        });
      } else {
        return res.json({
          success: 1,
          message: "User Registerd succeessfully.",
        });
      }
    }
  } catch (error) {
    return res.json({
      success: 0,
      message: "Error in the code",
    });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userFind = await user.findOne({ email });
    if (!userFind) {
      return res.json({
        success: 0,
        message: "This mail id is not available",
      });
    } else {
      if (password == userFind.password) {
        return res.json({
          success: 1,
          message: "Login Successfully.",
          data: userFind,
        });
      } else {
        return res.json({
          success: 0,
          message: "Password dosen't match",
        });
      }
    }
  } catch (error) {
    return res.json({
      success: 0,
      message: "Error in code",
      error,
    });
  }
};

const updateUser = async (req, res) => {
  try {
    const id = req.params.id;
    const updateData = await user.updateOne({ _id: id }, { $set: req.body });
    if (!updateData) {
        return res.json({
            success : 0,
            message : "Data was not updated."
        })
    } else {
        return res.json({
            success : 1,
            message : "Data was updated."
        })
    }
  } catch (error) {
    return res.json({
      success: 0,
      message: "Error in code.",
    });
  }
};

const userGet = async (req,res) =>{
  try {
    const getUser = await user.find({})
    if (!getUser) {
      return res.json({
        success : 0,
        message : "User not found"
      })
    } else {
      return res.json({
        success : 1,
        message : "User found",
        data : getUser
      })
    }
  } catch (error) {
    return res.json({
      success : 0 ,
      message : 'Error in code'
    })
}
}

module.exports = {
  register,
  login,
  updateUser,
  userGet
};

