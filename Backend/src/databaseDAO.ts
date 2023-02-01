import Pool  from "./dbconfig"

export class UsuarioDAO{
    // getLista()
    public static async getLista(){
        const cliente = await Pool.connect(); 
        const sql = "SELECT * FROM usuarios";
        const { rows } = await cliente.query(sql);
        cliente.release();
        return rows;
    }
    // getUsuarioId()
    public static async usuarioExiste(id:number){
        const cliente = await Pool.connect(); 
        const sql = "SELECT * FROM usuarios WHERE id=$1;";
        const valores = [id]
        const {rows} = await cliente.query(sql, valores);
        cliente.release();
        return rows.length == 1? true: false;
    }
    // updateUsuario()
    public static async updateUsuario(id:number, email:any){
        const cliente = await Pool.connect(); 
        const sql = "UPDATE usuarios SET email=$1 WHERE id=$2;";
        const valores = [email, id]
        await cliente.query(sql, valores);
        cliente.release();
    }

    public static async createUsuario(nome:any, email:any){
        const cliente = await Pool.connect(); 
        const sql = "INSERT INTO usuarios (nome, email) VALUES ($1, $2)";
        const valores = [nome, email]
        console.log(await cliente.query(sql, valores));
        cliente.release();
    }

    public static async getIDUltimoUsuario(){
        const cliente = await Pool.connect(); 
        const sql = "SELECT id from usuarios ORDER BY id DESC LIMIT 1;";
        const {rows} = await cliente.query(sql)
        cliente.release();
        return rows[0].id
    }


    // deletarUsuario()
    public static async deletarUsuario(id:number){
        const cliente = await Pool.connect(); 
        const sql = "DELETE FROM usuarios WHERE id=$1;";
        const valores = [id]
        await cliente.query(sql, valores);
        cliente.release();
    }
}

export class PostagemDAO {
    // getLista()
    public static async getLista(){
        const cliente = await Pool.connect(); 
        const sql = "SELECT * FROM postagens";
        const { rows } = await cliente.query(sql);
        cliente.release();
        return rows;
    }
    // getpostagenId()
    public static async postagemExiste(id:number){
        const cliente = await Pool.connect(); 
        const sql = "SELECT * FROM postagens WHERE id=$1;";
        const valores = [id]
        const {rows} = await cliente.query(sql, valores);
        cliente.release();
        return rows.length == 1? true: false;
    }
    // updatepostagen()
    public static async updatePostagem(id:number, conteudo:any){
        const cliente = await Pool.connect(); 
        const sql = "UPDATE postagens SET email=$1 WHERE id=$2;";
        const valores = [conteudo, id]
        await cliente.query(sql, valores);
        cliente.release();
    }

    public static async createPostagem(slug:any,conteudo:any, id_users:number, data:any ){
        const cliente = await Pool.connect(); 
        const sql = "INSERT INTO postagens (slug, conteudo, id_users, data) VALUES ($1, $2, $3, $4)";
        const valores = [slug, conteudo, id_users, data]
        console.log(await cliente.query(sql, valores));
        cliente.release();
    }

    public static async getIDUltimoPostagem(){
        const cliente = await Pool.connect(); 
        const sql = "SELECT id from postagens ORDER BY id DESC LIMIT 1;";
        const {rows} = await cliente.query(sql)
        cliente.release();
        return rows[0].id
    }


    // deletarpostagen()
    public static async deletarPostagem(id:number){
        const cliente = await Pool.connect(); 
        const sql = "DELETE FROM postagens WHERE id=$1;";
        const valores = [id]
        await cliente.query(sql, valores);
        cliente.release();
    }
}
