# Practice Exercise #8 – Blog Posts (React + API)

## Description

In this exercise, you’ll build a small React application that fetches and displays blog posts using the following API:
👉 [https://jsonplaceholder.typicode.com/posts](https://jsonplaceholder.typicode.com/posts)

## Requirements

### 1. Fetch and Display Posts

When the application starts, fetch all posts from the API and render each post using a `<Post />` component.
Each post should display:

* The **title** of the post
* The **body text** of the post

At the bottom of each post, include a button that displays information about the **user** who wrote the post.

### 2. Show User Information

When the button is clicked, render a `<UserInfo />` component **inside** the `<Post />` component.

The `<UserInfo />` component should fetch user data from the `/users` endpoint using the `userId` associated with the post.
Example:
If a post has `userId = 3`, fetch the data from:
👉 [https://jsonplaceholder.typicode.com/users/3](https://jsonplaceholder.typicode.com/users/3)

The `<UserInfo />` component should display:

* The user’s **username**
* The user’s **email**
* The user’s **city**

### 3. (Extra) Load Comments Automatically

As an extra feature, make each `<Post />` component automatically load its associated comments using the `/comments` endpoint:
👉 [https://jsonplaceholder.typicode.com/comments/](https://jsonplaceholder.typicode.com/comments/)

Each post should display its corresponding comments filtered by `postId`.
