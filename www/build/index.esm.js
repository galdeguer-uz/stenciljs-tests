import { A as ActiveRouter } from './active-router-6725950c.js';
import './match-path-02f6df12.js';
import './index-b0ee2f68.js';
import './location-utils-6419c2b3.js';

function injectHistory(Component) {
    ActiveRouter.injectProps(Component, ['history', 'location']);
}
