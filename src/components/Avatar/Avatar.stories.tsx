import React from 'react';
import { IconName } from '../Icon';
import { Avatar } from './';

export default {
    title: 'Avatar',
    component: Avatar,
};

const imageProps = {
    src: 'https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg',
    alt: 'random profile image',
};

const fallbackTexts = ['JD', 'AB'];

const iconProps = {
    path: IconName.mdiBell,
};

export const Default = () => (
    <>
        <h2>Avatar</h2>
        <Avatar {...imageProps} size="40px" />
        <br />
        <h2>Avatar Fallback</h2>
        <div style={{ display: 'flex', flexDirection: 'row', gap: '8px' }}>
            {fallbackTexts.map((fallbackText) => (
                <Avatar key={fallbackText} size="40px">
                    {fallbackText}
                </Avatar>
            ))}
        </div>
        <br />
        <h2>Avatar Icons</h2>
        <div style={{ display: 'flex', flexDirection: 'row', gap: '8px' }}>
            <Avatar
                size="40px"
                iconProps={iconProps}
                style={{
                    backgroundColor: 'grey',
                }}
            />
        </div>
        <h2>Round Avatar</h2>
        <Avatar {...imageProps} size="40px" type="round" />
        <br />
        <h2>Round Avatar Fallback</h2>
        <div style={{ display: 'flex', flexDirection: 'row', gap: '8px' }}>
            {fallbackTexts.map((fallbackText) => (
                <Avatar key={fallbackText} size="40px" type="round">
                    {fallbackText}
                </Avatar>
            ))}
        </div>
        <br />
        <h2>Round Avatar Icons</h2>
        <div style={{ display: 'flex', flexDirection: 'row', gap: '8px' }}>
            <Avatar
                size="40px"
                iconProps={iconProps}
                type="round"
                style={{
                    backgroundColor: 'grey',
                }}
            />
        </div>
    </>
);
