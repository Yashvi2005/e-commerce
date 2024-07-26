const  Category = require('../model/category.model')
const mongoose = require('mongoose');
const uploadOnCloudinary = require('../utils/cloudinary');

const postCategory = async (req,res)=>{
    try {
       const {categoryName} = req.body
       const localFilePath = req.file?.path;
       if(localFilePath){
        const catImg = await uploadOnCloudinary(localFilePath)
         
        if(!catImg.url){
            return res.json({
                success: false,
                message: "Error while uploading on profile",
              });
        }
        await Category({categoryName , catImg:catImg.url}).save()
        return res.json({
            success : 1 ,
            message : "Category Added Sucessfully"
        })  
       }
    } catch (error) {
        return res.json({
            success : 0,
            message : "Error in code",
            error :  error.message
        })
    }
}

const getAllCategory = async (req,res) =>{
    try {
        const  getCategory = await Category.find({})
        if (!getCategory) {
            return res.json({
                success : 0 ,
                message : "Get Category Data."

            })
        } else {
            return res.json({
                success : 1 ,
                message : "Get Category Data.",
                data : getCategory
            })
        }
    } catch (error) {
        return res.json({
            success : 0 ,
            message : "Error in code",
            error : error.message
        })
    }
}

const getCategoryByID = async (req,res) =>{
    try {
        const id = req.params.id
        const  getCategory = await Category.find({_id : id})
        if (!getCategory) {
            return res.json({
                success : 0 ,
                message : "Get Category Data."

            })
        } else {
            return res.json({
                success : 1 ,
                message : "Get Category Data.",
                data : getCategory
            })
        }
    } catch (error) {
        return res.json({
            success : 0 ,
            message : "Error in code",
            error : error.message
        })
    }
}

module.exports = {
     postCategory,getAllCategory,getCategoryByID
}