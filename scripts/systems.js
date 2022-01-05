import dnd5e from "./systems/dnd5e.js";

// ↓ IMPORT SYSTEMS HERE ↓
import pf1 from "./systems/pf1.js";
// ↑ IMPORT SYSTEMS HERE ↑

/**
 * NOTE: YOUR PULL REQUEST WILL NOT BE ACCEPTED IF YOU DO NOT
 * FOLLOW THE CONVENTION IN THE D&D 5E SYSTEM FILE
 */
export const SYSTEMS = {
    get DATA() {
        return {
            dnd5e,
            // ↓ ONLY ADD SYSTEMS HERE ↓
            pf1,
            // ↑ AND ONLY HERE ↑
        }?.[game.system.id] ?? dnd5e;
    }
};