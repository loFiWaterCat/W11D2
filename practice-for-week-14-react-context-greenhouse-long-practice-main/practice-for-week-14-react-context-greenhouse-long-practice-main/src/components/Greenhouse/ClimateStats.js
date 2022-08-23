import './ClimateStats.css';
import { useClimate } from "../../context/ClimateContext.js"

function ClimateStats() {
  const {temp, humidity, newTemp} = useClimate();

  return (
    <div className="climate-stats">
      <div className="temperature">
        Temperature {temp}°F
      </div>
      <div className="humidity">
        Humidity {humidity}%
      </div>
    </div>
  )
}

export default ClimateStats;