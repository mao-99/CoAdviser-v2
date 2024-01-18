import { writable } from "svelte/store";
import type { Courses, CourseID } from "./types";
import { get } from "svelte/store";

export const courses = writable<Courses>([
  { id: 1, name: "ENG 111", credits: 3, taken: false, prereqs: [], coreqs: [] }, 
  { id: 2, name: "MTH 229", credits: 1, taken: false, prereqs: [], coreqs: [3] },
  { id: 3, name: "MTH 231", credits: 3, taken: false, prereqs: [], coreqs: [2] },
  { id: 4, name: "PHY 121", credits: 1, taken: false, prereqs: [], coreqs: [5, 3] },
  { id: 5, name: "PHY 120", credits: 3, taken: false, prereqs: [], coreqs: [4] },
  { id: 6, name: "ENS 110", credits: 2, taken: false, prereqs: [], coreqs: [] },
  { id: 7, name: "ENS 100", credits: 2, taken: false, prereqs: [], coreqs: [] },
  { id: 8, name: "ENS 136", credits: 2, taken: false, prereqs: [7], coreqs: [] },
  { id: 9, name: "ENG 151", credits: 3, taken: false, prereqs: [1], coreqs: [] },
  { id: 10, name: "MTH 232", credits: 3, taken: false, prereqs: [3], coreqs: [] },
  { id: 11, name: "PHY 161", credits: 1, taken: false, prereqs: [], coreqs: [12] },
  { id: 12, name: "PHY 160", credits: 3, taken: false, prereqs: [5], coreqs: [11, 10] },
  { id: 13, name: "ENS 220", credits: 4, taken: false, prereqs: [], coreqs: [] },
  { id: 14, name: "CSC 270", credits: 4, taken: false, prereqs: [3], coreqs: [] },
  { id: 15, name: "FWGR or FISR", credits: 3, taken: false, prereqs: [], coreqs: [] },
  { id: 16, name: "FWGR or FISR", credits: 3, taken: false, prereqs: [], coreqs: [] },
  { id: 17, name: "FUSR", credits: 3, taken: false, prereqs: [1], coreqs: [] },
  { id: 18, name: "MTH 233", credits: 3, taken: false, prereqs: [17], coreqs: [] },
  { id: 19, name: "ENS 241", credits: 4, taken: false, prereqs: [10, 12], coreqs: [] },
  { id: 20, name: "ENS 250", credits: 3, taken: false, prereqs: [7, 4, 5], coreqs: [17] },
  { id: 21, name: "ENS 221", credits: 2, taken: false, prereqs: [20], coreqs: [] },
  { id: 22, name: "MTH 330", credits: 4, taken: false, prereqs: [17], coreqs: [] },
  { id: 23, name: "ENS 249", credits: 2, taken: false, prereqs: [18, 1], coreqs: [] },
  { id: 24, name: "ENS 310", credits: 4, taken: false, prereqs: [12, 17], coreqs: [] },
  { id: 25, name: "CHM 121", credits: 1, taken: false, prereqs: [], coreqs: [25] },
  { id: 26, name: "CHM 141", credits: 3, taken: false, prereqs: [], coreqs: [24] },
  { id: 27, name: "MTH 311 (or MTH 331)", credits: 4, taken: false, prereqs: [17], coreqs: [] },
  { id: 28, name: "ENS 336", credits: 4, taken: false, prereqs: [], coreqs: [] },
  { id: 29, name: "ENS 362", credits: 4, taken: false, prereqs: [13], coreqs: [] },
  { id: 30, name: "ENS 331", credits: 4, taken: false, prereqs: [10, 20], coreqs: [] },
  { id: 31, name: "ECO 251 or ECO 285", credits: 4, taken: false, prereqs: [9], coreqs: [] },
  { id: 32, name: "PHY 240", credits: 3, taken: false, prereqs: [12, 21], coreqs: [] },
  { id: 33, name: "ENS 371", credits: 3, taken: false, prereqs: [21, 18, 23], coreqs: [] },
  { id: 34, name: "ENS 439", credits: 2, taken: false, prereqs: [22], coreqs: [] },
  { id: 35, name: "CSC 326", credits: 4, taken: false, prereqs: [27], coreqs: [] },
  { id: 36, name: "FCER", credits: 3, taken: false, prereqs: [], coreqs: [] },
  { id: 37, name: "CSC/ENS 446", credits: 4, taken: false, prereqs: [13], coreqs: [] },
  { id: 38, name: "CE Adv. Tech. Elective", credits: 4, taken: false, prereqs: [], coreqs: [] },
  { id: 39, name: "ENS 491", credits: 2, taken: false, prereqs: [33, 34, 27, 28], coreqs: [] },
  { id: 40, name: "CSC 332", credits: 3, taken: false, prereqs: [28, 34], coreqs: [40] },
  { id: 41, name: "CSC 305", credits: 1, taken: false, prereqs: [28, 34], coreqs: [39] },
  { id: 42, name: "ENS 485", credits: 4, taken: false, prereqs: [31], coreqs: [] },
  { id: 43, name: "ENS 492", credits: 2, taken: false, prereqs: [30, 32, 38], coreqs: [] },
  { id: 44, name: "Free Elect", credits: 4, taken: false, prereqs: [], coreqs: [] },
  { id: 45, name: "CE Adv. Tech. Elective", credits: 4, taken: false, prereqs: [], coreqs: [] }
]);

export function getCourse(id: CourseID) {
  return get(courses).find((c) => c.id === id);
}


/*
 * ("ENG 111", 3, [], [])
 * ("MTH 229", 1, [], ["MTH 231"])
 * ("MTH 231", 3, [], ["MTH 229"])
 * ("PHY 121", 1, [], ["PHY 120", "MTH 231"])
 * ("PHY 120", 3, [], ["PHY 121"])
 * ("ENS 110", 2, [], [])
 * ("ENS 100", 2, [], [])
 * ("ENS 136", 2, [], ["ENS 100"])
 * ("ENG 151", 3, ["ENG 111"])
 * ("MTH 232", 3, ["MTH 231"], [])
 * ("PHY 161", 1, [], ["PHY 160"])
 * ("PHY 160", 3, ["PHY 120"], ["PHY 161", "MTH 232"])
 * ("ENS 220", 4, ["ENS 136"], [])
 * ("CSC 270", 4, ["MTH 231"], [])
 * ("FWGR or FISR", 3, [], [])
 * ("FWGR or FISR", 3, [], [])
 * ("FUSR", 3, ["ENG 111"], [])
 * ("MTH 233", 3, ["MTH 233"], [])
 * ("ENS 241", 4, ["MTH 232", "PHY 160"], [])
 * ("ENS 250", 3, ["ENS 100", "PHY 121", "PHY 120"], ["MTH 233"])
 * ("ENS 221", 2, ["ENS 221"], [])
 * ("MTH 330", 4, ["MTH 233"], [])
 * ("ENS 249", 2, ["ENS 241", "ENG 111"], [])
 * ("ENS 310", 4, ["PHY 160", "MTH 233"], [])
 * ("CHM 121", 1, [], ["CHM 141"])
 * ("CHM 141", 3, [], ["CHM 121"])
 * ("MTH 311 (or MTH 331)", 4, ["MTH 233"], [])
 * ("ENS 336", 4, ["ENS 270", "ENS 136", "MTH 330"], [])
 * ("ENS 362", 4, ["ENS 220"], [])
 * ("ENS 331", 4, ["MTH 232", "ENS 221"], [])
 * ("ECO 251 or ECO 285", 4, ["ENG 151"], [])
 * ("PHY 240", 3, ["PHY 160", "MTH 330"], [])
 * ("ENS 371", 3, ["MTH 330", "ENS 241", "ENS 310"], [])
 * ("ENS 439", 2, ["ENS 249"], [])
 * ("CSC 326", 4, ["ENS 336"], [])
 * ("FCER", 3, [], [])
 * ("CSC/ENS 446", 4, ["ENS 220"], [])
 * ("CE Adv. Tech. Elective", 4, [], [])
 * ("ENS 491", 2, ["ENS 439", "CSC 326", "ENS 336", "ENS 362"], [])
 * ("CSC 332", 3, ["ENS 362", "CSC 326"], ["CSC 305"])
 * ("CSC 305", 1, ["ENS 362", "CSC 326"], ["CSC 332"])
 * ("ENS 485", 4, ["PHY 240"], [])
 * ("ENS 492", 2, ["ECO 251 or ECO 285", "ENS 371", "ENS 491"], [])
 * ("Free Elect", 4, [], [])
 * ("CE Adv. Tech. Elective", 4, [], [])
 * -------------------------------------------------------------------------
 */
