---
title: 'Workflow of Data Engineering Project on AWS'
date: 2023-03-27
author: Ravi Pandit
layout: post
tags:
 - CodeforNepal
 - Data Engineering
 - Python
 - AWS
 - Datacamp Donates
---

**1.    Architecture Diagram:**\
[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj7rG2FZiu2BqLzK84RX6W9_dAWvsOLMSnKugwEEW6CpUoJn9EVprFnNj9kT-ksfMb5VOiTWhD9o529nfaLnuES-zxH1sl8okOQvnby0ctkNT-TdDp1NNVMeMBNaR4GWQoKF9N2xBNQy7DPigZtbGLMHpX0NAU5tN8ordHgLpZuuSsp-82nlOdbl80/w640-h276/1.jpg)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj7rG2FZiu2BqLzK84RX6W9_dAWvsOLMSnKugwEEW6CpUoJn9EVprFnNj9kT-ksfMb5VOiTWhD9o529nfaLnuES-zxH1sl8okOQvnby0ctkNT-TdDp1NNVMeMBNaR4GWQoKF9N2xBNQy7DPigZtbGLMHpX0NAU5tN8ordHgLpZuuSsp-82nlOdbl80/s1234/1.jpg)


Figure 1: Architecture Diagram

-   **Amazon S3:** Amazon S3 (Simple Storage Service) is a highly scalable and secure cloud storage service provided by Amazon Web Services (AWS). It allows users to store and retrieve any amount of data from anywhere on the web, with high durability, availability, and performance. S3 provides a simple web interface, as well as an API, to manage and access the data stored in it. Users can create buckets (i.e., containers for objects) in S3 and upload files (i.e., objects) to them.
-   **Crawler (to extract all the schema & information)**: AWS provides a managed service called AWS Glue Crawler, which is a fully-managed data crawler that automatically discovers, categorizes, and registers metadata about your data assets in AWS.
-   **Amazon Athena**: Amazon Athena is an interactive query service provided by AWS that allows users to analyze data in Amazon S3 using standard SQL queries. It is a serverless service, which means that users do not need to manage any infrastructure or perform any database administration tasks. Athena automatically scales query processing based on the amount of data being queried, so users can run ad-hoc queries on large datasets with ease.
-   **AWS Glue**: AWS Glue is a fully-managed extract, transform, and load (ETL) service provided by AWS that allows users to move data between different data stores and data lakes. It provides a serverless environment for running ETL jobs, which means that users do not need to manage any infrastructure or perform any database administration tasks.
-   **Amazon Redshift**: Amazon Redshift is a fully-managed cloud data warehouse provided by AWS that allows users to store and analyze large amounts of structured and semi-structured data. It is designed to be fast, scalable, and cost-effective, making it a popular choice for big data analytics.
-   **VPC**: VPCs provide a flexible and secure way for users to launch and run their AWS resources in a private and isolated network environment.

**2\.    Dataset:**

        For this project, covid-19 dataset will be used, provided by the aws. Structure of dataset and information related to dataset can be studied through this blog:

[Dataset Link](https://aws.amazon.com/blogs/big-data/a-public-data-lake-for-analysis-of-covid-19-data/)

Only selective datasets are downloaded as shown in the figure:

| 
--- | ---
![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjNG439lKyQf8oluYDSzRBAME7adPhtrgqAnsio0-EemVSLNuSUtxgUFKr2UFC3goi0gnIPjgLgAs1UnHjAvX-uX8jXtvxQfj7qv4vn3hlw_j7RhYNEG2Xl1zRpuDG4hKoY-TEJbFFbBSeFdvC46FklwOO3cWlHXzTUbjPQi34h0H9_1p7Z02qZhsc/w309-h556/2.png) | ![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg4qVgvtcENO0KWsBJhQELNXxTQcaEnBMosHY4BKiHy9KfumidWHhi4NFqdlgQgFNrT-LCfqnTqX1C3WDfSzN9sLhW1vuEIoH8QVkYjYifGgHCNJEmFiIFdBCVZJLVBty43Sx20XdXExuXMCJ0FqD1PjAjbsM01N3ifCzq-aufHIfSMQ62XCbNuNVo/w230-h579/3.jpg)


Figure 2:  Dataset

**3\.    Storing downloaded Dataset in Amazon S3:**

[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjef8BozAhMiYqiElk7N_n6iCjckwVlVjcZJ0JIIMCkHck1fTWD8b2_10O1midmyl1JZZyzwgjcSTOEAmjM0F_FFJ8_vOHYORrlE1FTxQIAWSyUswtHyIcXKJ_LYwHb10GFn1cOdh1ldg7NZ98L47-Hz3LzolW5F_OfkBKXmkT17xH8L8mMiRCxoyM/w640-h388/4.png)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjef8BozAhMiYqiElk7N_n6iCjckwVlVjcZJ0JIIMCkHck1fTWD8b2_10O1midmyl1JZZyzwgjcSTOEAmjM0F_FFJ8_vOHYORrlE1FTxQIAWSyUswtHyIcXKJ_LYwHb10GFn1cOdh1ldg7NZ98L47-Hz3LzolW5F_OfkBKXmkT17xH8L8mMiRCxoyM/s1360/4.png)

Figure 3: Storing the downloaded Dataset in Amazon S3

**4\.    Analyzing the data (Schema Crawling and Table Building):**

**Crawler** is created for each and every csv data files where crawler crawls on all the dataset stored in S3 and extract all the schema and information.

[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi1xUggBEMXOy0qH_Nt_lgyQag0K--QnISr8IBjz9nFAO0vmRbWbM4W70aPPbyh75sWytD0tOJzWCwI8m7WFIL8u5PSpR2v268tY92VcFjjN6nZWmzTydddFNugg30rQz8VpYyU3ERFmzMAr5fJa8me6v4MbgYtB2NvKBXuCpmJtgU98E7pHC0WzjM/w640-h338/5.png)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi1xUggBEMXOy0qH_Nt_lgyQag0K--QnISr8IBjz9nFAO0vmRbWbM4W70aPPbyh75sWytD0tOJzWCwI8m7WFIL8u5PSpR2v268tY92VcFjjN6nZWmzTydddFNugg30rQz8VpYyU3ERFmzMAr5fJa8me6v4MbgYtB2NvKBXuCpmJtgU98E7pHC0WzjM/s1444/5.png)

Figure 4 : Crawler

After completion of crawler task, **Amazon Athena** is used to analyze each and every data (studying the datasets) extracted by crawler.

 [![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiEOCET9_k8tPvmhNUclSqr-5cBrPKsVBPjgMnSAGRFb77a07T8lO-St029NcHjmmzc3iKokySFEbWR2ouX88J-zX61_UIfXd7l_J4ogdcLGbL0KmQD-YvO-EZAwMR2LC4gYQBuDu7kSft4PzZP5UtsuUm94i1X8mPfDFMutH1uKI3ajcnLRBiv8nE/w637-h640/6.png)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiEOCET9_k8tPvmhNUclSqr-5cBrPKsVBPjgMnSAGRFb77a07T8lO-St029NcHjmmzc3iKokySFEbWR2ouX88J-zX61_UIfXd7l_J4ogdcLGbL0KmQD-YvO-EZAwMR2LC4gYQBuDu7kSft4PzZP5UtsuUm94i1X8mPfDFMutH1uKI3ajcnLRBiv8nE/s1162/6.png)

Figure 5: Amazon Athena

** 5.    Building Data Models:**

               After analyzing the data, to understand the overall flow of the Data, Data Model is created.

Here, fips is primary key in most of the table which can also be studied from the data source of the dataset.

[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhqQlM948IHKEV3SFo9Dd_CRU4BmZu6-4HTQkHPYbQn09U0Zqj7Ll_99-FV8PwpBqzMR5sqQqUFyife35H0fZOtPRLzZsVal8MWHcxJrwLbTFAAELm4-mYAS2CV1DhDU6bEUxJbvddtQtkVHfzI_KDGSBc9E47Z_yRI4Xm4dbZC_IdsI_p73ilgb94/s16000/7.png)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhqQlM948IHKEV3SFo9Dd_CRU4BmZu6-4HTQkHPYbQn09U0Zqj7Ll_99-FV8PwpBqzMR5sqQqUFyife35H0fZOtPRLzZsVal8MWHcxJrwLbTFAAELm4-mYAS2CV1DhDU6bEUxJbvddtQtkVHfzI_KDGSBc9E47Z_yRI4Xm4dbZC_IdsI_p73ilgb94/s1781/7.png)

6\.    Schema:

               Here, the fact table is factCovid and there are 3 different dimension table (i.e dimHospital, dimRegion, dimDate). Most of the information is redundant across most of the table in above Data model, thus schema is created because it is more simpler to analyze data in data warehouse when there is less table.

[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjY6-cah63gtHLIAWFveNWQjIZCpIyC5rBomSpFjB8if9Sid5auAVUlbW6sDVd_YZW29Yi4xvihk_a_SrEEpNv9d345p21TrByqQpDr40nQYPPgGTwI4SOmYgiSQvsba5xL6mEEOSNh60dtx7RxG8Fry6ZAYdH0GL0rQnCPlNBblgzCOZRFDi_ZJcI/w640-h474/8.png)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjY6-cah63gtHLIAWFveNWQjIZCpIyC5rBomSpFjB8if9Sid5auAVUlbW6sDVd_YZW29Yi4xvihk_a_SrEEpNv9d345p21TrByqQpDr40nQYPPgGTwI4SOmYgiSQvsba5xL6mEEOSNh60dtx7RxG8Fry6ZAYdH0GL0rQnCPlNBblgzCOZRFDi_ZJcI/s738/8.png)

**7\.    Use of Jupyter Notebook:**

-   **Libraries:**

import boto3

import pandas as pd

from io import StringIO

-   **Access Case:**

[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiJEfIZVWd_-ztAVI9Pxg5Sz1ihM0XZoI9fU828A5vOwzkRp9yBPk9X54A9Po0-Za1-3zDjIjE9ZDfG2ZB0VXKl-nWUsvcx6LR2ZYo8mkzR_1je3s2N96c3NKJWxbC-17kSyJnYgpQhF4wX9EE1opuV7ubKhhKF3xoUA6DiEUjKTrtStDX54ALQgzc/w400-h145/9.png)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiJEfIZVWd_-ztAVI9Pxg5Sz1ihM0XZoI9fU828A5vOwzkRp9yBPk9X54A9Po0-Za1-3zDjIjE9ZDfG2ZB0VXKl-nWUsvcx6LR2ZYo8mkzR_1je3s2N96c3NKJWxbC-17kSyJnYgpQhF4wX9EE1opuV7ubKhhKF3xoUA6DiEUjKTrtStDX54ALQgzc/s506/9.png)

-   **Connect to Athena and Query Data**

[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiNbCgBR1nQdKyYopL1h3q4MgwWLjNtNL5t2hFWBAJeLP6UBIp61-8pcKfRDNnPmRzH-UrrbzBioypFJd_pl9MPKbVQTV5yqecvIXJbHrW6BRZg0QuofPzcZ5vG6gOytx6_RpD_ZTJCvIQZerb51LSL52hr4rsR3PMyqWu4MQEc6WAgNG09dnSiRtA/w400-h101/10.png)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiNbCgBR1nQdKyYopL1h3q4MgwWLjNtNL5t2hFWBAJeLP6UBIp61-8pcKfRDNnPmRzH-UrrbzBioypFJd_pl9MPKbVQTV5yqecvIXJbHrW6BRZg0QuofPzcZ5vG6gOytx6_RpD_ZTJCvIQZerb51LSL52hr4rsR3PMyqWu4MQEc6WAgNG09dnSiRtA/s591/10.png)

-   **Function:**

This function basically take boto3 object and dictionary and run query in Athena and store the output in S3 i.e in staging_dir

[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEigc2UMrTb0tuinKX-h7k1UNwKA41c7HFfFCgWF3Fra9zlBmpzpm_dpMOP2dwVYLnYMxI_DN30yyM9-vdjFuIjQ5R4uEoa6Y5PCD0WIn3yZWXCM4SByEIJJnx22PBxjk-vcMShmKnlEZoObglJpkJH4raIbZPyHw02W03Q0vadj0pxvWnfPloTAV3A/w640-h364/11.png)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEigc2UMrTb0tuinKX-h7k1UNwKA41c7HFfFCgWF3Fra9zlBmpzpm_dpMOP2dwVYLnYMxI_DN30yyM9-vdjFuIjQ5R4uEoa6Y5PCD0WIn3yZWXCM4SByEIJJnx22PBxjk-vcMShmKnlEZoObglJpkJH4raIbZPyHw02W03Q0vadj0pxvWnfPloTAV3A/s1128/11.png)

-   **Query Response:**

[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi1knsL-KUQ7X2koVy2GyOJc_YVurH0z_o0MFfTvLDKQMAD5mWSOS7CpW5mKRuw5aieI7Er57jRIkoKmjUEUQ_NejIkl-H7zrrSw1Oh54_nJAgGIW8dz0OJQSNaXvAr85EMDRAwvtR92mQWahjm5sVdxxpy9u-4JxG5KOHsMYQImhH2Wz0ycSwHhiY/w400-h103/12.png)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi1knsL-KUQ7X2koVy2GyOJc_YVurH0z_o0MFfTvLDKQMAD5mWSOS7CpW5mKRuw5aieI7Er57jRIkoKmjUEUQ_NejIkl-H7zrrSw1Oh54_nJAgGIW8dz0OJQSNaXvAr85EMDRAwvtR92mQWahjm5sVdxxpy9u-4JxG5KOHsMYQImhH2Wz0ycSwHhiY/s743/12.png)

[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjZ2YtQGn0Y68IFS_-nBwOauSio2nxFi4Q6QH4hxzc3vaMmwBaa-4Ou-rWZRgaTBNKO-PfgVTGeS82FD2JYaPYiPHAAGhGTLFdgSlHYUa0kLt6OGBIrU3ubQB7xB_Xw9iil9FjeOCZuVznLs7ZGx34t3r6NpsgZRJebO_DWVKsG1N0AD4v9Rdp7Npc/w640-h164/13.png)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjZ2YtQGn0Y68IFS_-nBwOauSio2nxFi4Q6QH4hxzc3vaMmwBaa-4Ou-rWZRgaTBNKO-PfgVTGeS82FD2JYaPYiPHAAGhGTLFdgSlHYUa0kLt6OGBIrU3ubQB7xB_Xw9iil9FjeOCZuVznLs7ZGx34t3r6NpsgZRJebO_DWVKsG1N0AD4v9Rdp7Npc/s1350/13.png)

        Similarly, this process is repeated for all other 9 tables created using crawler shown in figure 4.

-   **Fixing errors' found in table:**

[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEieoH_0xJj_yqoBQ9wFb9HKfGLpMVPcuYgSg6BL9fBXaeRsk5qllSAcI1f57urVcjHyMr7c5oD4gt80vturQj8_r1E5nJbKYosoVsDmo8hPbAeDvf68rWvuUjqWFcNxH7fSguCnyqsIKh69KCInTshOdoIeljJe750Vp0JoniYf07Q2xnX0A13CxjU/w640-h568/14.png)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEieoH_0xJj_yqoBQ9wFb9HKfGLpMVPcuYgSg6BL9fBXaeRsk5qllSAcI1f57urVcjHyMr7c5oD4gt80vturQj8_r1E5nJbKYosoVsDmo8hPbAeDvf68rWvuUjqWFcNxH7fSguCnyqsIKh69KCInTshOdoIeljJe750Vp0JoniYf07Q2xnX0A13CxjU/s876/14.png)

-   **Transformation (ETL job in python):**

[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEibHFIPXq-UwzgiOCP9-5HOSoMYo_sZqLuQRNGAlNPe-3dmtoHLYazFBhO29LO5rdATCdmHiJ2NEkcNt-JN_jC2EArU5nGiLDkdRtnOIDcG6XB4pY-LQN2p9Fm6m8xp7fx4Q4RWDu9SkR1Y0ZLUVt-OheKrznQEA-asTWA_YW9g--GOXC-SBneyzPc/w640-h314/15.png)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEibHFIPXq-UwzgiOCP9-5HOSoMYo_sZqLuQRNGAlNPe-3dmtoHLYazFBhO29LO5rdATCdmHiJ2NEkcNt-JN_jC2EArU5nGiLDkdRtnOIDcG6XB4pY-LQN2p9Fm6m8xp7fx4Q4RWDu9SkR1Y0ZLUVt-OheKrznQEA-asTWA_YW9g--GOXC-SBneyzPc/s1238/15.png)

                Changing Dimension Table(Date) property as explained in figure of schema:

[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiEgpam-gFKKHuQM4ew7apOICb2U2MMb6b4z3AG-7OcJZ-3-eY108tSAsK4miyERfuCvfHrzSqInzPIYju_3UPAClmdN2vNv-mn5pTkXZP_jbdS98-1ySGEb-yIeiwhtgB0qP7WpIk_Zny-2JVU7pl0xJOyl_3kzhW19v9Fa0dijpVj9ruyrzD1lqg/w640-h266/16.png)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiEgpam-gFKKHuQM4ew7apOICb2U2MMb6b4z3AG-7OcJZ-3-eY108tSAsK4miyERfuCvfHrzSqInzPIYju_3UPAClmdN2vNv-mn5pTkXZP_jbdS98-1ySGEb-yIeiwhtgB0qP7WpIk_Zny-2JVU7pl0xJOyl_3kzhW19v9Fa0dijpVj9ruyrzD1lqg/s933/16.png)

[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgYNQ4qDf9kaIj-a8kXZCbQtEnM7BDF7yUsQiz6fZbnIWhg-X3TEoQk8PbQcQZzWKDHQNLdpf2qRX6G_1F66TliiDvgF4l8v3S2R0tbDevBRju72m3NoivlDfMLC_Ey65LNKSVpUVxPcri1TVe45yq0kUzuyHMMmqMeyzNGwcz-zU06Z4JTaNMFJEg/w503-h272/17.png)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgYNQ4qDf9kaIj-a8kXZCbQtEnM7BDF7yUsQiz6fZbnIWhg-X3TEoQk8PbQcQZzWKDHQNLdpf2qRX6G_1F66TliiDvgF4l8v3S2R0tbDevBRju72m3NoivlDfMLC_Ey65LNKSVpUVxPcri1TVe45yq0kUzuyHMMmqMeyzNGwcz-zU06Z4JTaNMFJEg/s637/17.png)

[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhIK7PIZspRzcnF1GPEhJKido2y7cXTV3zfF4OTtSZedWCW3Dccvf-bjXMq2L5kOf1tApusM4YhOJCwR19pa9qpnlE5WeJ8C6qwMWOPSUVgRTOLpzQHH86piUmPtZYbzzCEruzeAH7rDXsNJsD9zd_0pvDoNHk9fmuNjEBwMM9uhiRLmrUs-iysclo/w494-h221/18.png)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhIK7PIZspRzcnF1GPEhJKido2y7cXTV3zfF4OTtSZedWCW3Dccvf-bjXMq2L5kOf1tApusM4YhOJCwR19pa9qpnlE5WeJ8C6qwMWOPSUVgRTOLpzQHH86piUmPtZYbzzCEruzeAH7rDXsNJsD9zd_0pvDoNHk9fmuNjEBwMM9uhiRLmrUs-iysclo/s531/18.png)

-   **Save results to S3:**

[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh1hr9dAJJsLFWOLZMoXY3UP3FHF_PlZenL1RjhniP5Oi2HVxPhCkEyqYlRDn7NmzDIweM7N5ieHxhecAn4i4v1wKp0hRfQ_f6BZsZkHmNxeLIUDVMBtPMw14TbL0uHBU2ZDgD1pU2IKWUoLXk2hXmqP59mr7FMyjB6QsLt0VIeJ6n3vEQxKcOh9zc/w640-h109/19.png)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh1hr9dAJJsLFWOLZMoXY3UP3FHF_PlZenL1RjhniP5Oi2HVxPhCkEyqYlRDn7NmzDIweM7N5ieHxhecAn4i4v1wKp0hRfQ_f6BZsZkHmNxeLIUDVMBtPMw14TbL0uHBU2ZDgD1pU2IKWUoLXk2hXmqP59mr7FMyjB6QsLt0VIeJ6n3vEQxKcOh9zc/s719/19.png)

        Here**, **specify the S3 bucket name in place of bucket.

        Similarly, this process is repeated for all other 9 tables created using crawler shown in figure 4.

-   **Extracting Schema out of the DataFrame:**

[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiUsny7e7qv05Zr18CT1T5iCNRan1HSiUmcwNbS-toqoHHXQxMAtdkCOs1Haquff1GmHTf7exF4LGWtGFv84OH8OCiQvIEPxDFcSc94jiI6TEJ2HdCygIkdY50VRadDw762seTkJHYfStFBVbrQ2QbnNVmL3bwIG_8DOn5tE0-z9kV52U2rotENbWY/w490-h739/20.png)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiUsny7e7qv05Zr18CT1T5iCNRan1HSiUmcwNbS-toqoHHXQxMAtdkCOs1Haquff1GmHTf7exF4LGWtGFv84OH8OCiQvIEPxDFcSc94jiI6TEJ2HdCygIkdY50VRadDw762seTkJHYfStFBVbrQ2QbnNVmL3bwIG_8DOn5tE0-z9kV52U2rotENbWY/s963/20.png)

**            Note:** These schema will be needed while creating table in Amazon Redshift.

**8\.    Creating a Redshift Namespace (Cluster)**

[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjJVGG_O1P8uhRX9f8jC4Lr6dr2EQvw8qlgdAgVAalwnilWxmL0XVVL6oLKmwdqza1aQ8Y6UCPUm2m9u3EY7on5m4u4b3YkO1Os8cM9nnBimKYEG133F5keA2k3hn41lOIZL9J0noFgqcNp-NizB1dRnpgyXo_gmoBq6knjsR8sq7_phjEreinRj_A/w843-h83/qqw.png)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjJVGG_O1P8uhRX9f8jC4Lr6dr2EQvw8qlgdAgVAalwnilWxmL0XVVL6oLKmwdqza1aQ8Y6UCPUm2m9u3EY7on5m4u4b3YkO1Os8cM9nnBimKYEG133F5keA2k3hn41lOIZL9J0noFgqcNp-NizB1dRnpgyXo_gmoBq6knjsR8sq7_phjEreinRj_A/s1464/qqw.png)

**9\.    AWS Glue Job**

In AWS, AWS Glue Jobs are used for the ETL (Extract, Transform, Load) process to move data from one location to another. AWS Glue is a fully managed ETL service that makes it easy to move data between different data stores and data lakes.

AWS Glue Jobs are used to run ETL scripts and perform data transformations on data stored in various data sources such as Amazon S3, Amazon RDS, Amazon DynamoDB, Amazon Redshift, and more. AWS Glue Jobs can be written in Python or Scala, and they can be run on a serverless infrastructure. This means that AWS Glue Jobs can scale automatically and can handle any amount of data processing.

Table is created in Amazon Redshift with the help create table command and copy command is used to copy the dimension table and fact table from S3 to Redshift. These all process is done by creating a job in AWS Glue Job. 

[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjBAEQ0zDXe4epH29MTu5ABCa-oXFg2Y3kYsQC2-nVttqpF5nwlf7C8yrcsg9DVKLouHpczX_Zx1TpT8yHbBeFsd3jFfMGifhcmvq4Cjnp1zFgIS7G_Kfd3DXqfMjhVwcX50L_k9RpVziMIPFftaIQRJ1ZFgnJdArxK8D0Xe2ID2MKJLbeP1WoAri0/w640-h260/22.png)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjBAEQ0zDXe4epH29MTu5ABCa-oXFg2Y3kYsQC2-nVttqpF5nwlf7C8yrcsg9DVKLouHpczX_Zx1TpT8yHbBeFsd3jFfMGifhcmvq4Cjnp1zFgIS7G_Kfd3DXqfMjhVwcX50L_k9RpVziMIPFftaIQRJ1ZFgnJdArxK8D0Xe2ID2MKJLbeP1WoAri0/s1452/22.png)

Once the AWS Glue Jobs' task is completed, data can be queried and viewed in Redshift query editor as shown in figure below:

[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi5BVl-jYAY6QP8zZbqQ-QQhVutCA52yol-6GKI-t5nG2TUkxlCUgiMZhqzS8Q_m_2CTc7ebiqT92w7DKWGy_q_Hod-n0xiTLXyqCBb7cdrOzE5SCWB-QrpB03y5PMfj3EhCYs9K8TTbUZw3De6ZwQYrsJ5tZD1UWGtfXNrOPudDWeNC4i72sN7ZJU/w640-h286/24.png)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi5BVl-jYAY6QP8zZbqQ-QQhVutCA52yol-6GKI-t5nG2TUkxlCUgiMZhqzS8Q_m_2CTc7ebiqT92w7DKWGy_q_Hod-n0xiTLXyqCBb7cdrOzE5SCWB-QrpB03y5PMfj3EhCYs9K8TTbUZw3De6ZwQYrsJ5tZD1UWGtfXNrOPudDWeNC4i72sN7ZJU/s1109/24.png)

**Finally, this data can be used by Data Analyst and Data Scientist to derive insights and decision making.**


Code for Nepal would like to thank [DataCamp Donates](https://www.datacamp.com/donates) for providing Ravi, and several other fellows access to Datacamp, to learn and grow.