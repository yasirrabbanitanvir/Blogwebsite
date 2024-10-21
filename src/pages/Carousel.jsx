import React, { Component } from 'react';
import './BlogCSS/Blog.css';

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ShortTitle: {
        Stitle1: "Lorem ipsum dolor sit amet.",
        Stitle2: "Lorem ipsum dolor sit amet.",
        Stitle3: "Lorem ipsum dolor sit amet."
      },
      LongTitle: {
        Ltitle1: "Live with programmer yasir",
        Ltitle2: "Live with programmer Rabbani",
        Ltitle3: "Live with programmer Tanvir"
      },
      Paragraph: {
        Ptitle1: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor tempora debitis esse adipisci iste repudiandae.",
        Ptitle2: "ipsum dolor sit amet consectetur, adipisicing elit. Dolor tempora debitis esse adipisci iste repudiandae.",
        Ptitle3: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor tempora debitis esse adipisci iste repudiandae."
      },
      ChannelName: {
        ChannelName1: "CodeErrors",
        ChannelName2: "TeamErrors",
        ChannelName3: "FailureErrors"
      },
      Date: {
        date1: "29 March, 2024",
        date2: "30 March, 2024",
        date3: "31 March, 2024"
      }
    };
  }

  render() {
    return (
      <div>
        <div id="carouselExampleFade" className="carousel slide carousel-fade container mt-5" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className='row'>
                <div className='col-md-6'>
                  <img src="/img/ieee 1 (1).jpg" className="d-block w-100" alt="..." /> {/* Adjusted path */}
                </div>
                <div className='col-md-6'>
                  <p className='shortTitle'>{this.state.ShortTitle.Stitle1}</p>
                  <h3 className='longTitle'>{this.state.LongTitle.Ltitle1}</h3>
                  <p className='shortTitle'>{this.state.Paragraph.Ptitle1}</p>
                  <p className='channelName'>{this.state.ChannelName.ChannelName1}</p>
                  <p className='shortTitle'>{this.state.Date.date1}</p>
                </div>
              </div>
            </div>

            <div className="carousel-item">
              <div className='row'>
                <div className='col-md-6'>
                  <img src="/img/ieee 1 (2).jpg" className="d-block w-100" alt="..." /> {/* Adjusted path */}
                </div>
                <div className='col-md-6'>
                  <p className='shortTitle'>{this.state.ShortTitle.Stitle2}</p>
                  <h3 className='longTitle'>{this.state.LongTitle.Ltitle2}</h3>
                  <p className='shortTitle'>{this.state.Paragraph.Ptitle2}</p>
                  <p className='channelName'>{this.state.ChannelName.ChannelName2}</p>
                  <p className='shortTitle'>{this.state.Date.date2}</p>
                </div>
              </div>
            </div>

            <div className="carousel-item">
              <div className='row'>
                <div className='col-md-6'>
                  <img src="/img/ieee 1 (3).jpg" className="d-block w-100" alt="..." /> {/* Adjusted path */}
                </div>
                <div className='col-md-6'>
                  <p className='shortTitle'>{this.state.ShortTitle.Stitle3}</p>
                  <h3 className='longTitle'>{this.state.LongTitle.Ltitle3}</h3>
                  <p className='shortTitle'>{this.state.Paragraph.Ptitle3}</p>
                  <p className='channelName'>{this.state.ChannelName.ChannelName3}</p>
                  <p className='shortTitle'>{this.state.Date.date3}</p>
                </div>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
            <span className="carousel-control-prev-icon"></span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
            <span className="carousel-control-next-icon"></span>
          </button>
          <h3 className='mt-5'>Recent Post</h3>
        </div>
      </div>
    );
  }
}

export default Carousel;
