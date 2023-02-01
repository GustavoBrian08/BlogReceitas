import { Pool } from 'pg';
import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config()

export default new Pool({
    connectionString: 'postgres://ukixiftj:3G1sbFV1dcAWjrJ7VvkCpO9bV4GoBhr_@babar.db.elephantsql.com/ukixiftj'
})



