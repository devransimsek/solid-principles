class BlogPost {
  constructor(public title: string, public content: string) {}

  saveToFile(): void {
    console.log(`Saving ${this.title} to a file...`);
  }

  sendEmailToSubscribers(): void {
    console.log(`Sending email about: ${this.title}`);
  }
}

const post = new BlogPost('SOLID in TypeScript', '...');
post.saveToFile();
post.sendEmailToSubscribers();
