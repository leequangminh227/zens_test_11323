
def miniMaxSum(arr):
    if (len(arr) == 5) :
        min = arr[0];
        max = arr[0];
        sum = 0;
        even = [];
        odd = []
        for i in arr:
            sum += i
            if(i < min):
                min = i
            if(i > max):
                max = i
            if(i % 2 == 0):
                even.append(i)
            else:
                odd.append(i)
        return [sum, min, max, even, odd]
    else : 
        return None
    
result = miniMaxSum([1,2,3,4,5])

if result != None:
    print(result[0]-result[1],'',result[0]-result[2])
    print('Bonus: ')
    print('Total of array :', result[0])
    print('Min :', result[1])
    print('Max :', result[2])
    print('Even elements :', result[3])
    print('Odd elements :', result[4])
else:
    print('Array must contain exact 5 integers')
