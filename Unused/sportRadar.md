---
title: 'A new challenger has appeared... Or please hire me'
date: '2022-10-26'
img: '/images/SRimg.png'
---

***API Based Coding Challenge**
- The basic challenge was to access a collection of **API** endpoints to extract player or team data, transform that data into the requested pieces, and then load it to a **CSV** file. 
- The app presents two inputs for player(ID and Seaosn) or two inputs for team(ID and Season) information. These parameters are captured and sent to the server via a **GET** request, on the server side the **params** are extracted and then used in the requisite **API** endpoints. 
- The **API** calls are made **concurrently**, utilizing **async** functions to create an array of **promises** that contain the needed data once fulfilled. 
- This data is parsed to extract the actual required pieces and then a **CSV** file is constructed with headers and the data. 
- This file is sent back to the client as a **downloadable CSV**.


[NHL API Repo](https://github.com/kjensen19/srAPIChallenge)