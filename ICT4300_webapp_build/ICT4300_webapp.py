#%%
import uuid
import pandas as pd
uuidtest = uuid.uuid4()

print(uuidtest)

def id(i):
    identifier = uuid.uuid4()
    print(identifier)
    id_list = [i,identifier]
    print(id_list)
    return id_list

df = pd.DataFrame(data = {'UUID':[0]})

iterations = 5
i =0

while i <= iterations:
    id_counter = []
    # print(id)
    # df = pd.DataFrame(id_counter, columns = ['count','UUID'])
    identifier = uuid.uuid4()
    # id_counter.append(identifier)
    print(identifier)
    i= i+1


#%%
import datetime
from datetime import timedelta, date, datetime
today = date.today()
timedelta= timedelta(days=21)
dueDate = today + timedelta
# %%

import time
from time import gmtime, strftime
now = strftime("%a, %d %b %Y %H:%M:%S +0000", gmtime())
print(now)

current = gmtime()
print(current)
secs = time.time()
min = 60
hour = 60*min
day= 24*hour
week = 7*day
print(day)


print(secs)

threeWeeks = secs+3*week


threeWeeks = strftime("%a, %d %b %Y %H:%M:%S +0000", gmtime(threeWeeks))
print(threeWeeks)