class response{

    constructor(data =null,error=null){
        this.error=errors;
        this.data=data;
    }

    success(res)
    {
        return res.status(200).json({
            status:"success",
            data:this.data
        })
    }
    created(res)
    {
        return res.status(201).json({
            status:"created",
            data:this.data
        })
    }
    error400(res)
    {
        return res.status(400).json({
            status:"error400",
           errors:this.errors
        })
    }
    notFound(res)
    {
        return res.status(404).json({
            status:"not found",
           errors:""
        })
    }
    error500(res)
    {
        return res.status(500).json({
            status:"error500",
           errors:this.errors
        })
    }
    




}

module.exports=response;