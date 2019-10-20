import React from 'react';
import PropTypes from 'prop-types';
import Styled from 'styled-components'
const FormInput = ({
    name,
    type,
    placeholder,
    onChange,
    className,
    value,
    error,
    children,
    label,
    inputType,
    ...props
}) => {
    const UrlInput = Styled.input`
        width: 300px;
        height: 38px;
        border-radius: 4px;
        border: solid 2px #f1f3f4;
    `;
    const UrlInputWrapper = Styled.div`
        display:flex;
        flex-direction: column;
    `;
    const UrlLabel = Styled.div`
        color: #22262a;;
    `;
    const UrlSelect = Styled.select`
        width: 300px;
        height: 60px;
        border-radius: 4px;
        padding: 0px 15px;
        border: solid 2px #f1f3f4;
        font-size: 14px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.2;
        letter-spacing: 0.35px;
        text-align: left;
        color: #22262a;
    `;
    const input = inputType === "select" ? (<UrlSelect>
        {children.map((item, i) => (
            <option key={i} value={item}>{item}</option>
        ))}
    </UrlSelect>) : (<UrlInputWrapper>
            <UrlLabel htmlFor={name}>{label}</UrlLabel>
            
            <UrlInput
                    name={name}
                    type={type}
                    placeholder={placeholder}
                    onChange={onChange}
                    value={value}
                    className={className}
                    style={error && { border: 'solid 1px red' }}
            />
                {error && <p>{error}</p>}
        </UrlInputWrapper>)
    return (
        
        <>
            {input}
        </>
    )
}

FormInput.defaultProps = {
    type: "text",
    className: ""
}

FormInput.propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['text', 'number', 'password']),
    placeholder: PropTypes.string.isRequired,
    className: PropTypes.string,
    value: PropTypes.any,
    onChange: PropTypes.func.isRequired
}

export default FormInput;
