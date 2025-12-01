import { style } from "@vanilla-extract/css";
import { borderRadius } from "../../../index.css";

export const station = style([borderRadius, {
    listStyleType: 'none',
    margin: '10px',
    padding: '10px 24px',
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    border: "1px solid #ced0d3ff",
    boxShadow: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
}])

export const stationName = style({})

export const visitingOptions = style([borderRadius, {
    padding: '8px 16px',
}])