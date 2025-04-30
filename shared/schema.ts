import { pgTable, text, serial, integer, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const waitlistEntries = pgTable("waitlist_entries", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  company: text("company").notNull(),
  selectedInfluencers: text("selected_influencers"),
  createdAt: text("created_at").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertWaitlistEntrySchema = createInsertSchema(waitlistEntries).pick({
  name: true,
  email: true,
  company: true,
  selectedInfluencers: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export type InsertWaitlistEntry = z.infer<typeof insertWaitlistEntrySchema>;
export type WaitlistEntry = typeof waitlistEntries.$inferSelect;

// Types for frontend
export type Platform = "Instagram" | "TikTok" | "YouTube" | "Spotify" | "Twitter";

export type AudienceSize = "Micro" | "Mid-tier" | "Macro" | "Mega";

export type Category = "Fashion" | "Beauty" | "Lifestyle" | "Travel" | "Fitness" | "Food" | "Tech" | "Music";

export type Influencer = {
  id: number;
  name: string;
  category: string;
  followers: number;
  engagement: number;
  ctr: number;
  image: string;
  platforms: Platform[];
  audienceSize: AudienceSize;
  lastCampaign: number;
};
