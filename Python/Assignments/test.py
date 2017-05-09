# Print num 1-255
def print1to255():
    for some_number in range(0, 256): # for looping in range 0 -256
        print some_number
# print1to255()

# Print array with odds
arr =[1,2,3,4,5,6,7,8,9]

def withOdds(arr):
    for some_element in range(0, len(arr)):

        if arr[some_element] % 2 != 0:
            arr[some_element] = "you are odd"
    print arr
#withOdds(arr)

# Condotional
age = 21
if age >= 18:
  print 'Legal age'
elif age == 17:
  print 'You are seventeen.'
else:
  print 'You are so young!'

for val in "string":
  if val == "i":
    break
  print val
