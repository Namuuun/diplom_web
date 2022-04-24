import React, { useState, useEffect } from 'react';
import PaymentDescription from '../../components/description/PaymentDescription';

function Payment (props){

    const onClick =()=> {
        console.log("haha")
    }
    
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
                                                        QPAY
                                                    </h6>
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
                <PaymentDescription/>
            </div>
        </div>

    
    )
}
export default Payment;