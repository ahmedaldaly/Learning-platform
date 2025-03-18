const asynchandler = require("express-async-handler");
const { user } = require("../module/User");
const jwt = require('jsonwebtoken');
module.exports.AllUser = asynchandler(async (req, res) => {
  const find = await user.find();
  if (!find) res.status(404).json({ message: "لا يوجد مستخدمين" });
  res.status(200).json(find);
});

module.exports.DeleteUser = asynchandler(async (req, res) => {
  try {
    const find = await user.findById(req.params.id);
    if (!find) res.status(404).json({ message: "لا يوجد مستخدمين" });
    const delet = await user.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "تم الحذف " });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports.getToken = asynchandler(async (req, res) => {
  try {
    // التحقق من وجود التوكن
    if (!req.headers.authorization || !req.headers.authorization.startsWith('Bearer ')) {
      return res.status(401).json({ message: "التوكن غير موجود أو غير صالح" });
    }

    // استخراج التوكن
    const token = req.headers.authorization.split(' ')[1];

    // فك تشفير التوكن
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    console.log("User ID from token:", decoded.id); // طباعة الـ ID لفحصه

    // استخدام `User.findById` بدلاً من `user.findById`
    const foundUser = await user.findById(decoded.id).select('-password'); 

    if (!foundUser) {
      return res.status(404).json({ message: "لا يوجد مستخدم بهذا المعرف" });
    }

    // إرسال بيانات المستخدم
    res.status(200).json(foundUser);
  } catch (err) {
    console.error("Error verifying token:", err.message);
    res.status(401).json({ message: "توكن غير صالح أو منتهي الصلاحية" });
  }

 
});


module.exports.editeUser = asynchandler(async (req, res) => {
  try {
    const find = await user.findById(req.params.id);
    if (!find) res.status(404).json({ message: "لا يوجد مستخدمين" });
    const delet = await user.findByIdAndUpdate(
      req.params.id,
      {
        isAdmin: req.body.Admin,
      },
      { new: true }
    );
    res.status(200).json(delet);
  } catch (err) {
    res.status(500).json(err);
  }
});
