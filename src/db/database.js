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

// Connect to the "database"
async connect() {
    if (this.connected) return;
    await new Promise((resolve) => set Timeout(resolve, 100)); // Simulate delay
    this.connected = true;
    console.log("[db] Disconnected from in-memory database");
}

// Check connection status
isConnected() {
    return this.connected;
}