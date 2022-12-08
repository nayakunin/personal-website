import _ from 'lodash';

export const generate2dArray = (width, height, value = 'empty') => {
    const result = [];
    for (let i = 0; i < height; i++) {
        const tmp = [];
        for (let j = 0; j < width; j++) {
            tmp.push(value);
        }
        result.push(tmp);
    }
    result[_.random(width - 1)][_.random(height - 1)] = 'prey';
    return result;
}

export const copy = (ar) => ar.map(a => [...a]);

export const getNewPreyPos = (x, y, map) => {
    const mapHeight = map.length;
    const mapWidth = map[0].length;
    const possibleMoves = [];

    // Top
    if (y > 0 && map[x][y - 1] === 'empty') {
        possibleMoves.push([x, y - 1]);
    }
    // Right
    if (x + 1 < mapWidth && map[x + 1][y] === 'empty') {
        possibleMoves.push([x + 1, y]);
    }
    // Bottom
    if (y + 1 < mapHeight && map[x][y + 1] === 'empty') {
        possibleMoves.push([x, y + 1]);
    }
    // Left
    if (x > 0 && map[x - 1][y] === 'empty') {
        possibleMoves.push([x - 1, y]);
    }
    // new prey
    if (possibleMoves.length === 4
        && map[x + 1][y + 1] === 'empty'
        && map[x + 1][y - 1] === 'empty'
        && map[x - 1][y - 1] === 'empty'
        && map[x - 1][y + 1] === 'empty') {
        const newBabyPreyPos = _.sample(possibleMoves);
        return [newBabyPreyPos, [x, y]];
    }
    if (!possibleMoves.length) {
        return false;
    }
    return [_.sample(possibleMoves)];
};

export const getNewPredatorPos = (x, y, map) => {
    const mapHeight = map.length;
    const mapWidth = map[0].length;
    const possibleMoves = [];
    const possibleReplications = [];

    // Prey attack
    // Top
    if (y > 0 && map[x][y - 1] === 'prey') {
        possibleReplications.push([x, y - 1]);
    }
    // Right
    if (x + 1 < mapWidth && map[x + 1][y] === 'prey') {
        possibleReplications.push([x + 1, y]);
    }
    // Bottom
    if (y + 1 < mapHeight && map[x][y + 1] === 'prey') {
        possibleReplications.push([x, y + 1]);
    }
    // Left
    if (x > 0 && map[x - 1][y] === 'prey') {
        possibleReplications.push([x - 1, y]);
    }

    // Prey search
    if (!possibleReplications.length) {
        // Top top
        if (y > 1 && map[x][y - 2] === 'prey' && map[x][y - 1] === 'empty') {
            possibleMoves.push([x, y - 1]);
        }
        // Top right
        if (y > 0 && x + 1 < mapWidth && map[x + 1][y - 1] === 'prey') {
            if (map[x][y - 1] === 'empty') possibleMoves.push([x, y - 1]);
            if (map[x + 1][y] === 'empty') possibleMoves.push([x + 1, y]);
        }
        // Right right
        if (x + 2 < mapWidth && map[x + 2][y] === 'prey' && map[x + 1][y] === 'empty') {
            possibleMoves.push([x + 1, y]);
        }
        // Right bottom
        if (x + 1 < mapWidth && y + 1 < mapHeight && map[x + 1][y + 1] === 'prey') {
            if (map[x + 1][y] === 'empty') possibleMoves.push([x + 1, y]);
            if (map[x][y + 1] === 'empty') possibleMoves.push([x, y + 1]);
        }
        // Bottom bottom
        if (y + 2 < mapHeight && map[x][y + 2] === 'prey' && map[x][y + 1] === 'empty') {
            possibleMoves.push([x, y + 1]);
        }
        // Bottom left
        if (x > 1 && y + 1 < mapHeight && map[x - 1][y + 1] === 'prey') {
            if (map[x][y + 1] === 'empty') possibleMoves.push([x, y + 1]);
            if (map[x - 1][y] === 'empty') possibleMoves.push([x - 1, y]);
        }
        // Left left
        if (x > 1 && map[x - 2][y] === 'prey' && map[x - 1][y] === 'empty') {
            possibleMoves.push([x - 1, y]);
        }
        // Left top
        if (x > 1 && y > 1 && map[x - 1][y - 1] === 'prey') {
            if (map[x - 1][y] === 'empty') possibleMoves.push([x - 1, y]);
            if (map[x][y - 1] === 'empty') possibleMoves.push([x, y - 1]);
        }
        if (!possibleMoves.length) {
            return false;
        }
        return [_.sample(possibleMoves)]
    } else {
        return [_.sample(possibleReplications), [x, y]];
    }
};
