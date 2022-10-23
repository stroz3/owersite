import Axios from "axios";
import Cookies from "js-cookie";

const baseUrl = "https://hack-api.dline-rhost.ru/api/"

Axios.defaults.baseURL = baseUrl

// export default axios.create({
//     baseURL: 'http://drh-api.projects.dl-net.ru/api/',
//     headers: {'Authorization': 'Bearer 8|snPbMizTdgWdu8a0nZYzEQIUpoeYm17KpOB35pfP'}
// })

export default function interceptorSetup() {
    Axios.interceptors.request.use(
        (config) => {
            let token = Cookies.get("token");
            if (Cookies.get('admin-token') || Cookies.get('token') && !Cookies.get('token')) {
                token = Cookies.get("admin-token")
            }
            const configuration = config;
            configuration.headers["Content-Type"] = "application/json";
            configuration.url = baseUrl + config.url;
            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }
            return configuration;
        },
        (err) => Promise.reject(err)
    );
    Axios.interceptors.response.use(
        function (response) {
            return response;
        },
        function (error) {
            return Promise.reject(error);
        }
    );

}

// 1|H0uAh74S9zUflsgYuuVujjMF1nDUi2I6u6mXltwa
