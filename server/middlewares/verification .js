const jwt = require('jsonwebtoken')
const dotenv =require('dotenv')
const local_storage =require('local-storage')

function verify(params){   
    return(req,res,next)=>{
        if(local_storage('token')){   
            if(jwt.verify(local_storage('token'),process.env.SECRET))
            {  
                let  token=jwt.verify(local_storage('token'),process.env.SECRET)
                req.user=token
                if(params.includes(req.user.user.roleid.type)){                     
                    next()
                }else{
                    res.status(401).send('unauthenticated in this route')
                }
            }
        }else{
                 res.status(401).send('unauthenticated // token is not her')
        }
    }
    
}

module.exports={verify}