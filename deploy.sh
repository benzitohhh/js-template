HOST="wordpress.prod.aistemos.com"
BASE_DIR="/var/www/html/tmp"
echo "HOST: $HOST"
echo "BASE_DIR: $BASE_DIR"
echo

# Get dest dir from commandline
if [ -z "$1" ]
    then
        echo "Please supply a destination subdirectory"
        echo "Usage:   ./deploy.sh <destFolder>"
        echo "Example: ./deploy.sh 4"
    exit 1
fi
TARGET=$BASE_DIR/$1
SCP_TARGET=$HOST:$TARGET

# Delete target dir
echo "rm -rf $HOST:$TARGET ..."
ssh $HOST "rm -rf $TARGET;"

# Mkdir target dir
echo "mkdir $HOST:$TARGET ..."
ssh $HOST "mkdir $TARGET;"

# Transfer files
echo "scp files to $SCP_TARGET ..."
scp -r public/* $SCP_TARGET/ ;

