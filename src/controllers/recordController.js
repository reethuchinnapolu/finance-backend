const Record = require("../models/Record");

exports.createRecord = async (req, res) => {
  const record = await Record.create({
    ...req.body,
    userId: req.user.id
  });

  res.json(record);
};

exports.getRecords = async (req, res) => {
  const records = await Record.find({ isDeleted: false });
  res.json(records);
};

exports.updateRecord = async (req, res) => {
  const record = await Record.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.json(record);
};

exports.deleteRecord = async (req, res) => {
  await Record.findByIdAndUpdate(req.params.id, { isDeleted: true });
  res.json({ message: "Deleted" });
};
