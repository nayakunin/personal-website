import React, { useEffect, useState } from "react";

import { useAppSelector } from "../redux";

type ListItemProps = {
  title: string;
  value: number;
};

const ListItem = ({ title, value }: ListItemProps) => (
  <li className="flex flex-col gap-y-1">
    <h4>{title}:</h4>
    <p className="pl-8">{value}</p>
  </li>
);

export const Info = () => {
  const mapState = useAppSelector((state) => state.map);
  const [preysAvg, setPreysAvg] = useState(1);
  const [predatorsAvg, setPredatorsAvg] = useState(1);

  useEffect(() => {
    if (mapState.preyData.length > 1) {
      setPreysAvg(
        mapState.preyData.slice(-100, -1).reduce((sum, curr) => sum + curr) /
          (mapState.preyData.length < 100 ? mapState.preyData.length : 100)
      );
    }
    if (mapState.predatorData.length > 1) {
      setPredatorsAvg(
        mapState.predatorData
          .slice(-100, -1)
          .reduce((sum, curr) => sum + curr) /
          (mapState.predatorData.length < 100
            ? mapState.predatorData.length
            : 100)
      );
    }
  }, [mapState, setPreysAvg, setPredatorsAvg]);

  return (
    <div className="px-4">
      <ul className="flex flex-col gap-y-2.5">
        <ListItem
          title="Среднее количество жертв за последние 100 итераций"
          value={preysAvg}
        />
        {localStorage.getItem("isPreyOnly") === "0" && (
          <ListItem
            title="Среднее количество хищников за последние 100 итераций"
            value={predatorsAvg}
          />
        )}
        <ListItem
          title="Площадь мира"
          value={mapState.size.width * mapState.size.height}
        />
      </ul>
    </div>
  );
};
