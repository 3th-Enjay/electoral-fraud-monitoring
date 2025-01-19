class User {
  static userCount = 0; // Static property shared among all instances

  constructor(userID, name, role) {
    this.userID = userID;
    this.name = name;
    this.role = role;
    User.userCount += 1;
  }

  authenticate() {
    console.log(`Authenticating user: ${this.name}`);
  }

  viewDashboard() {
    console.log(`${this.name} is viewing the dashboard.`);
  }

  static getUserCount() {
    console.log(`Total users: ${User.userCount}`);
  }
}

module.exports = User;
