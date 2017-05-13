# class Vehicle(object):
#     def __init__(self, wheels, capacity, make, model):
#         self.wheels = wheels
#         self.capacity = capacity
#         self.make = make
#         self.model = model
#         self.mileage = 0
#     def drive(self,miles):
#         self.miles += miles
#         return self
#     def reverse(self,miles):
#         self.mile -= miles
#         return self
# class Bike(Vehicle):
#     def vehicle_type(self):
#         return "Bike"
# class Car(Vehicle):
#     def set_wheels(self):
#         self.wheels = 4
#         return self
# class Airplane(Vehicle):
#     def fly(self, miles):
#         self.mileage += miles
#         return self
# v = Vehicle(4,8,"dodge","minivan")
# print v.make
# b = Bike(2,1,"Schwinn","Paramount")
# print b.vehicle_type()
# c = Car(8,5,"Toyota", "Matrix")
# c.set_wheels()
# print c.wheels
# a = Airplane(22,853,"Airbus","A380")
# a.fly(580)
# print a.mileage

class Car(object):
    def __init__(self,price,speed,fuel,mileage):
        self.price = price
        self.speed = speed
        self.fuel = fuel
        self.mileage = mileage
        self.tax = 0.12

    def display_all(self):
        if self.price > 10000:
            self.tax = 0.15
        print('Car price: ' + str(self.price))
        print('Speed: ' + str(self.speed))
        print('Fuel type: ' + str(self.fuel))
        print('Miles driven: ' + str(self.mileage))
        print('Tax: ' + str(self.tax))
        print " =============== ***** ================="

Honda = Car(22000,'135mph','Full','25mpg')
Toyota = Car(18000,'115mph','Full','25mpg')
BMW = Toyota = Car(28000,'155mph','Full','23mpg')
Acura = Car(23000,'135mph','Full','22mpg')
Hyundai = Car(15000,'105mph','Full','28mpg')
Fiat = Car(8000,'55mph','Full','35mpg')

Honda.display_all()
Toyota.display_all()
BMW.display_all()
Acura.display_all()
Hyundai.display_all()
Fiat.display_all()
