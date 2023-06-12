import moment from "moment";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler, Legend, } from 'chart.js';
import { Line } from 'react-chartjs-2';
import useFetch from '../hooks/useFetch';
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler, Legend);

export default function HistoryChart({id}) {
    const { response } = useFetch(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=7&interval=daily`)
    if (!response) {
        return <div>Loading...</div>
    }
    if (response.length < 1) {
        return <div>Error not found graph</div>
    }
    const coinChart = response.prices.map(value => ({ x: value[0], y: value[1].toFixed(2) }))
    const options = {
        plugins: {legend: false},
        scales: {x: { ticks: { font: { size: 0.1 } } }, y: { ticks: { font: { size: 10 } } }}
    };
    const data = {
        labels: coinChart.map(value => moment(value.x).format("DD MMM")),
        datasets: [{ fill: true, label: "Bitcoin", data: coinChart.map(val => val.y), backgroundColor: "rgba(10, 147, 126, 0.4)", borderColor: "rgb(10, 147, 126)", borderWidth: 0.5, pointRadius: 0.5 }],
    };
    return (
        <div>
            <Line options={options} data={data} />
        </div>
    )
}