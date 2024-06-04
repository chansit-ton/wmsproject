'use strict';

/**
 * qc service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::qc.qc');
