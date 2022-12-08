export const MAX_MAP_SPEED = 2;
export const MIN_MAP_SPEED = 0.1;

export const INIT_WIDTH = 26;
export const INIT_HEIGHT = 26;
export const INIT_X = 13;
export const INIT_Y = 13;
export const INIT_SPEED = 0.3;

export const preyExampleMoveMap1 = [
    ['empty'],
    ['empty', 'prey', 'empty'],
    ['empty'],
];

export const preyExampleMoveMap2 = [
    ['possible-prey'],
    ['possible-prey', 'empty', 'possible-prey'],
    ['possible-prey'],
];

export const preyExampleReplicationMap1 = [
    ['empty', 'empty', 'empty'],
    ['empty', 'prey', 'empty'],
    ['empty', 'empty', 'empty'],
];

export const preyExampleReplicationMap2 = [
    ['empty', 'possible-prey', 'empty'],
    ['possible-prey', 'prey', 'possible-prey'],
    ['empty', 'possible-prey', 'empty'],
];

export const preyExampleDeathMap1 = [
    ['empty', 'prey', 'empty'],
    ['prey', 'prey', 'prey'],
    ['empty', 'prey', 'empty'],
];

export const preyExampleDeathMap2 = [
    ['empty', 'prey', 'empty'],
    ['prey', 'empty', 'prey'],
    ['empty', 'prey', 'empty'],
];

export const predatorExampleMoveMap1 = [
    ['prey'],
    ['prey', 'empty', 'prey'],
    ['prey', 'empty', 'predator', 'empty', 'prey'],
    ['prey', 'empty', 'prey'],
    ['prey'],
];

export const predatorExampleMoveMap2 = [
    ['prey'],
    ['prey', 'possible-predator', 'prey'],
    ['prey', 'possible-predator', 'empty', 'possible-predator', 'prey'],
    ['prey', 'possible-predator', 'prey'],
    ['prey'],
];

export const predatorExampleReplicationMap1 = [
    ['prey'],
    ['prey', 'predator', 'prey'],
    ['prey'],
];

export const predatorExampleReplicationMap2 = [
    ['prey'],
    ['prey', 'predator', 'possible-predator'],
    ['prey'],
];

export const predatorExampleDeath1 = [
    ['predator'],
    ['predator', 'predator', 'predator'],
    ['predator'],
];

export const predatorExampleDeath2 = [
    ['predator'],
    ['predator', 'empty', 'predator'],
    ['predator'],
];

export const predatorExampleDeath3 = [
    ['empty'],
    ['empty', 'empty', 'empty'],
    ['empty', 'empty', 'predator', 'empty', 'empty'],
    ['empty', 'empty', 'empty'],
    ['empty'],
];

export const predatorExampleDeath4 = [
    ['empty'],
    ['empty', 'empty', 'empty'],
    ['empty', 'empty', 'empty', 'empty', 'empty'],
    ['empty', 'empty', 'empty'],
    ['empty'],
];