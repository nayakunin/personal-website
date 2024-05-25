import React from 'react';

import {
  predatorExampleDeath1,
  predatorExampleDeath2,
  predatorExampleDeath3,
  predatorExampleDeath4,
  predatorExampleMoveMap1,
  predatorExampleMoveMap2,
  predatorExampleReplicationMap1,
  predatorExampleReplicationMap2,
  preyExampleDeathMap1,
  preyExampleDeathMap2,
  preyExampleMoveMap1,
  preyExampleMoveMap2,
  preyExampleReplicationMap1,
  preyExampleReplicationMap2,
} from '../constants';
import { ReactComponent as Arrow } from '../icons/next.svg';
import { Map } from './map';

type RowProps = {
  title: string;
  description: string;
  mapBefore: string[][];
  mapAfter: string[][];
};

const Row = ({ description, mapAfter, mapBefore, title }: RowProps) => (
  <div>
    <h4>{title}:</h4>
    <div className='px-4'>
      <p>{description}</p>
      <div className='mt-3 flex justify-between relative'>
        <Map map={mapBefore} />
        <Arrow className='w-8 fill-slate-600' />
        <Map map={mapAfter} />
      </div>
    </div>
  </div>
);

export const Description = () => {
  return (
    <div className='px-4'>
      <h3>Explanation:</h3>
      <div className='mt-5 px-4 flex flex-col gap-y-8'>
        <Row
          title='Prey movement'
          description='Prey moves to one of the adjacent cells'
          mapBefore={preyExampleMoveMap1}
          mapAfter={preyExampleMoveMap2}
        />
        <Row
          title='Prey replication'
          description='Prey replicates if there are no entities in 1 cell radius'
          mapBefore={preyExampleReplicationMap1}
          mapAfter={preyExampleReplicationMap2}
        />
        <Row
          title='Prey death'
          description='Prey dies if there is no place for it to move'
          mapBefore={preyExampleDeathMap1}
          mapAfter={preyExampleDeathMap2}
        />
        <Row
          title='Predator movement'
          description='Predator moves towards nearby preys'
          mapBefore={predatorExampleMoveMap1}
          mapAfter={predatorExampleMoveMap2}
        />
        <Row
          title='Predator replication'
          description='Predator replicates if it eats a prey'
          mapBefore={predatorExampleReplicationMap1}
          mapAfter={predatorExampleReplicationMap2}
        />
        <Row
          title='Predator death #1'
          description='Predator dies if there are no places to move'
          mapBefore={predatorExampleDeath1}
          mapAfter={predatorExampleDeath2}
        />
        <Row
          title='Predator death #2'
          description='Predator dies if there are no preys nearby'
          mapBefore={predatorExampleDeath3}
          mapAfter={predatorExampleDeath4}
        />
      </div>
    </div>
  );
};
