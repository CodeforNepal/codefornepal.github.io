---
id: 2098
title: Are you a developer? Sign up for free workshops to help build smarter cities in Nepal
date: 2018-04-24T18:45:40-04:00
author: codefornepal
layout: revision
guid: https://codefornepal.org/2018/04/2097-revision-v1/
permalink: /2018/04/2097-revision-v1/
---
Asia-Pacific Peace and Development Service Alliance (APPDSA), Global Peace Foundation, Global Young Leaders Academy are going to host a forum on &#8220;Smart and Green Cities Equipping Youth Social Enterprise to Achieve Sustainable Development Goals&#8221; at Bougainvilla Events, Tripureshwor (Nearby Avenues TV Plaza), on May 14 and 15, 2018.

At the event, in partnership with Code for Nepal, a group of international technical experts from IBM will deliver their extensive training to put a light on what ICT means and how it can be utilized in making of smart and green city. During the participants will learn how to maximize their coding skills and get a hands-on technical training form the experts. The participants will get equipped with blended learning formats and broaden their horizons by introducing IT into their current profession or learning environment.

Read more about the workshops below and at the end of this page sign up for the workshops.

**Who should attend these workshops: <span style="text-decoration: underline;">Developers</span>**

**Features Training Topics:**  
&#8211; IBM Cloud  
&#8211; Quantum Computing  
&#8211; Artificial Intelligence  
&#8211; Blockchain  
&#8211; Internet of Things (IoT)  
&#8211; Watson Visual Recognition

**WORKSHOP- THEME RELATED TO DISASTER RECOVERY**

**Code Pattern:** <span style="font-weight: 400;">Analyze an image and send status alert</span>

**Brief about pattern | How this will impact the society:**

<span style="font-weight: 400;">Industrial and high-tech maintenance companies often photograph their sites for potential hazards or emergencies and then inform the appropriate person who can take action to resolve the issue. A leak, fire, or malfunction can spell disaster for a company, resulting in dangerous situations for employees, downtime, public relation setbacks, and financial losses.</span>

<span style="font-weight: 400;">These companies have been leaders in using remote devices–phones, mounted cams, drones–to send images of various sites and equipment to be monitored for any malfunctions. But what if you could automatically analyze those images and send an alert about the location or potential emergency situation?</span>

<span style="font-weight: 400;">If you’re a developer working for a company that relies on site images, you can now build an application that analyzes an image and sends an alert automatically. In this code pattern, you’ll use IBM Cloud Functions to analyze an image and send it to the Watson IoT Platform. The image will be assigned a score, and that score will be evaluated to trigger any necessary alerts to reach authorities through the best available communication channel (for example, email, text, or push notifications).</span>

<span style="font-weight: 400;">You have the option to develop a standalone application that can be easily updated or modified to work from within a smart device, or run it on a browser on your laptop or phone.In the pattern use case, you’ll learn how to send an image for processing that detects a fire. (You can also use this same app for maintenance alerts or other emergency alert detections.) The fire is identified by the Watson Visual Recognition service, and the Node-RED app will subsequently notify the appropriate resources.</span>

<span style="font-weight: 400;">There are multiple ways to design this process, and you can modify the pattern to extend it to other real-world use cases, sending alerts to other designated recipients and creating additional designated channels for alert notifications.</span>

**You’ll create an app based on the following flow:**

<li style="font-weight: 400;">
  <span style="font-weight: 400;">The application takes an image from a device or uploads it from a local image folder to an IBM Cloudant NoSQL database.</span>
</li>
<li style="font-weight: 400;">
  <span style="font-weight: 400;">The Cloudant database, in turn, receives the binary data and triggers an action on IBM Cloud Functions.</span>
</li>
<li style="font-weight: 400;">
  <span style="font-weight: 400;">IBM Cloud Functions Composer performs the Visual Recognition analysis and receives a response in JSON format.</span>
</li>
<li style="font-weight: 400;">
  <span style="font-weight: 400;">The response is sent to the IoT Platform and registers itself as a device receiving the analyzed image.</span>
</li>
<li style="font-weight: 400;">
  <span style="font-weight: 400;">A Node-RED flow continues to read these events from the device on the IoT Platform and triggers alerts based on the image’s features.</span>
</li>

<span style="font-weight: 400;">More details on Code Pattern here: </span>[<span style="font-weight: 400;">https://developer.ibm.com/code/patterns/analyze-an-image-and-send-a-status-alert/</span>](https://developer.ibm.com/code/patterns/analyze-an-image-and-send-a-status-alert/)

&nbsp;

**Expected Outcome: What developers will learn**

<span style="font-weight: 400;">After completing workshop on this Code Pattern, developers will learn how to </span>

<span style="font-weight: 400;">1)Upload an image to </span>**IBM Cloudant NoSQL database** <span style="font-weight: 400;">from local device image folder</span>

<span style="font-weight: 400;">2) Trigger an action on </span>**IBM Cloud Functions(Serverless)**

<span style="font-weight: 400;">3) Register a device and send data to </span>**IoTF Platfrom**

<span style="font-weight: 400;">4) Analyze image using </span>**Watson Visual Recognition**

&nbsp;

**Who should attend this workshop:** <span style="font-weight: 400;">Developers</span>

**Pre-reqs for developers:** 

<span style="font-weight: 400;">IBM Cloud Account- </span>[<span style="font-weight: 400;">https://www.bluemix.net</span>](https://www.bluemix.net)

<span style="font-weight: 400;">IBM Cloud CLI- </span>[<span style="font-weight: 400;">https://console.bluemix.net/docs/cli/reference/bluemix_cli/download_cli.html#download_install</span>](https://console.bluemix.net/docs/cli/reference/bluemix_cli/download_cli.html#download_install)

<span style="font-weight: 400;">Openwhisk CLI- </span>[<span style="font-weight: 400;">https://github.com/apache/incubator-openwhisk-cli/releases</span>](https://github.com/apache/incubator-openwhisk-cli/releases)

<span style="font-weight: 400;">Node.JS- </span>[<span style="font-weight: 400;">https://nodejs.org/en/download/</span>](https://nodejs.org/en/download/)

<span style="font-weight: 400;">Mozilla Firefox Browser- </span>[<span style="font-weight: 400;">https://www.mozilla.org/en-US/firefox/new/</span>](https://www.mozilla.org/en-US/firefox/new/)

&nbsp;

**Infra Requirement (Laptop, Internet speed, device etc):**

<span style="font-weight: 400;">Laptop- 8GB Windows/MacOS</span>

<span style="font-weight: 400;">Internet Speed- Download speed minimum 2Mbps</span>

**MINI CODE LAB IN BOOTH- THEME RELATED TO DISASTER RECOVERY**

**Code Pattern:** <span style="font-weight: 400;">Deploy a Core ML model with Watson Visual Recognition</span>

**Brief about pattern | How this will impact the society:**

<span style="font-weight: 400;">Imagine that you’re a technician for an aircraft company and you want to identify one of the thousands of parts in front of you. </span>**_Perhaps you don’t even have internet connectivity_**_<span style="font-weight: 400;">. (</span>_**_Most of the times during disaster recovery we won’t have access to Internet connectivity_**_<span style="font-weight: 400;">)</span>_ <span style="font-weight: 400;">So how to do it? Where do you start? If only there was an app for that. Well, now you can build one!</span>

<span style="font-weight: 400;">Most visual recognition offerings rely on API calls to be made to a server over HTTP. With </span>[<span style="font-weight: 400;">Core ML</span>](https://developer.apple.com/documentation/coreml)<span style="font-weight: 400;">, you can deploy a trained model with your app. Using Watson Visual Recognition, you can train a model without any code; simply upload your images with the </span>[<span style="font-weight: 400;">Watson Studio</span>](https://dataplatform.ibm.com) <span style="font-weight: 400;">tool and deploy a trained Core ML model to your iOS application.</span>

<span style="font-weight: 400;">In this code pattern, you’ll train a custom model. With just a few clicks, you can test and export that model to be used in your iOS application. The pattern includes an example data set to help you build an application that can detect different types of cables (that is, HDMI and USB), but you can also use your own data.</span>

<span style="font-weight: 400;">More details on Code Pattern here: </span>[<span style="font-weight: 400;">https://developer.ibm.com/code/patterns/deploy-a-core-ml-model-with-watson-visual-recognition/</span>](https://developer.ibm.com/code/patterns/deploy-a-core-ml-model-with-watson-visual-recognition/)

**Expected Outcome: What developers will learn**

<span style="font-weight: 400;">When you have completed this code pattern, you should know how to:</span>

<li style="font-weight: 400;">
  <span style="font-weight: 400;">Create a data set with Watson Studio</span>
</li>
<li style="font-weight: 400;">
  <span style="font-weight: 400;">Train a Watson Visual Recognition classifier based on the data set</span>
</li>
<li style="font-weight: 400;">
  <span style="font-weight: 400;">Deploy the classifier as a Core ML model to an iOS application</span>
</li>
<li style="font-weight: 400;">
  <span style="font-weight: 400;">Use the Watson Swift SDK to download, manage, and execute the trained model</span>
</li>

**Who should attend this workshop:** <span style="font-weight: 400;">Developers</span>

**Pre-reqs for developers:** 

<span style="font-weight: 400;">IBM Cloud Account- </span>[<span style="font-weight: 400;">https://www.bluemix.net</span>](https://www.bluemix.net)

<span style="font-weight: 400;">IBM Cloud CLI- </span>[<span style="font-weight: 400;">https://console.bluemix.net/docs/cli/reference/bluemix_cli/download_cli.html#download_install</span>](https://console.bluemix.net/docs/cli/reference/bluemix_cli/download_cli.html#download_install)

<span style="font-weight: 400;">Xcode 9- </span>[<span style="font-weight: 400;">https://developer.apple.com/xcode/</span>](https://developer.apple.com/xcode/)

<span style="font-weight: 400;">Carthage- </span>[<span style="font-weight: 400;">https://github.com/Carthage/Carthage#installing-carthage</span>](https://github.com/Carthage/Carthage#installing-carthage)

**Infra Requirement (Laptop, Internet speed, device etc):**

<span style="font-weight: 400;">2 Laptop in Booth- 8GB MacOS</span>

<span style="font-weight: 400;">Internet Speed- Download speed minimum 2Mbps</span>

&nbsp;