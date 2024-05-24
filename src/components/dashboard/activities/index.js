import ActivityRow from "@/components/dashboard/activity-row";
import { incompleteActivity } from "@/constants/dashboard";

const ActivityList = ({ activities }) => {
  while (activities.length < 4) {
    activities.push(incompleteActivity)
  }

  return (
    <>
      <h2 className="text-gray-400 font-medium text-3xl p-2">
        Actividades recientes
      </h2>
      {activities.map((activity, index) => (
        <ActivityRow
          key={index}
          icon={activity.icon}
          type={activity.type}
          time={activity.time}
          info={activity.info}
          state={activity.state}
        />
      ))}
    </>
  );
};

export default ActivityList;
