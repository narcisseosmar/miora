import React from "react";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa"; // Pour les icônes de succès et d'erreur
import dayjs from "dayjs"; // Pour formater les dates
import relativeTime from "dayjs/plugin/relativeTime"; // Importer le plugin RelativeTime

// Activer le plugin RelativeTime
dayjs.extend(relativeTime);

// Composant pour afficher une étape du processus DevOps
const DevOpsProcess = ({ step, status, startTime, duration }) => {
  const isSuccessful = status === "success";
  const timeAgo = dayjs(startTime).fromNow(); // Temps écoulé depuis le début de l'étape

  return (
    <div className="flex items-center p-4 mb-4 bg-white rounded-lg shadow-md">
      <div className="mr-4">
        {isSuccessful ? (
          <FaCheckCircle className="text-green-500 text-xl" />
        ) : (
          <FaTimesCircle className="text-red-500 text-xl" />
        )}
      </div>
      <div className="flex-grow">
        <h3 className="text-lg font-semibold">{step}</h3>
        <p className="text-gray-500">
          {timeAgo} - Durée: {duration}
        </p>
      </div>
    </div>
  );
};

// Composant principal pour afficher le processus DevOps complet
const Result = () => {
  const pipelineSteps = [
    {
      step: "Test",
      status: "success",
      startTime: "2024-08-16T09:00:00Z",
      duration: "3 minutes",
    },
    {
      step: "Build",
      status: "success",
      startTime: "2024-08-16T09:03:00Z",
      duration: "5 minutes",
    },
    {
      step: "Build Image",
      status: "error",
      startTime: "2024-08-16T09:08:00Z",
      duration: "7 minutes",
    },
    {
      step: "Deploy",
      status: "success",
      startTime: "2024-08-16T09:15:00Z",
      duration: "2 minutes",
    },
  ];

  return (
    <div className="p-6  min-h-screen">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Pipeline State</h2>
      {pipelineSteps.map((process, index) => (
        <DevOpsProcess
          key={index}
          step={process.step}
          status={process.status}
          startTime={process.startTime}
          duration={process.duration}
        />
      ))}
    </div>
  );
};

export default Result;
