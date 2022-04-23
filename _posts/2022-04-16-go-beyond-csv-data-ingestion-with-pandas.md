---
title: 'Go Beyond CSV: Data Ingestion with Pandas'
date: 2022-04-16
author: Mala Deep Upadhaya
layout: post
tags:
 - highlight
 - Datacampdonates 
 - Data Fellowship 2021
 - CodeforNepal
---

**Mala Deep is a Business Intelligence Consultant, and community focused data citizen.**

# Go Beyond CSV: Data Ingestion with Pandas

## Data will not always come to you in CSV

![Pandas Read_CSV() data ingestion in Python](https://miro.medium.com/max/1400/1*YQ1pRMimXT-jX_mYHy8GhQ.png)

Pandas read_csv() method. Image by the author.

Ifyou are a complete beginner or think of yourself as a beginner to data engineering or data science, then you are totally familiar with the Jupyter notebook and the following command.

**#importing dataset**  
   
df = pd.read_csv(“path/filename.extension”)

Then you know how to acquire data in  [CSV (Comma Separated Values)](https://docs.fileformat.com/spreadsheet/csv/). After all, before you can analyze data, you first have to acquire it.

From my experience and most of the tutorials/resources out there, they have always been written with working CSV files. So, when you go to work for a company, and someone gives you data in SQL and/or JSON, then you start to panic and create a self-image of  _“oh, this is going to be tough.”_

But, if you follow this blog, you can easily work with any sort of data in a jupyter notebook.

> **Remember:** Before you can analyze data, you first have to acquire it.

Let’s get started. Data ingestion is the process of pulling data from a variety of sources into your system with the purpose of easily exploring, maintaining, and using it for your own use. Today, you will learn how to transfer data from various formats such as Excel, HTML, SQL, and JSON into a Pandas dataframe object using various Pandas methods (highlighted below as  _read_csv()_).

![Pandas Read_CSV() Streamlined data ingestion in Python](https://miro.medium.com/max/1400/1*jHOtYNOWRoC61pVPeCv5kQ.png)

Pandas read_csv() method. Image by the author.

## Step Involved

To transfer such data format, into a Python DataFrame object, the following steps are taken:

1.  Knowing from where and how you will pull data.

Unless at until you have an idea of where your data is and in what format you will never going to bring it as DataFrame object. After that, if your data is residing on the server, then you will need the path, and URL to the file.

2.  _Use Pandas ‘_**_read_x_**_’ method_

For loading and converting CSV data into a DataFrame object, use  _read_csv()._You need to replace  **x**  with another.

3. Validate the data using a DataFrame object.

Next, you need to verify whether the conversion was smooth.

## For Excel

[Excel sheets (spreadsheets)](https://docs.fileformat.com/spreadsheet/)  are still widely used in a variety of domains. Excel is widely used, from developing budgeting strategies to tracking daily student attendance.

-   method:  _read_excel()_
-   extension/format:  _.xlsx_  or _.xls_

For now, you will be using  [Preliminary Data of National Population and Housing Census 2021, Nepal](https://opendatanepal.com/dataset/preliminary-data-of-national-population-and-housing-census-2021)  dataset from  [OpenDataNepal](https://opendatanepal.com/). I have saved this dataset as n_epalcensusdata.xlsx_

![Snapshot of Excel dataset. Image by author. Preliminary Data of National Population and Housing Census 2021, Nepal dataset from OpenDataNepal. Streamlined data ingestion in Python.](https://miro.medium.com/max/1400/1*p-kP__XLzF26gBFY7fKP8w.png)

Snapshot of the Excel dataset. Image by the author.  [Preliminary Data of National Population and Housing Census 2021, Nepal](https://opendatanepal.com/dataset/preliminary-data-of-national-population-and-housing-census-2021)  dataset from  [OpenDataNepal](https://opendatanepal.com/).

  
**#import the Pandas library  
**import pandas**#import excel data and store as data_excel dataframe (no need to do df always)  
**data_excel = pd.read_excel("n_epalcensusdata.xlsx_")**#view the dataset as pandas dataframe object  
**data_excel.head()

Output:

![Snapshot of Excel dataset. Image by author. Preliminary Data of National Population and Housing Census 2021, Nepal dataset from OpenDataNepal. Streamlined data ingestion in Python.](https://miro.medium.com/max/1400/1*Ef44Ulu8OZ6019iYbywqFw.png)

Output obtained from data_excel.head() as Pandas dataframe. Image by the author.

If you have more than one sheet in your workbook then an additional parameter called  _sheet_name_  is needed.

data_excel = pd.read_excel("nepalcensusdata.xlsx",sheet_name = 0)  
data_excel.head()

![Snapshot of Excel dataset. Image by author. Preliminary Data of National Population and Housing Census 2021, Nepal dataset from OpenDataNepal. Streamlined data ingestion in Python.](https://miro.medium.com/max/1400/1*YyRE7PVarQd8o4LCseiZHw.png)

Pandas read_excel() method. Image by the author.

In our case, we are importing the first sheet, thus it is given 0. The sheet numbers start at 0.

## For HTML

If you are familiar with data scrapping (web scraping), then  [Beautiful Soup](https://pypi.org/project/beautifulsoup4/),  [Selenium](https://www.selenium.dev/), and  [Scrapy](https://scrapy.org/)  are familiar to you. You inspect the HTML structure of the website and pull down the data. If you feel it is sometimes time-consuming or hectic, you can easily do that using the  _read_html()_ method.

-   method: _read_html()_
-   extension:  _.html_

From Wikipedia, we will extract a table from the  **_Money Heist_**  (Spanish:  **_Casa de Papel)_**  series on  [Netflix](https://www.netflix.com/np/Title/80192098)  from the following url:  [https://en.wikipedia.org/wiki/Money_Heist](https://en.wikipedia.org/wiki/Money_Heist)

We will be extracting the awards and nominations tables.

![Snapshot of Money Heist awards and nominations table from Wikipedia. Image by the author. Streamlined Data Ingestion in Python Pandas.](https://miro.medium.com/max/1400/1*ynN7---8I48m2TDIC4gR3A.png)

Snapshot of Money Heist awards and nominations table from  [Wikipedia](https://en.wikipedia.org/wiki/Money_Heist). Image by the author.

**#import the Pandas library**  
import pandas**#import html data and store as data_html dataframe  
**data_html = pd.read_html("[https://en.wikipedia.org/wiki/Money_Heist](https://en.wikipedia.org/wiki/Money_Heist)")[1]**#view the dataset as pandas dataframe object**  
data_html.head()

Output:

![Snapshot of Money Heist awards and nominations table from Wikipedia. Image by the author. Streamlined Data Ingestion in Python Pandas.](https://miro.medium.com/max/1400/1*bmaziSMNp4NzLqzAO3AbVA.png)

Output obtained from data_html.head() about awards and nominations of  [Netflix series Money Heist](https://en.wikipedia.org/wiki/Money_Heist)  as Pandas dataframe. Image by author.

![Streamlined Data Ingestion in Python Pandas. df_read_html() method example.](https://miro.medium.com/max/1400/1*kesAJ6IxbV8DzVEI_-RZ0Q.png)

Pandas read_html() method. Image by the the author.

Here, the initial output from the  _read_html()_  method is a list, and to convert that list into a dataframe, you have to use [0] at the end. So, here you have used [2] because, on the wikipedia page, you wanted to extract the awards and nominations table. Before this table, there were two more tables. One is called “infobox,” and the next is “Episodes” and to extract the infobox, you need to use [0] and for the episode table [1].

![](https://miro.medium.com/max/4540/1*UTOqktqRtaHp5Pe28XiDsw.png)

![](https://miro.medium.com/max/3848/1*CEmq3dL2uaoAst4afDHRzA.png)

Pandas read_html() method for ingesting different tables. Image by the the author.

Remember that using  _read_html()_  is not a simple task.To get the exact table you are looking at, you need to play with your initial result without any frustration.

## For SQL

[Structured Query Language (SQL)](https://en.wikipedia.org/wiki/SQL)  is a standard language for storing, manipulating, and retrieving data in databases. Reading data from a database is a two-step process. You first make a way to connect to a database, then query it with SQL and Pandas. In Python, to connect to a SQL server, you need to have either  [SQLAlchemy connectabl](https://docs.sqlalchemy.org/en/14/core/connections.html)e or  [sqlite3](https://sqlite.org/index.html).

-   method:  _read_sql_query()_
-   extension:  _.db_

Unlike other formats, for SQL you will have to write a few more lines of code. You first make a connection with the database. Then you will use Pandas’s  _read_sql_query()_  function to convert the output to a dataframe and write a SQL query to import all columns from the database.

For now, the demo  _my_aquarium.db_  is created with a single table called “fish” with the following columns:  _name, species, tank_number._

**#import the required libraries  
**import sqlite3  
import pandas**#prepare a connection object and Pass the Database name as a parameter  
**connection = sqlite3.connect("_aquarium.db_")**#use read_sql_query method and Pass SELECT query and connection object as parameter  
**data_Sql = pd.read_sql_query("SELECT * FROM fish", connection)**#****view the dataset as pandas dataframe object  
**print(data_Sql)**#close the connection object  
**connection.close()

Output:

![Output obtained from read_sql_query() with fish table as Pandas dataframe. Image by the author. Data Ingestion in Python Pandas.](https://miro.medium.com/max/1032/1*pcOC534YBtdZOLNwvqViLw.png)

Output obtained from  `read_sql_query`() with fish table as Pandas dataframe. Image by the author.

![Output obtained from read_sql_query() with fish table as Pandas dataframe. Image by the author. Data Ingestion in Python Pandas.](https://miro.medium.com/max/1400/1*lEoW9iw_ZO8M7iVto2bQww.png)

Pandas read_sql_query() method. Image by the author.

Remember to close the database connection every time you open it.

# For JSON

[JavaScript Object Notation (JSON)](https://www.json.org/json-en.html)  is the most common file format preferred by web developers and data engineers. It’s used widely across the internet for almost every single  [API](https://aws.amazon.com/what-is/api/)  that you will access.

-   method:  _read_json()_
-   extension: ._json_

You will use data from  [One Piece Anime from Kaggle](https://www.kaggle.com/datasets/aditya2803/one-piece-anime)  stored as  _openPiece.json_

![Snapshot of One piece anime from Kaggle. Image by author. pd.read_json() example data ingestion in pandas python.](https://miro.medium.com/max/1400/1*EFsNwpfbhHzWRU46L-wOdw.png)

Snapshot of  [One piece anime from Kaggle.](https://www.kaggle.com/datasets/aditya2803/one-piece-anime)  Image by author.

**#import the Pandas library**  
import pandas**#import html data and store as data_json dataframe  
**data_json = pd.read_json("opnePiece.json")**#view the dataset as pandas dataframe object**  
data_json.head()

Output:

![Snapshot of One piece anime from Kaggle. Image by author. pd.read_json() example data ingestion in pandas python.](https://miro.medium.com/max/1400/1*STt3j_EDKSW_4LeGRgv-RA.png)

Output obtained from  `read_json`() as Pandas DataFrame. Image by the author.

![pd.read_json() example data ingestion in pandas python.](https://miro.medium.com/max/1400/1*c_n7XHped9lB_bOBaFcj7A.png)

Pandas read_json() method. Image by the author.

In this manner, you can obtain data in a variety of formats.

> Remember: Acquiring data is just the beginning.

Of course, acquiring data is just the beginning. After this, you need to explore data and play with it before you get deep into a data science project. But if you need ideas on where to go next, go with  [exploratory data analysis for begineers.](https://medium.com/analytics-vidhya/exploratory-data-analysis-for-beginner-7488d587f1ec)

PS: I was able to delve deeper into this because of the  [Data Fellowship](https://codefornepal.org/data-fellowship/) opportunity provided by  [Code For Nepal](https://codefornepal.org/).I’d like to express my gratitude to Code for Nepal for providing a fantastic opportunity to the Nepali community, as well as the DataCamp for believing in Code for Nepal.

_If you have any queries regarding the article or want to work together on your next data engineering or data science project, ping me on_ [_LinkedIn_](https://www.linkedin.com/in/maladeep/)_._

Originally published at  [Mala's Medium blog](https://towardsdatascience.com/go-beyond-csv-data-ingestion-with-pandas-4c1a0dd4f2e2)
