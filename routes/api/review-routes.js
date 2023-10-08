const router = require('express').Router();
const { Reviews } = require('../../models');

// The `/api/reviews` endpoint

// GET all reviews
router.get('/', async (req, res) => {
  try {
    const reviewData = await Reviews.findAll({});
    res.status(200).json(reviewData);
  } catch (err) {
    res.status(500).json(err)
  }
});

// GET one review
router.get('/:id', async (req, res) => {
  try {
    const reviewData = await Reviews.findByPk(req.params.id, {    });
    if (!reviewData) {
      res.status(404).json({ message: 'No review found with this id' });
      return;
    }
    res.status(200).json(reviewData);
  } catch (err) {
    res.status(500).json(err)
  }
});


// POST/Create new review
router.post('/', async (req, res) => {
  try {
    const { users_id, reviews_content, poster_id } = req.body; // Destructure the data from the request body

    // Create the review using Reviews model and the provided data
    const reviewData = await Reviews.create({
      users_id,
      reviews_content,
      poster_id,
    });

    // Respond with the created review
    res.status(200).json(reviewData);
  } catch (err) {
    console.error(err);
    res.status(400).json(err);
  }
});


// // PUT/Update one product
// router.put('/:id', async (req, res) => {
//   try {
//     // Find the product by its ID
//     const productData = await Product.findByPk(req.params.id);

//     // Check if the tag exists
//     if (!productData) {
//       res.status(404).json({ message: 'No product found with this id' });
//       return;
//     }

//     // Update product data
//     const updatedProduct = await productData.update(req.body);

//     // Handle product tags
//     if (req.body.tagIds && req.body.tagIds.length) {
//       const currentProductTags = await ProductTag.findAll({
//         where: { product_id: req.params.id },
//       });

//       const currentTagIds = currentProductTags.map(({ tag_id }) => tag_id);
//       const newTagIds = req.body.tagIds.filter((tag_id) => !currentTagIds.includes(tag_id));
//       const tagsToRemove = currentProductTags.filter(({ tag_id }) => !req.body.tagIds.includes(tag_id));

//       // Remove tags that are no longer associated
//       await ProductTag.destroy({ where: { id: tagsToRemove.map(({ id }) => id) } });

//       // Add new tags
//       const newProductTags = newTagIds.map((tag_id) => {
//         return {
//           product_id: req.params.id,
//           tag_id,
//         };
//       });

//       await ProductTag.bulkCreate(newProductTags);
//     }

//     res.status(200).json(updatedProduct);
//   } catch (err) {
//     console.log(err);
//     res.status(400).json(err);
//   }
// });

// ** COMING SOON **
// // DEL/Delete one Product
// router.delete('/:id', async (req, res) => {
//   try {
//     const productData = await Product.destroy({
//       where: {
//         id: req.params.id,
//       },
//     });
//     if (!productData) {
//       res.status(404).json({ message: 'No Product with this id' });
//       return;
//     }
//     res.status(200).json({ message: 'Category and associated products have been deleted' });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

module.exports = router;
