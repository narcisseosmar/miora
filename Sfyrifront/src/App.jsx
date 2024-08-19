import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainSection from "./components/MainSection";
import Footer from "./components/Footer";
import PodStatusPage from "./components/api/PodStatusPage";
import "./App.css";
import "./index.css";
import Sidebar from "./components/SideBar";
import Upload from "./components/deploiement/Upload";
import Security from "./components/security/Security";
import StatistiquePage from "./components/api/StatistiquePage";
import ConteneurPage from "./components/api/ConteneurPage";
import Dast from "./components/dast/dast";
import Liste from "./components/deploiement/Liste";
import Statistique from "./components/deploiement/Statistique";
import Cluster from "./components/api/Cluster";
import Dashb from "./components/monitoringApp/Dashboard";
import Alerte from "./components/monitoringApp/Alerte";
import Applications from "./components/monitoringApp/Applications";
import Graphique from "./components/monitoringApp/Graphique";
import Ressource from "./components/monitoringApp/Ressource";


function App() {
  return (
    <Router>
      <div
        className="min-h-screen bg-cover bg-fixed text-indigo-400"
        style={{ backgroundImage: "url('header.png')" }}
      >
        {/* Sidebar fixe */}
        <div className="fixed top-0 left-0 h-full w-1/6">
          <Sidebar />
        </div>

        {/* Main content */}
        <div className="ml-[16.67%] w-[83.33%]  overflow-y-auto bg-white h-screen p-14">
          <Routes>
            <Route path="/" element={<MainSection />} />
            <Route path="/pod-status" element={<PodStatusPage />} />
            <Route path="/Upload" element={<Upload />} />
            <Route path="/security/*" element={<Security />} />
            <Route path="/statistique" element={<StatistiquePage />} />
            <Route path="/conteneur" element={<ConteneurPage />} />
            <Route path="/dast" element={<Dast />} /> {/* Ajout de la route pour Dast */}
            <Route path="/deployed-app/" element={<Liste />} /> {/* Ajout de la route pour la liste des applications docker déployées */}
            <Route path="/deployed-stat/" element={<Statistique />} />
            <Route path="/cluster/" element={<Cluster />} />
            <Route path="/Dashb" element={<Dashb/>} />
            <Route path="/Applications" element={<Applications />} />
            <Route path="/Alerte" element={<Alerte />} />
            <Route path="/Ressource" element={<Ressource />} />
            <Route path="/Graphique" element={<Graphique />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
