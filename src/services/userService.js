import axios from "../axios"
const handleLogiApi = (email, password) => {
    return axios.post('/api/login');
}
export {handleLogiApi}