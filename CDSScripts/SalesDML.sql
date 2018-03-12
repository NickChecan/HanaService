-- Insert products data
insert into "SALES_TUTORIAL"."HanaService.CDSScripts::SalesDDL.Product" values(1,'Shirts'); 
insert into "SALES_TUTORIAL"."HanaService.CDSScripts::SalesDDL.Product" values(2,'Jackets');
insert into "SALES_TUTORIAL"."HanaService.CDSScripts::SalesDDL.Product" values(3,'Trousers'); 
insert into "SALES_TUTORIAL"."HanaService.CDSScripts::SalesDDL.Product" values(4,'Coats'); 
insert into "SALES_TUTORIAL"."HanaService.CDSScripts::SalesDDL.Product" values(5,'Purse'); 

-- Insert regions data
insert into "SALES_TUTORIAL"."HanaService.CDSScripts::SalesDDL.Region" values(100,'Americas','North-America'); 
insert into "SALES_TUTORIAL"."HanaService.CDSScripts::SalesDDL.Region" values(200,'Americas','South-America');  
insert into "SALES_TUTORIAL"."HanaService.CDSScripts::SalesDDL.Region" values(300,'Asia','India'); 
insert into "SALES_TUTORIAL"."HanaService.CDSScripts::SalesDDL.Region" values(400,'Asia','Japan'); 
insert into "SALES_TUTORIAL"."HanaService.CDSScripts::SalesDDL.Region" values(500,'Europe','Germany'); 

-- Insert sales data
insert into "SALES_TUTORIAL"."HanaService.CDSScripts::SalesDDL.Sales" values(100,1,100);
insert into "SALES_TUTORIAL"."HanaService.CDSScripts::SalesDDL.Sales" values(100,2,90);
insert into "SALES_TUTORIAL"."HanaService.CDSScripts::SalesDDL.Sales" values(100,5,85);
insert into "SALES_TUTORIAL"."HanaService.CDSScripts::SalesDDL.Sales" values(200,2,80);
insert into "SALES_TUTORIAL"."HanaService.CDSScripts::SalesDDL.Sales" values(200,1,75);
insert into "SALES_TUTORIAL"."HanaService.CDSScripts::SalesDDL.Sales" values(300,3,85);
insert into "SALES_TUTORIAL"."HanaService.CDSScripts::SalesDDL.Sales" values(400,4,75);
insert into "SALES_TUTORIAL"."HanaService.CDSScripts::SalesDDL.Sales" values(500,1,65);
insert into "SALES_TUTORIAL"."HanaService.CDSScripts::SalesDDL.Sales" values(500,2,65);