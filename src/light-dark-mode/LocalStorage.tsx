import { useEffect, useState } from "react";

const targetValue = <K extends string, V>(key: K, value: V) => {
    let currentValue;

    try {
        currentValue = JSON.parse(localStorage.getItem(key) || String(value))
    } catch (e) {
        console.log(e);
        currentValue = value
    }
    return currentValue

}


export default function LocalStorage<K extends string, D>(key: K, defaultValue: D) {
    const [value, setValue] = useState(targetValue(key, defaultValue))

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value))
    }, [key, value])
    return [value, setValue]
}
