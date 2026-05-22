const adminAuth = (req, res, next) => {
  const isAuthenticated = true;
  if (!isAuthenticated) {
    res.status(401).send("Unauthenticated request.");
  } else {
    next();
  }
};

const userAuth = (req, res, next) => {
  const isAuthenticated = false;
  if (!isAuthenticated) {
    res.status(401).send("Unauthenticated request.");
  } else {
    next();
  }
};

module.exports = { adminAuth, userAuth };
