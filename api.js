const fetchUsersData = async () => {
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await res.json();
      const emails = data.map(data => data.email);
      const names = data.map(data => data.name);
      const usernames = data.map(data => data.username);
      return {data, emails, names, usernames};
      
    } catch (error) {
      console.error('Error:' + error);
    //   alert(error);
    }
  };

  
export { fetchUsersData };
 