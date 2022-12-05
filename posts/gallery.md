---
title: 'The photo gallery...From hell'
date: '2022-09-19'
img: '/images/galleryImg.png'

---

**React Photo Gallery**
The idea behind this project was to use React to create an app that renders images dynamically, counts likes, pictures can be "flipped" to show a description etc. The basic functionality was relatively straightforward to achieve, which left lots of time to work with MUI to style the cards in what ended up as a bright white-on-white gallery, which in retrospect might not have been the best choice but I liked how it made the flower images pop (Pictures I've taken at the MN Landscape Arboretum). The problems started when I tried to utilize Multer to allow a file upload, on my main branch and broke everything. I spent all of my free time over the next two days banging my head against a series of problems created by my desire to add something extra. I did eventually get it sorted back to funcionality, however I was never able to correctly manage the rerender after the upload, it always required a manual refresh. The experience was painful, however I learned so much over those few days about how different types of HTTP requests function, reading documentation, different forms of DOM manipulation, and how (not) to control your own versions of the app you are developing. I also realized the importance of doing more planning before diving in, especially with a new tech! While I suffered a great deal with this project and I wasn't entirely excited about the end state, I learned so much that I'm not too dissapointed about it.


[Gallery Repo](https://github.com/kjensen19/Weekend-react-gallery)