import { useState } from "react";
import { Link } from "react-router-dom";
import { FaChevronDown, FaChevronUp, FaProjectDiagram, FaCertificate, FaUpload, FaChartLine, FaFileAlt, FaShieldAlt, FaCogs, FaSyncAlt } from "react-icons/fa";

const Sidebar = () => {
  const [isPipelineOpen, setIsPipelineOpen] = useState(false);
  const [isCertificatOpen, setIsCertificatOpen] = useState(false);
  const [isDeploiementOpen, setIsDeploiementOpen] = useState(false);
  const [isPODOpen, setIsPODOpen] = useState(false);
  const [isMonitoringAppOpen, setIsMonitoringAppOpen] = useState(false);
  const [isLogOpen, setIsLogOpen] = useState(false);
  const [isSecurityOpen, setIsSecurityOpen] = useState(false);
  const [isSystemOpen, setIsSystemOpen] = useState(false);

  const refreshPage = () => {
    window.location.reload();
  };

  return (
    <div className="h-screen bg-slate-100 text-gray-600 font-sans shadow-sm">
      {/* Menu Button */}
      <div className="flex justify-center py-4">
        <button 
          onClick={refreshPage} 
          className="flex items-center bg-gray-200 py-2 px-4 rounded-lg hover:bg-gray-300"
        >
          <FaSyncAlt className="mr-2" /> 
          {/* <span>Menu</span> */}
        </button>
      </div>

      <nav>
        {/* Pipeline */}
        <div>
          <button
            onClick={() => setIsPipelineOpen(!isPipelineOpen)}
            className="flex items-center justify-between w-full py-2 px-4 hover:bg-gray-300"
          >
            <span className="flex items-center">
              <FaProjectDiagram className="mr-2" /> Pipeline 
            </span>
            {isPipelineOpen ? <FaChevronUp /> : <FaChevronDown />}
          </button>
          {isPipelineOpen && (
            <div className="ml-4">
              <Link to="/pod-status/" className="block py-2 px-4 hover:bg-gray-200">
                Results
              </Link>
              <Link to="/pod-status/" className="block py-2 px-4 hover:bg-gray-200">
                Reports
              </Link>
              <Link to="/pod-status/" className="block py-2 px-4 hover:bg-gray-200">
                Security
              </Link>
            </div>
          )}
        </div>

        {/* Certificat */}
        <div>
          <button
            onClick={() => setIsCertificatOpen(!isCertificatOpen)}
            className="flex items-center justify-between w-full py-2 px-4 hover:bg-gray-300"
          >
            <span className="flex items-center">
              <FaCertificate className="mr-2" /> Certificat
            </span>
            {isCertificatOpen ? <FaChevronUp /> : <FaChevronDown />}
          </button>
          {isCertificatOpen && (
            <div className="ml-4">
              <Link to="/pod-status/" className="block py-2 px-4 hover:bg-gray-200">
                Overview
              </Link>
              <Link to="/pod-status/" className="block py-2 px-4 hover:bg-gray-200">
                Stats
              </Link>
              <Link to="/pod-status/" className="block py-2 px-4 hover:bg-gray-200">
                Reports
              </Link>
              <Link to="/pod-status/" className="block py-2 px-4 hover:bg-gray-200">
                Profile
              </Link>
              <Link to="/pod-status/" className="block py-2 px-4 hover:bg-gray-200">
                Account
              </Link>
              <Link to="/pod-status/" className="block py-2 px-4 hover:bg-gray-200">
                Notifications
              </Link>
            </div>
          )}
        </div>

        {/* Deploiement */}
        <div>
          <button
            onClick={() => setIsDeploiementOpen(!isDeploiementOpen)}
            className="flex items-center justify-between w-full py-2 px-4 hover:bg-gray-300"
          >
            <span className="flex items-center">
              <FaUpload className="mr-2" /> Deploiement
            </span>
            {isDeploiementOpen ? <FaChevronUp /> : <FaChevronDown />}
          </button>
          {isDeploiementOpen && (
            <div className="ml-4">
              <Link to="/Upload/" className="block py-2 px-4 hover:bg-gray-200">
                Upload
              </Link>
              <Link to="/deployed-app/" className="block py-2 px-4 hover:bg-gray-200">
                App deployé
              </Link>
              <Link to="/deployed-stat/" className="block py-2 px-4 hover:bg-gray-200">
                Stat-deploy
              </Link>
              <Link to="/pod-status/" className="block py-2 px-4 hover:bg-gray-200">
                Profile
              </Link>
              <Link to="/pod-status/" className="block py-2 px-4 hover:bg-gray-200">
                Account
              </Link>
              <Link to="/pod-status/" className="block py-2 px-4 hover:bg-gray-200">
                Notifications
              </Link>
            </div>
          )}
        </div>

        {/* Orchestration */}
        <div>
          <button
            onClick={() => setIsPODOpen(!isPODOpen)}
            className="flex items-center justify-between w-full py-2 px-4 hover:bg-gray-300"
          >
            <span className="flex items-center">
              <FaChartLine className="mr-2" /> Orchestration
            </span>
            {isPODOpen ? <FaChevronUp /> : <FaChevronDown />}
          </button>
          {isPODOpen && (
            <div className="ml-4">
              <Link to="/statistique/" className="block py-2 px-4 hover:bg-gray-200">
                Statistique
              </Link>
              <Link to="/conteneur/" className="block py-2 px-4 hover:bg-gray-200">
                Conteneur
              </Link>
              <Link to="/pod-status/" className="block py-2 px-4 hover:bg-gray-200">
                Pod
              </Link>
              <Link to="/cluster/" className="block py-2 px-4 hover:bg-gray-200">
                Disponibilite
              </Link>
            </div>
          )}
        </div>








        {/* Monitoring App */}
        <div>
          <button
            onClick={() => setIsMonitoringAppOpen(!isMonitoringAppOpen)}
            className="flex items-center justify-between w-full py-2 px-4 hover:bg-gray-300"
          >
            <span className="flex items-center">
              <FaFileAlt className="mr-2" /> Monitoring App
            </span>
            {isMonitoringAppOpen ? <FaChevronUp /> : <FaChevronDown />}
          </button>
          {isMonitoringAppOpen && (
            <div className="ml-4">
              <Link to="/Dashb/" className="block py-2 px-4 hover:bg-gray-200">
              Dashboards
              </Link>
              <Link to="/Applications/" className="block py-2 px-4 hover:bg-gray-200">
              Applications Status
              </Link>
              <Link to="/Ressource/" className="block py-2 px-4 hover:bg-gray-200">
              Ressource Usage 
              </Link>
              <Link to="/Alerte/" className="block py-2 px-4 hover:bg-gray-200">
              Alert
              </Link>
              <Link to="/Graphique/" className="block py-2 px-4 hover:bg-gray-200">
              Graphic
              </Link>
              
              
            </div>
          )}
        </div>












        {/* Log */}
        <div>
          <button
            onClick={() => setIsLogOpen(!isLogOpen)}
            className="flex items-center justify-between w-full py-2 px-4 hover:bg-gray-300"
          >
            <span className="flex items-center">
              <FaShieldAlt className="mr-2" /> Log
            </span>
            {isLogOpen ? <FaChevronUp /> : <FaChevronDown />}
          </button>
          {isLogOpen && (
            <div className="ml-4">
              <Link to="/pod-status/" className="block py-2 px-4 hover:bg-gray-200">
                Overview
              </Link>
              <Link to="/pod-status/" className="block py-2 px-4 hover:bg-gray-200">
                Stats
              </Link>
              <Link to="/pod-status/" className="block py-2 px-4 hover:bg-gray-200">
                Reports
              </Link>
              <Link to="/pod-status/" className="block py-2 px-4 hover:bg-gray-200">
                Profile
              </Link>
              <Link to="/pod-status/" className="block py-2 px-4 hover:bg-gray-200">
                Account
              </Link>
              <Link to="/pod-status/" className="block py-2 px-4 hover:bg-gray-200">
                Notifications
              </Link>
            </div>
          )}
        </div>








        {/* Security */}
        <div>
          <button
            onClick={() => setIsSecurityOpen(!isSecurityOpen)}
            className="flex items-center justify-between w-full py-2 px-4 hover:bg-gray-300"
          >
            <span className="flex items-center">
              <FaShieldAlt className="mr-2" /> Security
            </span>
            {isSecurityOpen ? <FaChevronUp /> : <FaChevronDown />}
          </button>
          {isSecurityOpen && (
            <div className="ml-4">
              <Link to="/security/state/" className="block py-2 px-4 hover:bg-gray-200">
                Pipeline
              </Link>
              <Link to="/pod-status/" className="block py-2 px-4 hover:bg-gray-200">
                Application
              </Link>
              <Link to="/dast" className="block py-2 px-4 hover:bg-gray-200">
                Dast
              </Link>
            </div>
          )}
        </div>










        {/* System */}
        <div>
          <button
            onClick={() => setIsSystemOpen(!isSystemOpen)}
            className="flex items-center justify-between w-full py-2 px-4 hover:bg-gray-300"
          >
            <span className="flex items-center">
              <FaCogs className="mr-2" /> System
            </span>
            {isSystemOpen ? <FaChevronUp /> : <FaChevronDown />}
          </button>
          {isSystemOpen && (
            <div className="ml-4">
              <Link to="/pod-status/" className="block py-2 px-4 hover:bg-gray-200">
                Overview
              </Link>
              <Link to="/pod-status/" className="block py-2 px-4 hover:bg-gray-200">
                Stats
              </Link>
              <Link to="/pod-status/" className="block py-2 px-4 hover:bg-gray-200">
                Reports
              </Link>
              <Link to="/pod-status/" className="block py-2 px-4 hover:bg-gray-200">
                Profile
              </Link>
              <Link to="/pod-status/" className="block py-2 px-4 hover:bg-gray-200">
                Account
              </Link>
              <Link to="/pod-status/" className="block py-2 px-4 hover:bg-gray-200">
                Notifications
              </Link>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
