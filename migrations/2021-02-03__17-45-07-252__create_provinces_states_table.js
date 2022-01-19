module.exports = {
  /**
   * Run the migration.
   */
  up(dataContext) {
    const sql = `
      CREATE TABLE provinces_states (
        id INT NOT NULL AUTO_INCREMENT,
        name VARCHAR(255) NOT NULL,
        country_region_id INT NOT NULL,
        PRIMARY KEY (id),

        FOREIGN KEY (country_region_id)
          REFERENCES countries(id)
          ON UPDATE CASCADE
          ON DELETE CASCADE
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
      DROP TABLE provinces_states;
    `;
    const params = {};

    console.log(sql);

    return dataContext
      .getExecuter()
      .query(sql, params);
  },
};
