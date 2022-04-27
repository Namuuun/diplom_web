import React, { useState, useEffect } from 'react';
import PaymentDescription from '../../components/description/PaymentDescription';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import 'react-notifications/lib/notifications.css';
import { useLocation } from 'react-router-dom'

import axios from 'axios';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

function Payment (props){
    const location = useLocation()

    const onClick =()=> {
        console.log(data)
    }
    const onChange =(e)=> {

        if(e){
            if(e.length === 8){
                axios.post("http://localhost:8081/user/checkBalance",null ,{ params: {phone: e}}).then(res => {
                    console.log(res.data.payload)
                    setData(res.data.payload)
                })    
            }
        }
        
        
    }
    const [open, setOpen] = useState(false);
    const [openError, setOpenError] = useState(false);
    const [payment, setPayment] = useState({});
    const handleClose = (event, reason) => {
        setOpen(false);
    };
    const handleCloseError = (event, reason) => {
        setOpenError(false);
    };

    const onPay=()=>{
    
        if(data){
            const body={
                id: data.id,
                amount: 5000
            }
            
            axios.post("http://localhost:8081/user/pay", body).then(res => {
                console.log(res.data)
                if(res.data.success){
                    setPayment(res.data.payload)
                    setOpen(true);
                } else {
                    setOpenError(true)
                }
                // setData(res.data.payload)
            })  
        }
    }

    const [data, setData]= useState({})

    useEffect(() => {
        onChange(data.phoneNumber)
    },[payment] )

    return(
       
        <div class="container-fluid">
            <div class="row">
                <div class="col-12 col-lg-7 col-xl-8 col-right">
                    <h3 className='mb-4'><b> Төлбөрийн нөхцөл </b></h3>
                    <div class="row listing-card-container">
                                        <div class="col-sm-6 col-lg-6 col-xl-6 col-12 mb-4" onClick={onClick}>
                                            <div class="card">
                                                <div class="card-body">
                                                    <h6 class="mb-3 listing-heading ellipsis">
                                                        DPAY
                                                    </h6>
                                                    <div className="row">
                                                        <input className='mr-4 pl-4 search' style={{borderRadius:10, borderWidth: 'thin'}} placeholder="Утасны дугаар..." onChange={(e) => {
                                                            onChange(e.target.value);
                                                        }}/>
                                                        <h3><b>Үлдэгдэл:</b>{data ? data.balance : "0"}</h3>
                                                       
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-sm-6 col-lg-6 col-xl-6 col-12 mb-4">
                                            <div class="card">
                                                <div class="card-body">
                                                    <a >
                                                        <h6 class="mb-3 listing-heading ellipsis">
                                                            MonPay
                                                        </h6>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-sm-6 col-lg-6 col-xl-6 col-12 mb-4">
                                            <div class="card">
                                                <div class="card-body">
                                                    <a >
                                                        <h6 class="mb-3 listing-heading ellipsis">
                                                            HiPay
                                                        </h6>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-sm-6 col-lg-6 col-xl-6 col-12 mb-4">
                                            <div class="card">
                                                <div class="card-body">
                                                    <a >
                                                        <h6 class="mb-3 listing-heading ellipsis">
                                                            SocialPay
                                                        </h6>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                    </div>
                </div>
                <PaymentDescription onPay={onPay} quantity={location.state.quantity}/>
            </div>
            <Snackbar open={open} autoHideDuration={1000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    Амжилттай төлөгдлөө
                </Alert>
            </Snackbar>
            <Snackbar open={openError} autoHideDuration={1000} onClose={handleCloseError}>
                <Alert onClose={handleCloseError} severity="error" sx={{ width: '100%' }}>
                    Төлбөр төлөх үед алдаа гарлаа
                </Alert>
            </Snackbar>
        </div>

    
    )
}
export default Payment;