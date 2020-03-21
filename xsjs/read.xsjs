$.response.contentType = "application/text";

var body='';
var aCmd = $.request.parameters.get('PRODUCT_ID');
var tx_data_query = 'SELECT \"PRODUCT_ID\", \"PRODUCT_NAME\" FROM \"SALES_TUTORIAL\".\"HanaService.CDSScripts::SalesDDL.Product\" WHERE \"PRODUCT_ID\" = ' + aCmd;
                 
function close(closables) {
	var closable;
	var i;
	for (i = 0; i < closables.length; i++) {
		closable = closables[i];
		if(closable) {
			closable.close();
		}
	}
}

function getTxData(){
	var txlist = [];
	var connection = $.db.getConnection();
	var statement = null;
	var resultSet = null;
	try{
		statement = connection.prepareStatement(tx_data_query);
		resultSet = statement.executeQuery();
		var txitem;

		while (resultSet.next()) {
			txitem = {};
			txitem.PRODUCT_ID = resultSet.getString(1);
			txitem.PRODUCT_NAME = resultSet.getString(2);
			txlist.push(txitem);
		}
	} finally {
		close([resultSet, statement, connection]);
	}
	return txlist;
}

function doGet() {
	try{
		$.response.contentType = "text/plain";
		$.response.setBody(JSON.stringify(getTxData()));
	} catch(err){
		$.response.contentType = "text/plain";
		$.response.setBody("Error while executing query: [" + err.message + "]");
		$.response.returnCode = 200;
	}
}

doGet();