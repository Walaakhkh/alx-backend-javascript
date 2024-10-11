// task_5/js/main.ts

// Interface MajorCredits
interface MajorCredits {
  credits: number;
  // Adding a brand property to uniquely identify MajorCredits
  brand: "MajorCredits";
}

// Interface MinorCredits
interface MinorCredits {
  credits: number;
  // Adding a brand property to uniquely identify MinorCredits
  brand: "MinorCredits";
}

// Function to sum MajorCredits
function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: "MajorCredits"
  };
}

// Function to sum MinorCredits
function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: "MinorCredits"
  };
}

// Example usage (optional)
const major1: MajorCredits = { credits: 30, brand: "MajorCredits" };
const major2: MajorCredits = { credits: 25, brand: "MajorCredits" };
const minor1: MinorCredits = { credits: 10, brand: "MinorCredits" };
const minor2: MinorCredits = { credits: 15, brand: "MinorCredits" };

console.log("Sum of Major Credits:", sumMajorCredits(major1, major2));
console.log("Sum of Minor Credits:", sumMinorCredits(minor1, minor2));
