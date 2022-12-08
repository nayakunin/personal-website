export const MAP_STEP = 'MAP_STEP';
export const MAP_INIT = 'MAP_INIT';
export const MAP_ADD_PREDATOR = 'MAP_ADD_PREDATOR';
export const MAP_CHANGE_SPEED = 'MAP_CHANGE_SPEED';

export const initMap = () => {
    return {
        type: MAP_INIT,
    };
};

export const step = () => {
    return {
        type: MAP_STEP,
    };
};

export const addPredator = () => {
    return {
        type: MAP_ADD_PREDATOR,
    };
};

export const changeSpeed = (speed) => {
    return {
        type: MAP_CHANGE_SPEED,
        payload: {
            speed,
        },
    };
};