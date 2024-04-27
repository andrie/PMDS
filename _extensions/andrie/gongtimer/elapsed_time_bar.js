// MIT License
// tkrkt/reveal.js-elapsed-time-bar
// https://github.com/tkrkt/reveal.js-elapsed-time-bar
// with minor modifications by Andrie de Vries to support Quarto

var _gong = {
  // default value
  barColor: 'rgb(200,0,0)',
  pausedBarColor: 'rgba(200,0,0,.6)',

  isPaused: false,
  isFinished: false,

  allottedTime: null,
  timeProgressBar: null,
  startTime: null,
  pauseTime: null,
  pauseTimeDuration: 0,

  /**
   * initialize elements
   */
  handleReady: function(config) {
    // var config = Reveal.getConfig();

    // activate this plugin if config.allottedTime exists.
    if (!config.allottedTime) {
      console.warn('Failed to start ElapsedTimeBar plugin. "allottedTime" property is required.');
      return;
    }

    // set configurations
    this.barColor = config.barColor || this.barColor;
    this.pausedBarColor = config.pausedBarColor || this.pausedBarColor;

    // calc barHeight from config.barHeight or page-progress container
    var barHeight;
    var pageProgressContainer = document.querySelector('.progress');
    if (config.progressBarHeight) {
      barHeight = parseInt(config.progressBarHeight, 10) + 'px';

      // override height of page-progress container
      pageProgressContainer && (pageProgressContainer.style.height = barHeight);
      barHeight = parseInt(config.progressBarHeight, 10) - 1 + 'px';
    } else if (config.progress && pageProgressContainer) {
      // get height from page-progress container
      barHeight = pageProgressContainer.getBoundingClientRect().height - 1 + 'px';
    } else {
      // default
      barHeight = '3px';
    }
    // barHeight = parseInt(config.progressBarHeight, 10) - 1 + 'px';

    // create container of time-progress
    var timeProgressContainer = document.createElement('div');
    timeProgressContainer.classList.add('progress');
    Object.entries({
      display: 'block',
      position: 'fixed',
      bottom: config.progress ? barHeight : 0,
      width: '100%',
      height: barHeight
    }).forEach(([k, v]) => {
      timeProgressContainer.style[k] = v;
    });
    document.querySelector('.reveal').appendChild(timeProgressContainer);

    // create content of time-progress
    this.timeProgressBar = document.createElement('div');
    Object.entries({
      height: '100%',
      willChange: 'width'
    }).forEach(([k, v]) => {
      this.timeProgressBar.style[k] = v;
    });
    timeProgressContainer.appendChild(this.timeProgressBar);

    // start timer
    this.start(config.allottedTime);
  },

  /**
   * update repeatedly using requestAnimationFrame.
   */
  loop() {
    if (this.isPaused) return;
    var now = +new Date();
    var elapsedTime = now - this.startTime - this.pauseTimeDuration;
    if (elapsedTime > this.allottedTime) {
      this.timeProgressBar.style.width = '100%';
      this.isFinished = true;
    } else {
      newWidth = elapsedTime / this.allottedTime * 100 + '%';
      this.timeProgressBar.style.width = newWidth;
      // pageProgressWidth = document.querySelector('.progress > div').style.width;
      // var pageProgressContainer = document.querySelector('.progress');
      // if (pageProgressWidth > newWidth) {
      //   pageProgressContainer.style.zIndex = 100;
      //   this.timeProgressBar.style.zIndex = 90;
      // } else {
      //   pageProgressContainer.style.zIndex = 90;
      //   this.timeProgressBar.style.zIndex = 100;
      // }
      requestAnimationFrame(this.loop.bind(this));
    }
  },

  /**
   * set color of progress bar
   */
  setBarColor() {
    if (this.isPaused) {
      this.timeProgressBar.style.backgroundColor = this.pausedBarColor;
    } else {
      this.timeProgressBar.style.backgroundColor = this.barColor;
    }
  },

  /**
   * start(reset) timer with new allotted time.
   * @param {number} allottedTime
   * @param {number} [elapsedTime=0]
   */
  start(allottedTime, elapsedTime = 0) {
    this.isFinished = false;
    this.isPaused = false;
    this.allottedTime = allottedTime;
    this.startTime = +new Date() - elapsedTime;
    this.pauseTimeDuration = 0;
    this.setBarColor();
    this.loop();
  },

  reset() {
    this.start(this.allottedTime);
  },

  pause() {
    if (this.isPaused) return;
    this.isPaused = true;
    this.pauseTime = +new Date();
    this.setBarColor();
  },

  resume() {
    if (!this.isPaused) return;

    // add paused time duration
    this.isPaused = false;
    this.pauseTimeDuration += new Date() - this.pauseTime;
    this.pauseTime = null;
    this.setBarColor();
    this.loop();
  }
};


const initGong = function(deck) {
  const config = deck.getConfig();
  const options = config.gongtimer || {}; 
  options.allottedTime = options.allottedTime * 60 * 1000;
  window.addEventListener('ready', () => _gong.handleReady(options));
}


window.gongtimer = window.gongtimer || function() {
  return {
    id: 'gongtimer',
    init: (deck) => {
      initGong(deck);
    },
  }
};