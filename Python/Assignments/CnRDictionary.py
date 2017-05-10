# Making and Reading from Dictionaries
# Key : name, age, country of birth, favorite language.

my_profile = {
    "name": "Arif Mustofa",
    "age": "17th",
    "country of birth": "Indonesia",
    "favorite language": "Python & Node.js"
}

def myProfile(x):
    print "My name is ",x['name'], "\n" \
     "My age is ",x['age'], "\n"\
     "My country of birth is ",x["country of birth"], "\n"\
     "My favorite language is ",x['favorite language']

myProfile(my_profile)
