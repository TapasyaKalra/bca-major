import axios from "axios";

const instance = axios.create({
        baseURL: 'https://us-central1-glam-nation-f7f58.cloudfunctions.net/api'
                // 'http://localhost:5001/glam-nation-f7f58/us-central1/api'

});

export default instance;