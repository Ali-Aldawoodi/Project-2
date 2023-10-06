const router = require('express').Router();
const { Users, Reviews } = require('../../models');

// The `/api/users` endpoint

// GET all users
router.get('/', async (req, res) => {
  try {
    const userData = await Users.findAll({
      include: [
        {
          model: Reviews,
          attributes: ['id', 'users_id', 'reviews_content'],
        },
      ],
    });
    res.status(200).json(userData);
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
});

// GET one category
router.get('/:id', async (req, res) => {
  try {
    const userData = await Users.findByPk(req.params.id, {
      include: [
        {
          model: Reviews,
          attributes: ['id', 'users_id', 'reviews_content'],
        },
      ],
    });
    if (!userData) {
      res.status(404).json({ message: 'No user found with this id' });
      return;
    }
    res.status(200).json(userData);
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
});

// POST/Create new category
router.post('/', async (req, res) => {
  try {
    const userData = await Users.create(req.body);
    res.status(200).json(userData);
  } catch (error) {
    console.error(error);
    res.status(400).json(error);
  }
});


// ** COMING SOON**
// PUT/Update one category
// router.put('/:id', async (req, res) => {
//   try {
//     const categoryToUpdate = await Category.findByPk(req.params.id);
//     if (!categoryToUpdate) {
//       res.status(404).json({ message: 'No category found with this id' });
//       return;
//     }
//     await categoryToUpdate.update(req.body);
//     res.status(200).json(categoryToUpdate);
//   } catch (error) {
//     console.error(error);
//     res.status(400).json(error);
//   }
// });


// ** COMING SOON **
// DEL/Delete one category
// router.delete('/:id', async (req, res) => {
//   try {
//     const categoryId = req.params.id;
//     const categoryToDelete = await Category.findByPk(categoryId);
//     if (!categoryToDelete) {
//       res.status(404).json({ message: 'No category found with this id' });
//       return;
//     }

//     // Find products associated with the category, and disassociate them from the from the category for safe deletion
//     const associatedProducts = await Product.findAll({
//       where: {
//         category_id: categoryId,
//       },
//     });
//     for (const product of associatedProducts) {
//       product.category_id = null;
//       await product.save();
//     }
//     await categoryToDelete.destroy();
//     res.status(200).json({ message: 'Category and associated products have been deleted' });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json(error);
//   }
// });


module.exports = router;
