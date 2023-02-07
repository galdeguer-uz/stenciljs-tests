import { A as ActiveRouter } from './active-router-070a084f.js';
import './match-path-02f6df12.js';
import './index-740e01dd.js';
import './location-utils-6419c2b3.js';

function injectHistory(Component) {
    ActiveRouter.injectProps(Component, ['history', 'location']);
}
