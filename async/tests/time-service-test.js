const chai = require('chai');
const expect = chai.expect;
const TimeService = require('./../src/time-service');

const timeServices = [
    new TimeService('slow', 300),
    new TimeService('medium', 200),
    new TimeService('fast', 100)];

let promises;

const podium = result => {
    console.log(result);
    if (result.name === 'fast') {
        expect(result.position).to.equal(1);
    }
    else if (result.name === 'medium') {
        expect(result.position).to.equal(2);
    }
    else if (result.name === 'slow') {
        expect(result.position).to.equal(3);
    }
};

describe('TimeService', () => {
    beforeEach(() => {
        promises = timeServices.map(timeService => timeService.timeMe());
    });

    afterEach(()=>{
        timeServices[0].restart();
    });

    it('timeMe() all', async () => {
        const results = await Promise.all(promises);
        results.map(result => { podium(result); });
    });

    it('timeMe() race', async () => {
        const result = await Promise.race(promises);
        podium(result);
    });
});