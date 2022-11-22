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
            </div>
        </div>
    )
}