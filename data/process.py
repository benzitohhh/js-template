#!/usr/bin/env python
"""
Description:
  This script takes in a CSV file, with one patent family per row.
  For each row... We get accessionnum from the 'accessioncolumn'.
                  We then get some extra fields for this patent family from the database.
                  We then output the row with these extra fields.

Usage:
  process --file=<FILE> --accessioncolnum=<col> [-d <delimiter>]

Options:
  -h --help                         Show this screen
  -f --file=<FILE>                  The input file
  -s --accessioncolnum=<colnum>     The column number containing the pfam accession number (i.e. 1, 2, 3 etc..)
  -d --inputdelimiter=<delimiter>   The input delimiter (i.e. "," or "t" for tab) [default: ,]

Examples:
  ./process -f input/coffeePatents.csv -s 2
  ./process -f input/coffeePatents.tsv -s 2 -d t
  ./process -f input/evilCsvWithLineBreaks.csv -s 1
"""

from docopt import docopt
import csv
import sys
import MySQLdb
import MySQLdb.cursors

DB_CONFIG = {
    'host'        : 'sulley.local',
    'port'        : 3306,
    'user'        : 'dev',
    'passwd'      : '',
    'db'          : 'PatentFamilies',
    'charset'     : 'utf8',
    'cursorclass' : MySQLdb.cursors.SSCursor
}

DB_FIELDNAMES = ['priority_date', 'granted_date', 'expiry_date', 'inactive_date']

QUERY = 'SELECT ' + (', ').join(DB_FIELDNAMES) + ' FROM PatentFamily WHERE accession = %s'

def get_db_row(accession, cur):
    cur.execute(QUERY, [accession])
    row = cur.fetchone()
    return row

def get_connection():
    return MySQLdb.connect(**DB_CONFIG)

def get_cursor(conn):
    return conn.cursor(MySQLdb.cursors.SSDictCursor)

def main():
    params = docopt(__doc__)
    accessioncolnum = int(params['--accessioncolnum']) - 1
    inputdelimiter = params['--inputdelimiter']
    if inputdelimiter == "t":
        inputdelimiter = '\t'

    # init db
    conn = get_connection()
        
    # read in csv
    with open(params['--file'], 'rU') as csvfile:
        reader = csv.DictReader(csvfile, delimiter=inputdelimiter) # gets field_names from first line of CSV
        input_fieldnames = reader.fieldnames
        output_fieldnames = input_fieldnames + DB_FIELDNAMES
        accessioncol_name = input_fieldnames[accessioncolnum]
        writer = csv.DictWriter(sys.stdout, output_fieldnames, dialect='excel')

        # output csv header
        writer.writeheader()

        for row in reader:
            accession = row[accessioncol_name]

            # get extra fields from db
            cur = get_cursor(conn)
            db_fields = get_db_row(accession, cur)
            row.update(db_fields)

            # Output csv line
            writer.writerow(row)

    # Close db
    cur.close()
    conn.close()
    
if __name__ == '__main__':
    main()
