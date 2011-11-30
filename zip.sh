# create a zip file from the local resources

if test $# != 1; then
    echo "-----------------------------------"
    echo "ERROR : Need to specify a version"
    echo "-----------------------------------"    
    echo "Usage : ./zip.sh [version]"
    echo "Example : ./zip.sh 1.1"
    echo "-----------------------------------"    
    exit 1;
fi

# Initialization
ZIP_NAME="brender-fixed-plugin-v$1.zip"
SVN_URL="http://subversion.backelite.com/backelite/backelite/bkrender-plugins/fixed-header/trunk/"
TEMP_FOLDER="TEMP"

rm -fr $ZIP_NAME
svn export $SVN_URL $TEMP_FOLDER
mkdir -p $TEMP_FOLDER
cd $TEMP_FOLDER
find . | grep -v '.preprocessed' | grep -v 'zip.sh' | grep -v 'nbproject' | zip $ZIP_NAME -@
mv $ZIP_NAME ..
cd ..
rm -fr $TEMP_FOLDER
