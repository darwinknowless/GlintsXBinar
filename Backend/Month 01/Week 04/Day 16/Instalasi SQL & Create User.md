Instalasi SQL Server :
sudo apt-get install mysql-server
sudo service mysql status

Step - 01
sudo mysql -u root -p

Step - 02
CREATE USER 'darwin'@'localhost' IDENTIFIED WITH mysql_native_password BY '29Desember';

Step - 03
GRANT ALL PRIVILEGES ON *.* TO 'darwin'@'localhost' WITH GRANT OPTION;

Instalasi DBeaver
sudo dpkg -i dbeaver-ce_latest_amd64.deb