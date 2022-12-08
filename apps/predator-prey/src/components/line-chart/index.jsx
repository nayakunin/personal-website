import React from 'react';
import { Line } from 'react-chartjs-2';

export const LineChart = ({ preys, predators, labels }) => {
    const datasets = localStorage.getItem('isPreyOnly') === '0'
        ? [
            {
                label: 'Жертвы',
                data: preys,
                backgroundColor: '#e9c46a',
            },
            {
                label: 'Хищники',
                data: predators,
                backgroundColor: '#e76f51',
            }
        ] : [
            {
                label: 'Жертвы',
                data: preys,
                backgroundColor: '#e9c46a',
            },
        ]

    return (
        <Line
            data={{
                labels: labels,
                datasets, 
            }}
            options={{
                legend: {
                    display: true,
                    labels: {
                        fontFamily: 'Roboto Mono',
                        fontColor: 'rgb(241, 241, 241)',
                    },
                },
                scales: {
                    yAxes: [{
                        gridLines: {
                            display: true,
                            color: 'rgba(241, 241, 241, 0.3)',
                        },
                        ticks: {
                            fontColor: 'rgb(241, 241, 241)',
                            fontFamily: 'Roboto Mono',
                        },
                        scaleLabel: {
                            display: true,
                            labelString: "Популяция",
                            fontColor: 'rgb(241, 241, 241)',
                            fontFamily: 'Roboto Mono',
                            fontSize: 16,
                        }
                    }],
                    xAxes: [{
                        gridLines: {
                            display: true,
                            color: 'rgb(241, 241, 241, 0.3)',
                        },
                        ticks: {
                            fontColor: 'rgb(241, 241, 241)',
                            fontFamily: 'Roboto Mono',
                        },
                        scaleLabel: {
                            display: true,
                            labelString: "Время существования модели",
                            fontColor: 'rgb(241, 241, 241)',
                            fontFamily: 'Roboto Mono',
                            fontSize: 16,
                        }
                    }],
                }
            }}
        />
    );
};
