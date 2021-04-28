const express = require("express")
const router = express.Router()
const Cat = require("../models/Cat")

/* GET home page */
router.get("/", (req, res, next) => {
	Cat.find()
		.then(cats => {
			// console.log({cats})
			// let catsArray = []

			// cats.forEach(cat => {
			//   let catObj = cat;
			//   catObj.black = cat.color === "Black",
			//   catObj.white = cat.color === "White",
			//   catObj.biColor = cat.color === "Bi-Color",
			//   catObj.orange = cat.color === "Orange",

			// 	// console.log({ catObj })
			// 	catsArray.push(catObj)

			/** You can modify cat object like above then push it to the array */

			/** or you can modify the object in the push to the array like shown below */
			// catsArray.push( {
			// 	...cat._doc,
			// 	black: cat.color === "Black",
			// 	white: cat.color === "White",
			// 	biColor: cat.color === "Bi-Color",
			// 	orange: cat.color === "Orange",
			// })

			// })

			/** you can also just map through the data and return an array instead of creating a forEach which will be more lines of code */
			let catsArray = cats.map(cat => {
				return {
					...cat._doc,
					black: cat.color === "Black",
					white: cat.color === "White",
					biColor: cat.color === "Bi-Color",
					orange: cat.color === "Orange",
				}

				// console.log({ catObj })
				// catsArray.push(catObj)
			})
			console.log({ catsArray })
			res.render("index", { catsArray })
		})
		.catch(err => next(err))
})

module.exports = router
