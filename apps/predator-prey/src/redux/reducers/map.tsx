import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { flattenDeep, random } from 'lodash';

import { INIT_HEIGHT, INIT_SPEED, INIT_WIDTH, INIT_X, INIT_Y } from '../../constants';
import { copy, generate2dArray, getNewPredatorPos, getNewPreyPos } from '../../utils';

type MapState = {
  iteration: number;
  preysCount: number;
  predatorsCount: number;
  preyData: number[];
  predatorData: number[];
  chartLabels: string[];
  size: {
    width: number;
    height: number;
  };
  start: {
    x: number;
    y: number;
  };
  speed: number;
  currentMap: string[][];
  nextMap: string[][];
  isMapCreated: boolean;
  isMapEmpty: boolean;
};

const initialState: MapState = {
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
  speed: INIT_SPEED,
  currentMap: [],
  nextMap: [],
  isMapCreated: false,
  isMapEmpty: true,
};

const mapSlice = createSlice({
  name: 'map',
  initialState,
  reducers: {
    init: (state) => {
      const initialMap = generate2dArray(state.size.width, state.size.height);

      state.currentMap = copy(initialMap);
      state.nextMap = initialMap;
      state.isMapCreated = true;
    },
    step: (state) => {
      state.iteration += 1;

      for (let col = 0; col < state.currentMap.length; col++) {
        const col_arr = state.currentMap[col];

        for (let row = 0; row < col_arr.length; row++) {
          if (state.currentMap[col][row] === 'prey') {
            const newPoses = getNewPreyPos(col, row, state.nextMap);

            if (!newPoses) {
              state.nextMap[col][row] = 'empty';
            } else {
              if (newPoses.length === 2) {
                newPoses.forEach((pos) => {
                  state.nextMap[pos[0]][pos[1]] = 'prey';
                });
              } else {
                state.nextMap[newPoses[0][0]][newPoses[0][1]] = 'prey';
                state.nextMap[col][row] = 'empty';
              }
            }

            if (localStorage.getItem('isPreyOnly') === '1') {
              continue;
            }
          }

          if (state.currentMap[col][row] === 'predator') {
            const newPoses = getNewPredatorPos(col, row, state.nextMap);

            if (!newPoses) {
              state.nextMap[col][row] = 'empty';
            } else {
              if (newPoses.length === 2) {
                newPoses.forEach((pos) => {
                  state.nextMap[pos[0]][pos[1]] = 'predator';
                });
              } else {
                state.nextMap[newPoses[0][0]][newPoses[0][1]] = 'predator';
                state.nextMap[col][row] = 'empty';
              }
            }
          }
        }
      }

      if (localStorage.getItem('isPreyOnly') === '1') {
        const flatArray = flattenDeep(state.nextMap);
        const deltaPreys = flatArray.reduce((sum, curr) => (curr === 'prey' ? sum + 1 : sum), 0);

        state.preysCount = deltaPreys;
        state.preyData.push(deltaPreys);
        state.chartLabels.push(`${state.iteration + 1}`);
        state.currentMap = copy(state.nextMap);

        return;
      }

      const flatArray = flattenDeep(state.nextMap);
      const deltaPreys = flatArray.reduce((sum, curr) => (curr === 'prey' ? sum + 1 : sum), 0);
      const deltaPredators = flatArray.reduce(
        (sum, curr) => (curr === 'predator' ? sum + 1 : sum),
        0
      );

      state.preysCount = deltaPreys;
      state.predatorsCount = deltaPredators;
      state.preyData.push(deltaPreys);
      state.predatorData.push(deltaPredators);
      state.chartLabels.push(`${state.iteration + 1}`);
      state.currentMap = copy(state.nextMap);
    },
    addPredator: (state) => {
      state.nextMap[random(state.size.width - 1)][random(state.size.height - 1)] = 'predator';
      state.currentMap = copy(state.nextMap);
      state.nextMap = state.nextMap;
      state.predatorsCount = state.predatorsCount + 1;
      state.predatorData.push(state.predatorsCount + 1);
    },
    changeSpeed: (state, action: PayloadAction<number>) => {
      state.speed = action.payload;
    },
  },
});

export const { addPredator, changeSpeed, init, step } = mapSlice.actions;
export default mapSlice.reducer;
