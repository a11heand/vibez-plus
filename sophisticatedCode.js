/*
   Filename: sophisticatedCode.js
   
   Description: This code demonstrates a sophisticated and elaborate implementation of a social network feed. It includes various functionalities such as posting, commenting, liking/disliking, and tagging users in posts. The code is designed to handle a large number of users and posts efficiently.
*/

// Define the User class
class User {
   constructor(name, age, email) {
      this.name = name;
      this.age = age;
      this.email = email;
      this.posts = [];
   }

   post(content) {
      const post = new Post(content, this);
      this.posts.push(post);
      return post;
   }

   comment(post, message) {
      const comment = new Comment(message, this);
      post.comments.push(comment);
   }

   like(post) {
      post.likes.push(this);
   }

   dislike(post) {
      post.dislikes.push(this);
   }

   tag(post, user) {
      post.tags.push(user);
   }
}

// Define the Post class
class Post {
   constructor(content, author) {
      this.content = content;
      this.author = author;
      this.likes = [];
      this.dislikes = [];
      this.comments = [];
      this.tags = [];
   }
}

// Define the Comment class
class Comment {
   constructor(message, author) {
      this.message = message;
      this.author = author;
   }
}

// Create some users
const user1 = new User("John", 25, "john@example.com");
const user2 = new User("Alice", 30, "alice@example.com");
const user3 = new User("Bob", 28, "bob@example.com");

// Users post on the social network
const post1 = user1.post("Hello world!");
user2.comment(post1, "Nice post!");
user3.comment(post1, "I agree!");

const post2 = user2.post("Just had a great lunch!");
user1.like(post2);
user3.comment(post2, "What did you eat?");

// Output the posts and comments
console.log("Posts:");
console.log(post1);
console.log(post2);

console.log("Comments on post1:");
for (const comment of post1.comments) {
   console.log(comment);
}

console.log("Comments on post2:");
for (const comment of post2.comments) {
   console.log(comment);
}

console.log("Likes on post1:");
for (const user of post1.likes) {
   console.log(user.name);
}

console.log("Dislikes on post1:");
for (const user of post1.dislikes) {
   console.log(user.name);
}

console.log("Tags on post1:");
for (const user of post1.tags) {
   console.log(user.name);
}