
Hana Service
===================

The purpose of this project is to implement a simple SAP Hana solution with some basic components to serve and demonstrate the integration between a common third party application to a SAP Hana database.

> **Note:**
> 
> - A SAP Cloud Platform account will be required in order to maintain a Hana Trial instance for your project.
> - This project was meant to run on a HANA MDC instance from the Neo environment of the SAP Cloud Platform trial.
> - The implementation of this application was made to be the first step for the [HanaToPython](https://github.com/NickChecan/HanaToPython-Application) and/or [HanaToJava](https://github.com/NickChecan/HanaToJava-Application) project deployment.

----------

Project Components
-------------

This project consist in the creation of three tables, three common views, one database schema and a calculation view.

```
HanaService
	├── Analytics
	│    └── CV_SALES_SUMMARY.calculationview
	├── CDSScripts
	│    ├── SALES_TUTORIAL.hdbschema
	│    ├── SalesDDL.hdbdd
	│    └── SalesDML.sql
	├── SQLScripts
	│    ├── SalesDDL.sql
	│    └── SalesDML.sql
	├── Services
	│    └── api.xsodata
	├── xsjs
	│    ├── delete.xsjs
	│    ├── example.xsjs
	│    ├── insert.xsjs
	│    ├── read.xsjs
	│    └── update.xsjs
	├── SalesData.calculationview
	└── README.md
```

All the tables creation and data preparation will be performed within the scripts at the **CDSScripts** folder.

It is important to notice that the files available at the **SQLScripts** folder is for merely demonstration. Although, you can use these scripts to prepare and study the development environment behavior or other implementation scenarios. 

----------

Getting Started
-------------

Before importing this project to your Hana workspace, it is necessary to make sure the prerequisites steps are properly done in your development environment.
The installation procedure described in this documentation will assume you've already properly connected your eclipse IDE to your Hana Trial instance.

#### <i class="icon-layers"></i> Prerequisites

 - Hana Trial Instance </br>
The Hana trial instance should be created through the [SAP Cloud Platform cockpit](https://account.hanatrial.ondemand.com/) using the **HANA MDC**<sup id="a1">[1](#f1)</sup> database system in the *Database & Schemas* area.

 - SAP Cloud SDK </br>
The SAP Cloud Platform **Neo Environment SDK**<sup id="a2">[2](#f2)</sup> will also be necessary to open a **database tunnel**<sup id="a3">[3](#f3)</sup>. 
This tool can be downloaded from the [SAP Development tools](https://tools.hana.ondemand.com/) at the *Cloud* tab.

 - Eclipse plugins </br>
To install the Hana Eclipse tools, you can follow the simple procedure described [here](https://tools.hana.ondemand.com/#hanatools) for your current eclipse installation.


> **Note:**
> 
> - This project uses the *Java Web Tomcat 8 3.48.12* SDK.
> - Remember to make sure the *tools* folder of the downloaded content is properly registered in the *path* of the system environment variables.


#### <i class="icon-download"></i> Installing

The steps bellow will guide you through the project installation. The same will automatically create the database schema, his tables and views through the **CDS**<sup id="a4">[4](#f4)</sup> script activation.

 1. Clone the project to your local repository workspace;
 2. Refresh your *Repositories* tree and make sure the cloned project is available in the selected workspace;
 3. Right click in the project package and select the *"Check Out and Import Project"* from the context menu. This step will make the same available at the *Project Explorer* for further enhancements;
 4. Active the imported project;

After the activation process, the schema objects will only be visible in the catalog to the \_SYS\_REPO user. To enable other users, for example the schema owner, to view the newly created schema and the objects it contains, you must grant the user the required SELECT and INSERT privilege for the appropriate schema object through the following command:
```
CALL _SYS_REPO.GRANT_SCHEMA_PRIVILEGE_ON_ACTIVATED_CONTENT('SELECT, INSERT','SALES_TUTORIAL','<User>');
```
Although these steps will create and prepare the test environment, the scripts activation mentioned above will not automatically load content in the created tables.
To properly insert data in these tables, you can execute the code available at the *CDSScripts/SalesDML.sql* script or prepare your own data for test purpose.


----------

Deployment
-------------

With all the database components properly created and prepared, the database tunnel can be set to enable other SAP or third party applications to access these information's.
To make this possible you will have to use the following command at your terminal:

```
neo open-db-tunnel -i <Database/Schema ID> -a <Subaccount Name> -h hanatrial.ondemand.com -u <SAP User>
```

As soon as the command is processed, the user password will be requested.
If the tunnel is opened successfully, the terminal will display the Host name, Database type, JDBC Url and the instance number.
These information's will be useful to properly connect the mentioned applications to this Hana Service.

> **Tips:**
> 
> - Always remember to make sure the created instance is up and running through the Cloud Platform Cockpit before execute commands or test any application directly linked to this Hana Service.
> - You can find more information about the *neo open-db-tunnel* command [here](https://help.sap.com/doc/65de2977205c403bbc107264b8eccf4b/Cloud/en-US/9e3f90f2ead74229ac5c8848ed5bf292.html).


Acknowledgments
-------------
The database diagram used in this service was provided by the [SAP Hana tutorial](http://saphanatutorial.com/) web site. The learning materials there are simply AWESOME and totally worth attention.

The [SAP blogs](https://blogs.sap.com/) has proven to be a great reliable source of information for developers to study and be up to date with new SAP technologies and products, and also helped me a lot with the purpose of this project.

You can find more information about CDS entities and their management [here](https://help.sap.com/viewer/52715f71adba4aaeb480d946c742d1f6/2.0.02/en-US/e8c150fde4614804831c63a67224ffa8.html).

<b id="f1">1</b>: SAP HANA supports multiple isolated databases in a single SAP HANA system. These are referred to as multitenant database containers. More information [here](https://help.sap.com/viewer/6b94445c94ae495c83a19646e7c3fd56/2.0.00/en-US/623afd167e6b48bf956ebb7f2142f058.html). [↩](#a1)

<b id="f2">2</b>: The Neo environment is an SAP Cloud Platform proven development environment that lets you develop HTML5-based, SAP HANA XS, and complex Java applications. More information [here](https://help.sap.com/viewer/65de2977205c403bbc107264b8eccf4b/Cloud/en-US/1a8ee4e7b27d4293af175f021db8ad9c.html). [↩](#a2)

<b id="f3">3</b>: A database tunnel allows you to connect to a remote database instance through a secure connection. More information [here](https://help.hana.ondemand.com/help/6930850a8f9a40489c01ed1aa381946d.html). [↩](#a3)

<b id="f4">4</b>: Core Data Services are scripts to build design-time data-persistence models in SAP HANA Extended Application Services. More information [here](https://help.sap.com/viewer/09b6623836854766b682356393c6c416/2.0.01/en-US). [↩](#a4)
