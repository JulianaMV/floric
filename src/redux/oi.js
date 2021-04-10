
import api from '../services/api'


    


        async function getTasks() {
                const response = await api.get('/task')
                const oi = ([...response.data.tasks])
                return oi;
        }
        const oii = {
            getTasks,
        }
        

export default {oii}