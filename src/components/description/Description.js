import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes'

function Description (props){
    return(
        <div class="col-12 col-md-12 col-xl-4">
                    <div class="card mb-4">
                        <div class="card-body">
                            <div class="mb-5">
                                <h5 class="card-title"><b>I PHONE 13 PRO haha</b></h5>
                                <p>
                                    Blended value human-centered social innovation resist scale and impact issue
                                    outcomes
                                    bandwidth efficient. A; social return on investment, change-makers, support a,
                                    co-create
                                    commitment because sustainable. Rubric when vibrant black lives matter benefit
                                    corporation human-centered. Save the world, problem-solvers support silo mass
                                    incarceration. Accessibility empower communities changemaker, low-hanging fruit
                                    accessibility, thought partnership impact investing program areas invest.
                                    Contextualize
                                    optimism unprecedented challenge, empower inclusive. Living a fully ethical life the
                                    resistance segmentation social intrapreneurship efficient inspire external partners.
                                    Systems thinking correlation, social impact; when revolutionary bandwidth. Engaging,
                                    revolutionary engaging; empower communities policymaker shared unit of analysis
                                    technology inspiring social entrepreneurship.
                                </p>
                            </div>
                            <div className='d-flex justify-content-between align-items-center'>
                                <div className='mb-4'>
                                    <button type='button' className='btn btn-outline-primary mb-1'>
                                        <Link to={ROUTES.DETAIL} >
                                            Дэлгэрэнгүй
                                        </Link>
                                    </button>
                                </div>
                                <div className='mb-4'>
                                    <button type='button' className='btn btn-primary mb-1'>
                                        Худалдах
                                    </button>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    
                </div>
    )
}
export default Description