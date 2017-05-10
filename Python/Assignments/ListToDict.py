# a function that takes in two lists and creates a single dictionary

name = ["Anna", "Eli", "Pariece", "Brendan", "Amy", "Shane", "Oscar"]
favorite_animal = ["horse", "cat", "spider", "giraffe", "ticks", "dolphins", "llamas", "snakes"]

def make_dict(arr1, arr2):
    new_dict = dict(zip(arr1, arr2))
    return new_dict

print make_dict(name, favorite_animal)

# Hacker challenge
# lists are of unequal length, the longer list should be used for the keys, the shorter for the values.


def longListAsKey(arr1, arr2):
    if len(arr1) > len(arr2) or len(arr1) == len(arr2) :
        new_dict = dict(zip(arr1, arr2))
        return new_dict
    else:
        new_dict = dict(zip(arr2, arr1))
        return new_dict

print longListAsKey(name, favorite_animal)
