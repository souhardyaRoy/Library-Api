// schema -> skeleton
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const issuedBookSchema = new Schema(
  {
    issue_date: {
      type: Date,
      require: true,
      default: () => Date.now(),
    },
    book_id: {
      type: Schema.Types.ObjectId,
      ref: "Book",
      required: true,
    },
    student_id: {
      type: Schema.Types.ObjectId,
      ref: "Student",
      required: true,
    },
    issued_by: {
      type: Schema.Types.ObjectId,
      ref: "Librarian",
      required: true,
    },
    return_date: {
      type: Date,
      require: true,
      default: () => Date.now() + 30 * 24 * 60 * 60 * 1000,
    },
    fine: {
      type: Number,
      default: 0,
    },
    remarks: {
      type: String,
      default: ""
    },
    isDeleted: {
      type: Boolean,
      default: false,
         },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Issuedbook", issuedBookSchema);
