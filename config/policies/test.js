"use strict";

/**
 * `test` policy.
 */

module.exports = async (ctx, next) => {
  console.log("BEFORE CONTROLLER");

  console.log(ctx.state);

  await next();

  console.log(ctx.response.body);

  console.log("AFTER CONTROLLER");
};
