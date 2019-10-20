import React from 'react';


const Select = ({
    options,
    image
}) => {
    return (

        <select style={{backgroundImage: `url(${image})`}}>
            {options.map((option, index) => (
                <option value={option.value} key={index}>{option.data}</option>
            ))}
        </select>
    )
}

Select.defaultProps = {
    options: [...Array(10).fill({
        value: 'gfs',
        data: 'Iphone'
    })]
}
