import { axiosClient as Api, parameters, sizeImage, web } from ".";
import urlWA from "./urlWA";

// Xử lý tham số q (thành phố) để đưa vào api
const convertCity = city => {
    city = city.trim();
    city = city.replace(" ", "20%");

    return city;
}

// US_04 Lấy thông tin thời tiết và aqi hiện tại theo city
const getCurrentByCity = q => {
    parameters = {
        ...parameters,
        q,
        aqi: yes,
    }

    return Api(web.WA).get(`${urlWA.CURRENT}`, { params: parameters })
}

// US_04 Lấy thông tin thiên văn của ngày hiện tại theo city
const getAstronomyByCity = q => {
    parameters = {
        ...parameters,
        q,
    }

    return Api(web.WA).get(`${urlWA.ASTRONOMY}`, { params: parameters })
}

// US_05, US_6 Lấy thông tin thời tiết cho ngày mai, ngày kia
// (3 ngày, có cả dự báo theo giờ)
const getForecast3daysByCity = q => {
    parameters = {
        ...parameters,
        q,
        days: 3,
    }

    return Api(web.WA).get(`${urlWA.FORECAST}`, { params: parameters })
}

export { convertCity,
            getCurrentByCity,
            getAstronomyByCity,
            getForecast3daysByCity,
             };

