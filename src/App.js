import "./App.css";
import ForCast from "./Components/ForCast";
import Inputs from "./Components/Inputs";
import TemperatureAndPlace from "./Components/TemperatureAndPlace";
import TimeAndLocation from "./Components/TimeAndLocation";
import TopButton from "./Components/TopButton";

function App() {
    return (
        <div className="mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 shadow-lg shadow-gray-400">
            <TopButton />
            <Inputs />

            <TimeAndLocation />
            <TemperatureAndPlace />
            <ForCast title="Hourly forecast" />
            <ForCast title="daily forecast" />
        </div>
    );
}

export default App;
