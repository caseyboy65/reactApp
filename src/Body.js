import React, {Component} from 'react';
import './Body.css';

class Body extends Component {
  constructor(){
    super();

    this.state = {
      slideToShow: 1
    };

    this.handleLeft = this.handleLeft.bind(this);
    this.handleRight = this.handleRight.bind(this);
  }

  getMinSlide() {
    return 1;
  }

  getMaxSlide() {
    return 3;
  }

  handleLeft() {
    var newSlide = this.state.slideToShow - 1;
    if (newSlide < this.getMinSlide()) {
        newSlide = this.getMaxSlide();
    }
    
    this.setState({
      slideToShow: newSlide
    });
  }

  handleRight() {
    var newSlide = this.state.slideToShow + 1;
    if (newSlide > this.getMaxSlide()) {
        newSlide = this.getMinSlide();
    }

    this.setState({
      slideToShow: newSlide
    });
  }

  render() {
    return (
        <div className="Body">
            <div className="StoreBrand"> 
                <div className="Welcome">Welcome to </div>
                <div className="StoreName"> Mimi's Kitchen </div>
                <a className="StoreLogo" />
            </div>
            <div className="Slideshow Home">
                <a className="LeftArrow FontWhite" onClick={this.handleLeft} />
                <a className="RightArrow FontWhite" onClick={this.handleRight} />
                <div className={this.state.slideToShow == 1 ? "Content Show" : "Content"} >
                    <div className="Details">
                        <div className="Title">
                            Apple
                        </div>
                        <div className="Description">
                            Crisp, fresh, delicious
                        </div>
                        <div className="Cost">
                            99¢ / lb
                        </div>
                    </div>
                    <img src={require('./img/apples.jpg')} />
                </div>
                <div className={this.state.slideToShow == 2 ? "Content Show" : "Content"} >
                    <div className="Details">
                        <div className="Title">
                            Orange
                        </div>
                        <div className="Description">
                            Juicy, fresh, citrus
                        </div>
                        <div className="Cost">
                            $1.22 / lb
                        </div>
                    </div>
                    <img src={require('./img/orange.jpeg')} />
                </div>
                <div className={this.state.slideToShow == 3 ? "Content Show" : "Content"} >
                    <div className="Details">
                        <div className="Title">
                            Apple
                        </div>
                        <div className="Description">
                            Sweet, fresh, Ripe
                        </div>
                        <div className="Cost">
                            69¢ / lb
                        </div>
                    </div>
                    <img src={require('./img/banana.jpeg')} />
                </div>
            </div>
        </div>
    );
  }
}

export default Body;