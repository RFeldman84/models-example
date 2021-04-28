const mongoose = require("mongoose")
const Schema = mongoose.Schema

const catSchema = new Schema(
	{
		name: String,
		color: {
			type: String,
			enum: ["Black", "Orange", "White", "Bi-Color"],
		},
	},
	{
		// timestamps: {
		//   createdAt: 'created_at',
		//   updatedAt: 'updated_at'
		// }
		/** this is the same as timestamps: true */

		timestamps: true,
	}
)

const Cat = mongoose.model("Cat", catSchema)
module.exports = Cat
