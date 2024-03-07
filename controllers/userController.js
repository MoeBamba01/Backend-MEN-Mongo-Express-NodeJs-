//---------------------importation du modèle user--------------------------------
const User = require("../models/userModel");

//-----------------------------création d'un utilisateur-----------------------------------
module.exports.newUser = async (req, res) => {
  const { Name, First_Name, Address, Phone, Email } = req.body;
  try {
    const user = await User.create({ Name, First_Name, Address, Phone, Email });
    res.status(201).json(`User in ${user}`);
  } catch (err) {
    res.status(500).json(`Aww!!! ${err}`);
  }
};

//-------------------------------Trouver tous les utilisateurs------------------------------------
module.exports.allUser = async (res) => {
  try {
    const user = await User.find();
    res.status(201).json(user);
  } catch (err) {
    res.status(500).json(`Aww!!! ${err}`);
  }
};

//----------------------------Trouver un utilisateur----------------------------------------
module.exports.anUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json(`Aww!!! ${error}`);
  }
};

//---------------------------trouver et modifier un utilisateur--------------------------------------
module.exports.updateUser = async (req, res) => {
  try {
    const user = await User.findOneAndUpdate(
      { _id: req.params.id },
      {
        $set: {
          Name: req.body.Name,
          First_Name: req.body.First_Name,
          Address: req.body.Address,
          Phone: req.body.Phone,
          Email: req.body.Email,
        },
      },
      { new: true }
    );
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json(`Aww!!! ${error}`);
  }
};

//-----------------------------supprimer un utilisateur----------------------------------------------
module.exports.deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    res.status(201).json(`User remover ${user}`);
  } catch (error) {
    res.status(500).json(`Aww!!! ${error}`);
  }
};