import { useState } from 'react';

import Switch from '@material-ui/core/Switch';

const HabitButton = () => {
    const [complete, setComplete] = useState(false);
    return (
        <Switch
            checked={complete}
            onChange={() => {setComplete(!complete)}}
        />
    );
};

export default HabitButton;