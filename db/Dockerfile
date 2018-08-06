FROM mysql:5.7

ENV MYSQL_ROOT_PASSWORD=mysqlpassword
ENV MYSQL_DATABASE=pleysteven
ENV MYSQL_USER=root

ADD schema.sql /docker-entrypoint-initdb.d

EXPOSE 3306
