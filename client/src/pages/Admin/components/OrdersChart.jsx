import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const OrdersChart = ({ orders = [] }) => {
    const chartRef = useRef(null);
    const chartInstance = useRef(null);

    useEffect(() => {
        if (!orders || orders.length === 0) return;

        const orderCounts = orders.reduce((acc, order) => {
            if (!order?.createdAt) return acc;

            const date = new Date(order.createdAt).toISOString().split("T")[0];
            acc[date] = (acc[date] || 0) + 1;
            return acc;
        }, {});

        const labels = Object.keys(orderCounts).sort();
        const dataValues = labels.map((date) => orderCounts[date]);

        if (chartInstance.current) {
            chartInstance.current.destroy();
        }

        const ctx = chartRef.current.getContext("2d");
        chartInstance.current = new Chart(ctx, {
            type: "line",
            data: {
                labels,
                datasets: [
                    {
                        label: "Кількість замовлень",
                        data: dataValues,
                        borderColor: "#1E40AF",
                        backgroundColor: "rgba(52, 83, 183, 0.2)",
                        borderWidth: 2,
                        fill: true,
                        tension: 0.3,
                    },
                ],
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        display: true,
                    },
                },
                scales: {
                    x: {
                        title: {
                            display: true,
                            text: "Дата",
                        },
                    },
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: "Кількість замовлень",
                        },
                    },
                },
            },
        });

        return () => {
            if (chartInstance.current) {
                chartInstance.current.destroy();
            }
        };
    }, [orders]);

    return <canvas ref={chartRef} />;
};

export default OrdersChart;
