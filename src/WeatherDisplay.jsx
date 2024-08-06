import { useDispatch, useSelector } from "react-redux";
import { FaCloudSunRain } from "react-icons/fa6";
import { MdCloudySnowing } from "react-icons/md";
import { FaCloudRain } from "react-icons/fa6";
import { GiWaterDrop } from "react-icons/gi";
import { FaCloudSun } from "react-icons/fa";
import { FiWind } from "react-icons/fi";
import { FaSun } from "react-icons/fa";


const WeatherDisplay = () => {
  const dispatch = useDispatch();
  const weatherData = useSelector((state) => state.weather.weatherData);
  const status = useSelector((state) => state.weather.status);
  const error = useSelector((state) => state.weather.error);

  const renderWeatherIcon = () => {
    if (weatherData.weather[0].main === 'Clear') {
      return <FaSun size={100} />;
    } else if (weatherData.weather[0].main === 'Clouds'){
        return <FaCloudSun size={100}/>
    } else if (weatherData.weather[0].main === 'Rain'){
        return <FaCloudRain size={100}/>
    } else if (weatherData.weather[0].main === 'Snow'){
        return <MdCloudySnowing size={100}/>
    } else {
        return <FaCloudSunRain size={100}/>
    }
  };
  

  return (
    <>
      {status === "loading" && <p>Loading...</p>}
      {status === "failed" && <p>Error: {error}</p>}
      {status === "succeeded" && weatherData && (
        <>
          <div style={{ marginTop: "45px" }}>
            {renderWeatherIcon()}
            <h2 className="weatherCardTop" style={{ fontSize: "50px" }}>
              {weatherData.main.temp.toFixed(2)}°C
            </h2>
            <div style={{ marginTop: "20px", marginBottom: "90px" }}>
              <p style={{ color: 'rgb(59, 59, 59)'}}>{weatherData.weather[0].main}</p>
              <h1 style={{ marginTop: "40px"}}>{weatherData.name}</h1>
            </div>
          </div>

          <div className="weatherCardMiddle">
            <div className="weatherCardMiddleL">
              <FiWind className="icons"/>
              <div>
                <span>{weatherData.wind.speed}</span>
                <p>Wind Speed</p>
              </div>
            </div>

            <div className="weatherCardMiddleR">
              <GiWaterDrop className="icons"/>
              <div>
                <span>{weatherData.main.humidity}%</span>
                <p>Humidity</p>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default WeatherDisplay;
