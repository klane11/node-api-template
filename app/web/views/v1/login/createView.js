module.exports = (user) => {
  return {
    status_code: 1000,
    data: {
      id: user.id,
      first_name: user.first_name,
      last_name: user.last_name,
      email: user.email,
    }
  };
};
