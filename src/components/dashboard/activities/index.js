import ActivityRow from "@/components/dashboard/activity-row"

import {
    feed_activity,
    feed_state,
    incomplete_activity,
    incomplete_state,
} from "@/constants/dashboard"

export default function Activities() {
    return (
        <>
            <h2 className="text-gray-400 font-semibold text-3xl p-1">Actividades recientes</h2>
            <ActivityRow icon={feed_activity} type="Comida" time="4:48:24 PM" info="400 gr" state={feed_state} />
            <ActivityRow icon={incomplete_activity} type="-" time="-" info="-" state={incomplete_state} />
            <ActivityRow icon={incomplete_activity} type="-" time="-" info="-" state={incomplete_state} />
        </>
    )
}
