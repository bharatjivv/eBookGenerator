const express = require('express');
const router = express.Router();
const {
    createBook,
    getBooks,
    getBooksById,
    updateBook,
    deleteBook,
    updateBookCover,
} = require('../controller/bookController');


// console.log({
//   createBook,
//   getBooks,
//   getBooksById,
//   updateBook,
//   deleteBook,
//   updateBookCover,
// });


const {protect} = require('../middleware/authMiddleware');
const upload = require('../middleware/uploadMiddleware');

router.use(protect);

router.route("/").post(createBook).get(getBooks);
router.route("/:id").get(getBooksById).put(updateBook).delete(deleteBook);
router.route("/cover/:id").put(upload, updateBookCover);
// router.get("/test", (req, res) => res.send("Book routes working"));

module.exports = router;