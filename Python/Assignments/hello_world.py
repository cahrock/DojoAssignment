print ("Hell World")

x = "Hello Python"
print x
y = 42
print y

#String
name = "Zen"
print "My name is", name

name = "Zen"
print "My name is" + name

# String Interpolation using {}
first_name = "Zen"
last_name = "Coder"
print "My name is {} {}".format(first_name, last_name)

'''
The following is a list of commonly used string methods:
    a. string.count(substring): returns number of occurrences of substring in string.
    b. string.endswith(substring): returns a boolean based upon whether the last characters of string match substring.
    c. string.find(substring): returns the index of the start of the first occurrence of substring within string.
    d. string.isalnum(): returns boolean depending on whether the string's length is > 0 and all characters are alphanumeric (letters and numbers only). Strings that include spaces and punctuation will return False for this method. Similar methods include .isalpha(), .isdigit(), .islower(), .isupper(), and so on. All return booleans.
    e. string.join(list): returns a string that is all strings within our set (in this case a list) concatenated.
    f. string.split(): returns a list of values where string is split at the given character. Without a parameter the default split is at every space.
'''

# List
x = [1,2,3,4,5]
x.append(99)
print x

x = [99,4,2,5,-3];
print x[:]
#the output would be [99,4,2,5,-3]
print x[1:]
#the output would be [4,2,5,-3];
print x[:4]
#the output would be [99,4,2,5]
print x[2:4]
#the output would be [2,5];

# List method: https://docs.python.org/2/tutorial/datastructures.html
# List Buildin function: https://docs.python.org/2/library/functions.html
# List buildin method: https://docs.python.org/2/tutorial/datastructures.html
