export { fetchUsersData };

const fetchUsersData = async () => {
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await res.json();
      return data;
      
    } catch (error) {
      console.error('Error:' + error);
      // alert(error);
    }
  };

  
 