import React, { useContext } from 'react';
import Sidebar from './Sidebar/Sidebar';
import OrderHeader from './OrderHeader/OrderHeader';
import AddOrderForm from './AddOrderForm/AddOrderForm';
import { UserContext } from '../../App';
import AdminTable from './AdminTable/AdminTable';

const Order = () => {
    const { admin } = useContext(UserContext);

    return (
        <div style={{ backgroundColor: '#E5E5E5', height: '100vh', height: '100%' }}>
            <OrderHeader />
            <div className="d-flex">
                <Sidebar />
                {
                    !admin.length ? <AddOrderForm></AddOrderForm> : <AdminTable></AdminTable>
                }

            </div>
        </div>
    );
};

export default Order;