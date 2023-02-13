import { A as ActiveRouter } from './active-router-5a916214.js';
import './match-path-02f6df12.js';
import './index-6f8a5f60.js';
import './location-utils-6419c2b3.js';

function injectHistory(Component) {
    ActiveRouter.injectProps(Component, ['history', 'location']);
}
