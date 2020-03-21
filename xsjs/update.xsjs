var productId = $.request.parameters.get('PRODUCT_ID');
var productName = $.request.parameters.get('PRODUCT_NAME');

var conn = $.db.getConnection();  
var pstmt = conn.prepareStatement( "UPDATE \"SALES_TUTORIAL\".\"HanaService.CDSScripts::SalesDDL.Product\" SET \"PRODUCT_NAME\"=? WHERE \"PRODUCT_ID\"=?" );

pstmt.setString(1, productId);  
pstmt.setString(2, productName); 

pstmt.execute();  
conn.commit();  

$.response.contentType = 'text/plain';
$.response.setBody('Data Updated');
$.response.status = 200;   