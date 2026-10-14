import { Navigate } from "react-router-dom";

// Note: Transportation is removed per Rajajinagar specification.
// This component redirects to campus facilities.
const Transportation = () => {
  return <Navigate to="/campus/facilities" replace />;
};

export default Transportation;
