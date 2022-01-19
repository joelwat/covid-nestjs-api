module.exports = {
  /**
   * Run the migration.
   */
  up(dataContext) {
    const sql = `
      CREATE TABLE days (
        id INT NOT NULL AUTO_INCREMENT,
        last_update DATEITME NOT NULL,
        lat DECIMAL(20, 15),
        long DECIMAL(20, 15),
        confirmed INT NOT NULL,
        deaths INT NOT NULL,
        recovered INT,
        active DECIMAL(),
        fips DECIMAL(),
        incident_rate DECIMAL(),
        total_test_results DECIMAL(),
        people_hospitalized DECIMAL(),
        case_fatality_ratio DECIMAL(),
        uid DECIMAL() NOT NULL,
        iso3 VARCHAR(255) NOT NULL,
        testing_rate DECIMAL(),
        hospitalization_rate DECIMAL(),

        PRIMARY KEY (id),
      )
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
      DROP TABLE days;
    `;
    const params = {};

    console.log(sql);

    return dataContext
      .getExecuter()
      .query(sql, params);
  },
};
