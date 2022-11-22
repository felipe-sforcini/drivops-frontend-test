import { useEffect, useState } from "react";
import ApexChart from "react-apexcharts";
import api from "../services/api";

export default function SalesBySellers() {

    const [rankSellers, setRankSellers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await api.get('/dashboards/sales-by-sellers');
                setRankSellers(response.data);
            } catch (error) {
                throw error
            }
        }
        fetchData();
    }, []);

    const dataNames = rankSellers.map(item => {
        return item.nome_vendedor;
    })

    const dataSeries = rankSellers.map(item => {
        return (Number(item.total_vendas)) / 100;
    })

    const options = {
        series: [{
            data: dataSeries
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
            categories: dataNames,
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