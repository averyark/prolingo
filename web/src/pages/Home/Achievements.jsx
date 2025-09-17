import { Sidebar } from "../../components/Sidebar/Sidebar";
import { Stats } from "../../components/Stats/Stats";
import "../../styles/Home.css";

function AchievementsHome() {

    return (
        <div style={{ display: "flex", flexDirection: "row", height: "100vh" }}>
            <Sidebar />
            <div className="main-content">
                <Stats />
            </div>
        </div>
    );
}

export default AchievementsHome;
