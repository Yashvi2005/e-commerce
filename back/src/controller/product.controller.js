const Product = require("../model/product.model");
const mongoose = require("mongoose");
const uploadOnCloudinary = require("../utils/cloudinary");

//Post Product
const postProduct = async (req, res) => {
  try {
    const { productName, price, description, categoryId } = req.body;
    const localFilePath = req.file?.path;
    if (localFilePath) {
      const porductImg = await uploadOnCloudinary(localFilePath);

      if (!porductImg.url) {
        return res.json({
          success: false,
          message: "Error while uploading on profile",
        });
      }
      await Product({
        productName,
        price,
        description,
        categoryId,
        porductImg: porductImg.url,
      }).save();
      return res.json({
        success: 1,
        message: "Product Added Sucessfully",
      });
    }
  } catch (error) {
    return res.json({
      success: 0,
      message: "Error in code",
      error: error.message,
    });
  }
};

//Get All Product
const getAllProduct = async (req, res) => {
  try {
    const getallProduct = await Product.find({});
    if (!getallProduct) {
      return res.json({
        success: 0,
        message: " Product not found.",
      });
    } else {
      return res.json({
        success: 1,
        message: "Get All Product.",
        data: getallProduct,
      });
    }
  } catch (error) {
    return res.json({
      success: 0,
      message: "Error in the code",
      error: error.message,
    });
  }
};

//Get Product By ID
const getProductByid = async (req, res) => {
  try {
    const id = req.params.id;
    const getProduct = await Product.find({ _id: id }).populate("categoryId");
    if (!getProduct) {
      return res.json({
        success: 0,
        message: " Product not found.",
      });
    } else {
      return res.json({
        success: 1,
        message: "Get Product.",
        data: getProduct,
      });
    }
  } catch (error) {
    return res.json({
      success: 0,
      message: "Error in the code",
      error: error.message,
    });
  }
};

//All Product get by Category ID
const catidGetproduct = async (req, res) => {
  try {
    const categoryId = req.params.id;
    const findData = await Product.find({ categoryId: categoryId }).populate(
      "categoryId"
    );
    if (!findData) {
      return res.json({
        success: 0,
        message: "Data not found",
      });
    } else {
      return res.json({
        success: 1,
        message: "Data  found",
        data: findData,
      });
    }
  } catch (error) {
    return res.json({
      success: 0,
      message: "Error in the code",
    });
  }
};

//get product by search
const searchproduct = async (req, res) => {
  try {
    const productName = req.query.name;
    const products = await Product.find({
      productName: { $regex: productName, $options: "i" },
    }); 

    return res.json({
      success: 1,
      message: "Data  found",
      data: products,
    });
  } catch (error) {
    return res.json({
      success: 0,
      message: "Error in the code",
    });
  }
};

module.exports = {
  postProduct,
  getAllProduct,
  getProductByid,
  catidGetproduct,
  searchproduct
};
