---
title: 'Harnessing Data Science For Agricultural Crops Prediction'
date: 2023-05-24
author: Sadhana Panthi
description: 
layout: post
tags:
 - CodeforNepal
 - DataCamp Donates
 - Nepal
 - Agriculture
 - Python
---

Using AI to determine optimal crop selection can have a significant impact on ending world hunger, particularly in poor developing countries like Nepal. Even though Nepal is an agricultural country, we import a huge amount of food materials every year which make the trade deficit of Nepal even worse. By leveraging AI technologies such as machine learning and data analysis, we can analyze various factors like climate, soil quality, market demand, and available resources. This data-driven approach helps farmers make informed decisions about which crops to plant, increasing agricultural productivity and improving food security. AI algorithms can provide personalized recommendations based on local conditions, enabling farmers to optimize their yields, reduce crop failures, and maximize profits. Ultimately, AI-driven crop selection can contribute to sustainable farming practices, alleviate poverty, and combat hunger in Nepal and similar regions worldwide.

I personally believe that even the uneducated people in the remote parts of the world should get equal opportunity to make their life better leveraging the power of AI and ML. This projects aims to help such people by recommending right kind of crops to maximize their production and profit.

![](https://miro.medium.com/v2/resize:fit:1400/0*nWrFYdhySS2t0pb2)

In this blog post, we will explore a data science project focused on agricultural crop prediction, highlighting its significance, methodology, and potential benefits.

Dataset
-------

The dataset that we'll be using is: [httpswww.kaggle.com/datasets/manikantasanjayv/crop-recommender-dataset-with-soil-nutrients](https://www.kaggle.com/datasets/manikantasanjayv/crop-recommender-dataset-with-soil-nutrients)

This is what the dataset looks like:

![](https://miro.medium.com/v2/resize:fit:1400/0*xdq-aUBsuNHX04Ti)

Importing Libraries and Loading Data
------------------------------------

To begin, we import necessary libraries such as NumPy, Pandas, Seaborn, Matplotlib, and IPython Widgets. These libraries will help us manipulate and visualize the data effectively. Additionally, we import the dataset containing soil and climate information using the Pandas library.

import numpy as np

import pandas as pd

import seaborn as sns

import matplotlib.pyplot as plt

from ipywidgets import interact

import warnings

warnings.filterwarnings('ignore')

data=pd.read_csv("Crop_recommendation.csv")

Next, we utilize the Pandas DataFrame to calculate and display the average ratios of nitrogen (N), phosphorous (P), and potassium (K) in the soil. These nutrients are essential for plant growth and provide valuable insights into soil fertility. The code snippet then proceeds to calculate and display the average temperature, relative humidity, pH value of the soil, and rainfall. These climatic factors play a crucial role in determining suitable crop choices.

Exploratory Data Analysis
-------------------------

Now ,we utilize the popular data visualization libraries, Matplotlib and Seaborn, to create a grid of subplots. Each subplot represents the distribution of a specific agricultural condition for different crops.

![](https://miro.medium.com/v2/resize:fit:1400/0*GNCuGVwoXZJ0oXoS)

The first subplot focuses on nitrogen levels (N) in the soil. By utilizing a histogram plot, we can observe the frequency and spread of nitrogen levels across different crops. Similarly, the second subplot showcases the distribution of phosphorous (P) levels, while the third subplot displays the distribution of potassium (K) levels. Moving on to the fourth subplot, it represents the distribution of temperature. Temperature plays a crucial role in crop growth and development, and understanding its distribution helps identify suitable temperature ranges for specific crops. The fifth subplot focuses on rainfall, providing insights into the amount and frequency of precipitation. Next, the sixth subplot examines the distribution of humidity, which is another critical factor affecting crop health and productivity. The seventh subplot visualizes the distribution of soil pH levels. pH level directly influences nutrient availability and crop performance, making it vital to assess its distribution across different crops.

Evaluation Metrics
------------------

Since this is a supervised classification learning, following metrics have been used:

1.  Accuracy
2.  Precision
3.  Recall
4.  F1 Score

Determining Optimum Clusters
----------------------------

K-means clustering is a widely used algorithm that partitions data points into clusters based on their similarity. The code snippet begins by importing the necessary libraries, including scikit-learn's KMeans module. Then, it prepares the data for clustering by removing the labels column and selecting all the values from the dataset. The shape of the data is then printed to gain an understanding of its dimensions.

from sklearn.cluster import KMeans

*#removing the labels column*

x = data.drop(['label'], axis=1)

*#selecting all the values of data*

x = x.values

*#checking the shape*

print(x.shape)

(2200, 7)

Moving on to the main part of the code, we define an empty list called wcss (Within-Cluster Sum of Squares). This list will store the calculated WCSS values for different numbers of clusters.A loop is then executed from 1 to 10, where each iteration creates a KMeans object with a specific number of clusters. To gain insights into the optimal number of clusters, the Matplotlib library is used to create a line plot.

plt.rcParams['figure.figsize'] = (10,4)

wcss = []

for i in range(1,11):

km = KMeans(n_clusters = i, init = 'k-means++', max_iter = 2000, n_init = 10, random_state = 0)

km.fit(x)

wcss.append(km.inertia_)

*#Plotting the results*

plt.plot(range(1,11), wcss)

plt.title('Elbow Method', fontsize = 20)

plt.xlabel('No of Clusters')

plt.ylabel('wcss')

plt.show()

![](https://miro.medium.com/v2/resize:fit:1400/0*GeYDMJpC804vor2u)

The resulting plot is known as the Elbow Method plot. It helps us identify the point of inflection or the "elbow" in the curve.

Splitting the Dataset and analyzing correlation
-----------------------------------------------

Next, we split the dataset into input features and target variables for predictive modeling. Additionally, we will analyze the correlations between different variables using a heatmap visualization.

![](https://miro.medium.com/v2/resize:fit:1400/0*39K-bUsRVEi0zq5F)

Data Preprocessing and Training
-------------------------------

We standardize and tidy up our data to improve model performance.Here, we standardize our data using StandardScaler().The ColumnTransformer is used to create a transformer object that applies the StandardScaler to the numeric columns in the dataset, ensuring that all features are on the same scale.Also, the dataset is split into training and testing sets.

from sklearn.preprocessing import StandardScaler

from sklearn.compose import ColumnTransformer

transformer = ColumnTransformer([('num', StandardScaler(), x.columns)])

Moving on to the model training phase, the code creates an SVM pipeline using the Pipeline module from sklearn.pipeline. The pipeline includes the preprocessing transformer and the SVM model from sklearn.svm. This ensures that the preprocessing steps are seamlessly applied to the data before training the SVM model.

from sklearn.pipeline import Pipeline

from sklearn.svm import SVC

svm_pipe = Pipeline(steps=[('preprocessing', transformer), ('model', SVC())])

svm_pipe.fit(x_train, y_train)

y_pred = svm_pipe.predict(x_test)

evaluate_model("SVM", y_pred, y_test)

show_confusion_matrix(y_pred, y_test)

Additionally, the show_confusion_matrix() function visualizes the confusion matrix using seaborn's heatmap. The confusion matrix provides insights into the performance of the model by showing the number of true positives, true negatives, false positives, and false negatives.

![](https://miro.medium.com/v2/resize:fit:1400/0*1bdFMRW85QSQjcdX)

SVM

accuracy: 0.9772727272727273

f1_score 0.9773200952744351

precision 0.9799524821583645

recall 0.9772727272727273

Decision Tree Classifier

from sklearn.tree import DecisionTreeClassifier

tree_pipe = Pipeline(steps=[("preprocessing", transformer), ("model", DecisionTreeClassifier())])

tree_pipe.fit(x_train, y_train)

y_pred = tree_pipe.predict(x_test)

evaluate_model("DecisionTreeClassifier" ,y_pred, y_test)

show_confusion_matrix(y_pred, y_test)

DecisionTreeClassifier

accuracy: 0.9886363636363636

f1_score 0.9886072979597981

precision 0.9890874125874125

recall 0.9886363636363636

Model Selection
---------------

I played around with different algorithms to see which model fits the data best and generalizes well to test data. Logistic regressions, SVM and decision tree worked well but I chose decision tree classifier model as final model. 98% accuracy in test data proves that the decision tree is generalizing well in real-world examples.

Making predictions and Displaying the suggested Crop
----------------------------------------------------

Finally, we create a dictionary and input values which represent the climatic conditions and the soil nutrients for which we seek crop recommendations. We utilize our trained machine learning model to predict the suggested crop based on the provided climatic data. Since we are using a pipeline, we do not need to perform data preprocessing manually while predicting. The pipeline does the preprocessing and gets the prediction using the learned model. Furthermore, I have saved the weights and biases in a pickle file so that we do not need to train the model every time we need to predict. Once the prediction is made, it prints the suggested crop based on the given climatic conditions.

This is how a user can give input values to get the recommendation:

![](https://miro.medium.com/v2/resize:fit:1400/0*Iiwk4oXFPMhVpS3O)

Scope and benefits
------------------

1.  Enhanced yield
2.  Risk mitigation
3.  Sustainable farming practices
4.  Improved decision making
5.  The model can continue learning and be better
6.  Knowledge transfer
7.  Improved financial condition
8.  Betterment of the lifestyle of poor communities.
9.  This is a very lightweight model and is freely available for anyone to use.

Conclusion
----------

While crop recommendation systems offer tremendous potential, certain challenges must be addressed. These include the need for reliable data sources, accessibility for farmers in remote areas, and user-friendly interfaces. However, advancements in technology and increased connectivity hold promise for overcoming these obstacles and extending the reach of these systems to a wider user base.

Looking ahead, crop recommendation systems can be further enhanced by incorporating real-time data, remote sensing techniques, and artificial intelligence algorithms. This would provide farmers with even more precise recommendations, leading to better crop management, increased sustainability, and improved food security.

Github repo: <https://github.com/sadhana70/agricultural-crop-recommendation>

Code for Nepal would like to thank [DataCamp Donates](https://www.datacamp.com/donates) for providing Sadhana, and several other fellows access to DataCamp, to learn and grow.