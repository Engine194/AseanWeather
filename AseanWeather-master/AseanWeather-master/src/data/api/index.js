import axios from "axios";

const axiosType = {
    WA = "[WEB] WA",
    BE = "[BACK-END] BE",
}

const apiKey = "effc8583cba94b22b7b32127212204";

const baseUrlWA = "http://api.weatherapi.com/v1";
const baseUrlBE = "http://localhost:8080/api/v1/cities/name/";

// Khởi tạo parameters để get kèm param (lang, key, id, q, aqi, ...)
const parameters = {
    lang: vi,
};

// Tạo một cổng lựa chọn api nào
// nếu param là WA thì gọi call dữ liệu
// nếu là BE thì gọi từ Back end
const axiosClient = (id) =>
{
    switch (id) {
        case axiosType.WA:
            parameters = {
                ...parameters,
                key: apiKey,
            }
            return axios.create({
                baseURL: baseUrlWA,
                responseType: "json",
            })
        case axiosType.BE:
            return axios.create({
                baseURL: baseUrlBE,
                responseType: "json",
            })
    }

}

axiosClient.interceptors.request.use(async config =>
{
    //Handle token ....
    // Nếu token có thì tự đính kèm
    const token = storage.getToken()

    if (token !== null && token !== undefined) {
        config.headers.Authorization = "Bearer " + token;
    }

    return config;
})

axiosClient.interceptors.response.use(response =>
{
    if (response && response.data !== undefined) {
        return response.data;
    }
    return response.data;
}, err =>
{
    if (err.response) {
        throw err.response
    } else if (err.request) {
        throw err.request
    } else {
        throw err
    }
})



export { axiosClient, web, parameters, sizeImage };