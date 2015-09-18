import MySQLdb

BASE_DB_CONFIG = {
    'db'          : 'yourdb',
    'port'        : 3306,
    'charset'     : 'utf8',
    'cursorclass' : MySQLdb.cursors.SSCursor
}

LOCAL_CONFIG = dict(BASE_DB_CONFIG, host='127.0.0.1', user='root', passwd='root')

SOME_OTHER_CONFIG = dict(BASE_DB_CONFIG, host='', user='', passwd='')
