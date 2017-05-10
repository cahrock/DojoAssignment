# Function Names
# Part - 1

students = [
     {'first_name':  'Michael', 'last_name' : 'Jordan'},
     {'first_name' : 'John', 'last_name' : 'Rosales'},
     {'first_name' : 'Mark', 'last_name' : 'Guillen'},
     {'first_name' : 'KB', 'last_name' : 'Tonel'}
]

def studentsName(std):
    for i in range(0,len(students)):
        print std[i]['first_name'], std[i]['last_name']

studentsName(students)

# Part -2
users = {
 'Students': [
     {'first_name':  'Michael', 'last_name' : 'Jordan'},
     {'first_name' : 'John', 'last_name' : 'Rosales'},
     {'first_name' : 'Mark', 'last_name' : 'Guillen'},
     {'first_name' : 'KB', 'last_name' : 'Tonel'}
  ],
 'Instructors': [
     {'first_name' : 'Michael', 'last_name' : 'Choi'},
     {'first_name' : 'Martin', 'last_name' : 'Puryear'}
  ]
 }

def className(user):

    for i in user:
        print i
        count = 1
        for s in user[i]:
            print count,". ", s['first_name'].upper(), s['last_name'].upper(), \
                    " - ", len(s['first_name']+s['last_name'])
            count += 1


className(users)

#  Students
# 1 - MICHAEL JORDAN - 13
# 2 - JOHN ROSALES - 11
# 3 - MARK GUILLEN - 11
# 4 - KB TONEL - 7
# Instructors
# 1 - MICHAEL CHOI - 11
# 2 - MARTIN PURYEAR - 13
