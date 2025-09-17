import { Sidebar } from "../../components/Sidebar/Sidebar";
import { Stats } from "../../components/Stats/Stats";
import "../../styles/Home.css";

function LearnHome() {

    return (
        <div style={{ display: "flex", flexDirection: "row", height: "100%" }}>
            <Sidebar />
            <div className="main-content">
                <Stats />
            </div>
        </div>
    );
}

export default LearnHome;
