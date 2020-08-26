const response = require("../response");

Category = require("../models/category.model");

response =require("../response");

// Get http://localhost/api/category
exports.list=(req,res)=>{
    Category.find({},(err,categories)=>{
        if(err)
        {
            return new response (null,err).error500(res);

        }
        return new response(categories,null).success(res);
    })
}

// Get http://localhost/api/category/88484848648
exports.getById=(req,res)=>{
    Category.findById(req.params.category_id,(err,category)=>{
        if(err)
        {
            return new response (null,err).notFound(res);

        }
        return new response(category,null).success(res);
    })
}

// Post http://localhost/api/category/
exports.create=(req,res)=>{

    var category = new Category();
    category.name=req.body.name;
    category.save((err)=>{

        if(err)
        {
            return new response (null,err).error500(res);

        }
        return new response(category,null).created(res)
    });

}

 
// Put http://localhost/api/category/88484848648
exports.update=(req,res)=>{
    category.findById(req.params.category_id,(err,category)=>{
        if(err)
        {
            return new response ().notFound(res);

        }
    })

   // var category = new Category();
    category.name=req.body.name;
    category.save((err)=>{

        if(err)
        {
            return new response (null,err).error500(res);

        }
        return new response(category,null).created(res)
    });

}

// Delete http://localhost/api/category/88484848648
exports.update=(req,res)=>{
    category.findOneAndDelete({_id=req.params.category_id},(err,category)=>{
        if(err)
        {
            return new response ().error500(res);

        }
        if(!category)
        {
            return new response ().notFound(res);

        }
        return new response(category,null).success(res)
    })
}