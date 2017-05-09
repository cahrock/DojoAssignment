# .find and .replace method
str = "It's thanksgiving day. It's my birthday,too!"
print str.find('day')
print str.replace('day', 'month')

# print min and max list
x = [1,2,3,-4,5,6]

def minValue(x):
    min = x[0]
    for i in x[0:]:
        if i < min:
            min = i
    return min
print (minValue(x))
# =======
list = [10,2,4,5,-10,3,15]
def maxValue(list):
    max = list[0]
    for elm in list[0:]:
        if elm > max:
            max = elm
    return max
print(maxValue(list))

# =======
list = [10,2,4,5,-10,3,15]
print max(list)
print min(list)

# print first and last list
x = ["hello",2,54,-2,7,12,98,"world"]
newArr = [x[0],x[len(x)-1]]
print newArr

# new list - split
x = [19,2,54,-2,7,12,98,32,10,-3,6]

x.sort()
z = x[0:len(x)/2]
i = x[(len(x)/2)-1:]
i[0] = z
print (i)
