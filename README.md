# WEB103 Prework - *👉🏿 Creatorverse*

Submitted by: **👉🏿 Dahlia Sukaik**

About this web app: **👉🏿 Creatorverse is a web application that allows users to manage and share their favorite content creators across various platforms like Twitch, YouTube, Instagram, and more. Users can easily add, edit, view, and delete content creators, providing a brief description, URL, and optional image for each. The app also features search functionality, pagination, and intuitive icons for quick actions, enhancing the overall user experience.**

Time spent: **👉🏿 20** hours

## Required Features

The following **required** functionality is completed:

<!-- 👉🏿👉🏿👉🏿 Make sure to check off completed functionality below -->
- [x] **A logical component structure in React is used to create the frontend of the app**
- [x] **At least five content creators are displayed on the homepage of the app**
- [x] **Each content creator item includes their name, a link to their channel/page, and a short description of their content**
- [x] **API calls use the async/await design pattern via Axios or fetch()**
- [x] **Clicking on a content creator item takes the user to their details page, which includes their name, url, and description**
- [x] **Each content creator has their own unique URL**
- [x] **The user can edit a content creator to change their name, url, or description**
- [x] **The user can delete a content creator**
- [x] **The user can add a new content creator by entering a name, url, or description and then it is displayed on the homepage**

The following **optional** features are implemented:

- [x] Picocss is used to style HTML elements
- [x] The content creator items are displayed in a creative format, like cards instead of a list
- [x] An image of each content creator is shown on their content creator card

The following **additional** features are implemented:

- [x] Each creator card includes intuitive icons for quickly accessing the creator's link, editing, and deleting the creator
- [x] A search bar is provided to allow users to quickly find specific content creators by searching for names or descriptions
- [x] Pagination is implemented to efficiently handle large lists of content creators, displaying a set number of creators per page and allowing users to navigate through multiple pages

## Video Walkthrough

Here's a walkthrough of implemented required features:

👉🏿<img src='video/creatorverse-gif.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

<!-- Replace this with whatever GIF tool you used! -->
GIF created with ...  👉🏿 ScreenToGif
<!-- Recommended tools:
[Kap](https://getkap.co/) for macOS
[ScreenToGif](https://www.screentogif.com/) for Windows
[peek](https://github.com/phw/peek) for Linux. -->

## Notes

### Challenges Encountered

1. **Pagination Handling**: Ensuring pagination worked correctly without navigating away from the page required careful handling of anchor tag behaviors and preventing default actions.
2. **Search and Filter**: Implementing a dynamic search and filter feature that updates displayed creators in real-time posed challenges, particularly in maintaining efficient filtering and correct pagination updates.
3. **Styling Consistency**: Achieving consistent and responsive design across different components was challenging, especially when integrating PicoCSS with custom styles.
4. **Error Handling**: Providing robust error handling for various asynchronous operations (e.g., fetching data, updating, deleting) to ensure meaningful user feedback and smooth experience.
5. **Hover Effects for Icons**: Adding hover effects for icons and ensuring additional text appeared correctly without disrupting the layout required precise CSS adjustments and testing.

### Additional Context

1. **Choice of PicoCSS**: Chosen for its minimalist design and ease of use, helping quickly set up a visually appealing layout. Integration with custom components required careful handling to avoid conflicts.
2. **User Experience Enhancements**: Adding confirmation prompts before deleting a creator and hover text for action icons to enhance user experience and prevent accidental actions.

## License

Copyright [👉🏿 2024] [👉🏿 Dahlia Sukaik]

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

> http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
