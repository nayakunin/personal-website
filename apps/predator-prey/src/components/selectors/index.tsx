import React, { useState, useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import cx from "classnames";
import Button from "@material-ui/core/Button";
import { Slider } from "../slider";
import { withStyles } from "@material-ui/core";
import { changeSpeed } from "../../redux";
import { MAX_MAP_SPEED, MIN_MAP_SPEED, INIT_SPEED } from "../../constants";
import styles from "./styles";
import { useAppSelector } from "../../redux";

export const Selectors = withStyles(styles)((props) => {
  const { classes, className } = props;
  const dispatch = useDispatch();
  const mapState = useAppSelector((state) => state.map);
  const [speed, setSpeed] = useState(mapState.speed);

  const handleRestart = useCallback(() => {
    location.reload();
  }, []);

  const handleChange = useCallback(() => {
    localStorage.setItem(
      "isPreyOnly",
      localStorage.getItem("isPreyOnly") === "0" ? "1" : "0"
    );
    location.reload();
  }, []);

  useEffect(() => {
    dispatch(changeSpeed(speed));
  }, [dispatch, speed]);

  return (
    <div className={classes.root}>
      <h4 className={classes.label}>Время между&nbsp;итерациями:</h4>
      <Slider
        defaultValue={INIT_SPEED}
        // getAriaValueText={value => value}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={0.1}
        min={MIN_MAP_SPEED}
        max={MAX_MAP_SPEED}
        onChange={(_, value) => setSpeed((value as number) * 1000)}
      />
      <div className={classes.button__container}>
        <Button
          className={cx(classes.button_apply, className)}
          onClick={handleRestart}
        >
          Перезапустить
        </Button>
        <Button
          className={cx(classes.button_apply, className)}
          onClick={handleChange}
        >
          Поменять модель
        </Button>
      </div>
    </div>
  );
});
