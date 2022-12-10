import React from "react";

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
} from "../constants";
import { ReactComponent as Arrow } from "../icons/next.svg";
import { Map } from "./map";

type RowProps = {
  title: string;
  description: string;
  mapBefore: string[][];
  mapAfter: string[][];
};

const Row = ({ description, mapAfter, mapBefore, title }: RowProps) => (
  <div>
    <h4>{title}:</h4>
    <div className="px-4">
      <p>{description}</p>
      <div className="mt-3 flex justify-between relative">
        <Map map={mapBefore} />
        <Arrow className="w-8 fill-slate-600" />
        <Map map={mapAfter} />
      </div>
    </div>
  </div>
);

export const Description = () => {
  return (
    <div className="px-4">
      <h3>Пояснения:</h3>
      <div className="mt-5 px-4 flex flex-col gap-y-8">
        <Row
          title="Движение жертвы"
          description="Жертва пойдет в одну из соседних клеток"
          mapBefore={preyExampleMoveMap1}
          mapAfter={preyExampleMoveMap2}
        />
        <Row
          title="Размножение жертвы"
          description="Жертва размножается, если в радиусе 1 клетки нет других агентов"
          mapBefore={preyExampleReplicationMap1}
          mapAfter={preyExampleReplicationMap2}
        />
        <Row
          title="Смерть жертвы"
          description="Жертва умирает, если она ей некуда сдвинуться"
          mapBefore={preyExampleDeathMap1}
          mapAfter={preyExampleDeathMap2}
        />
        <Row
          title="Движение хищника"
          description="Хищник движется в сторону одной из жертв, находящихся на расстоянии 2 клеток по прямой или 1 клетки по диагонали"
          mapBefore={predatorExampleMoveMap1}
          mapAfter={predatorExampleMoveMap2}
        />
        <Row
          title="Размножение хищника"
          description="Хищник размножается, если в соседних клетках есть жертва. Хищник съедает жертву"
          mapBefore={predatorExampleReplicationMap1}
          mapAfter={predatorExampleReplicationMap2}
        />
        <Row
          title="Смерть хищника (Способ 1)"
          description="Хищник умирает, если его движение заблокировано другими хищниками"
          mapBefore={predatorExampleDeath1}
          mapAfter={predatorExampleDeath2}
        />
        <Row
          title="Смерть хищника (Способ 2)"
          description="Хищник умирает, если в указанном периметре нет жертв"
          mapBefore={predatorExampleDeath3}
          mapAfter={predatorExampleDeath4}
        />
      </div>
    </div>
  );
};
