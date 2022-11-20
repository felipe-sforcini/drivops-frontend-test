import Chart from '../../components/Chart';
import Sidebar from '../../components/Sidebar';
import './styles.scss';

export default function Example() {
    return (
        <div className='dashboards__page'>
            <Sidebar />
            <div className="dashboards">
                <strong>Vendas Totais por vendedor</strong>
                <Chart />
            </div>
        </div>
    )
}