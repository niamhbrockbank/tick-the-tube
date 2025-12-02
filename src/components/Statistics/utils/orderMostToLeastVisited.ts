import type { LineId } from "../../../store/HomeStore";
import type { StatusCount } from "../../../store/UserVisitationStore";

export default function orderMostToLeastVisited(lineStatuses : StatusCount[]): LineId[] {
    console.log('lineStatuses :>> ', lineStatuses);
    return ["jubilee"]
}