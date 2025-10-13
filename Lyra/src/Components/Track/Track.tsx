import React from 'react';
import type { CollapseProps } from 'antd';
import { Collapse } from 'antd';

const itemsNest: CollapseProps['items'] = [
    {
        key: 'Expression',
        label: 'Expression',
    },
];

const items: CollapseProps['items'] = [
    {
        key: 'Track',
        label: 'Track',
    },
    {
        key: 'PianoRoll',
        label: 'PianoRoll',
        children: <Collapse defaultActiveKey="Expression" items={itemsNest} />,
    }
];

const Track: React.FC = () => {
    const onChange = (key: string | string[]) => {
        console.log(key);
    };

    return <Collapse items={items} defaultActiveKey={['Track', 'PianoRoll']} onChange={onChange} />;
};

export default Track;