import AvgSales from '../../components/AvgSales';
import SalesByMonth from '../../components/SalesByMonth';
import SalesBySellers from '../../components/SalesBySellers';
import Sidebar from '../../components/Sidebar';
import './styles.scss';

export default function Dashboards() {

    return (
        <div className='dashboards__page'>
            <Sidebar />
            <div className="dashboards">
                <strong>Vendas Totais por vendedor</strong>
                <SalesBySellers />
                <strong>Vendas Totais nos ultimos 3 meses</strong>
                <SalesByMonth />
                <strong>Media de vendas por mes</strong>
                <AvgSales />
            </div>
        </div>
    )
}