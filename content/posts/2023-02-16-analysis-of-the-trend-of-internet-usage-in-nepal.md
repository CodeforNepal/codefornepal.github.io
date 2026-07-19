---
title: 'Analysis of the trend of internet usage in Nepal'
date: 2023-02-16
author: Pujan Oli
layout: post
bigimg: https://miro.medium.com/v2/resize:fit:1280/0*Va3kdjX8jtk2ddhR
tags:
 - CodeforNepal
 - Internet Usage
 - Trends
 - DataCamp Donates
---

Since the introduction of the Internet in 1993 in Nepal, the country has witnessed the exponential growth of the internet in the last decade, especially in the 2010s. With the increase in digitalization, the internet has become the most essential tool in diverse sectors all over Nepal. And especially after the proclamation of the Federal Democratic Constitution in 2015 AD, the Internet became vital for services in government and most of the commercial sectors. It was during this period that social media also became increasingly popular, and with the introduction of smartphones, the platform has exploded. One of the most prominent examples is that of the Tik Tok. In the last two years, the percentage of internet users who responded to using TikTok rose from 3% to 55%. Last but not least, according to Google Trends, Nepal is the second most searched country for "chatGPT" terms.

So it becomes vital to analyze and interpret the data of the internet world in order to understand the current trends and predict the possible prospects of the internet in Nepal's growth and development. It is also a very significant challenge to keep the internet secure and stop the exploitation of the user's data, which seems to be a subject matter of far less concern in Nepal. In regards to the context, I have collected some data about the internet usage in Nepal and tried to perform a visual analysis of it using the concepts I learned during the data fellowship. The sources of data are The World Bank and Data Reportal. I have used Python and its libraries on a small set of data and attempted to derive some conclusions based on it.

The data provided contains information about the number of users, access to the internet, and usage of social media in the years 2017--2022. In this project, we will analyze this data and see the trend of internet usage over the years.

Importing Libraries and Loading Data
------------------------------------

To start with the analysis, we first need to import the necessary libraries. We will use the Pandas library for data manipulation and analysis, Matplotlib for visualization, and Numpy for mathematical operations.

```
import pandas as pd

import matplotlib.pyplot as plt

import numpy as np
```

Now, we need to load the data into a Pandas data frame. We will use the *read_csv* function from the Pandas library to load the data from the CSV file named "Nepal_Internet_data.csv."

```
data = pd.read_csv('Nepal_Internet_data.csv')
```

After we have loaded the data, we can begin to explore it. This can be done by using the "head()" and "tail()" functions to check the first and last five rows of the data. Furthermore, the info() and describe() functions can also be used to get more information about the data.

Visualization of data:

We now need to create some visualizations to get a more precise and clear understanding of the internet usage trend in Nepal. For this, the *matplotlib* library is used to create these visualizations, which are illustrated below.

Line Plot:

We will create a line plot to show the trend of access to the internet and social media usage over the years. It can be said that access to the internet has expanded rapidly to the point where almost 90% of the population had access to the internet in 2022.

```
plt.plot(data[‘Years’], data[‘Access to Internet’], label=’Access to Internet’)

plt.plot(data[‘Years’], data[‘Users’], label=’Ïnternet users’)

plt.xlabel(‘Years’)

plt.ylabel(‘Usage’)

plt.title(‘Trend of Internet Usage’)

plt.legend()

plt.show()
```

![](https://miro.medium.com/max/1280/0*n8pTqFCaM02wnEJv)

Bar Plot

The bar plot below depicts the comparison between access to the internet and social media usage in different years.

![](https://miro.medium.com/max/1280/0*Xiv5Kgr8wMIkTS3k)

Scatter plot

The scatterplot shows the relationship between the number of users and access to the internet. Each data point in the scatter plot represents a year, and the x-axis represents the number of users while the y-axis represents the access to the internet (in %)

![](https://miro.medium.com/max/1280/0*Va3kdjX8jtk2ddhR)

From the scatterplot, we can observe that as the number of users increases, access to the internet also increases. This shows that there is a positive correlation between the number of users and access to the internet. The trend line indicates that the relationship between the two variables is linear, meaning that the rate of increase in access to the internet is constant as the number of users increases.

Calculation of correlation:

The Numpy library can also be used to calculate the correlation coefficient between the two variables, which will give us a numerical value for the strength of the relationship between them. The correlation coefficient ranges from -1 to 1, where -1 indicates a strong negative correlation, 0 indicates no correlation, and 1 indicates a strong positive correlation.

Code:

```
correlation = np.corrcoef(data["Users"], data["Access to Internet"])

print("Correlation Coefficient:", correlation[0, 1])
```

Output:

![](https://miro.medium.com/max/766/0*SMg9ld2fKZ9W6Vmw)

In this case, the correlation coefficient is close to 1, which indicates that there is a strong positive correlation between the number of users and access to the internet. Therefore, the positive correlation between the two variables suggests that, as the number of users increases, access to the internet also increases.

Analyzing the internet services of Nepal

In this case, the data about internet service facilities is collected because it is vital to know about the internet infrastructure development in our country. So I have performed visualization using Matplotlib, and the below-given figure clearly indicates that fixed broadband subscriptions have increased over the last five years, while mobile cellular subscriptions have witnessed a slight decrease within the last three years. However, cellular subscriptions remain high compared to broadband subscriptions.

code:

```
# Load the data into a pandas DataFrame

df = pd.read_csv(“Services_data.csv”)

# Perform some basic analysis on the data

print(“Data summary:”)

print(df.describe())

# Visualize the data using matplotlib

plt.plot(df[‘Years’], df[‘Mobile cellular subscriptions’], label=’Mobile cellular subscription’)

plt.plot(df[‘Years’], df[‘Fixed broadband subscriptions’], label=’Fixed broadband subscriptions’)

plt.legend()

plt.xlabel(‘Years’)

plt.ylabel(‘Number of Subscriptions (in million)’)

plt.title(‘Subscriptions over the years’)

plt.show()


```

![](https://miro.medium.com/max/1280/0*CEvjVTv4K4_Hra97)


Code for Nepal would like to thank [DataCamp Donates](https://www.datacamp.com/donates) for providing Pujan, and several other fellows access to DataCamp, to learn and grow.