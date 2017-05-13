class Bike(object):
    newMiles = ""
    def __init__(self, price, max_speed, miles=0):
        self.price = price
        self.max_speed = max_speed
        self.miles = miles


    # displayInfo() - have this method display the bike's price, maximum speed, and the total miles.

    def  displayInfo(self):
        # newMiles1 = ""
        # newMiles1 += ride()
        print self.price, self.max_speed
        return self

    def ride(self):
        self.miles += 10
        print "Riding :",self.miles, "miles"
        return self

    def reverse(self):
        self.miles += -5
        print "Reversing: ", abs(self.miles), "miles"
        return self


bike1 = Bike(200, "200mph")
bike2 = Bike(500,"250mph")
bike3 = Bike(750,"275mph")

bike1.ride().ride().ride().reverse().displayInfo()
bike2.ride().ride().reverse().displayInfo()
bike3.reverse().reverse().reverse().displayInfo()
