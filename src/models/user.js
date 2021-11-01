module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastName: {
        type: DataTypes.STRING,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
      },
      profilePic: {
        type: DataTypes.STRING,
      },
      isAdmin: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      verifyToken: {
        type: DataTypes.STRING,
        defaultValue: null,
      },
      tokenPassRecovery: {
        type: DataTypes.STRING,
        defaultValue: null,
      },
      tokenPassRecoveryDate: {
        type: DataTypes.DATE,
        defaultValue: null,
      },
      isVerified: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
    },
    {
      defaultScope: {
        attributes: {
          exclude: [
            'password',
            'verifyToken',
            'isAdmin',
            'tokenPassRecovery',
            'tokenPassRecoveryDate',
          ],
        },
      },
      scopes: {
        withSecretColumns: {
          attributes: {
            include: [
              'password',
              'verifyToken',
              'isAdmin',
              'tokenPassRecovery',
              'tokenPassRecoveryDate',
            ],
          },
        },
      },
    },
  );
  User.associate = function (models) {
    // associations can be defined here
  };
  return User;
};
