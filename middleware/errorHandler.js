const {constants} = require("../constants")
const errorHandler = (err,req,res,next) => {
	const statusCode = res.statusCode ? res.statusCode : 500;
	switch(statusCode){
		case constants.VALIDATION_ERROR:
			res.json({title:"Not found",message:err.message,strackTrace:err.stack});

		case constants.UNAUTHORIZED:
			res.json({title:"Unauthorized",message:err.message,strackTrace:err.stack});

		case constants.FORBIDDEN:
			res.json({title:"Forbidden",message:err.message,strackTrace:err.stack});

		case constants.SERVER_ERROR:
			res.json({title:"Server Error",message:err.message,strackTrace:err.stack});

		default:
			console.log("No Error,All good !");
			break;
	}
	res.json({title:"Not found",message:err.message,strackTrace:err.stack});
	res.json({title:"Validation Failed",message:err.message,strackTrace:err.stack});
};

module.exports = errorHandler;