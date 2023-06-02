import React from 'react';
import { Audio } from  'react-loader-spinner'


export const Loader = () => (
    <h1 style={{ margin: '5px auto' }}>
        {/* Please wait... */}
        <Audio
            width="100%"
        />
    </h1>
);
