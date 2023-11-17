import { Outlet } from 'react-router-dom';
import { Header } from '../../Components';

const ClientLayout = () => {
    return (
        <div>
            <Header />
            <Outlet />
        </div>
    )
}

export default ClientLayout