# Практическое задание к первому этапу

## Развертывание проекта

1. Создать или добавить папку с проектом в свой htdocs. В C:\Users\%User% создать папку htdocs, добавить туда папку с проектом.

2. Добавить url соответствующий названию папки с проектом в hosts файл.

- пройти по пути C:\Windows\System32\drivers\etc
- открыть файл hosts
- в конец файла добавить 127.0.0.1 %название папки c проектом% (либо добавить название папки c проектом к существующим хостам через пробел). Пример: 127.0.0.1 practice.devel

3. Добавить хост в Apache.

- пройти по пути до папки с установленным Apache. Пример: C:\usr\apache\conf\extra
- открыть файл httpd-vhosts.conf
- в конец файла добавить:

<VirtualHost \*:80>
ServerAdmin webmaster@dummy-host2.example.com
DocumentRoot "c:/Users/%User%/htdocs/practice.devel"
ServerName practice.devel
ErrorLog "logs/practice.devel-error.log"
CustomLog "logs/practice.devel-access.log" common
</VirtualHost>

- если название папки отличается от текущего, то везде где practice.devel заменить на ваше название папки с проектом

4. Перезапустить Apache

- запустить командную строку от имени администратора
- ввести команду httpd -t для проверки правильности внесеных изменений в файл httpd-vhosts.conf
- ввести команду httpd -k stop для остановки Apache
- ввести команду httpd -k start для запуска Apache
- в случае неисправностей попробовать переустановить Apache с помощью последовательного ввода команд: httpd -k stop, httpd -k uninstall, httpd -k install. Затем ввести команду httpd -k start для запуска Apache

5. Подключение к базе данных в файле index.php. Добавить данные для авторизации в вашем sql в переменные $serverName, $userName ,$password;
6. Импортировать базу данных в sql выполнив файл database.sql
7. Для проверки почты администратора авторизироваться на почту mail.ru под данными: email: practiceadm@mail.ru, пароль: 123456adM;
