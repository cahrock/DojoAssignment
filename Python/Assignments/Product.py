class Product(object):
    def __init__(self,price,item_name,weight,brand,cost,status="For Sale"):
        self.price = price
        self.item_name = item_name
        self.weight = weight
        self.brand = brand
        self.cost = cost
        self.status = status
        self.tax = 0.06

    # Sell: changes status to "sold"
    def sell(self):
        self.status == "Sold"
        # self.returnA.status ==

    # takes tax as a decimal amount as a parameter and returns the price of the item including sales tax
    def addTax(self):
        return self.tax

    # takes reason for return as a parameter and changes status accordingly.
    def returnA(self):
        self.addTax()
        if self.status == 'Defective':
            self.status = 'Take IT'
            self.price = 0

        elif self.status == 'In the box':
            self.status = "Like New, For SALE"
            self.price = ("{0:.2f}".format(float(self.price + (self.price * self.tax)))) 
        else:
            self.status = "Open Box"
            self.price = ("{0:.2f}".format(float((.8 * self.price )+ (self.price * self.tax))))
        return self

    # show all product details.
    def display_info(self):
        self.returnA()
        print "Price :", self.price
        print "Item name :", self.item_name
        print "Weight :", self.weight
        print "Brand :", self.brand
        print "Cost :", self.cost
        print "Status :", self.status


product1 = Product(800.23,'Iphone','2lbs','Apple',500,'In the box')

print product1.display_info()
