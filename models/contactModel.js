const mongoose = require("mongoose");

// 連絡先のデータスキーマを作成
const contactSchema = mongoose.Schema(
  {
    user_id: {
      // mongoDBで生成される_idをuser_idに設定
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    name: {
      type: String,
      required: [true, "Please add the contact name"],
    },
    email: {
      type: String,
      required: [true, "Please add the contact email address"],
    },
    phone: {
      type: String,
      required: [true, "Please add the contact phone number"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Contact", contactSchema);
