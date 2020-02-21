import React from 'react';
import Card from './Card';
import theme from '../theme';


const Fail = (props) => {
    return (
        <div>
            <Card img={'https://res.cloudinary.com/decagonbouncer/image/upload/v1578494202/error_o89rec.svg'} msg='Fail' color={theme.colors.dangerDarker} detailmsg={props.message}/>
        </div>
    );
};

export default Fail;