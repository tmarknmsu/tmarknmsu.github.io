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


