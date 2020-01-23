import React from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";


class LocationIndex extends React.Component {
 
render() {
    // debugger
    const {locations} = this.props;
    let denver;
    if (this.props.location.id === 9 || this.props.location.id === 8 || this.props.location.id === 7 || this.props.location.id === 10) {
        denver = (<img src={this.props.location.photoUrls[0]} className='loc-pics'/>)
    } else {
        denver = (<img src={this.props.location.photoUrls[0]} className='loc-pics'/>);
    }
    debugger
    
    return (
        <Link to={`/locations/${this.props.location.id}`}>
            <ul>
                <li>
                    {/* <h1 className='location-name'>{this.props.location.location}</h1> */}
                    <div className='overlay-img'>
                        {/* <img className='loc-pics' src={this.props.location.photoUrls[1]} alt=""/> */}
                        {denver}
                       <div className='overlay'>
                           <div className='loc-text'>{this.props.location.cityname}</div>
                       </div>
                       <div className='hover-l'>
                        {/* <img className='loc-pics' src={this.props.location.photoUrls[1]} alt=""/> */}
                        {denver}
                            <div className='overlay'>
                            <div className='loc-text'>{this.props.location.cityname}</div>
                        </div>
                       </div>
                    </div>
                </li>
            </ul>
        </Link>
    )
}
}
export default LocationIndex

// {
//         var settings = {
//           dots: true,
//           infinite: true,
//           speed: 500,
//           slidesToShow: 1,
//           slidesToScroll: 1
//         };
//         const {locations} = this.props;
//         // debugger
//         return (
//           <Slider {...settings}>
//             <div>
//             <Link to={`/locations/${(this.props.location.id) === 1}`}>
//                     <ul>
//                         <li>
//                             {/* <h1 className='location-name'>{this.props.location.location}</h1> */}
//                             <div className='overlay-img'>
//                                 {/* <img className='loc-pics' src={this.props.location[0].photoUrls} alt=""/> */}
//                                <div className='overlay'>
//                                    <div className='loc-text'>{this.props.location.cityname}</div>
//                                </div>
//                                <div className='hover-l'>
//                                 {/* <img className='loc-pics' src={this.props.location[0].photoUrls} alt=""/> */}
//                                     <div className='overlay'>
//                                     <div className='loc-text'>{this.props.location.cityname}</div>
//                                 </div>
//                                </div>
//                             </div>
//                         </li>
//                     </ul>
//                 </Link>
//             </div>
//             <div>
//               <Link to={`/locations/${(this.props.location.id)=== 2}`}>
//                     <ul>
//                         <li>
//                             {/* <h1 className='location-name'>{this.props.location.location}</h1> */}
//                             <div className='overlay-img'>
//                                 {/* <img className='loc-pics' src={this.props.location[2].photoUrls} alt=""/> */}
//                                <div className='overlay'>
//                                    <div className='loc-text'>{this.props.location.cityname}</div>
//                                </div>
//                                <div className='hover-l'>
//                                 <img className='loc-pics' src={this.props.location.photoUrls} alt=""/>
//                                     <div className='overlay'>
//                                     <div className='loc-text'>{this.props.location.cityname}</div>
//                                 </div>
//                                </div>
//                             </div>
//                         </li>
//                     </ul>
//                 </Link>
//             </div>
//             <div>
//             <Link to={`/locations/${(this.props.location.id === 3)}`}>
//                     <ul>
//                         <li>
//                             {/* <h1 className='location-name'>{this.props.location.location}</h1> */}
//                             <div className='overlay-img'>
//                                 {/* <img className='loc-pics' src={this.props.location.photoUrls} alt=""/> */}
//                                <div className='overlay'>
//                                    <div className='loc-text'>{this.props.location.cityname}</div>
//                                </div>
//                                <div className='hover-l'>
//                                 {/* <img className='loc-pics' src={this.props.location.photoUrls} alt=""/> */}
//                                     <div className='overlay'>
//                                     <div className='loc-text'>{this.props.location.cityname}</div>
//                                 </div>
//                                </div>
//                             </div>
//                         </li>
//                     </ul>
//                 </Link>
//             </div>
//             <div>
//             <Link to={`/locations/${(this.props.location.id) === 4}`}>
//                     <ul>
//                         <li>
//                             {/* <h1 className='location-name'>{this.props.location.location}</h1> */}
//                             <div className='overlay-img'>
//                                 {/* <img className='loc-pics' src={this.props.location.photoUrls} alt=""/> */}
//                                <div className='overlay'>
//                                    <div className='loc-text'>{this.props.location.cityname}</div>
//                                </div>
//                                <div className='hover-l'>
//                                 {/* <img className='loc-pics' src={this.props.location.photoUrls} alt=""/> */}
//                                     <div className='overlay'>
//                                     <div className='loc-text'>{this.props.location.cityname}</div>
//                                 </div>
//                                </div>
//                             </div>
//                         </li>
//                     </ul>
//                 </Link>
//             </div>
//             <div>
//             <Link to={`/locations/${(this.props.location.id) === 5}`}>
//                     <ul>
//                         <li>
//                             {/* <h1 className='location-name'>{this.props.location.location}</h1> */}
//                             <div className='overlay-img'>
//                                 {/* <img className='loc-pics' src={this.props.location.photoUrls} alt=""/> */}
//                                <div className='overlay'>
//                                    <div className='loc-text'>{this.props.location.cityname}</div>
//                                </div>
//                                <div className='hover-l'>
//                                 {/* <img className='loc-pics' src={this.props.location.photoUrls} alt=""/> */}
//                                     <div className='overlay'>
//                                     <div className='loc-text'>{this.props.location.cityname}</div>
//                                 </div>
//                                </div>
//                             </div>
//                         </li>
//                     </ul>
//                 </Link>
//             </div>
//             <div>
//             <Link to={`/locations/${(this.props.location.id) === 6}`}>
//                     <ul>
//                         <li>
//                             {/* <h1 className='location-name'>{this.props.location.location}</h1> */}
//                             <div className='overlay-img'>
//                                 {/* <img className='loc-pics' src={this.props.location.photoUrls} alt=""/> */}
//                                <div className='overlay'>
//                                    <div className='loc-text'>{this.props.location.cityname}</div>
//                                </div>
//                                <div className='hover-l'>
//                                 {/* <img className='loc-pics' src={this.props.location.photoUrls} alt=""/> */}
//                                     <div className='overlay'>
//                                     <div className='loc-text'>{this.props.location.cityname}</div>
//                                 </div>
//                                </div>
//                             </div>
//                         </li>
//                     </ul>
//                 </Link>
//             </div>
//           </Slider>
//         );
//     }




// render() {
//     // debugger
//     const {locations} = this.props;
    
    
//     return (
//         <Link to={`/locations/${this.props.location.id}`}>
//             <ul>
//                 <li>
//                     {/* <h1 className='location-name'>{this.props.location.location}</h1> */}
//                     <div className='overlay-img'>
//                         <img className='loc-pics' src={this.props.location.photoUrls} alt=""/>
//                        <div className='overlay'>
//                            <div className='loc-text'>{this.props.location.cityname}</div>
//                        </div>
//                        <div className='hover-l'>
//                         <img className='loc-pics' src={this.props.location.photoUrls} alt=""/>
//                             <div className='overlay'>
//                             <div className='loc-text'>{this.props.location.cityname}</div>
//                         </div>
//                        </div>
//                     </div>
//                 </li>
//             </ul>
//         </Link>
//     )
// }