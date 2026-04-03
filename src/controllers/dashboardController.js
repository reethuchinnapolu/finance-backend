const Record = require("../models/Record");

exports.getSummary = async (req, res) => {
  const records = await Record.find({ isDeleted: false });

  let income = 0, expense = 0;

  records.forEach(r => {
    if (r.type === "INCOME") income += r.amount;
    else expense += r.amount;
  });

  res.json({
    totalIncome: income,
    totalExpense: expense,
    netBalance: income - expense
  });
};
