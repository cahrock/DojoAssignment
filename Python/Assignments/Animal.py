class Animal(object):
    def __init__(self,name, health=100):
        self.name = name
        self.health = health

    # invoked, have the health decrease by 1
    def walk(self):
        self.health = self.health - 1
        return self

    # invoked, have the health decrease by 5
    def run(self):
        self.health -= 5
        return self

    # invoked, display on screen the name of the Animal and the health
    def displayHealth(self):
        msgDragon = "This is Dragon Ball"
        print "Name :", self.name
        print "Health :", self.health
        return self

animal1 = Animal('Chiki')
animal1.walk().walk().walk().run().run().displayHealth()

class Dog(Animal):
    def __init__(self,name):
        super(Dog, self).__init__(name) # use super to call the Animal __init__ method
        self.health = 150

    def pet(self):
        self.health += 5
        return self

dog = Dog("Melly")
dog.walk().walk().walk().run().run().pet().displayHealth()

class Dragon(Animal):

    def __init__(self, name):
        super(Dragon,self).__init__(name)
        self.health = 170

    def fly(self):
        self.health -=10
        return self

    def newDisplayHealth(self):
        print "This is a Dragon Ball"
        super(Dragon, self).displayHealth()


animal2 = Dragon('Dragon Ball')
animal2.walk().walk().walk().run().run().fly().fly().newDisplayHealth()
