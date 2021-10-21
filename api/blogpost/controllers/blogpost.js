const { sanitizeEntity } = require("strapi-utils");
const _ = require("lodash");

module.exports = {
  /**
   * Retrieve records.
   *
   * @return {Array}
   */

  async find(ctx) {
    console.log("I AM THE CONTROLLER");
    let entities;
    if (ctx.query._q) {
      entities = await strapi.services.blogpost.search(ctx.query);
    } else {
      entities = await strapi.services.blogpost.find(ctx.query);
    }

    let data = entities.map((entity) => {
      let newEntity = _.omit(
        entity,
        "author.email",
        "author.provider",
        "author.blocked",
        "author.confirmed",
        "created_at",
        "updated_at"
      );
      return sanitizeEntity(newEntity, { model: strapi.models.blogpost });
    });

    return data;
  },
};
