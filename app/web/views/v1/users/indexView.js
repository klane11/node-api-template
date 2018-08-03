module.exports = (users) => {

  return {
    status_code: 1000,
    data: users.map((user) => {
      return {
        id: user.id,
        email: user.email,
        first_name: user.first_name,
        last_name: user.last_name,
        created_at: user.created_at,
        updated_at: user.updated_at,
      };
    })
  };
};
