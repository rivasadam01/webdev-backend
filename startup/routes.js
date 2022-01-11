module.exports=(app)=>{
    app.use(require('cors')());
    app.use(require('body-parser').json());
    app.use('/auth',require('../routes/auth'));
}