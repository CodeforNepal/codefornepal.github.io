---
title: 'Exploring Nepal’s Exports: Building an Interactive Dashboard for Easy Data Access'
date: 2023-07-06
author: Anupam Bajra
description: 
layout: post
tags:
 - CodeforNepal
 - DataCamp Donates
 - Nepal
 - Dashboard
 - Python
---

The government has published the data regarding the imports & exports of the country for Fiscal Year B.S. 2079/80(Mid July 2022 to Mid July 2023). Because there are news everyday regarding the current economic situation of the country, it is a good idea to understand the area through which we can strengthen the economy which is exports.

I went through data through the Department of Customs for this data and going even through the tabular form data there were many insights to grasp. When discussing this with friends, they were curious but found the original data hard to understand.

While the government might be working on improving this data, my focus was on learning to make such information more understandable & accessible. This article lays the foundation for a web dashboard that lets the user search and see visualizations of export data. Though creating such a proper website will be a resource and time taking process, in this article I have tried in getting the foundations for it ready.

Installing necessary Python libraries

First, we install the necessary Python libraries for data processing (pandas), interactive visualizations (plotly), and building web applications (dash)

*pip install pandas plotly dash*

Importing Panda Library & needed CSV file

*import pandas as pd*

*file_path = r"C:\Users\ACER\Desktop\Tasks\Data Article\7980exports.csv"*

*df = pd.read_csv(file_path, encoding='latin-1')*

Data Source: <https://www.customs.gov.np/page/fts-fy-207980>

Now, we import the Pandas library so that we can do data manipulation & analysis. We have also provided the file path to read the CSV file from the specified path into a Pandas DataFrame. In this step, we have been able to lead this data into the data frame through which we can move for processing and visualization.

Importing Dash Framework

*import dash*

*from dash import dcc*

*from dash import html*

*from dash.dependencies import Input, Output*

We are now importing the Dash framework since it is great for creating interactive web applications with Python. For this project, we especially need its web-based data visualizations and interactive components.

We are also importing the dcc module of Dash as it contains the core components such as graphs, dropdowns, & sliders which are useful elements for this project. Through this step, we now have the modules for a Dash web application along with defining the user interface.

Initializing Dash app

*# Initialize the Dash app*

*app = dash.Dash(__name__)*

Now, we create the instance for the application along with providing the unique identifier.

Defining the layout through Search bar for filtering data & Graph component to display the data

*# Define the layout of the web application*

*app.layout = html.Div([*

*# Search bar for filtering data*

*dcc.Input(id='search-bar', type='text', placeholder='Search by Item...'),*

*# Graph component to display the data*

*html.Div([*

*dcc.Graph(id='export-graph', config={'displayModeBar': False}),*

*]),*

*])*

The layout of the web application is being set up now with the first structure of the web page being set up using the Dash HTML components which includes the search bar & graph that we need since we want the user to search for items & represent it through a graph.

Then, we use dcc.input to create the needed text input field for this search bar and name it as Search by Item which the user will see it as. We also create the graph component to display the data through this framework.

Callback to update the graph based on search input

*@app.callback(*

*Output('export-graph', 'figure'),*

*[Input('search-bar', 'value')]*

*)*

Defining the callback function so that it responds to changes to the search bar the user makes. Here, we also define that the input is the search term that the user enters and output is the export graph through which the necessary item will be updated in the displayed graph.

Updating graph based on search term

*def update_graph(search_term):*

*if search_term:*

*# Filter the data based on the search input*

*filtered_df = df[df['Item'].str.contains(search_term, case=False)]*

*else:*

*# If no search input, show all data*

*filtered_df = df*

Here, we are creating some important functions for the graph. If there is no search input then the entire Data Frame will show up which will be like the default setting. Also, the words the user types will be case insensitive.

Create the bar chart using Plotly

*# Create the bar chart using Plotly (showing 'Total Revenue')*

*figure = {*

*'data': [*

*{'x': filtered_df['Item'], 'y': filtered_df['Exports_Value'], 'type': 'bar', 'name': 'Total Revenue'},*

*],*

*'layout': {*

*'title': "Nepal's Export Data",*

*'xaxis': {'title': 'Item'},*

*'yaxis': {'title': 'Value'},*

*'barmode': 'group'*

*}*

*}*

*return figure*

The bar chart is now constructed with the Total Revenue data through the filtered dataframe. In the bar chart the X values have been defined as the Item and the Y values as the Exports Value i.e. Total Revenue.

Running the web application

*# Run the web application*

*if __name__ == '__main__':*

*app.run_server(debug=True)*

Now, we do the fun part and see the result that has come from the above process.

<iframe width="560" height="315" src="https://www.youtube.com/embed/68O-VpoZiGk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

![](https://miro.medium.com/v2/resize:fit:1400/0*NF88vaONxWGNSkYl)

Through this dashboard, now it is very easy to search for items you want to know the revenue for exports. We can gain insights now faster and in a more accessible way, that too with context of other similar products and their revenues for exports.

For me, I found it interesting that even items such as Yarchagumba are bringing in around Rs. 44 crores of revenue per year. Another surprise for me was that Dog/Cat food did Rs. 3.40 arba in revenue which is a very big amount of revenue that provides tons of employment opportunity in Nepal especially in the village areas.

Thus, by exploring this dashboard and finding out the revenue of different items, we can also map out what kind of opportunity is present to sell Nepali items in the global market too.

Conclusion

Now that I've worked on this project, I can see there are many kinds of data we can make accessible through turning the raw data into a more accessible format. If you want to further work on this project then the next steps would be to find a way to make it accessible on the internet to people through platforms like Heroku and then test the prototype out.

Thanks to Code For Nepal's Data Fellowship program with DataCamp Donates, I got the chance to explore creating tools with Python. I'm thankful to Code for Nepal for giving me the opportunity to learn such Python skills.

By: Anupam Bajra

Linkedin: <https://www.linkedin.com/in/anupam-bajra/>

Code for Nepal would like to thank [DataCamp Donates](https://www.datacamp.com/donates) for providing Anupam, and several other fellows access to DataCamp, to learn and grow.