import 'dotenv/config';
export default dbConfig();

function dbConfig() {
    return {
        sql: {
            host: process.env.host,
            database: process.env.database,
            username: process.env.db_username,
            password: process.env.db_password,
            dialect: "mysql",
            logging: true,
        }
    }
}