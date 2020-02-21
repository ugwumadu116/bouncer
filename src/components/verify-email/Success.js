import React from 'react';
import Card from './Card';
import theme from '../theme';

const Success = (props) => {
    return (
        <div>
            <
                Card 
                img={'https://res.cloudinary.com/decagonbouncer/image/upload/v1578494162/checked_ahm42y.svg'} 
                color={theme.colors.success}
                borderColor={theme.colors.secondaryDarker}
                msg='Success' 
                detailmsg={props.message}
            />
        </div>
    );
};

export default Success;