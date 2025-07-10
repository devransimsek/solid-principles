type User = {
  name: string;
  surname: string;
  getReport: () => object;
};

const user1: User = {
  name: "Name",
  surname: "surname",
  getReport() {
    console.log("getReport called for User 1");
    return {
      name: this.name,
      surname: this.surname,
    };
  },
};

type AdminUser = User & {
  roles: [];
};

const adminUser: AdminUser = {
  name: "Name",
  surname: "surname",
  roles: [],
  getReport() {
    console.log("getReport called for Admin User");
    return {
      name: this.name,
      surname: this.surname,
      roles: this.roles,
    };
  },
};

function generateUserReport(user: User) {
  return user.getReport();
}

generateUserReport(user1);
generateUserReport(adminUser);
