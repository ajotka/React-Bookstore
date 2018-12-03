import $ from 'jquery';

import SelectLanguage from './components/select-language';
import Test from './components/test';

$(document).ready(() => {
    window.testComponent = Test;
    const selectLanguage = new SelectLanguage($('.js-select-language'));
    selectLanguage.init();
});
