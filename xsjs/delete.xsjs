var productId = $.request.parameters.get('PRODUCT_ID');
var conn = $.db.getConnection();  
var pstmt = conn.prepareStatement( "DELETE FROM \"SALES_TUTORIAL\".\"HanaService.CDSScripts::SalesDDL.Product\" WHERE PRODUCT_ID=?" );
pstmt.setString(1,productId);

pstmt.execute();  
conn.commit();  

$.response.contentType = 'text/plain';
$.response.setBody('Data Deleted');
$.response.status = 200;