CREATE USER 'covid-api-user'@'%' IDENTIFIED WITH mysql_native_password BY SECRET_PASSWORD; -- Replace with a real password.
GRANT SELECT, INSERT, UPDATE, DELETE ON covid_api.* TO 'covid-api-user'@'%';
FLUSH PRIVILEGES;
