import * as Serial from 'serialport';
import * as express from 'express';
import * as reactView from 'express-react-views';

import {Config} from './src/Config';
import {PinList} from './src/PinList';

import {parseSerial} from './src/parseSerial';

new Config({
    port: '/dev/tty.usbserial-14220',
    baudRate: 115200,
    stringDelimiter: '\r\n',
    wordDelimiter: ':',
    maxList: 100
});

const pinList = new PinList();

let cycle = 0;

const device = new Serial.parsers.Readline({ delimiter: Config.stringDelimiter });
device.on('data', (res: string) => {
    parseSerial(res, pinList, Config.wordDelimiter);
    cycle++;
});

const serialPort = new Serial(Config.port, {baudRate: Config.baudRate});
serialPort.pipe(device);
serialPort.on('open', () => {
    console.log(`\x1b[43m\x1b[30m ARDUINO ON ${Config.port}\x1b[0m`);
    app.listen(3000, () => {
        console.log('✅  Express on http://localhost:3000');
    });
});

const app = express();
app.use('/public',express.static('public'));
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', reactView.createEngine());
app.get('/', (req,res) => {
    res.render('index', {
        port: Config.port,
        list: pinList.get(),
        createdAt: pinList.createdAt
    });
});

