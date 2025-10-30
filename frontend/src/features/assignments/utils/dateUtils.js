// This function is for formatting the date of deadline from assignment in Assignment Card jsx
export const formatDate = (dateString) => {
    if (!dateString) return 'No date';
    
    try {
      const date = new Date(dateString);
      // Check if date is valid
      if (isNaN(date.getTime())) return 'Invalid date';
      
      return date.toLocaleDateString('en-US', { 
        month: 'short', 
        day: 'numeric', 
        year: 'numeric' 
      });
    } catch (error) {
      return 'Invalid date';
    }
  };