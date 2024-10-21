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
            {Object.keys(this.state.ShortTitle).map((key, index) => (
              <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
                <div className='row'>
                  <div className='col-md-6 col-12'>
                    <img src={`/img/ieee 1 (${index + 1}).jpg`} className="d-block w-100" alt={`Slide ${index + 1}`} />
                  </div>
                  <div className='col-md-6 col-12 d-flex flex-column justify-content-center'>
                    <p className='shortTitle'>{this.state.ShortTitle[key]}</p>
                    <h3 className='longTitle'>{this.state.LongTitle[`Ltitle${index + 1}`]}</h3>
                    <p className='shortTitle'>{this.state.Paragraph[`Ptitle${index + 1}`]}</p>
                    <p className='channelName'>{this.state.ChannelName[`ChannelName${index + 1}`]}</p>
                    <p className='shortTitle'>{this.state.Date[`date${index + 1}`]}</p>
                  </div>
                </div>
              </div>
            ))}
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