class Settings {
    constructor() {

        if (Settings.instance instanceof Settings) {
            return Settings.instance;
        }

        this.settingsObject = {
            version: '1.0.0',
            defaultLanguage: 'fa',
            database: 'mongo://',
            redis: 'redis://'
        }

        Object.freeze(this.settingsObject);
        Object.freeze(this);
        Settings.instance = this;
    }
    get(key) {
        return this.settingsObject[key];
    }
}

const s = new Settings();
const s2 = new Settings();

console.log(s.get('version'));
console.log(s2.get('version'));
