const convertAQItoString = (usEpaIndex) => {
    if (usEpaIndex) {
        switch (usEpaIndex) {
            case 1:
                return "Tốt";
            case 2:
                return "Trung bình";
            case 3:
                return "Kém";
            case 4:
                return "Xấu";
            case 5:
                return "Rất xấu";
            case 6:
                return "Nguy hại";
            default:
                return null;
        }
    }
}

const fixColorOfAqi = (usEpaIndex, element) => {
    switch (usEpaIndex) {
        case 1:
            document.querySelector(element).style.color = "rgb(0,228,0)";
            break;
            case 2:
                document.querySelector(element).style.color = "rgb(250,237,39)";
                break;
                case 3:
                    document.querySelector(element).style.color = "rgb(237,126,0)";
                    break;
                    case 4:
                    document.querySelector(element).style.color = "rgb(255,0,0)";
                    break;
                    case 5:
                    document.querySelector(element).style.color = "rgb(143,63,151)";
                    break;
                    case 6:
                    document.querySelector(element).style.color = "rgb(126,0,35)";
                    break;
        default :
            document.querySelector(element).style.color = "rgb(0,0,0)";
    }
}

export default {convertAQItoString, fixColorOfAqi};