---
id: 1913
title: 'Understanding the patterns: Business Data added in NepalMap'
date: 2017-09-01T12:09:46-04:00
author: Nikesh Balami
layout: revision
guid: https://codefornepal.org/2017/09/1904-revision-v1/
permalink: /2017/09/1904-revision-v1/
---
<span style="font-weight: 400;">As the use and impact of <a href="http://nepalmap.org"><span style="color: #0000ff;">NepalMap</span></a> increases day by day, we at Code for Nepal are working hard to make sure the users are getting direct benefits by publishing new stories with facts, adding new datasets and teaching people how to use it through events. </span>[<span style="font-weight: 400;"><span style="color: #0000ff;">NepalMap</span></span>](https://nepalmap.org) <span style="font-weight: 400;">aims to make data on Nepal more accessible and understandable by creating user-friendly data visualizations on key demographic issues.</span>

<span style="font-weight: 400;">After adding <a href="http://nepalmap.org/profiles/country-NP-nepal/#elections-voters"><span style="color: #0000ff;">Local Election Data</span></a> at NepalMap, We recently added the </span><span style="color: #0000ff;"><a href="http://www.ocr.gov.np/index.php/en/data/o-g-d"><span style="font-weight: 400;">business data</span></a></span> <span style="font-weight: 400;">so that users can get the whole overview and growth rate of business in Nepal. A year ago,<span style="color: #0000ff;"> <a href="http://ocr.gov.np">Office of Company Registrar Nepal</a> </span>embarked the </span><span style="color: #0000ff;"><a href="http://www.ocr.gov.np/index.php/en/data/o-g-d"><span style="font-weight: 400;">OCR Open Government Data (OGD) initiative</span></a></span> <span style="font-weight: 400;">to increase access to company data and wants to create an ecosystem of OGD to increase the usability of data and realize the benefits. They opened the data regarding company registration from 2002 till 2072 BS for download and reuse in CSV and XML format.</span>

<span style="font-weight: 400;">Despite huge possibilities of data-based storytelling, only a few had used those sources of data. So, we decided to feature the data in <a href="http://nepalmap.org"><span style="color: #0000ff;">NepalMap</span></a>.</span>

<span style="font-weight: 400;">To find the right pattern to present business data at <a href="http://nepalmap.org">NepalMap</a>, We go through different phases just to make sure the data visualization we create can be easily understandable and meaningful.</span>

<span style="color: #800000;"><strong>First Phase: Sorting the whole dataset</strong></span>

<span style="font-weight: 400;">In the first phase we analysis the whole available datasets and sorted it according to the year wise and districts wise. For this we replace the district code with district name and removed the other unwanted parts, this gave us an opportunity to understand the company data better. All the filtered and sorted datasets are in available openly at </span>[<span style="font-weight: 400;"><span style="color: #0000ff;">GitHub for reuse.</span></span>](https://github.com/nikeshbalami/company-data)

<span style="color: #800000;"><strong>Second Phase: Finding the patterns to present the data</strong></span>

<span style="font-weight: 400;">For this we used 10 years long civil war as our key point, Keeping the date of civil war as a break point, we divided the whole datasets into three parts: before the civil war, during the civil war, and after civil war.</span>

[<img class="wp-image-1905 aligncenter" src="https://codefornepal.org/wp-content/uploads/2017/09/era-300x176.png" alt="" width="701" height="412" srcset="https://codefornepal.org/wp-content/uploads/2017/09/era-300x176.png 300w, https://codefornepal.org/wp-content/uploads/2017/09/era-768x451.png 768w, https://codefornepal.org/wp-content/uploads/2017/09/era.png 827w" sizes="(max-width: 701px) 100vw, 701px" />](https://codefornepal.org/wp-content/uploads/2017/09/era.png)

<span style="font-weight: 400;">We also present data according to a decade and its business types: Private, Public, Foreign and Non-profit.</span>

<span style="color: #800000;"><strong>Third Phase: Presenting the data</strong></span>

<span style="font-weight: 400;">We used Bar Charts to present both Era and Decade data, although we had some discussion of using Histogram for presentation. Let us know if you think presenting this data in different visualization would be better.</span>

[<img class="wp-image-1906 aligncenter" src="https://codefornepal.org/wp-content/uploads/2017/09/total-and-types-300x208.png" alt="" width="727" height="504" srcset="https://codefornepal.org/wp-content/uploads/2017/09/total-and-types-300x208.png 300w, https://codefornepal.org/wp-content/uploads/2017/09/total-and-types-768x534.png 768w, https://codefornepal.org/wp-content/uploads/2017/09/total-and-types-1024x711.png 1024w, https://codefornepal.org/wp-content/uploads/2017/09/total-and-types.png 1071w" sizes="(max-width: 727px) 100vw, 727px" />](https://codefornepal.org/wp-content/uploads/2017/09/total-and-types.png)

**We are also looking for some others sources of data which can be featured at NepalMap, let us know what kinds of datasets would you like to see at [NepalMap](http://nepalmap.org) next.**