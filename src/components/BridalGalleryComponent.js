import React from 'react';
import {UncontrolledCarousel} from 'reactstrap';

function BridalGallery(props){
    return(
        <>
            <div className="container">            
                <div className = "row" >
                    <span className ="display-1 text-center">Bridal Looks</span>
                    <hr className = "mx-auto col-lg-6"/>
                </div>
            </div>
            <div id = "bridalGallery" className = "mb-5">
                <UncontrolledCarousel
                    items={[
                        {
                            altText: 'Bridal1',
                            caption: '',
                            key: 1,
                            src: 'assets/images/Bridal/212664617_2129992087143547_5623981376915721709_n.jpg'
                        },
                        {
                            altText: 'Bridal2',
                            caption: '',
                            key: 2,
                            src: 'assets/images/Bridal/93379447_1353147258229079_717494988539166720_n.jpg'
                        },
                        {
                            altText: 'Bridal3',
                            caption: '',
                            key: 3,
                            src: 'assets/images/Bridal/101231484_1390580564485748_575255889422843904_n.jpg'
                        },
                        {
                            altText: 'Bridal4',
                            caption: '',
                            key: 4,
                            src: 'assets/images/Bridal/215147337_2133564176786338_5892657411754226623_n.jpg'
                        },
                        {
                            altText: 'Bridal5',
                            caption: '',
                            key: 5,
                            src: 'assets/images/Bridal/212664617_2129992087143547_5623981376915721709_n.jpg'
                        },
                        {
                            altText: 'Bridal6',
                            caption: '',
                            key: 6,
                            src: 'assets/images/Bridal/285154632_736465317706416_2757226430069951586_n.jpg'
                        },
                        {
                            altText: 'Bridal7',
                            caption: '',
                            key: 7,
                            src: 'assets/images/Bridal/245824191_586144409202215_5227068561356666692_n.jpg'
                        },
                        
                        
                    ]}
                />
            </div>
        </>

    );
}

export default BridalGallery;
