class Timer {
    constructor(timeClockClass) {
        this.hours = 0;
        this.minutes = 0;
        this.seconds = 0;
        this.timeClock = $(`.${timeClockClass}`);
        this.t;
        this.stopClass = false;
    }

    addTime(timer) {
        this.seconds = this.seconds || 0;
        this.minutes = this.minutes || 0;
        this.hours = this.hours || 0;
        this.seconds++;
        if (this.seconds >= 60) {
            this.seconds = 0;
            this.minutes++;
            if (this.minutes >= 60) {
                this.minutes = 0;
                this.hours++;
            }
        }
        timer.html((this.hours ? (this.hours > 9 ? this.hours : "0" + this.hours) : "00") + ":" + (this.minutes ? (this.minutes > 9 ? this.minutes : "0" + this.minutes) : "00") + ":" + (this.seconds > 9 ? this.seconds : "0" + this.seconds));
    }

    setTime(time) {
        this.timeClock.html(time)
    }

    start() {
        var tmr = this.timeClock;
        tmr.html("00:00:00");
        this.t = setInterval(function () {
            this.addTime(tmr)
        }.bind(this), 1000);
    }

    reset() {
        this.seconds = 0;
        this.minutes = 0;
        this.hours = 0;
        this.timeClock.html("00:00:00");
    }

    stop() {
        clearInterval(this.t);
    }

    continue() {
        this.t = setInterval(function () {
            this.addTime(this.timeClock)
        }.bind(this), 1000);
    }

    clear() {
        clearInterval(this.t);
        this.timeClock.html("");
        this.seconds = 0;
        this.minutes = 0;
        this.hours = 0;
    }
}
