let _position = 0;

const delay = ms => { return new Promise(res => setTimeout(res, ms)); }

module.exports = TimeService;

function TimeService(name, ms) {
    this.name = name;
    this.ms = ms;
}

TimeService.prototype.timeMe = async function () {
    const startTime = new Date();
    await delay(this.ms);
    const endTime = new Date();
    ++_position;
    return {
        name: this.name,
        position: _position,
        startTime: startTime,
        endTime: endTime
    };
}
TimeService.prototype.restart = function () {
    _position = 0;
}