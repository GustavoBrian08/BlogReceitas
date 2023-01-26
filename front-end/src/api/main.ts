import axios from '../utils/axios' // Importando instancia personalizada do axios

// Exportando a classe Tarefa
export default class Blog {
    async index(){
        const response = await axios.get('/')
        return response
    }
}