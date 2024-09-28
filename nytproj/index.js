
import './main.css';
import './mq.css';
import { getpopular } from './popular.js';
import {getTopNews} from './nyt_.js';
import {gethp} from './homepage.js';
import { getScience } from './science.js';


(async () => {
    await getpopular();
    await getTopNews();
    await gethp();
    await getScience();
   
})();