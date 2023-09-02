import React from 'react';
import {UncontrolledCarousel} from 'reactstrap';

function PartyGallery(props){
    return(
        <>
            <div classNameName="container">            
                <div className = "row" >
                    <span className ="display-1 text-center">Party Looks</span>
                    <hr className = "mx-auto col-lg-6"/>
                </div>
            </div>
            <div id = "partyGallery" className = "mb-5">
                <UncontrolledCarousel
                    items={[
                        {
                            altText: 'Party1',
                            caption: '',
                            key: 1,
                            src: 'assets/images/Party/91067799_1334448063432332_1071699270698008576_n.jpg'
                        },
                        {
                            altText: 'Party2',
                            caption: '',
                            key: 2,
                            src: 'assets/images/Party/91365714_1341198756090596_3818265641706586112_n.jpg'
                        },
                        {
                            altText: 'Party3',
                            caption: '',
                            key: 3,
                            src: 'assets/images/Party/91845879_1344582079085597_4571713642566778880_n.jpg'
                        },
                        {
                            altText: 'Party4',
                            caption: '',
                            key: 4,
                            src: 'assets/images/Party/132322938_1961256740683750_7953738352058724177_n.jpg'
                        },
                        {
                            altText: 'Party5',
                            caption: '',
                            key: 5,
                            src: 'assets/images/Party/203842769_2111675538975202_2982593656079037980_n.jpg'
                        },
                        {
                            altText: 'Party5',
                            caption: '',
                            key: 6,
                            src: 'assets/images/Party/280149106_766589114330439_9157658655426905542_n.jpg'
                        },
                        {
                            altText: 'Party7',
                            caption: '',
                            key: 7,
                            src: 'assets/images/Party/269838749_620915639112432_7520961861513794573_n.jpg'
                        },
                        
                        
                    ]}
                />
            </div>
        </>
    );
}

export default PartyGallery;