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
        Ltitle1: "Live with programmer Yasir",
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
      <div className="container my-5">
        <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
          <div className="carousel-inner">
            {Object.keys(this.state.ShortTitle).map((key, index) => (
              <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
                <div className="row g-4 align-items-center">
                  {/* Left Image */}
                  <div className="col-md-6">
                    <img
                      src={`/img/ieee 1 (${index + 1}).jpg`}
                      className="d-block w-100 rounded"
                      alt={`Slide ${index + 1}`}
                      style={{ maxHeight: '350px', objectFit: 'cover' }}
                    />
                  </div>

                  {/* Right Text */}
                  <div className="col-md-6">
                    <div className="text-content px-2">
                      <p className="text-muted small mb-1">{this.state.ShortTitle[key]}</p>
                      <h3 className="fw-bold">{this.state.LongTitle[`Ltitle${index + 1}`]}</h3>
                      <p className="text-secondary">{this.state.Paragraph[`Ptitle${index + 1}`]}</p>
                      <p className="mb-1 fw-semibold">📺 {this.state.ChannelName[`ChannelName${index + 1}`]}</p>
                      <p className="text-muted small">📅 {this.state.Date[`date${index + 1}`]}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Controls */}
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        {/* Section Title */}
        <h3 className="mt-5 text-center fw-bold">Recent Posts</h3>
      </div>
    );
  }
}

export default Carousel;
