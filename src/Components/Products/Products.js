import React, { useEffect, useState } from 'react'
import Container from '../base/Container'
import { Link } from 'react-router-dom'
import kwall1 from "../assets/images/kwall1.png";
import kwall2 from "../assets/images/kwall2.png";
import depth from "../assets/images/depth.png";
import cabinet from "../assets/images/cabinet.png";
import pp from "../assets/images/pp.png";
import VideoPlayer from '../VideoPlayer';


function Products() {
    // const [isModalOpen, setIsModalOpen] = useState(false);

    const handleDownload = () => {
        // File inside public folder
        const fileUrl = "/files/kwall.rar";

        const link = document.createElement("a");
        link.href = fileUrl;
        link.download = "kwall.rar";
        link.click();
    };


    return (
        <>
            <Container
                title={"Products"}
                hideTopBackground

                renderDescription={() => (
                    <>



                        <div className='product-main'>


                            <div className='product-header'>
                                <h1 style={{ marginBottom: "5orem" }} className="  product-heading">
                                    KINETIC LED WALL
                                </h1>

                            </div>
                            <div className='product-item '>
                                {/* <div className="product-img"> */}
                                    <img src={kwall1} alt="kwall 1" className='p1 product-img1' />
                                {/* </div> */}
                                <div className='product-list-info product-list-info1'>
                                    <div className='text'>The Kinetic LED Wall is built with high-pitch LED panels that can physically
                                        extend and retract in sync with on-screen content. This kinetic motion allows
                                        infographics, visuals, and key subjects to be highlighted in striking ways, along
                                        with pattern motions to provide a dynamic visual experience.
                                    </div>
                                </div>
                            </div>

                            <div className='product-item'>
                                <div className='product-list-info product-list-info2 '>

                                    <h3 className='text-blue'>Interactivity Integration </h3>
                                    
                                    <ul className='text'>
                                        <li>The wall goes beyond visuals with seamless interactive capabilities:
                                        </li>
                                        <li>
                                            <span className='text-blue line-height-1-1'>Tablet Control: </span>Users can explore content,
                                            trigger kinetic motion scenarios, or sketch patterns that
                                            instantly animate across the wall.
                                        </li>
                                        <li>
                                            <span className='text-blue line-height-1-1'> LIDAR Sensors: </span>
                                            With proximity and touch detection, the wall reacts instantly to user
                                            presence or touch, creating a real-time interactive experience.
                                        </li>
                                    </ul>
                                </div>

                                {/* <div className="product-img product-img2 "> */}
                                    <img src={kwall2} alt="kwall 1" className='p2 product-img2 ' />
                                {/* </div> */}


                            </div>

                            {/* list and button  styling*/}
                            <div className='led-info'>
                                <div className='led-info-lists'>
                                    <ul>
                                        <li className='led-info-list'>
                                            <div className='info-img'>
                                                <img src={pp} />
                                            </div>
                                            <div className='info-text'>Pixel Pitch: 1.9 mm</div>
                                        </li>
                                        <li className='led-info-list'>
                                            <div className='info-img'>
                                                <img src={cabinet} />
                                            </div>
                                            <div className='info-text'>Cabinet Size : 0.5 x 0.5 m</div>
                                        </li>
                                        <li className='led-info-list'>
                                             <div className='info-img'>
                                                <img src={depth} />
                                            </div>
                                            <div className='info-text'>Depth : 4.5 cm</div>
                                        </li>
                                    </ul>
                                </div>
                                <div className='led-info-buttons'>
                                    
                                    <button type='submit'  
                                    data-wait="Please wait..."
                                    class="text-3 product-input product-submit-button"
                                    onClick={handleDownload}>
                                      <a>
                                        3D Model  
                                     </a>    
                                    </button>

                                    <button type='submit'  
                                    data-wait="Please wait..."
                                    class="text-3 product-input product-submit-button"
                                    >
                                        <a href={process.env.REACT_APP_LINKEDIN_URL}
                                        target="_blank"
                                        rel="noopener noreferrer">
                                            Watch Video   
                                        </a>   
                                    </button>
                                    
                                </div>
                                
                            </div>


                            {/* <div className="product-buttons">
                                <div className='product-button btn1'>
                                    <input
                                        type="submit"
                                        data-wait="Please wait..."
                                        class="text-3 product-input product-submit-button"
                                        value="3D Model"
                                        onClick={handleDownload}
                                    />
                                </div>

                                <div className='product-button btn2'>

                                    <a
                                        href={process.env.REACT_APP_LINKEDIN_URL}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-3 product-input product-submit-button"
                                    >
                                        Watch Video
                                    </a>
                                </div>

                            </div> */}

                        </div>


                    </>
                )}
            />

        </>
    )
}

export default Products;