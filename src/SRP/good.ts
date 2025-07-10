class Post {
  constructor(public title: string, public content: string) {}
}

class BlogPostService {
  saveToFile(post: Post): void {
    console.log(`Saving blog post to a file...`);
  }
}

class EmailService {
  send(post: Post): void {
    console.log(`Sending email about: ${post.title}`);
  }
}

const post1 = new Post("SOLID in TypeScript", "...");

const emailService = new EmailService();
emailService.send(post1);

const blogPostService = new BlogPostService();
blogPostService.saveToFile(post1);
