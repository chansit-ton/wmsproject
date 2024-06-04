'use strict';

/**
 * sk-us service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::sk-us.sk-us');
