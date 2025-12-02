import type { Line } from "../store/HomeStore";

export const LINES :  Line[] = [
    {
        id : 'jubilee',
        name: 'Jubilee',
    },
    {
        id: 'metropolitan',
        name: 'Metropolitan',
    },
    {
        id: 'bakerloo',
        name: 'Bakerloo',

    }
    ,{
        id: 'central',
        name: 'Central',
    },
    {
        id: 'circle',
        name: 'Circle',
    },
    {
        id: 'district',
        name: 'District',
    },
    {
        id: 'hammersmith-city',
        name: 'Hammersmith & City',
    },
    {
        id: 'northern',
        name: 'Northern',
    },
    {
        id: 'piccadilly',
        name: 'Piccadilly',
    },
    {
        id: 'victoria',
        name: 'Victoria',
    },
    {
        id: 'waterloo-city',
        name: 'Waterloo & City',
    },
]

export const INITIAL_LINE_STATUS = LINES.reduce((prev, cur) => ({...prev, [cur.id] : {untouched: 0, through: 0, visited: 0}}), {})