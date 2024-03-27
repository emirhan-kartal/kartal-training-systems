import "./App.css";

import { FooterMenu, Header, Dashboard, Workouts } from "./components";
import WorkoutDetails from "./components/pages/WorkoutDetails";
function App() {
    return (
        <div className="flex flex-col h-screen w-screen ">
            <Header />
            <div className="pb-16">
                {/*                 <Dashboard />
                                <Workouts />

                 */}{" "}
                <WorkoutDetails />
            </div>
            <FooterMenu />
        </div>
    );
}

export default App;
