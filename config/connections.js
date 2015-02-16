module.exports.connections = {
  mysql: {
    module    : 'sails-mysql',
    host      : process.env.OPENSHIFT_MYSQL_DB_HOST || 'localhost',
    port      : process.env.OPENSHIFT_MYSQL_DB_PORT || 3306,
    user      : process.env.OPENSHIFT_MYSQL_DB_USERNAME || 'username',
    password  : process.env.OPENSHIFT_MYSQL_DB_PASSWORD ||'password',
    database  : 'lms'
/*
    // OR (explicit sets take precedence)
    module    : 'sails-mysql',
    url       : 'mysql2://USER:PASSWORD@HOST:PORT/DATABASENAME'
*/
    // Optional
    charset   : 'utf8',
    collation : 'utf8_swedish_ci'
  }
};