import { useEffect, useState } from "react";
import ApexChart from "react-apexcharts";
import api from "../services/api";

export default function AvgSales() {

    const [sales, setSales] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await api.get('/dashboards/average-sales');
                setSales(response.data);
            } catch (error) {
                throw error
            }
        }
        fetchData();
    }, []);

    const dataMonths = sales.map(item => {
        return item.month;
    })

    const dataSum = sales.map(item => {
        return ((Number(item.avg)) / 100).toFixed(2);
    })

    const options = {
        series: [{
            data: dataSum
        }],
        chart: {
            height: 350,
            type: 'bar',
            events: {
                click: function (chart, w, e) {
                }
            }
        },
        // colors: colors,
        plotOptions: {
            bar: {
                columnWidth: '45%',
                distributed: true,
            }
        },
        dataLabels: {
            enabled: false
        },
        legend: {
            show: false
        },
        xaxis: {
            categories: dataMonths,
            labels: {
                style: {
                    // colors: colors,
                    fontSize: '12px'
                }
            }
        }
    }

    return (
        <ApexChart
            options={options}
            type="bar"
            series={options.series}
            height={500}
            width={500}
        />
    )
}