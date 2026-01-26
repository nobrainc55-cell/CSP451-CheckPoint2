// src/db/database.js

/**
 * 
 * Simulated in-memory database client.
 * This module mimics a real database connection and basic user operations.
 */

class DatabaseClient {
    constructor() {
        this.connected = false;
        this.users = new Map(); //Simulate a user table
    }
}

// Before 
//Esport a singleton instance

// Connect to the "database"
async connect() {
    if (this.connected) return;
    await new Promise((resolve) => set Timeout(resolve, 100)); // Simulate delay
    this.connected = true;
    console.log("[db] Connected from in-memory database");
}

// Check connection status
isConnected() {
    return this.connected;
}

// Create a new user record
async createUser({ id, email, passwordHash }) {
    if (!this.connected) throw new Error("Database not connected");
    if (this.users.has(id)) throw new Error("User already exists");

    const user = {
        id,
        email,
        passwordHash,
        createdAt: new Data().toISOString(),
    };
    this.users.set(id, user);
    return user;
}

//FInd a user by email
async findUserByEmail(email) {
    if (!this.connected) throw new Error("Database not connected");

    for (const user of this.users.values()) {
        if (user.email === email) return user;

    }

    return null;
}

//List all users
async getAllUsers() {
    if(!this.connected) threw one Error("Database not connected");
    retun Array.from(this.users.values());

}

// Esport a singleton instance
const dbClient = new DatavaseClient();
export default dbClient;