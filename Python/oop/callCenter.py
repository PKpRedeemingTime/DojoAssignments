class CallCenter(object):
    def __init__(self):
        self.calls = []
        self.queue = 0
    def add(self, newcall):
        self.queue += 1
        self.calls.append(newcall)
        return self
    def remove(self, resolvedcall):
        self.resolved = True
        self.queue -= 1
        self.calls.remove(resolvedcall)
        return self
    def info(self):
        for i in range(len(self.calls)):
            print self.calls[i].name
            print self.calls[i].phone_number
        print "Number of calls in the queue:",self.queue
        return self

class Call(CallCenter):
    def __init__(self, id, name, phone_number, time_of_call, reason_for_call):
        super(Call, self).__init__()
        self.id = id
        self.name = name
        self.phone_number = phone_number
        self.time_of_call = time_of_call
        self.reason_for_call = reason_for_call
        self.resolved = False
    def displayInfo(self):
        print "Caller ID:", self.id
        print "Caller Name:", self.name
        print "Caller Phone Number", self.phone_number
        print "Time of Call:", self.time_of_call
        print "Reason for Call:", self.reason_for_call
        return self

caller1 = Call(12489, "May Parker", "240-555-5555", "2:15 AM", "Nephew is missing.")
caller2 = Call(12489, "Mary Jane Parker", "240-444-4444", "4:15 AM", "Husband is missing.")


call1 = CallCenter()
call1.add(caller1).info()
call1.add(caller2).info()
call1.remove(caller2).info()

