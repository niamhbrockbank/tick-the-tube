import {  style, styleVariants } from "@vanilla-extract/css";
import { bakerloo, borderRadius, central, circle, district, hammersmithCity, jubilee, metropolitan, northern, piccadilly, victoria, waterlooCity } from "../../../index.css";

export const lineBase = style([borderRadius, {
    listStyleType : 'none',
    margin: '20px auto',
    padding: '16px 24px',
    border: "1px solid #e2e8f0",
    boxShadow: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
}])

export const line = styleVariants({
    base: [lineBase],
        metropolitan: [lineBase, {borderBottom: `8px solid ${metropolitan}` }],
        jubilee: [lineBase, {borderBottom: `8px solid ${jubilee}` }],
        bakerloo: [lineBase, {borderBottom: `8px solid ${bakerloo}` }],
        central: [lineBase, {borderBottom: `8px solid ${central}` }],
        circle: [lineBase, {borderBottom: `8px solid ${circle}` }],
        district: [lineBase, {borderBottom: `8px solid ${district}` }],
        ['hammersmith-city']: [lineBase, {borderBottom: `8px solid ${hammersmithCity}` }],
        northern: [lineBase, {borderBottom: `8px solid ${northern}`}],
        piccadilly: [lineBase, {borderBottom: `8px solid ${piccadilly}` }],
        victoria: [lineBase, {borderBottom: `8px solid ${victoria}` }],
        ['waterloo-city']: [lineBase, {borderBottom: `8px solid ${waterlooCity}` }],
})

export const lineTitleRow = style({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "80px",
    color: "#213547",
})

export const lineTitleRowLeft = style({
    display: "flex",
    flexDirection: "column",
    fontSize: "1.5rem"
})

export const showButton = style({
    borderBottom: "1px solid transparent",
    fontSize: "0.8rem",
    width: "fit-content",
    ':hover' : {
        borderBottom: "1px solid"
    }
})

export const lineSummary = style({
    display: "flex",
    gap: "12px"
})