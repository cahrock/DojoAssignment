class Call(object):
    def __init__(self,name,phone,time_call,reason):
        self.id = id
        self.name = name
        self.phone = phone
        self.time_call = time_call
        self.reason = reason

    def display(self):
        print self.id
        print self.name
        print self.phone
        print self.time_call
        print se;False.reason
        return self

class CallCenter(object):
    def __init__(self):
        self.calls = []
        self.queue = 0

    def add(self, aCall):
        self.calls.append(aCall)
        self.queue += 1
        return self

    def remove(self):
        self.calls.pop(0)
        self.queue -= 1
        return self

    def info(self):
        for i in range(0, len(self.calls)):
            print "Caller name :", self.calls[i].name
            print "Phone number :", self.calls[i].phone
            print "Time of call :", self.calls[i].time_call
            print "Reason for call", self.calls[i].reason
            print '========== ***** ==========='
        print "Calls in queue :", self.queue

        return self

call1 = Call("Marie Joe", "301.770.1504", "11.30", "My car broke down")
call2 = Call("Donald Trump", ".646.284.1899", "19.45", "My car is in car shop")
callCenter = CallCenter()
callCenter.add(call1).add(call2).info()
