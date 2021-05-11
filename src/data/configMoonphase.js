export const moonPhaseToVi = moonphase => {
    if (moonphase) {
        moonphase = moonphase.trim();
        switch (moonphase) {
            case "New Moon":
                return "Trăng mới";
            case "Waning Crescent":
                return "Lưỡi liềm đầu tháng";
            case "Third Quater":
                return "Bán nguyệt đầu tháng";
            case "Waning Gibbous":
                return "Trăng khuyết đầu tháng";
            case "Full":
                return "Trăng tròn";
            case "Waxing Gibbous":
                return "Trăng khuyết cuối tháng";
            case "First Quater":
                return "Bán nguyệt cuối tháng";
            case "Waxing Crescent":
                return "Lưỡi liềm cuối tháng";
            default:
                return null;
        }
    }
}