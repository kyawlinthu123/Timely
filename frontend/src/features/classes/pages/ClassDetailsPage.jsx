import { useLocation, useParams } from "react-router-dom";
import AssignmentList from "../../assignments/components/AssignmentList";

export default function SingleClassDetails() {
  const {title} = useParams();
  const location = useLocation();
  const singleClassData = location.state;

  return (
    <div className="max-w-6xl mx-auto">
      {singleClassData && <AssignmentList singleClassData={singleClassData} />}
    </div>
  );
}
