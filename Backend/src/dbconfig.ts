import { Pool } from 'pg';
import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config()

export default new Pool({
    connectionString: 'postgres://iefifuhq:8Q0QFIZWdWvjoXTOOz8mka4a9Qi_6b82@babar.db.elephantsql.com/iefifuhq'
})



