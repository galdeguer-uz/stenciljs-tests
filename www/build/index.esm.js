import { A as ActiveRouter } from './active-router-3af3f5dd.js';
import './match-path-02f6df12.js';
import './index-1d28747c.js';
import './location-utils-6419c2b3.js';

function injectHistory(Component) {
    ActiveRouter.injectProps(Component, ['history', 'location']);
}
