import React, { useState, useEffect } from 'react';
import './detail.css'
import Select from '@mui/material/Select'; 
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes'
function Detail (props){

    const [capacity, setCapacity] = useState('');
    const [quantity, setQuantity] = useState(0);
    
    const handleChange = (event) => {
        console.log(event.target.value)
        setCapacity(event.target.value);
    };
    const onMinus = () => {
        if(quantity>0){
            setQuantity(quantity-1)
        }
    };
    const onPlus = () => {
        setQuantity(quantity+1)
    };

    return(
        <div class="container-fluid">
            <div class="row">
                <div class=" col-xl-3">
                    <div class="card mb-8">
                        <div class="card-body">
                            <div class='col'>
                                <img class='card-img-top mb-4' src='assets/img/card-thumb-1.jpg' alt="detail"></img>
                                <img class='card-img-top mb-4' src='assets/img/card-thumb-2.jpg' alt="detail"></img>
                                <img class='card-img-top mb-4' src='assets/img/card-thumb-3.jpg' alt="detail"></img>
                            </div>
                        </div>
                    </div>
                </div>
                <div class=" col-xl-5">
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
                <div class="col-12 col-md-12 col-xl-4">
                    <div class="card mb-4">
                        <div class="card-body">
                            <div class="mb-5">
                                <h5 class="card-title"><b>I PHONE 13 PRO</b></h5>
                                <h4><b> Үнэ: 1100$ </b></h4>
                                <h4><b> Брэнд: Apple </b></h4>
                                <h4 class='mb-4'><b> Өнгө: Grey </b></h4>
                                <div className='row mb-4 ml-1'>
                                    <div class='round mr-4'>

                                    </div>
                                    <div class='round mr-4'>

                                    </div>
                                    <div class='round mr-4'>

                                    </div>
                                    <div class='round mr-4 mb-2'>

                                    </div>
                                </div>
                                <h4><b> Багтаамж </b></h4>
                                <div class='mb-4'>
                                    <FormControl variant="standard" sx={{ minWidth: 250 }}>
                                    {/* <InputLabel id="demo-simple-select-standard-label">Багтаамж</InputLabel> */}

                                        <Select
                                            value={capacity}
                                            onChange={handleChange}
                                            label="Багтаамж"
                                            defaultValue={128}
                                        >
                                        <MenuItem value={128}>128GB</MenuItem>
                                        <MenuItem value={256}>256GB</MenuItem>
                                        <MenuItem value={512}>512GB</MenuItem>
                                        </Select>
                                    </FormControl>
                                </div>
                               <div className='row mb-4 ml-1'>
                                   <div className='mr-4 button-group mb-2'>
                                        <ButtonGroup variant="">
                                            <Button color="secondary" onClick={onMinus}>-</Button>
                                            <h4 className='ml-2 mr-2 mt-1'>{quantity}</h4>
                                            <Button color="secondary" onClick={onPlus}>+</Button>
                                        </ButtonGroup>
                                   </div>
                                    <div>
                                    <Button color="secondary" variant="contained" endIcon={<ShoppingBasketIcon />}>
                                        Сагслах
                                    </Button>
                                    </div>
                               </div>
                               <div className=''>
                                    <Button color="secondary" variant="outlined">
                                        <Link to={ROUTES.PAYMENT}  >
                                            Худалдан авах
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Detail;