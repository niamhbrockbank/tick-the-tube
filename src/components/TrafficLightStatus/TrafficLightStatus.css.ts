import { style } from "@vanilla-extract/css";

 const trafficLight = style({
    borderRadius: '100%',
    width: '24px',
    height: '24px',
    opacity: '0.6'
})

export const trafficLightRed = style([trafficLight, {    border: '1px solid red',
    backgroundColor: 'red',
    
}])

export const trafficLightAmber = style([trafficLight, {    border: '1px solid orange',   backgroundColor: 'orange',}])

export const trafficLightGreen = style([trafficLight, {    border: '1px solid green',   backgroundColor: 'green',}])