---
title: 'Data Pipeline with Apache Airflow and Fast API'
date: 2023-02-21
author: Prashant Manandhar
layout: post
tags:
 - CodeforNepal
 - DAG
 - Airflow
 - FastAPI
 - Data Pipelines
 - Datacamp Donates
---


The word Pipeline in general triggers a connections like image in our mind. Well data pipelines are no differ from that. These days organizations/institutions have huge volume of data which are generated through various sources, these data are known as "Big Data". For processing these big data efficiently such that it saves time and improves results we require data pipeline.Data pipelines are created for ETL process, where data is collected from various sources, it is then transformed into desired format and finally stored.

**What is DAG?** 
-----------------

DAG stands for Directed Acyclic Graph. In apache airflow DAGs represents a workflow of task that we program in python. According to the task flow that we desire the graph is made.It can be visualized from the UI as well. The priority of task is given by upstream task and downstream task.Task in DAG can be anything i.e request data from API, transforming in desired format, storing data in database and many more.

What is API
-----------

API i.e Application Programming Interface is kind of like a messenger. Well when ever we access data using API, its acts as a middle person between the main system and the user.We can understand this by an example. Suppose we need to access data from a system A, scenario is system A donot allow direct access and provides API, when the user send data request to API, API send request to the system A, in similar fashion system A either returns data or error which eventually is received by the user. Besides API requests are not unlimited and general APIs are accesses with the help of API keys for security.

Fast API 
---------

Fast API is a framework which can be used to build APIs with the help of python programming language. Fast API is simple ad easy to use. With few lines of code, simple API can be built.We will see the details in the code.

Apache Airflow
--------------

For creating data processing pipelines, Apache Airflow is a very useful open source work flow management tool.With the knowledge of python programming language, Airflow can be used to create data processing pipelines. While data from various sources needs to be extracted , transformed and stored, this tool proves to be just perfect.The web UI of Apache airflow is quiet handy while creating a data pipeline.All the DAGs(Direct Acyclic Graphs) that we have created is listed and we can checkout active DAGs and paused DAGs as-well. Individual DAGs can be triggered from the UI as well also we can go through multiple options in UI. There are various operators and sensors that can be used as requirement such as BinaryOperator, PythonOperator, FileSensors etc, Here we will be Using PythonOperator since we require function calling. Also we have op tions for executors in apache airflow i.e Sequential Executor, Local Executor,Celery Executor, where default executor is Sequential Executor.Sequential Executor is only used for testing purpose and executes single task sequentially.

Steps to setup Apache Airflow (in Linux environment)

-   open vs code in a new folder
-   Makesure the path in "apache.cfg" is exactly where your DAG is.
-   export the AIRFLOWHOME environment variable

    [![](https://blogger.googleusercontent.com/img/a/AVvXsEivGuBGkKOG1YKsGLqgvxYjCife2x5V2afGCYCBLTyMDL5m_mJiV_NqU3zmoiQZPRhQRrcF6HolqPG00CrhxPB2PWo6hXGAk8zy0aTShhRG7IUFWDFIfqc4I_Ze0dZ1K8zGHOitpQrngS3c_86pO8jdIn0WstysojDgh4ZghI90FkqKxswECTqbFKT6)](https://blogger.googleusercontent.com/img/a/AVvXsEivGuBGkKOG1YKsGLqgvxYjCife2x5V2afGCYCBLTyMDL5m_mJiV_NqU3zmoiQZPRhQRrcF6HolqPG00CrhxPB2PWo6hXGAk8zy0aTShhRG7IUFWDFIfqc4I_Ze0dZ1K8zGHOitpQrngS3c_86pO8jdIn0WstysojDgh4ZghI90FkqKxswECTqbFKT6)
-   initialize the database

    [![](https://blogger.googleusercontent.com/img/a/AVvXsEgyCiSGCCXoKw10kJLWt6CRSgSiTmdV-CUmKTvz_Hi7eYit_JoPsO5qUzZ2BsxI3_vlZxCEhntiq47YfIhSAhm9agb1-6HLF82WHxYoHOjlJsO-PEpoajxeulUyqpcK-EI0tbS1PO4BbdCxVGQ9Z2OMMQ7EBvBX4DthHxCVV61mprDuPF3R6zIBypy9)](https://blogger.googleusercontent.com/img/a/AVvXsEgyCiSGCCXoKw10kJLWt6CRSgSiTmdV-CUmKTvz_Hi7eYit_JoPsO5qUzZ2BsxI3_vlZxCEhntiq47YfIhSAhm9agb1-6HLF82WHxYoHOjlJsO-PEpoajxeulUyqpcK-EI0tbS1PO4BbdCxVGQ9Z2OMMQ7EBvBX4DthHxCVV61mprDuPF3R6zIBypy9)
-   Schedule the task

    [![](https://blogger.googleusercontent.com/img/a/AVvXsEjhaBnG2xr6wIyQCyKsYyNBgYYdKy9zxvYJ3GJ28u84ikPeMPqo5tqKfIG8efHrXulAmdhATMZARz3bRB9SDCpKBNSyOHh-rXWi8uTIjqtH_rrERUJjPXVkzIpl8uql7kOTPS9KfHyrKkAWEIQ6ovr4YNzoAW-8xT83JU2e1iw-yhyI98IYeUuuLBI9)](https://blogger.googleusercontent.com/img/a/AVvXsEjhaBnG2xr6wIyQCyKsYyNBgYYdKy9zxvYJ3GJ28u84ikPeMPqo5tqKfIG8efHrXulAmdhATMZARz3bRB9SDCpKBNSyOHh-rXWi8uTIjqtH_rrERUJjPXVkzIpl8uql7kOTPS9KfHyrKkAWEIQ6ovr4YNzoAW-8xT83JU2e1iw-yhyI98IYeUuuLBI9)

-   To open the apache airflow UI in web browser

    [![](https://blogger.googleusercontent.com/img/a/AVvXsEhE8i316NLtcgbUkY2G1YY_LWRXooxUAyGzbFIi4se_nVo4SjR5nBoabym6C4jPdVOYhgFtnqmY9VfXt3jbMyJkTRwS5HySyjbqvmfzChwTXnsJoI_DGxMrv0Tv9zZVOeKUihC9e2IcMc4AMiHeF0c49IQLmYBCya_ezLjUacmn4BnptDgV0Wgf_J6Q)](https://blogger.googleusercontent.com/img/a/AVvXsEhE8i316NLtcgbUkY2G1YY_LWRXooxUAyGzbFIi4se_nVo4SjR5nBoabym6C4jPdVOYhgFtnqmY9VfXt3jbMyJkTRwS5HySyjbqvmfzChwTXnsJoI_DGxMrv0Tv9zZVOeKUihC9e2IcMc4AMiHeF0c49IQLmYBCya_ezLjUacmn4BnptDgV0Wgf_J6Q)

The web UI looks like following.[![](https://blogger.googleusercontent.com/img/a/AVvXsEiL8JzsZLTtJWrPiEZaBKWqoujK8zwi9I9_HIGM1lfV8wJEOiitjItuoHAew25jkkwwrue1JcoiFQMHDmse7lYN4l5voYkqMfc6DGKzPEbbeQO_DbPWy_tGB-er0CSfpUY5etgUBpaHhygXkLOallL0YAmYP0jR23KmmMUOfQHNM1s3bqcLBpaEn6cu=w603-h338)](https://blogger.googleusercontent.com/img/a/AVvXsEiL8JzsZLTtJWrPiEZaBKWqoujK8zwi9I9_HIGM1lfV8wJEOiitjItuoHAew25jkkwwrue1JcoiFQMHDmse7lYN4l5voYkqMfc6DGKzPEbbeQO_DbPWy_tGB-er0CSfpUY5etgUBpaHhygXkLOallL0YAmYP0jR23KmmMUOfQHNM1s3bqcLBpaEn6cu)

The login username and password is added from terminal with following instruction: In the given instruction, we can specify username, firstname, lastname, password, email and role(viewer,Admin etc).

[![](https://blogger.googleusercontent.com/img/a/AVvXsEixPp-7cq-SJ1FbSgj0-WQq8DgzZ9s6uEywltK0-XbgCw4Lw6CO522w4isyntHax4id_TnRtBZdoAVGkqaqoWlkjj2a1RXsO19-hHcPdoE6geUee1CxfvNLSKG57YxMjl3cDKDbK5tndvQ9yoCNhi_xBtA2SxlwUYpD_WxvcpTiG_kXdKb4bOJkQPz_=w508-h19)](https://blogger.googleusercontent.com/img/a/AVvXsEixPp-7cq-SJ1FbSgj0-WQq8DgzZ9s6uEywltK0-XbgCw4Lw6CO522w4isyntHax4id_TnRtBZdoAVGkqaqoWlkjj2a1RXsO19-hHcPdoE6geUee1CxfvNLSKG57YxMjl3cDKDbK5tndvQ9yoCNhi_xBtA2SxlwUYpD_WxvcpTiG_kXdKb4bOJkQPz_)

Once the user is created then we can see following message: Then login with the credentials and we will navigate to homepage. Where we will see our DAG. The homepage has many options to explore.

[![](https://blogger.googleusercontent.com/img/a/AVvXsEhq5_i2HkJQThoYFDqaUmyJ3Jm5tbOy-rhT4Y6LDUwkz8chVMlKI5o_Wsxl5chrx6UET8HwrXaBIvOQJ-SqWBXIsovbJ9NOGzVTLs_CMG8Zy-NinWgELXizlHP7z_YtgoR72e8hDpAYCumwqWv8N2WNLRlL13NawOe9VRmeFlvAkb2CpTnKu7AqvUrI)](https://blogger.googleusercontent.com/img/a/AVvXsEhq5_i2HkJQThoYFDqaUmyJ3Jm5tbOy-rhT4Y6LDUwkz8chVMlKI5o_Wsxl5chrx6UET8HwrXaBIvOQJ-SqWBXIsovbJ9NOGzVTLs_CMG8Zy-NinWgELXizlHP7z_YtgoR72e8hDpAYCumwqWv8N2WNLRlL13NawOe9VRmeFlvAkb2CpTnKu7AqvUrI)

**Code with Description** 
--------------------------

Python is one of the popular programming language. Using python we can create a data processing pipeline that collects data from the API end point.I have created both API end points as well as DAG . Following libraries and modules have been use

[![](https://blogger.googleusercontent.com/img/a/AVvXsEiVQCDO8HpSfFo3iW6GEgHYiQEsiBbGU9UgjFz3aSRk398ypYS7AWL3_UuYfH2MCvJuDeoG3TQa2YfWWFj1aH1nvoRLQ5JmUjofLxZEYTFNPvUzwjS4eAOB22SXg-GNSfvJubtGuBFc5Vh0twSrbGwwA6Ml2eQDOR3slQS5XOuDAQXMfXO9GfhWQjTu=w539-h177)](https://blogger.googleusercontent.com/img/a/AVvXsEiVQCDO8HpSfFo3iW6GEgHYiQEsiBbGU9UgjFz3aSRk398ypYS7AWL3_UuYfH2MCvJuDeoG3TQa2YfWWFj1aH1nvoRLQ5JmUjofLxZEYTFNPvUzwjS4eAOB22SXg-GNSfvJubtGuBFc5Vh0twSrbGwwA6Ml2eQDOR3slQS5XOuDAQXMfXO9GfhWQjTu)[![](https://blogger.googleusercontent.com/img/a/AVvXsEg7UWwsbt93fkwg545caVan88PJhpO4PTOmmHAnIMYdAC0IZ0IEX6_HKUv2yzjkjXtjo35oqhbU2NeW4Fr89YzfcXmgQLuF6hBeJxlUDlZHZvTHGzOy-YJJOQD9qk3utvf0I21fR4nPP8RXXyURqdskuYXq0Zgrc34zSkgAUQ04EaUZdWGl0zNTPmrM=w541-h111)](https://blogger.googleusercontent.com/img/a/AVvXsEg7UWwsbt93fkwg545caVan88PJhpO4PTOmmHAnIMYdAC0IZ0IEX6_HKUv2yzjkjXtjo35oqhbU2NeW4Fr89YzfcXmgQLuF6hBeJxlUDlZHZvTHGzOy-YJJOQD9qk3utvf0I21fR4nPP8RXXyURqdskuYXq0Zgrc34zSkgAUQ04EaUZdWGl0zNTPmrM)

where DAG is used to create a DAG which we will see in further code. As i have mentioned above, PythonOperator is used from airflow.operators.python, datetime and timedelta for date and scheduling interval. BaseModel is imported from the Pydantic library to define data model.Request module is used to fetch data from the API end point.csv module is used to store final data in csv format. Since API is created using Fast API so the shown libraries are used where corsmiddleware is used to resolve cross origin error.

Lets start with how API endpoints are built using Fast API for this project. Here FastAPI

[![](https://blogger.googleusercontent.com/img/a/AVvXsEjIS83Gmap--WBn7ZW5L4KOWAHtwXORtNmpJmoBBjk-6ZfGUxtJN_bitkZBv0Tr-ZNedGCPzFn2zUX8sjaFFK6VziDqwz-26DS7T3P9LyJTeodn7KU4528hAtAH47XL0OfavAad0Q866yjywNehnZwQuZ8mnqXSL62ZwOGA4QTCsOhqKcHp8MCxoEwr=w400-h457)](https://blogger.googleusercontent.com/img/a/AVvXsEjIS83Gmap--WBn7ZW5L4KOWAHtwXORtNmpJmoBBjk-6ZfGUxtJN_bitkZBv0Tr-ZNedGCPzFn2zUX8sjaFFK6VziDqwz-26DS7T3P9LyJTeodn7KU4528hAtAH47XL0OfavAad0Q866yjywNehnZwQuZ8mnqXSL62ZwOGA4QTCsOhqKcHp8MCxoEwr)

is instantiated and assigned to app. To overcome the cross origin error middle ware is added which allows basically any origin to exchange data and communicate. In this case data is transferred from localhost:5000 to localhost 8000. Next a class of User is made with the data model containing Username and salary with respective datatypes using BaseModel. The List of User is assigned to mydata where list of users according to data model is stored. One example data is also stored. Here two api end points are specified i.e one for get request and one for post request. User data is posted form the API UI. Now with the following command fast api is started (api is name of my python file i.e api.py)

**uvicorn api:app --port 5000 --host 0.0.0.0 --reload**

**\
**

Next lets see the data pipeline for collecting data from the api end point.

Function fetchdata collects data from the endpoint http://localhost:5000/getuser

[![](https://blogger.googleusercontent.com/img/a/AVvXsEjvTBGBrVd5owq7f_5_OVNNNZhurLcdadE3stwzU-YEjytHwT_qr7bES04UWBrDDSNtq5DxrCJ_GC-9BSSoFPbcVW6NZZLAuA9qtHn4sS-L27OYr-mwQWDB_nYSuu5StSyTuT4vnr2cLADcHkt8d69TjLFLCqE-Hir5WMNof7BkuRZhTffjt3Xpe04F=w479-h185)](https://blogger.googleusercontent.com/img/a/AVvXsEjvTBGBrVd5owq7f_5_OVNNNZhurLcdadE3stwzU-YEjytHwT_qr7bES04UWBrDDSNtq5DxrCJ_GC-9BSSoFPbcVW6NZZLAuA9qtHn4sS-L27OYr-mwQWDB_nYSuu5StSyTuT4vnr2cLADcHkt8d69TjLFLCqE-Hir5WMNof7BkuRZhTffjt3Xpe04F)

After taking the response in json format we unpack the dictionary and assign it to my data, finally store the data in csv format. DAG i.e Directed Acyclic Graph is created and assigned the name fetchdatafromapi.

[![](https://blogger.googleusercontent.com/img/a/AVvXsEhlAQ3WRb1dIpTnhyyxm4hP30svVuXNQd3K7TI9oG7Ij2oIE_RGoCzemei_-qUr0_tmBam-DX5v4yBkOSqQClVPnqovuJoNCKwFpCBJB3N6baDF96JQcOrlWO3-8rWIsT1MYmGnqYwZ_dnBQ7RQLB2BXeW0uheGKl8SAm2gsRhz7exd5qOZOQos7wmS=w368-h81)](https://blogger.googleusercontent.com/img/a/AVvXsEhlAQ3WRb1dIpTnhyyxm4hP30svVuXNQd3K7TI9oG7Ij2oIE_RGoCzemei_-qUr0_tmBam-DX5v4yBkOSqQClVPnqovuJoNCKwFpCBJB3N6baDF96JQcOrlWO3-8rWIsT1MYmGnqYwZ_dnBQ7RQLB2BXeW0uheGKl8SAm2gsRhz7exd5qOZOQos7wmS)

[![](https://blogger.googleusercontent.com/img/a/AVvXsEh5RHx6bsGna2JW8WDrn-jzNk7SHJUZUgbBGg57YHjoclri2HacLvvlcTNDztTLu5Bgkl87K_OZdkgOjZTGvHWJA0LpDHtXtL-Zukg5gBUlZtQN4w7xdV78mTL-USCfQBuZg6sO3_WXL5DMn6b-xKXa0XgrB3sKYkM5NQaK4ypiu5SHzGevGlzoHbgW=w368-h139)](https://blogger.googleusercontent.com/img/a/AVvXsEh5RHx6bsGna2JW8WDrn-jzNk7SHJUZUgbBGg57YHjoclri2HacLvvlcTNDztTLu5Bgkl87K_OZdkgOjZTGvHWJA0LpDHtXtL-Zukg5gBUlZtQN4w7xdV78mTL-USCfQBuZg6sO3_WXL5DMn6b-xKXa0XgrB3sKYkM5NQaK4ypiu5SHzGevGlzoHbgW)

The default argument is assigned with args which contains owner as airflow and start date. Also the DAG is schedule of running once for every 10 hours and start from current date. PythonOperator is used with the taskid fetchdata. The function fetchdata is called

[![](https://blogger.googleusercontent.com/img/a/AVvXsEgL7G_kKhgmMkhyMomDPirKeCqjz9uqBCUgPVYqRGHwAUxtaAk-Pq95g8m-l8ICP9JCicbjyVxNRjRt45oe0JV_EU-9BCgmW5SPCVfRsxYDeXg6rKTXfhvtikTlY1TYH2sSVpgmGGIxdZP5zb4i8bGlMMNw5br--h0-nJDEJAAQ1C3bw6zeAlETIIIJ=w392-h160)](https://blogger.googleusercontent.com/img/a/AVvXsEgL7G_kKhgmMkhyMomDPirKeCqjz9uqBCUgPVYqRGHwAUxtaAk-Pq95g8m-l8ICP9JCicbjyVxNRjRt45oe0JV_EU-9BCgmW5SPCVfRsxYDeXg6rKTXfhvtikTlY1TYH2sSVpgmGGIxdZP5zb4i8bGlMMNw5br--h0-nJDEJAAQ1C3bw6zeAlETIIIJ)

from pythoncallable and the value of dag is assigned.

Output 
-------

Finally after running the code we will see data.csv in folder structure.

[![](https://blogger.googleusercontent.com/img/a/AVvXsEhtmiReKOQlNfEn3EgjgA5V6Dcf8oFcFIbxeWLlUvxUuxGPd-sz8IFjH9WFtEXDSW3STruyR8UvlAoLUVcA-RCQx5E1_BtW_BD_T-D3Xp0l_QnyWT-Q8WMv-g_CsHuuCpBZS3vH7goELfzIpRa2pfrAjrTbcpSei1_MIqXz1wBCewepuz_sXRngTu_D)](https://blogger.googleusercontent.com/img/a/AVvXsEhtmiReKOQlNfEn3EgjgA5V6Dcf8oFcFIbxeWLlUvxUuxGPd-sz8IFjH9WFtEXDSW3STruyR8UvlAoLUVcA-RCQx5E1_BtW_BD_T-D3Xp0l_QnyWT-Q8WMv-g_CsHuuCpBZS3vH7goELfzIpRa2pfrAjrTbcpSei1_MIqXz1wBCewepuz_sXRngTu_D)

Conclusion
----------

Hence this is simple datapipeline to extract data from the API endpoints. Well depending upon the needs of user many modifications can be made.

Code for Nepal would like to thank [DataCamp Donates](https://www.datacamp.com/donates) for providing Prashant, and several other fellows access to Datacamp, to learn and grow.