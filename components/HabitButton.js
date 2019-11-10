import { useState } from 'react';

import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

const HabitButton = ({date}) => {
    const [complete, setComplete] = useState(false);

    return (
            <FormControlLabel
                control={ <Switch
                    checked={complete}
                    onClick={() => {setComplete(!complete)}}
                />}
                label={`${date.getDate()}/${date.getMonth() + 1}`}
                labelPlacement="top"
            />
    );
};

export default HabitButton;