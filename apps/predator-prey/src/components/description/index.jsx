import React from 'react';
import {
    preyExampleMoveMap1,
    preyExampleMoveMap2,
    preyExampleReplicationMap1,
    preyExampleReplicationMap2,
    preyExampleDeathMap1,
    preyExampleDeathMap2,
    predatorExampleMoveMap1,
    predatorExampleMoveMap2,
    predatorExampleReplicationMap1,
    predatorExampleReplicationMap2,
    predatorExampleDeath1,
    predatorExampleDeath2,
    predatorExampleDeath3,
    predatorExampleDeath4
} from '../../constants';
import { Map } from '../map';
import { ReactComponent as Arrow } from './next.svg';
import styles from './styles.module.css';

export const Description = () => {
    return (
        <div className={styles.root}>
            <h3 className={styles.title}>Пояснения:</h3>
            <div className={styles.container}>
                <div className={styles.row}>
                    <h4 className={styles.row__title}>Движение жертвы:</h4>
                    <div className={styles.row__description}>
                        <p className={styles.row_paragraph}>Жертва пойдет в одну из соседних клеток</p>
                        <div className={styles.row__info}>
                            <Map map={preyExampleMoveMap1} />
                            <Arrow />
                            <Map map={preyExampleMoveMap2} />
                        </div>
                    </div>
                </div>
                <div className={styles.row}>
                    <h4 className={styles.row__title}>Размножение жертвы:</h4>
                    <div className={styles.row__description}>
                        <p className={styles.row_paragraph}>Жертва размножается, если в радиусе 1 клетки нет других агентов</p>
                        <div className={styles.row__info}>
                            <Map map={preyExampleReplicationMap1} />
                            <Arrow />
                            <Map map={preyExampleReplicationMap2} />
                        </div>
                    </div>
                </div>
                <div className={styles.row}>
                    <h4 className={styles.row__title}>Смерть жертвы:</h4>
                    <div className={styles.row__description}>
                        <p className={styles.row_paragraph}>Жертва умирает, если она ей некуда сдвинуться</p>
                        <div className={styles.row__info}>
                            <Map map={preyExampleDeathMap1} />
                            <Arrow />
                            <Map map={preyExampleDeathMap2} />
                        </div>
                    </div>
                </div>
                <div className={styles.row}>
                    <h4 className={styles.row__title}>Движение хищника:</h4>
                    <div className={styles.row__description}>
                        <p className={styles.row_paragraph}>Хищник движется в сторону одной из жертв, находящихся на расстоянии 2 клеток по прямой или 1 клетки по диагонали</p>
                        <div className={styles.row__info}>
                            <Map map={predatorExampleMoveMap1} />
                            <Arrow />
                            <Map map={predatorExampleMoveMap2} />
                        </div>
                    </div>
                </div>
                <div className={styles.row}>
                    <h4 className={styles.row__title}>Размножение хищника:</h4>
                    <div className={styles.row__description}>
                        <p className={styles.row_paragraph}>Хищник размножается, если в соседних клетках есть жертва. Хищник съедает жертву</p>
                        <div className={styles.row__info}>
                            <Map map={predatorExampleReplicationMap1} />
                            <Arrow />
                            <Map map={predatorExampleReplicationMap2} />
                        </div>
                    </div>
                </div>
                <div className={styles.row}>
                    <h4 className={styles.row__title}>Смерть хищника (Способ 1):</h4>
                    <div className={styles.row__description}>
                        <p className={styles.row_paragraph}>Хищник умирает, если его движение заблокировано другими хищниками</p>
                        <div className={styles.row__info}>
                            <Map map={predatorExampleDeath1} />
                            <Arrow />
                            <Map map={predatorExampleDeath2} />
                        </div>
                    </div>
                </div>
                <div className={styles.row}>
                    <h4 className={styles.row__title}>Смерть хищника (Способ 2):</h4>
                    <div className={styles.row__description}>
                        <p className={styles.row_paragraph}>Хищник умирает, если в указанном периметре нет жертв</p>
                        <div className={styles.row__info}>
                            <Map map={predatorExampleDeath3} />
                            <Arrow />
                            <Map map={predatorExampleDeath4} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
