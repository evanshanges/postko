/**
 * Created by Evan on 2018-01-18.
 */
'use strict';

var appConfig = window.appConfig || {};

window.appConfig = appConfig;

appConfig.apiUrl = "http://localhost:8000/api";

/******************************************************************************
 * Configurations : Components and Dependencies
 ******************************************************************************/
'use strict';

var $appId = 'postko';

var $dependencies = [
    'ui.router'
];

var $components = [
    'postko.login',
    'postko.signup',
    'postko.user',
    // 'postko.user.account',
    'postko.user.flight',
    // 'postko.user.'
    // 'mrbaffo.user',
    // 'mrbaffo.user.account',
    // 'mrbaffo.user.order',
    // 'mrbaffo.user.referral'
    // // 'postko.layout',
    // 'postko.home',
    // 'postko.flyer',
    // 'postko.flyerHome',
    // 'postko.shipper',
    // // 'postko.corporate',
    // 'postko.about',
    // //'postko.support',
    // 'postko.faq'
    //'postko.quote'
    //'yixue.auth',
    //'yixue.start_here'
];

$dependencies = $dependencies.concat($components);