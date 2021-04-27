import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "../layouts/header";
import LeftBar from "../layouts/leftBar";
import MainBody from "../layouts/mainBody";
import NavBar from "../layouts/navBar";
import CurrentWeatherPage from "../pages/currentWeatherPage";
import DailyWeatherPage from "../pages/dailyWeatherPage";
import HourlyWeatherPage from "../pages/hourlyWeatherPage";

const Routes = () =>
{
    return (
        <>
            <BrowserRouter>
                <Header />
                <NavBar />
                <LeftBar />
                <MainBody>
                    <Switch>
                        <Route path="/main/current" exact component={CurrentWeatherPage} />
                        <Route path="/main/hours" exact component={HourlyWeatherPage} />
                        <Route path="/main/days" exact component={DailyWeatherPage} />
                    </Switch>
                </MainBody>
            </BrowserRouter>
        </>
    );
}

export default Routes;