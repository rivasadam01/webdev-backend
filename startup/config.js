const config = require('config');

module.exports={
    db_host:config.get('db_host'),
    db_user:config.get('db_user'),
    db_password:config.get('db_password'),
    db_database:config.get('db_database'),
    server_port:config.get('server_port'),
    jwt_key:config.get('jwt_key')
}