import React, { useState, useEffect } from 'react';

function ImageSlider (props){
    return(
        <div class="col-md-12 col-xl-8 mb-4">
            <div class="card mb-8">
                <div class="card-body">
                    <div class="glide details">
                        <div class="glide__track" data-glide-el="track">
                            <ul class="glide__slides">
                                <li class="glide__slide">
                                    <img alt="detail" src="assets/img/parkin.jpg"
                                        class="responsive border-0 border-radius img-fluid mb-3" />
                                </li>
                                <li class="glide__slide">
                                    <img alt="detail" src="assets/img/napoleonshat.jpg"
                                        class="responsive border-0 border-radius img-fluid mb-3" />
                                </li>
                                <li class="glide__slide">
                                    <img alt="detail" src="assets/img/marble-cake.jpg"
                                        class="responsive border-0 border-radius img-fluid mb-3" />
                                </li>
                                <li class="glide__slide">
                                    <img alt="detail" src="assets/img/fruitcake.jpg"
                                        class="responsive border-0 border-radius img-fluid mb-3" />
                                </li>
                                <li class="glide__slide">
                                    <img alt="detail" src="assets/img/magdalena.jpg"
                                        class="responsive border-0 border-radius img-fluid mb-3" />
                                </li>
                                <li class="glide__slide">
                                    <img alt="detail" src="assets/img/tea-loaf.jpg"
                                        class="responsive border-0 border-radius img-fluid mb-3" />
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="glide thumbs">
                        <div class="glide__track" data-glide-el="track">
                            <ul class="glide__slides">
                                <li class="glide__slide">
                                    <img alt="thumb" src="assets/img/parkin-thumb.jpg"
                                        class="responsive border-0 border-radius img-fluid" />
                                </li>
                                <li class="glide__slide">
                                    <img alt="thumb" src="assets/img/napoleonshat-thumb.jpg"
                                        class="responsive border-0 border-radius img-fluid" />
                                </li>
                                <li class="glide__slide">
                                    <img alt="thumb" src="assets/img/marble-cake-thumb.jpg"
                                        class="responsive border-0 border-radius img-fluid" />
                                </li>
                                <li class="glide__slide">
                                    <img alt="thumb" src="assets/img/fruitcake-thumb.jpg"
                                        class="responsive border-0 border-radius img-fluid" />
                                </li>
                                <li class="glide__slide">
                                    <img alt="thumb" src="assets/img/magdalena-thumb.jpg"
                                        class="responsive border-0 border-radius img-fluid" />
                                </li>
                                <li class="glide__slide">
                                    <img alt="thumb" src="assets/img/tea-loaf-thumb.jpg"
                                        class="responsive border-0 border-radius img-fluid" />
                                </li>
                            </ul>
                        </div>
                        <div class="glide__arrows" data-glide-el="controls">
                            <button class="glide__arrow glide__arrow--left" data-glide-dir="<"><i
                                    class="simple-icon-arrow-left"></i></button>
                            <button class="glide__arrow glide__arrow--right" data-glide-dir=">"><i
                                    class="simple-icon-arrow-right"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ImageSlider;