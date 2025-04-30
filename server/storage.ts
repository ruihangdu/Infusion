import { users, type User, type InsertUser } from "@shared/schema";
import { 
  waitlistEntries, 
  type WaitlistEntry, 
  type InsertWaitlistEntry 
} from "@shared/schema";

// Storage interface with CRUD methods
export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createWaitlistEntry(entry: InsertWaitlistEntry & { createdAt: string }): Promise<WaitlistEntry>;
  getAllWaitlistEntries(): Promise<WaitlistEntry[]>;
  getWaitlistEntryByEmail(email: string): Promise<WaitlistEntry | undefined>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private waitlist: Map<number, WaitlistEntry>;
  private userCurrentId: number;
  private waitlistCurrentId: number;

  constructor() {
    this.users = new Map();
    this.waitlist = new Map();
    this.userCurrentId = 1;
    this.waitlistCurrentId = 1;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.userCurrentId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createWaitlistEntry(
    entry: InsertWaitlistEntry & { createdAt: string }
  ): Promise<WaitlistEntry> {
    const id = this.waitlistCurrentId++;
    
    const waitlistEntry: WaitlistEntry = {
      ...entry,
      id,
    };
    
    this.waitlist.set(id, waitlistEntry);
    return waitlistEntry;
  }

  async getAllWaitlistEntries(): Promise<WaitlistEntry[]> {
    return Array.from(this.waitlist.values());
  }

  async getWaitlistEntryByEmail(email: string): Promise<WaitlistEntry | undefined> {
    return Array.from(this.waitlist.values()).find(
      (entry) => entry.email === email
    );
  }
}

export const storage = new MemStorage();
