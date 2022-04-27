import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
// import DataGrid

function Admin(props) {

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'amount', headerName: 'Amount', width: 130 },
        {
            field: 'Merchant Name',
            width: 160,
            valueGetter: (params) =>
              `${params.row.merchantUser.name}`,
          },
        {
          field: 'User Name',
          sortable: false,
          width: 160,
          valueGetter: (params) =>
            `${params.row.user.name}`,
        },
      ];

    useEffect(() => {
        fetchPayment()
    }, [])

    const fetchPayment=()=> {
        axios.get('http://localhost:8081/payment').then(res => {
            console.log(res.data.payload)
            setPayment(res.data.payload)
        })
    }
    const [payment, setPayment] = useState([])
    // const [searchData, setSearchData] = useState(true);
  return (
      <div className='row'>
          <div className='col-4'></div>
        <div style={{ height: 650 }} className='col-xl-4 col-12 col-md-12 col-sm-12'>
                <DataGrid
                    rows={payment}
                    columns={columns}
                    pageSize={10}
                    rowsPerPageOptions={[10]}
                />
        </div>
      </div>
    
  )
}

export default Admin;