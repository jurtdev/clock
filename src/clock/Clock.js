import React from 'react';
import '../App.css';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    const time = new Date();
    this.state = {
      seconds: time.getSeconds().toLocaleString(),
      minutes: time.getMinutes().toLocaleString(),
      hours: time.getHours().toLocaleString(),
    };
  }
  componentDidMount() {
    this.intervalID = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  tick() {
    const time = new Date();
    this.setState({
      seconds: time.getSeconds().toLocaleString(),
      minutes: time.getMinutes().toLocaleString(),
      hours: time.getHours().toLocaleString(),
    });
  }

  render() {
    const { seconds, minutes, hours } = this.state;
    const secondsDegrees = (seconds / 60) * 360 + 90;
    const secondsStyle = { transform: `rotate(${secondsDegrees}deg)` };

    const minutesDegrees = (minutes / 60) * 360 + (seconds / 60) * 6 + 90;
    const minutesStyle = { transform: `rotate(${minutesDegrees}deg)` };

    const hoursDegrees = (hours / 12) * 360 + (minutes / 60) * 30 + 90;
    const hoursStyle = { transform: `rotate(${hoursDegrees}deg)` };

    return (
      <div>
        <div className='clock'>
          <div className='clock-face'>
            <div className='hand second-hand' style={secondsStyle}>
              <p>{seconds}</p>
            </div>
            <div className='hand minute-hand' style={minutesStyle}>
              {' '}
              <p>{minutes}</p>
            </div>
            <div className='hand hour-hand' style={hoursStyle}>
              {' '}
              <p>{hours % 12}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Clock;
