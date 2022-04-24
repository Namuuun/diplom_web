import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes'

function PaymentDescription (props){
    return(
        <div class="col-12 col-md-12 col-xl-4">
                    <div class="card mb-4">
                        <div class="card-body">
                            <div class="mb-5">
                                <h5 class="card-title"><b>Захиалгын мэдээлэл</b></h5>
                                <div className='row'>
                                    <h4 class="col-xl-4">I Phone 13</h4>
                                    <h4 class="col-xl-4">x1</h4>
                                    <h4 class="col-xl-4">1100$</h4>
                                </div>

                                <div className='row'>
                                    <h3 class="col-xl-8"> <b>Төлөх дүн</b></h3>
                                    <h4 class="col-xl-4"><b>1100$</b></h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    )
}
export default PaymentDescription