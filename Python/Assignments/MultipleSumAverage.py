# Multiples - part 1
def printOdds():
    for sum in range(0, 1000):
        if sum % 2 != 0:
            print(sum)
printOdds()

# Multiples - part 2
def printAllFive():
    for five in range(5,1000001):
        if five % 5 == 0:
            print five
# Uncomment below code to run the program - part 2
#printAllFive()

# Sum List
a = [1, 2, 5, 10, 255, 3]
def sumList(a):
    sum = 0
    for x in a:
        sum += x
    print sum
    return sum
sumList(a)

# The average of the value
a = [1, 2, 5, 10, 255, 3]
avg = sumList(a)/len(a)
print avg