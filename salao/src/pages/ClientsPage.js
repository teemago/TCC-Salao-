import { useState } from 'react';

import Table from "../components/Table";

function ClientsPage() {
    const [clients, setClients] = useState([
        { name: 'Arthur', fone: '18997963229' },
        { name: 'Pochita', fone: '69343882822' },
        { name: 'Jackson', fone: '107895655745' },
    ]);


    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100vw', height: '100vh' }}>

            <Table data={clients} />


        </div>
    );
};

export default ClientsPage;