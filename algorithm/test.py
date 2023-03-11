import unittest;
from algorithm import miniMaxSum;

class Test(unittest.TestCase):
    
    def test_random1(self):
        self.assertEqual(miniMaxSum([1, 2, 3, 4, 5]), [15, 1, 5, [2, 4], [1, 3, 5]])
        
    def test_random2(self):
        self.assertEqual(miniMaxSum([11, 223, 3532, 4213, 52]), [8031, 11, 4213, [3532, 52], [11, 223, 4213]])
        
    def test_all_equal_odd(self):
        self.assertEqual(miniMaxSum([1, 1, 1, 1, 1]), [5, 1, 1, [], [1, 1, 1, 1, 1]])
        
    def test_all_equal_even(self):
        self.assertEqual(miniMaxSum([2, 2, 2, 2, 2]), [10, 2, 2, [2, 2, 2, 2, 2], []])
        
    def test_not_enough_length(self):
        self.assertEqual(miniMaxSum([1, 2, 3, 2]), None)
        
if __name__ == '__main__':
    unittest.main(verbosity=2)