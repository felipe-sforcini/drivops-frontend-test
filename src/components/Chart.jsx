import { useState } from "react";
import ApexChart from "react-apexcharts";

export default function Chart() {
    const [series, setSeries] = useState([{ data: [21, 22, 10, 28, 16, 21, 13, 30] }]);
    const [categories, setCategories] = useState([
        ['John', 'Doe'],
        ['Joe', 'Smith'],
        ['Jake', 'Williams'],
        'Amber',
        ['Peter', 'Brown'],
        ['Mary', 'Evans'],
        ['David', 'Wilson'],
        ['Lily', 'Roberts'],
    ]);

    const options = {
        chart: {
            height: 350,
            type: 'bar',
            events: {
                click: function (chart, w, e) {
                    // console.log(chart, w, e)
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
            categories: categories,
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
            series={series}
            height={500}
            width={500}
        />
    )
}