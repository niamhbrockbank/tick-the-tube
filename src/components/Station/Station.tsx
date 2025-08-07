import type { Station } from "../../lib/types";

interface Props {
  station: Station;
}

export default function Station({ station }: Props) {
  return <li>{station?.name}</li>;
}
