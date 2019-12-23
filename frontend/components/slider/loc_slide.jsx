import React from "react";
import Slider from "react-slick";

class SimpleSlider extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <Slider {...settings}>
        <div>
        <Link to={`/locations/${(this.props.location.id) === 1}`}>
                <ul>
                    <li>
                        {/* <h1 className='location-name'>{this.props.location.location}</h1> */}
                        <div className='overlay-img'>
                            <img className='loc-pics' src={this.props.location[0].photoUrls} alt=""/>
                           <div className='overlay'>
                               <div className='loc-text'>{this.props.location[0].cityname}</div>
                           </div>
                           <div className='hover-l'>
                            <img className='loc-pics' src={this.props.location[0].photoUrls} alt=""/>
                                <div className='overlay'>
                                <div className='loc-text'>{this.props.location[0].cityname}</div>
                            </div>
                           </div>
                        </div>
                    </li>
                </ul>
            </Link>
        </div>
        <div>
          <Link to={`/locations/${(this.props.location.id)=== 2}`}>
                <ul>
                    <li>
                        {/* <h1 className='location-name'>{this.props.location.location}</h1> */}
                        <div className='overlay-img'>
                            <img className='loc-pics' src={this.props.location[2].photoUrls} alt=""/>
                           <div className='overlay'>
                               <div className='loc-text'>{this.props.location[2].cityname}</div>
                           </div>
                           <div className='hover-l'>
                            <img className='loc-pics' src={this.props.location[2].photoUrls} alt=""/>
                                <div className='overlay'>
                                <div className='loc-text'>{this.props.location[2].cityname}</div>
                            </div>
                           </div>
                        </div>
                    </li>
                </ul>
            </Link>
        </div>
        <div>
        <Link to={`/locations/${(this.props.location.id === 3)}`}>
                <ul>
                    <li>
                        {/* <h1 className='location-name'>{this.props.location.location}</h1> */}
                        <div className='overlay-img'>
                            <img className='loc-pics' src={this.props.location[3].photoUrls} alt=""/>
                           <div className='overlay'>
                               <div className='loc-text'>{this.props.location[3].cityname}</div>
                           </div>
                           <div className='hover-l'>
                            <img className='loc-pics' src={this.props.location[3].photoUrls} alt=""/>
                                <div className='overlay'>
                                <div className='loc-text'>{this.props.location[3].cityname}</div>
                            </div>
                           </div>
                        </div>
                    </li>
                </ul>
            </Link>
        </div>
        <div>
        <Link to={`/locations/${(this.props.location.id) === 4}`}>
                <ul>
                    <li>
                        {/* <h1 className='location-name'>{this.props.location.location}</h1> */}
                        <div className='overlay-img'>
                            <img className='loc-pics' src={this.props.location[4].photoUrls} alt=""/>
                           <div className='overlay'>
                               <div className='loc-text'>{this.props.location[4].cityname}</div>
                           </div>
                           <div className='hover-l'>
                            <img className='loc-pics' src={this.props.location[4].photoUrls} alt=""/>
                                <div className='overlay'>
                                <div className='loc-text'>{this.props.location[4].cityname}</div>
                            </div>
                           </div>
                        </div>
                    </li>
                </ul>
            </Link>
        </div>
        <div>
        <Link to={`/locations/${(this.props.location.id) === 5}`}>
                <ul>
                    <li>
                        {/* <h1 className='location-name'>{this.props.location.location}</h1> */}
                        <div className='overlay-img'>
                            <img className='loc-pics' src={this.props.location[5].photoUrls} alt=""/>
                           <div className='overlay'>
                               <div className='loc-text'>{this.props.location[5].cityname}</div>
                           </div>
                           <div className='hover-l'>
                            <img className='loc-pics' src={this.props.location[5].photoUrls} alt=""/>
                                <div className='overlay'>
                                <div className='loc-text'>{this.props.location[5].cityname}</div>
                            </div>
                           </div>
                        </div>
                    </li>
                </ul>
            </Link>
        </div>
        <div>
        <Link to={`/locations/${(this.props.location.id) === 6}`}>
                <ul>
                    <li>
                        {/* <h1 className='location-name'>{this.props.location.location}</h1> */}
                        <div className='overlay-img'>
                            <img className='loc-pics' src={this.props.location[6].photoUrls} alt=""/>
                           <div className='overlay'>
                               <div className='loc-text'>{this.props.location[6].cityname}</div>
                           </div>
                           <div className='hover-l'>
                            <img className='loc-pics' src={this.props.location[6].photoUrls} alt=""/>
                                <div className='overlay'>
                                <div className='loc-text'>{this.props.location[6].cityname}</div>
                            </div>
                           </div>
                        </div>
                    </li>
                </ul>
            </Link>
        </div>
      </Slider>
    );
  }
}