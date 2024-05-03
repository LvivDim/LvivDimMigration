module.exports = {
  async up(db) {
    const properties = await db.collection('properties').find({}).toArray();

    const operations = properties
      .filter(property => Boolean(property.description))
      .map(async property => {
        return await db.collection('properties').updateOne(
          { _id: property._id },
          {
            $set: {
              description: [property.description]
            }
          }
        );
      });

    return await Promise.all(operations);
  },

  async down(db) {
    const properties = await db.collection('properties').find({}).toArray();

    const operations = properties
      .filter(property => Boolean(property.description?.length))
      .map(async property => {
        return await db.collection('properties').updateOne(
          { _id: property._id },
          {
            $set: {
              description: property.description.join(' ')
            }
          }
        );
      });

    return await Promise.all(operations);
  }
};
