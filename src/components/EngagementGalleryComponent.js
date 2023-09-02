import React from 'react';
import {UncontrolledCarousel} from 'reactstrap'

function EngagementGallery(props){
    return(
        <>
            <div className="container">            
                <div className = "row" >
                    <span className ="display-1 text-center">Engagement Looks</span>
                    <hr className = "mx-auto col-lg-6"/>
                </div>
            </div>
            <div id = "engagementGallery" className = "mb-5">
                <UncontrolledCarousel
                    items={[
                        {
                            altText: 'Engagement1',
                            caption: '',
                            key: 1,
                            src: 'assets/images/Engagement/92811570_1347754405435031_6032608491552636928_n.jpg'
                        },
                        {
                            altText: 'Engagement2',
                            caption: '',
                            key: 2,
                            src: 'assets/images/Engagement/99073843_1385933951617076_869274395430879232_n.jpg'
                        },
                        {
                            altText: 'Engagement3',
                            caption: '',
                            key: 3,
                            src: 'assets/images/Engagement/209227935_2119684101507679_6011780119794478909_n.jpg'
                        },
                        {
                            altText: 'Engagement4',
                            caption: '',
                            key: 4,
                            src: 'assets/images/Engagement/217177803_2135978486544907_4439470303811477131_n.jpg'
                        },                       
                        {
                            altText: 'Engagement5',
                            caption: '',
                            key: 5,
                            src: 'assets/images/Engagement/279508707_405865151544929_210546901027770081_n.jpg'
                        },
                        {
                            altText: 'Engagement6',
                            caption: '',
                            key: 6,
                            src: 'assets/images/Engagement/280068083_1195431997871099_7365603214329073760_n.jpg'
                        },
                    ]}
                />
            </div>
        </>

    );
}

export default EngagementGallery;