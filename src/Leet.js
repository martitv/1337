import React, { Component } from 'react';
import moment from 'moment';
import TronBass from './tronbass.png';
import TronBass1337 from './tronbassLeet.png';
import './Leet.css';

class Leet extends Component {
  state = {
    currentTime: '',
    leet: false,
  };

  componentDidMount() {
    this.timer = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer());
  }

  checkLeetNess = currentTime => {
    const time = currentTime.split(':');
    const hh = 0;
    const mm = 1;

    return (time[hh] === '13' && time[mm] === '37');
  };

  isTimeForEvolve = currentTime => {
    const time = currentTime.split(':');
    const ss = 2;

    return time[ss] < '20';
  };

  getHtmlToShow = currentTime => {
      return this.isTimeForEvolve(currentTime) ? this.evolve() : this.dance_dance();
  };

  tick = () => {
    const currentTime = moment().format('HH:mm:ss');
    const leet = this.checkLeetNess(currentTime);
    this.setState({ currentTime, leet })
  };

  dance_dance = () => {
    return (<div className="leet-container">
            <h1 className="super-fast-spin">1337</h1>
            <h1 className="super-fast-spin">1337</h1>
            <h1 className="super-fast-spin">1337</h1>
            <img src={TronBass1337} className="super-fast-spin" alt="lul" />
            <img src={TronBass1337} className="super-fast-spin" alt="lul" />
            <h1 className="super-fast-spin">1337</h1>
            <h1 className="super-fast-spin">1337</h1>
            <h1 className="super-fast-spin">1337</h1>
            <img src="https://media1.tenor.com/images/ddd26e2143ded158f364949ea2ef803f/tenor.gif?itemid=5565292"
                alt="oh boy" />
            <img src="https://media1.tenor.com/images/ddd26e2143ded158f364949ea2ef803f/tenor.gif?itemid=5565292"
                alt="oh boy" />
            <img src="https://media1.tenor.com/images/ddd26e2143ded158f364949ea2ef803f/tenor.gif?itemid=5565292"
                alt="oh boy" />
            <img src="https://media1.tenor.com/images/ddd26e2143ded158f364949ea2ef803f/tenor.gif?itemid=5565292"
                alt="oh boy" />
            <img src="https://media1.tenor.com/images/ddd26e2143ded158f364949ea2ef803f/tenor.gif?itemid=5565292"
                alt="oh boy" />
            <img src="https://media1.tenor.com/images/ddd26e2143ded158f364949ea2ef803f/tenor.gif?itemid=5565292"
                alt="oh boy" />
            <img src="https://media1.tenor.com/images/ddd26e2143ded158f364949ea2ef803f/tenor.gif?itemid=5565292"
                alt="oh boy" />
            <img src="https://media1.tenor.com/images/ddd26e2143ded158f364949ea2ef803f/tenor.gif?itemid=5565292"
                alt="oh boy" />
            <h1 className="fast-spin">1337</h1>
            <h1 className="fast-spin">1337</h1>
            <h1 className="fast-spin">1337</h1>
            <img src={TronBass} className="fast-spin" alt="lul" />
            <h1 className="fast-spin">1337</h1>
            <h1 className="fast-spin">1337</h1>
            <h1 className="slow-spin">1337</h1>
            <img src={TronBass} className="slow-spin" alt="lul" />
            <h1 className="slow-spin">1337</h1>
            <h1 className="slow-spin">1337</h1>
            <h1 className="slow-spin">1337</h1>
            <img src={TronBass} className="slow-spin" alt="lul" />
            <h1 className="slow-spin">1337</h1>
            <h1 className="slow-spin">1337</h1>
            <h1 className="slow-spin">1337</h1>
            <img src={TronBass} className="fast-spin" alt="lul" />
            <h1 className="slow-spin">1337</h1>
            <h1 className="fast-spin">1337</h1>
            <h1 className="fast-spin">1337</h1>
            <img src={TronBass} className="fast-spin" alt="lul" />
            <h1 className="fast-spin">1337</h1>
            <h1 className="fast-spin">1337</h1>
            <h1 className="fast-spin">1337</h1>
            <img src={TronBass} className="fast-spin" alt="lul" />
            <h1 className="fast-spin">1337</h1>
            <h1 className="fast-spin">1337</h1>
            <h1 className="fast-spin">1337</h1>
            <img src={TronBass} className="fast-spin" alt="lul" />
            <h1 className="fast-spin">1337</h1>
            <h1 className="fast-spin">1337</h1>
            <h1 className="fast-spin">1337</h1>
    </div>);
  };

  evolve = () => {
    return (<div class="evolve">
              <img class="tron" src={TronBass} alt="TronBass"/>
              <img class="leetTron" src={TronBass1337} alt="TronBass1337"/>
              <div class="additional-pylon">1</div>
              <div class="additional-pylon">3</div>
              <div class="additional-pylon">3</div>
              <div class="additional-pylon">7</div>
            </div>);
  };

  render() {
    return (
      <div className="leet">
        <header className="leet-header">
          <h1 className="leet-title">{this.state.currentTime}</h1>
        </header>
        {this.state.leet ? this.getHtmlToShow(this.state.currentTime) : (
          <div>
            <img src={TronBass} alt="lul" />
          </div>
        )}
      </div>
    );
  }
}

export default Leet;
