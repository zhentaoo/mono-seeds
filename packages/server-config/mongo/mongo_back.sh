while [[ true ]]; do
	DUMP='/usr/local/mongodb/bin/mongodump'
	OUT_DIR='/data/back'
	DATE=`date +%Y_%m_%d`
	DB_USER=leo
	DB_PASS=123456
	DAYS=7

	echo $OUT_DIR
	cd $OUT_DIR
	mkdir -p $OUT_DIR/$DATE
	$DUMP -o $OUT_DIR/$DATE
	find $OUT_DIR/-mtime + $DAYS -delete

	sleep 86400
done
