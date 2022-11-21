import { useEffect, useState } from "react";
import ApexChart from "react-apexcharts";
import api from "../services/api";

export default function Chart() {
    const [series, setSeries] = useState([{ data: [21, 22, 45, 67] }]);
    // const [categories, setCategories] = useState([
    //     ['John', 'Doe'],
    //     ['Joe', 'Smith'],
    //     ['Jake', 'Williams'],
    //     'Amber',
    //     ['Peter', 'Brown'],
    //     ['Mary', 'Evans'],
    //     ['David', 'Wilson'],
    //     ['Lily', 'Roberts'],
    // ]);

    const [categories, setCategories] = useState([
        'Pessoa1',
        'Pessoa2',
    ]);

    // const [options, setOptions] = useState({});

    const [options, setOptions] = useState({});

    const [sellers, setSellers] = useState([]);

    async function loadSellers() {
        try {
            const response = await api.get('/dashboards/sales-by-sellers');
            const sellers = await response.data;
            console.log('entrou em loadsellers');
            setSellers(sellers);
            console.log('do loadSellers:', sellers);
            xCategories();
        } catch (error) {
            throw error
        }
    }

    async function xCategories() {
        const localCategories = categories;
        const localSellers = sellers;

        await mapingSellers(localCategories, localSellers);

        console.log('do xcategories', localCategories);
        console.log(categories);
        handleOptions();
    }

    async function mapingSellers(localCategories, localSellers) {
        try {
            await localSellers.map(seller => {
                // localCategories.push(seller.nome_vendedor);
                setCategories([...localCategories, seller.nome_vendedor]);
                console.log('entrou em mapingSellers');
            })
        } catch (error) {
            throw error
        }
        setCategories(localCategories);
    }

    function handleOptions() {
        console.log('entrou no handleOptions');
        setOptions({
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
        });
        console.log('setou os options');
    }

    useEffect(() => {
        loadSellers();
        console.log('iniciou loadsellers');
    }, [])

    // const options = {
    //     chart: {
    //         height: 350,
    //         type: 'bar',
    //         events: {
    //             click: function (chart, w, e) {
    //                 // console.log(chart, w, e)
    //             }
    //         }
    //     },
    //     // colors: colors,
    //     plotOptions: {
    //         bar: {
    //             columnWidth: '45%',
    //             distributed: true,
    //         }
    //     },
    //     dataLabels: {
    //         enabled: false
    //     },
    //     legend: {
    //         show: false
    //     },
    //     xaxis: {
    //         categories: categories,
    //         labels: {
    //             style: {
    //                 // colors: colors,
    //                 fontSize: '12px'
    //             }
    //         }
    //     }
    // }

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