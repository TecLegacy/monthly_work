const getUser = (req, res) => {
  res.status(200).json({
    message: 'User controller',
  });
};

module.exports = { getUser };
