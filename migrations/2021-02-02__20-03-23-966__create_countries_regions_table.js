module.exports = {
  /**
   * Run the migration.
   */
  up(dataContext) {
    const sql = `
      CREATE TABLE countries_regions (
        id INT NOT NULL AUTO_INCREMENT,
        name VARCHAR(255) NOT NULL,
        PRIMARY KEY (id)
      );
    `;
    const params = {};

    console.log(sql);

    return dataContext
      .getExecuter()
      .query(sql, params);
  },

  /**
   * Bring down the migration.
   */
  down(dataContext) {
    const sql = `
      DROP TABLE countries_regions;
    `;
    const params = {};

    console.log(sql);

    return dataContext
      .getExecuter()
      .query(sql, params);
  },
};
