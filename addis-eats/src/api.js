export const loadDishes = async (signal, category) => {
  try {
    const res = await fetch('/dishes.json', { signal });
    if (!res.ok) {
      throw new Error(`Failed to load dishes: ${res.status} ${res.statusText}`);
    }
    const data = await res.json();
    
    if (category && category !== 'All') {
      return data.filter(dish => dish.category === category);
    }
    return data;
  } catch (error) {
    throw error;
  }
};
