
class Furniture(object):
    pass

class Table(Furniture):
    def __init__(self, legs , length, color, material):
        self.legs = 4
        self.color = "white"
        self.material = material
        self.length = length

    def display_info(self):
        print self.material


table1 = Table(4, 10, "black", "woods")
table2 = Table(6, 15, "white","rottan")

table2.display_info()
print table1.material
# print table1.color
# print table1.material

class User(object):
    # the __init__ method is called every time a new object is created
    def __init__(self, name, email):
        # set some instance variables. just like any variable we can call these anything
        self.name = name
        self.email = email
        self.logged = False
    # this is a method we created to help a user login
    def login(self):
        self.logged = True
        print self.name + " is logged in."
        return self
#now create an instance of the class
new_user = User("Anna","anna@anna.com")
print new_user.email
