import './index.css';
import moment from 'moment';

export const display_time = () => {
    const time = moment().format("DD MMM YYYY hh:mm:ss");
    if( global.document.getElementById('time')) {
        global.document.getElementById('time').innerHTML = time;
    }
    setInterval(() => {
        display_time();
    }, 1000);
}
display_time()

export const sum = (a, b) => a + b