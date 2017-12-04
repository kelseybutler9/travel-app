exports.DATABASE_URL = process.env.DATABASE_URL ||
                       global.DATABASE_URL ||
                       'mongodb://my-new-user:password@ds249325.mlab.com:49325/travel-app-trips';
exports.PORT = process.env.PORT || 8080;
