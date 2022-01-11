const jwt_key=require('crypto').randomBytes(64).toString('hex');

module.exports={
    jwt_key
}