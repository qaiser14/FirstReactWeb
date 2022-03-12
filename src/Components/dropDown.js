import React from 'react'
import './dropDown.css'
import {BsSearch} from 'react-icons/bs'
import {BsHeart} from 'react-icons/bs'
import {BsBag} from 'react-icons/bs'


class dropDown extends React.Component{
    render(){
        return(

            <div className="dropBar">

                <div className="dropulDiv">

                    <ul className="dropUl">

                        <li className="dropHome1"><a href="">Home</a>
                        
                            <div className="dropMenu1">

                                <ul className="dropUl1">
                                    <li className="dropli1">Home Styles</li>
                                    <li className="dropli2">New Skin</li>
                                </ul>

                            </div>
                        
                        </li>


                        <li className="dropShop1"><a href="">Shop Pages</a>

                            <div className="dropMenu2">

                                <ul className="dropUl1">
                                    <li className="dropli1">Collection List Pages</li>
                                    <li className="dropli1">Collection Product Pages</li>
                                    <li className="dropli1">Product Detailed Pages</li>
                                    <li className="dropli1">Product Features</li>
                                    <li className="dropli2">Landing Page</li>
                                </ul>

                            </div>
                         
                        </li>


                        <li className="dropPage1"><a href="">Pages</a>

                            <div className="dropMenu3">

                                <ul className="dropUl1">
                                    <li className="dropli1">ELLA RTL</li>
                                    <li className="dropli1">About us 01</li>
                                    <li className="dropli1">About us 02</li>
                                    <li className="dropli1">Contact us 01</li>
                                    <li className="dropli1">Contact us 02</li>
                                    <li className="dropli1">Portfolio 01</li>
                                    <li className="dropli1">Portfolio 02</li>
                                    <li className="dropli1">Shop Instagram</li>
                                    <li className="dropli1">404</li>
                                    <li className="dropli1">Password Page 01</li>
                                    <li className="dropli1">Password Page 02</li>
                                    <li className="dropli1">FAQs</li>
                                    <li className="dropli2">Brands A-Z</li>
                                    
                                </ul>

                            </div>
                                
                        </li>


                        <li className="dropLook1"><a href="">Lookbook</a>

                            <div className="dropMenu1">

                                <ul className="dropUl1">
                                    <li className="dropli1">Lookbook Default</li>
                                    <li className="dropli2">Lookbook Custom</li>
                                </ul>

                            </div>

                        </li>


                        <li className="dropBlog1"><a href="">Blog</a>
                        
                            <div className="dropMenu5">

                                <ul className="dropUl1">
                                    <li className="dropli1">Blog Default</li>
                                    <li className="dropli1">Blog Right Sidebar</li>
                                    <li className="dropli1">Blog Masonry</li>
                                    <li className="dropli1">Blog Detail With LookBook</li>
                                    <li className="dropli2">Blog Detail With Product Widget</li>
                                </ul>

                            </div>
                        
                        </li>


                        <li className="dropChild1"><a href="">Child Themes</a>

                            <div className="dropMenu6">

                                <ul className="dropUl1">

                                    <li className="dropli1">Tea and Coffee</li>
                                    <li className="dropli1">Belle Dolls</li>
                                    <li className="dropli1">Glasso</li>
                                    <li className="dropli1">Jewel</li>
                                    <li className="dropli1">Gymuso</li>
                                    <li className="dropli1">Soun</li>
                                    <li className="dropli1">Cospora</li>
                                    <li className="dropli1">Shopbe</li>
                                    <li className="dropli1">Caros Automotive</li>
                                    <li className="dropli1">Luxwatches</li>
                                    <li className="dropli1">Watchtica</li>
                                    <li className="dropli1">Furnitica</li>
                                    <li className="dropli1">Bagatica</li>
                                    <li className="dropli2">Bicycle</li>

                                </ul>

                            </div>
                        
                        </li>


                        <li className="dropTrend1"><a href="">Trend</a>

                            <div className="dropMenu7">

                                <div className="dropUl2">

                                    <div className="trendList1">
                                        <h4 className="list1P">What's new</h4>
                                        <h4 className="list1P">Best Selling</h4>
                                        <h4 className="list1P">Top Rated</h4>
                                        <h4 className="list1P">Most Popular</h4>
                                        <h4 className="list1P">Editor's Pick</h4>
                                        <h4 className="list1P">On Sale</h4> 
                                    </div>

                                    <div className="trendList2">
                                        <h4 className="list2P">HARUM QUIDUM</h4>
                                        <p className="list2P">Cosmopolis</p>
                                        <p className="list2P">Suito</p>
                                        <p className="list2P">Milancelos</p>
                                        <p className="list2P">Blazero</p>
                                        <p className="list2P">Giamos</p> 
                                        <p className="list2P">Metropolis</p> 
                                    </div>


                                    <div className="trendList1"></div>
                                    <div className="trendList3"></div>

                                </div>

                            </div>
                        </li>


                        <li>New In</li>
                        <li>Bulk Editor</li>

                    </ul>

                </div>

               {/* Div for search icon */}
                <div className="searchBox">
                    <p>search</p>
                    <span id="dropIcon1"><BsSearch/></span>
                </div>

                {/* Div for love and bag icon */}
                    <div className="loveBox">
                        <span id="dropIcon1"><BsHeart/></span>
                        <span id="dropIcon1"><BsBag/></span>
                    </div>

                    

            </div>
        )
    }
}

export default dropDown