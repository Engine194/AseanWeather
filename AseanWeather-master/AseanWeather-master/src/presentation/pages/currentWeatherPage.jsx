import { useEffect, useState } from "react";


const CurrentWeatherPage = (props) =>
{
    // khai báo state hiển thị 
    const [showData, setShowData] = useState('');

    // khai báo state bắt props truyền từ form search
    const valueSearch = props.location.state.response;

    // sử dụng useEfect gọi api
    useEffect(() =>
    {   
        async function CallApiSearch() // sử dụng async bắt bất đồng bộ
        {
            const url = `http://localhost:8080/api/v1/cities/name/${valueSearch}`

            const response = await fetch(url); //fetch dữ liệu
            // if (response == null) return alert('thành phố bạn nhập không tồn tại dữ liệu')
                
            const responseJSON = await response.json();

            console.log({ responseJSON });
            const data = responseJSON.name;
            console.log(data);
            setShowData(data); // sét lại state hiển thị lên ui
        }
        CallApiSearch();
    }, [valueSearch]) // khai báo dependencie 


    return (
        <h1>
            {/* hiển thị lên ui */}
            {showData} 
        </h1>
    );
}

export default CurrentWeatherPage;