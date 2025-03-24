class AlarmClock {
	constructor() {
		this.alarmCollection = [];
		this.intervalId = null;
	}
	addClock(time, callback) {
		if (!time || !callback) {
			throw new Error('Отсутствуют обязательные аргументы');
		} else if (this.alarmCollection.some((searchTime) => searchTime.time == time)) {
			console.warn('Уже присутствует звонок на это же время');
		}
		this.alarmCollection.push({
			callback,
			time,
			canCall: true
		});

	}
	removeClock(time) {
		this.alarmCollection = this.alarmCollection.filter(del => del.time !== time);
	}

	getCurrentFormattedTime() {
		return new Date().toLocaleTimeString().slice(0, -3);
	}

	start() {
		if (this.intervalId) {
		  return
		}
		this.intervalId = setInterval( () => {
			this.alarmCollection.forEach(num => {
				if (num.time === this.getCurrentFormattedTime() && num.canCall) {
					num.canCall = false;
					num.callback();
				}
			})
		}, 1000)
	}

	stop() {
		clearInterval(this.intervalId);
		this.intervalId = null;
	  }

	resetAllCalls() {
		this.alarmCollection.forEach(callCancel => callCancel.canCall = true);
	}

	clearAlarms() {
		this.stop();
		this.alarmCollection = [];
	}
}