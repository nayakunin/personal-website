import _ from 'lodash';

import {
    MAP_STEP,
    MAP_INIT,
    MAP_ADD_PREDATOR,
    MAP_CHANGE_SPEED,
} from '../actions'

import {
    copy,
    getNewPreyPos,
    getNewPredatorPos,
    generate2dArray,
} from '../../utils';

import {
    INIT_WIDTH,
    INIT_HEIGHT,
    INIT_X,
    INIT_Y,
    INIT_SPEED,
} from '../../constants';

const initialState = {
    iteration: 0,
    preysCount: 0,
    predatorsCount: 0,
    preyData: [1],
    predatorData: [0],
    chartLabels: ['0'],
    size: {
        width: INIT_WIDTH,
        height: INIT_HEIGHT,
    },
    start: {
        x: INIT_X,
        y: INIT_Y,
    },
    speed: INIT_SPEED * 1000,
    currentMap: [],
    nextMap: [],
    isMapCreated: false,
    isMapEmpty: true,
};

export const map = (state = initialState, action) => {
    switch (action.type) {
        case MAP_INIT:
            const initialMap = generate2dArray(state.size.width, state.size.height);
            return {
                ...state,
                currentMap: copy(initialMap),
                nextMap: initialMap,
                isMapCreated: true,
            };
        case MAP_ADD_PREDATOR:
            state.nextMap[_.random(state.size.width - 1)][_.random(state.size.height - 1)] = 'predator';
            return {
                ...state,
                currentMap: copy(state.nextMap),
                nextMap: state.nextMap,
                predatorsCount: state.predatorsCount + 1,
                predatorData: [...state.predatorData, state.predatorsCount + 1],
            }
        case MAP_STEP:
            state.currentMap.forEach((col_arr, col) => {
                col_arr.forEach((_, row) => {
                    if (state.currentMap[col][row] === 'prey') {
                        const newPoses = getNewPreyPos(col, row, state.nextMap);
                        if (!newPoses) {
                            state.nextMap[col][row] = 'empty';
                        } else {
                            switch (newPoses.length) {
                                case 2:
                                    newPoses.forEach((pos) => {
                                        state.nextMap[pos[0]][pos[1]] = 'prey';
                                    });
                                    break;
                                case 1:
                                    state.nextMap[newPoses[0][0]][newPoses[0][1]] = 'prey';
                                    state.nextMap[col][row] = 'empty';
                                    break;
                                default:
                                    break;
                            }
                        }
                    } else if (localStorage.getItem('isPreyOnly') === '0' && state.currentMap[col][row] === 'predator') {
                        const newPoses = getNewPredatorPos(col, row, state.nextMap);
                        if (!newPoses) {
                            state.nextMap[col][row] = 'empty';
                        } else {
                            switch (newPoses.length) {
                                case 2:
                                    newPoses.forEach((pos) => {
                                        state.nextMap[pos[0]][pos[1]] = 'predator';
                                    });
                                    break;
                                case 1:
                                    state.nextMap[newPoses[0][0]][newPoses[0][1]] = 'predator';
                                    state.nextMap[col][row] = 'empty';
                                    break;
                                default:
                                    break;
                            }
                        }
                    }
                });
            });
            if (localStorage.getItem('isPreyOnly') === '1') {
                const flatArray = _.flattenDeep(state.nextMap)
                const deltaPreys = flatArray.reduce((sum, curr) => curr === 'prey' ? sum + 1 : sum, 0);
                return {
                    ...state,
                    iteration: state.iteration + 1,
                    preysCount: deltaPreys,
                    preyData: [...state.preyData, deltaPreys],
                    chartLabels: [...state.chartLabels, `${state.iteration + 1}`],
                    currentMap: copy(state.nextMap),
                    nextMap: state.nextMap,
                };
            }
            const flatArray = _.flattenDeep(state.nextMap)
            const deltaPreys = flatArray.reduce((sum, curr) => curr === 'prey' ? sum + 1 : sum, 0);
            const deltaPredators = flatArray.reduce((sum, curr) => curr === 'predator' ? sum + 1 : sum, 0);
            return {
                ...state,
                iteration: state.iteration + 1,
                preysCount: deltaPreys,
                predatorsCount: deltaPredators,
                preyData: [...state.preyData, deltaPreys],
                predatorData: [...state.predatorData, deltaPredators],
                chartLabels: [...state.chartLabels, `${state.iteration + 1}`],
                currentMap: copy(state.nextMap),
                nextMap: state.nextMap,
            };
        case MAP_CHANGE_SPEED:
            return {
                ...state,
                speed: action.payload.speed,
            }
        default:
            return state;
    };
};
