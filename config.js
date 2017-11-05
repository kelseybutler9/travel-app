exports.DATABASE_URL = process.env.DATABASE_URL ||
                       global.DATABASE_URL ||
                      'mongodb://localhost/travelApp';
exports.PORT = process.env.PORT || 8080;
