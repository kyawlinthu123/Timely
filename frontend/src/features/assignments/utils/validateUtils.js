// utils/validationUtils.js
export const validateDueDate = (dueDateString) => {
  if (!dueDateString) return true; // optional field

  const dueDate = new Date(dueDateString);
  const now = new Date();
  const maxDate = new Date();
  maxDate.setFullYear(now.getFullYear() + 5); // Allow up to 5 years in future

  if (isNaN(dueDate.getTime())) {
    throw new Error("Invalid date format.");
  }
  if (dueDate < now) {
    throw new Error("Due date cannot be in the past.");
  }
  if (dueDate > maxDate) {
    throw new Error("Due date is too far in the future.");
  }

  return true;
};
