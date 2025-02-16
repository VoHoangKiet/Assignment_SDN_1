const express = require('express');
const router = express.Router();

const TestService = require('../service/TestService');
const testService = new TestService();

router.post('/', async (req, res) => {
  try {
    const test = await testService.createTest(req.body);
    res.status(201).json(test);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const test = await userService.getAllUsersPopulate();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get('/:userId', async (req, res) => {
  try {
    const tests = await testService.getAllTestByUserId(req.params.userId);
    if (!tests) {
      return res.status(404).json({ message: 'Tests not found' });
    }
    res.json(tests);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;