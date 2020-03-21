var productId = $.request.parameters.get('PRODUCT_ID');
var productName = $.request.parameters.get('PRODUCT_NAME');

var conn = $.db.getConnection();  
var pstmt = conn.prepareStatement('INSERT INTO \"SALES_TUTORIAL\".\"HanaService.CDSScripts::SalesDDL.Product\" VALUES(?,?)');
pstmt.setString(1,productId);
pstmt.setString(2,productName);

pstmt.execute();  
conn.commit();  

$.response.contentType = 'text/plain';
$.response.setBody('Data Inserted');
$.response.status = 200;