import React, { useState, useEffect } from 'react';
import ImageSlider from '../../components/imageSlider/ImageSlider';
import Description from '../../components/description/Description';
function Home (props){
    return(
       
        <div class="container-fluid ">
            <div class="row">
                <ImageSlider/>
                <Description/>
                <div className='col-6 col-md-6 col-xl-3'>
                    <div class="card mb-8">
                        <div class="card-body">
                            <img class="responsive border-0 border-radius img-fluid mb-3"  alt="detail" src="assets/img/parkin.jpg"></img>
                        </div>
                    </div>
                </div>
                <div className='col-6 col-md-6 col-xl-3'>
                    <div class="card mb-8">
                        <div class="card-body">
                            <img class="responsive border-0 border-radius img-fluid mb-3"  alt="detail" src="assets/img/parkin.jpg"></img>
                        </div>
                    </div>
                </div>
                <div className='col-6 col-md-6 col-xl-3'>
                    <div class="card mb-8">
                        <div class="card-body">
                            <img class="responsive border-0 border-radius img-fluid mb-3"  alt="detail" src="assets/img/parkin.jpg"></img>
                        </div>
                    </div>
                </div>
                <div className='col-6 col-md-6 col-xl-3'>
                    <div class="card mb-8">
                        <div class="card-body">
                            <img class="responsive border-0 border-radius img-fluid mb-3"  alt="detail" src="assets/img/parkin.jpg"></img>
                        </div>
                    </div>
                </div>
                <div className='col-6 col-md-6 col-xl-3'>
                    <div class="card mb-8">
                        <div class="card-body">
                            <img class="responsive border-0 border-radius img-fluid mb-3"  alt="detail" src="assets/img/parkin.jpg"></img>
                        </div>
                    </div>
                </div>
                <div className='col-6 col-md-6 col-xl-3'>
                    <div class="card mb-8">
                        <div class="card-body">
                            <img class="responsive border-0 border-radius img-fluid mb-3"  alt="detail" src="assets/img/parkin.jpg"></img>
                        </div>
                    </div>
                </div>
                <div className='col-6 col-md-6 col-xl-3'>
                    <div class="card mb-8">
                        <div class="card-body">
                            <img class="responsive border-0 border-radius img-fluid mb-3"  alt="detail" src="assets/img/parkin.jpg"></img>
                        </div>
                    </div>
                </div>
                <div className='col-6 col-md-6 col-xl-3'>
                    <div class="card mb-8">
                        <div class="card-body">
                            <img class="responsive border-0 border-radius img-fluid mb-3"  alt="detail" src="assets/img/parkin.jpg"></img>
                        </div>
                    </div>
                </div>  
                
            </div>
        </div>

    
    )
}
export default Home;