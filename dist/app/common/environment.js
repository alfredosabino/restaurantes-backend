"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = void 0;
exports.environment = {
    server: { port: process.env.SERVER_PORT || 3001 },
    db: { url: process.env.DB_URL || 'mongodb://localhost:27017/delivery' },
    security: { saltRounds: process.env.SALT_ROUNDS || 10 }
};
