# Create a series of function
# Odd or Even


def oddEven():
    for elm in range(0, 2001):
        if elm % 2 == 0:
            print "Number is " + str(elm) + ". This is an even number."
        else:
            print "Number is " + str(elm) + ". This is an odd number."

print oddEven()

# Multiply
def multiply(a,x):
    m = []
    for i in range(0,len(a)):
        m.append(a[i] * x)
    return m

a = [2,4,5]
b = multiply(a, 3)
print b

# Hacker's challange

def layered_multiples(arr):
    # code here
    new_array = []
    for i in range(0, len(arr)):
        new_array.append([])
        for j in range(0,arr[i]):
            new_array[i].append(1)
    return new_array

z = multiply([2,4,5],3)
y = layered_multiples(z)
print y
