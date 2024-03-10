import React, {useEffect} from 'react';
import { useState } from "react";

const DeBouncedInput = ({ value: initValue, onChange, debounce = 500, ...props }) => {
    const [value, setValue] = useState(initValue);
    useEffect(() => {
        setValue(initValue);
    }, [initValue]);

    useEffect(()=>{
        const timeout = setTimeout(()=>{
            onChange(value);

        }, debounce);
        return () => clearTimeout(timeout);

    },[value]);

    return (
        <input
            {...props}
            value={value}
            onChange={(e) => setValue(e.target.value)}

        />

    );
};

export default DeBouncedInput;